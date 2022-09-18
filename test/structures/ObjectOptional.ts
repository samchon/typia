export interface ObjectOptional {
    id?: string;
    name?: string;
    email?: string;
    sequence?: number;
}
export namespace ObjectOptional {
    export function generate(): ObjectOptional {
        return {};
    }
}
