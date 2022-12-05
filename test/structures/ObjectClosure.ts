import { Spoiler } from "../internal/Spoiler";

export type ObjectClosure = ObjectClosure.IRecord;
export namespace ObjectClosure {
    export const PRIMITIVE = false;

    export interface IRecord {
        id: string;
        open: () => string;
    }
    export function generate() {
        return {
            id: "id",
            open: () => "detailed story",
        };
    }

    export const SPOILERS: Spoiler<ObjectClosure>[] = [
        (input) => {
            input.id = null!;
            return ["$input.id"];
        },
        (input) => {
            input.open = {} as any;
            return ["$input.open"];
        },
    ];
}
