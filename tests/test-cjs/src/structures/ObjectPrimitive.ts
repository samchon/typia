import { Primitive } from "typia";

import { Spoiler } from "../helpers/Spoiler";
import { TestRandomGenerator } from "../helpers/TestRandomGenerator";

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
      id: TestRandomGenerator.string(),
      extension: "md",
      title: TestRandomGenerator.string(),
      body: TestRandomGenerator.string(),
      files: TestRandomGenerator.array(() => ({
        id: TestRandomGenerator.string(),
        name: TestRandomGenerator.string(),
        extension: TestRandomGenerator.string(),
        url: TestRandomGenerator.string(),
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
      input.files[0]!.created_at = [] as any;
      return ["$input.files[0].created_at"];
    },
  ];
}
