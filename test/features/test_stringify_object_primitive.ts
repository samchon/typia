import { Extension } from "typescript";
import TSON from "../../src";
import { Primitive } from "../internal/Primitive";
import { RandomGenerator } from "../internal/RandomGenerator";

export function test_stringify_object_primitive(): void {
    const article: Input = {
        extension: "md",
        title: RandomGenerator.string(),
        body: RandomGenerator.string(),
        files: RandomGenerator.array(() => ({
            name: RandomGenerator.string(),
            extension: RandomGenerator.string(),
            url: RandomGenerator.string(),
        })),
        secret: RandomGenerator.boolean(),
    };
    const json: string = TSON.stringify<Input>(article);
    const expected: string = JSON.stringify(article);

    if (json !== expected)
        throw new Error(
            "Bug on TSON.stringify(): failed to understand the primitive object.",
        );
}

type Input = Primitive<IArticle.IStore>;

interface IArticle extends IArticle.IStore {
    id: string;
    created_at: string;
}
namespace IArticle {
    export type Extension = "md" | "html" | "txt";
    export interface IStore {
        extension: Extension;
        title: string;
        body: string;
        files: IFile.IStore[];
        secret: boolean;
    }
}

interface IFile extends IFile.IStore {
    id: string;
    created_at: string;
}
namespace IFile {
    export interface IStore {
        name: string;
        extension: string;
        url: string;
    }
}
