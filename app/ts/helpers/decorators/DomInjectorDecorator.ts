/**
 * Decorator de propriedade para injetar um elemento do DOM em uma propriedade.
 * 
 * @param selector - Seletor HTML para buscar o elemento do DOM
 */
export function domInject(selector: string) {
    return function(target: any, key: string): void {
        
        let element: Element;

        const getter = function() {
            if (!element) {
                console.log(`DomInjectorDecorator: domInject: Buscando ${selector} para injetar na propriedade ${key}`);
                element = <Element> document.querySelector("#data");
            }
    
            return element;
        }

        Object.defineProperty(target, key, {
            get: getter
        })
    }
}