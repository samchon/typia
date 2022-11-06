import { Primitive } from "../../src/Primitive";
import { RandomGenerator } from "../internal/RandomGenerator";
import { Spoiler } from "../internal/Spoiler";

export type ObjectPrimitive = Primitive<ObjectPrimitive.IArticle>;
export namespace ObjectPrimitive {
    export interface IArticle {
        id: string;
        extension: "md" | "html" | "txt";
        title: string;
        body: string;
        files: IFile[];
        secret: boolean;
        created_at: string;
    }
    export interface IFile {
        id: string;
        name: string;
        extension: string;
        url: string;
        created_at: string;
    }

    export function generate(): ObjectPrimitive {
        return {
            id: RandomGenerator.string(),
            extension: "md",
            title: RandomGenerator.string(),
            body: RandomGenerator.string(),
            files: RandomGenerator.array(() => ({
                id: RandomGenerator.string(),
                name: RandomGenerator.string(),
                extension: RandomGenerator.string(),
                url: RandomGenerator.string(),
                created_at: new Date().toString(),
            })),
            secret: true,
            created_at: new Date().toString(),
        };
    }

    export const SPOILERS: Spoiler<ObjectPrimitive>[] = [
        (input) => {
            input.id = null!;
            return ["$input.id"];
        },
        (input) => {
            input.extension = "jpg" as "md";
            return ["$input.extension"];
        },
        (input) => {
            input.files = {} as any;
            return ["$input.files"];
        },
        (input) => {
            input.files[0].created_at = new Date() as any;
            return ["$input.files[0].created_at"];
        },
    ];
}
