const checkIsNavigationSupported = () => {
    return Boolean(document.startViewTransition)
}

const fetchPage = async (url) => {
    // vamos a cargar la página de destino
    // utilizando un fetch para obtener el HTML
    const response = await fetch(url) // /clean-code
    const text = await response.text()
    // quedarnos sólo con el contenido del html dentro de la etiqueta body
    // usamos un regex para extraerlo
    const [, head, body] = text.match(/<head>([\s\S]*)<\/head>[\s\S]*<body>([\s\S]*)<\/body>/i)
    const stylesheets = head.match(/<link[^>]+href=["']?([^"'>]+)["']?[^>]*>/gi)

    // construir el contenido completo de la página
    let newPageContent = '<!DOCTYPE html><html><head>'
    newPageContent += stylesheets ? stylesheets.join('') : ''
    newPageContent += '</head><body>'
    newPageContent += body
    newPageContent += '</body></html>'

    return newPageContent
}

function startViewTransition() {
    if (!checkIsNavigationSupported()) return

    window.navigation.addEventListener('navigate', (event) => {
        const toUrl = new URL(event.destination.url)

        // es una página externa? si es así, lo ignoramos
        if (location.origin !== toUrl.origin) return

        // si es una navegación en el mismo dominio (origen)
        event.intercept({
            async handler() {
                const data = await fetchPage(toUrl.pathname)

                // abrir un nuevo documento
                const newDocument = document.implementation.createHTMLDocument()
                newDocument.open()

                // escribir el contenido en el nuevo documento
                newDocument.write(data)

                // cerrar el nuevo documento
                newDocument.close()

                // utilizar la api de View Transition API
                document.startViewTransition(() => {
                    // reemplazar el contenido del documento actual con el contenido del nuevo documento
                    document.documentElement.replaceWith(newDocument.documentElement)
                    document.documentElement.scrollTop = 0
                })
            }
        })
    })
}

startViewTransition()