export type AtomicClass = AtomicClass.Class[];
export namespace AtomicClass {
    export type Class = Boolean | Number | String;
    export function generate(): AtomicClass {
        return [
            new Boolean(false),
            new Boolean(true),
            new Number(1),
            new String("abcd"),
        ];
    }
}
