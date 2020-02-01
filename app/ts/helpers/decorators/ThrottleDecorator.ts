/**
 * Decorator para regular os eventos acionados pelo usuário de forma a não executar os métodos de maneira indiscriminada
 * 
 * @param timeout 
 */
export function throttle(timeout = 300) {
    return function(target: any, key: string, descriptor: PropertyDescriptor): PropertyDescriptor {

        const metodoOriginal = descriptor.value;
        let timer = 0;

        descriptor.value = function(...args: any[]) {
            if (event) event.preventDefault();

            clearTimeout(timer);
            timer = setTimeout(() => metodoOriginal.apply(this, args), timeout);
        }

        return descriptor;
    }    
}