export namespace Namespace {
    export const PATH = "test/structures/Namespace.ts";
    export const note: string = "Be careful";

    export function generate(): typeof Namespace {
        return Namespace;
    }
}
