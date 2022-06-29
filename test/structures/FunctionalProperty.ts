export interface FunctionalProperty {
    name: string;
    closure: (value: number) => boolean;
}
export namespace FunctionalProperty {
    export function generate(): FunctionalProperty {
        return {
            name: "name",
            closure: (value) => !!value,
        };
    }
}
