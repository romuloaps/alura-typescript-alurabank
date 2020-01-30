/**
 * Decorator para logar o tempo de execução de um método.
 * 
 * @param unidadeDeTempo - Unidade de tempo para ser usada na medição
 */
export function logarTempoDeExecucao(unidadeDeTempo: UnidadeDeTempoDeExecucao = UnidadeDeTempoDeExecucao.MILISSEGUNDOS) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {

        const metodoOriginal = descriptor.value;
        descriptor.value = function(...args: any[]): any {

            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();

            console.log(`>->->->->->->->->->->->->->->->->->->->->`);
            console.log(`Tempo de execução do método "${propertyKey}": ${calculeTempoDeExecucao(unidadeDeTempo, t1, t2)}${unidadeDeTempo}`);
            
            return retorno;
        }

        function calculeTempoDeExecucao(unidadeDeTempo: UnidadeDeTempoDeExecucao, tempo1: number, tempo2: number): number {
            let divisor = 1;
            if (UnidadeDeTempoDeExecucao.SEGUNDOS === unidadeDeTempo) {
                divisor = 1000;
            }

            return (tempo2 - tempo1) / divisor;
        }

        return descriptor;
    }
}

export enum UnidadeDeTempoDeExecucao {
    MILISSEGUNDOS = "ms",
    SEGUNDOS = "s"
}