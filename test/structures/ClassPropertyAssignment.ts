export class ClassPropertyAssignment {
    public constructor(
        public readonly id: number = 1,
        public readonly name: string = "class",
    ) {}

    public readonly note = "assignment";
    public readonly editable = false;
    public incremental = true;
}
export namespace ClassPropertyAssignment {
    export function generate(): ClassPropertyAssignment {
        return new ClassPropertyAssignment();
    }
}
