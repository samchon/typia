import { Spoiler } from "../internal/Spoiler";

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
    export const PRIMITIVE = false;

    export function generate(): ClassPropertyAssignment {
        return new ClassPropertyAssignment();
    }
    export const SPOILERS: Spoiler<ClassPropertyAssignment>[] = [
        (input) => {
            (input as any).id = null;
            return ["$input.id"];
        },
        (input) => {
            (input as any).name = () => "class";
            return ["$input.name"];
        },
        (input) => {
            (input as any).note = () => ({ value: "assignment" });
            return ["$input.note"];
        },
        (input) => {
            (input as any).editable = "Y";
            return ["$input.editable"];
        },
        (input) => {
            (input as any).incremental = 1;
            return ["$input.incremental"];
        },
    ];
}
