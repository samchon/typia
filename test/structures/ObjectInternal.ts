export interface ObjectInternal {
    id: string;
    name: string;

    /**
     * @internal
     */
    __age: number;
}
export namespace ObjectInternal {
    export function generate(): ObjectInternal {
        return {
            id: "id",
            name: "name",
        } as ObjectInternal;
    }
}
