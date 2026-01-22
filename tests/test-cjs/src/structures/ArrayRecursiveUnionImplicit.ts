import { Spoiler } from "../helpers/Spoiler";
import { TestRandomGenerator } from "../helpers/TestRandomGenerator";

export type ArrayRecursiveUnionImplicit = ArrayRecursiveUnionImplicit.IBucket[];
export namespace ArrayRecursiveUnionImplicit {
  export const RECURSIVE = true;

  export type IBucket =
    | IDirectory
    | ISharedDirectory
    | IImageFile
    | ITextFile
    | IZipFile
    | IShortcut;
  export type IFile = IImageFile | ITextFile | IZipFile;

  export interface IDirectory {
    id: number;
    name: string;
    path: string;
    children: IBucket[];
  }

  export interface ISharedDirectory extends IDirectory {
    access: "read" | "write";
  }

  export interface IImageFile {
    id: number;
    name: string;
    path: string;
    width: number;
    height: number;
    url: string;
    size: number;
  }
  export interface ITextFile {
    id: number;
    name: string;
    path: string;
    size: number;
    content: string;
  }
  export interface IZipFile {
    id: number;
    name: string;
    path: string;
    size: number;
    count: number;
  }

  export interface IShortcut {
    id: number;
    name: string;
    path: string;
    target: IBucket;
  }

  export function generate(
    limit: number = 3,
    level: number = 0,
  ): ArrayRecursiveUnionImplicit {
    const files = () => [
      generate_image_file(),
      generate_text_file(),
      generate_zip_file(),
    ];
    const directory = () => generate_directory(limit, level + 1);

    const output: ArrayRecursiveUnionImplicit = [
      ...files(),
      ...files().map((file) => generate_shortcut(file)),
    ];
    if (level < limit)
      output.push(directory(), generate_shortcut(directory()), {
        ...directory(),
        access: "read",
      });
    return output;
  }

  export function trail(): ArrayRecursiveUnionImplicit {
    const data: ArrayRecursiveUnionImplicit = generate();
    data.push({
      ...generate_directory(0, 0),
      children: {} as any,
    });
    return data;
  }

  function generate_directory(limit: number, level: number): IDirectory {
    return {
      children: generate(limit, level + 1),
      ...generate_bucket(),
    };
  }
  function generate_image_file(): IImageFile {
    return {
      width: TestRandomGenerator.integer(),
      height: TestRandomGenerator.integer(),
      url: TestRandomGenerator.string(),
      ...generate_file(),
    };
  }
  function generate_text_file(): ITextFile {
    return {
      content: TestRandomGenerator.string(),
      ...generate_file(),
    };
  }
  function generate_zip_file(): IZipFile {
    return {
      count: TestRandomGenerator.integer(),
      ...generate_file(),
    };
  }
  function generate_shortcut(target: IBucket): IShortcut {
    return {
      ...generate_bucket(),
      target,
    };
  }

  function generate_bucket() {
    return {
      id: TestRandomGenerator.integer(),
      name: TestRandomGenerator.string(),
      path: TestRandomGenerator.string(),
    };
  }
  function generate_file() {
    return {
      ...generate_bucket(),
      size: TestRandomGenerator.integer(),
    };
  }

  export const SPOILERS: Spoiler<ArrayRecursiveUnionImplicit>[] = [
    //----
    // SEQUENCE OF GENERATED BUCKETS
    //----
    // 0. IMAGE
    // 1. TEXT
    // 2. ZIP
    // 3~5. SHORTCUTS
    // 6. DIRECTORY
    // 7. SHORTCUT OF DIRECTORY
    // 8. SHARED DIRECTORY

    //----
    // ERASE KEY PROPERTIES
    //----
    (input) => {
      delete (input[0] as any).url;
      return ["$input[0].url"];
    },
    (input) => {
      delete (input[1] as any).content;
      return ["$input[1].children"];
    },
    (input) => {
      delete (input[2] as any).count;
      return ["$input[2].children"];
    },
    (input) => {
      delete (input[3] as any).target;
      return ["$input[3].children"];
    },
    (input) => {
      delete (input[4] as any).path;
      return ["$input[4].path"];
    },
    (input) => {
      delete (input[5] as any).id;
      return ["$input[5].id"];
    },
    (input) => {
      delete (input[6] as any).children;
      return ["$input[6].children"];
    },

    //----
    // WRONG PROPERTIES
    //----
    (input) => {
      input[0]!.id = "uuid" as any as number;
      return ["$input[0].id"];
    },
    (input) => {
      input[1]!.name = 3 as any as string;
      return ["$input[1].name"];
    },
    (input) => {
      input[2]!.path = {} as any as string;
      return ["$input[2].path"];
    },
    (input) => {
      (input[3] as IShortcut).target = {} as any;
      return [
        "$input[3].target.children",
        "$input[3].target.id",
        "$input[3].target.name",
        "$input[3].target.path",
      ];
    },
    (input) => {
      (input[4] as IShortcut).name = null as any as "string";
      return ["$input[4].name"];
    },
    (input) => {
      input[5]!.path = [] as any as "directory";
      return ["$input[5].path"];
    },
    (input) => {
      (input[6] as IDirectory).children[0]!.path = [] as any as string;
      return ["$input[6].children[0].path"];
    },
    (input) => {
      (input[7] as ISharedDirectory).access = "nothing" as any;
      return ["$input[7].access", "$input[7].children"];
    },
  ];

  export const BINARABLE = false;
}
