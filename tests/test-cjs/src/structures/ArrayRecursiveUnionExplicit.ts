import { Spoiler } from "../helpers/Spoiler";
import { TestRandomGenerator } from "../helpers/TestRandomGenerator";

export type ArrayRecursiveUnionExplicit = ArrayRecursiveUnionExplicit.IBucket[];
export namespace ArrayRecursiveUnionExplicit {
  export const RECURSIVE = true;

  export type IBucket =
    | IDirectory
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
    type: "directory";
  }

  export interface IImageFile {
    id: number;
    name: string;
    path: string;
    width: number;
    height: number;
    url: string;
    size: number;
    type: "file";
    extension: "jpg";
  }
  export interface ITextFile {
    id: number;
    name: string;
    path: string;
    size: number;
    content: string;
    type: "file";
    extension: "txt";
  }
  export interface IZipFile {
    id: number;
    name: string;
    path: string;
    size: number;
    count: number;
    type: "file";
    extension: "zip";
  }

  export interface IShortcut {
    id: number;
    name: string;
    path: string;
    target: IBucket;
    type: "file";
    extension: "lnk";
  }

  export function generate(
    limit: number = 3,
    level: number = 0,
  ): ArrayRecursiveUnionExplicit {
    const files = () => [
      generate_image_file(),
      generate_text_file(),
      generate_zip_file(),
    ];
    const directory = () => generate_directory(limit, level + 1);

    const output: ArrayRecursiveUnionExplicit = [
      ...files(),
      ...files().map((file) => generate_shortcut(file)),
    ];
    if (level < limit) output.push(directory(), generate_shortcut(directory()));
    return output;
  }

  export function trail() {
    const data: ArrayRecursiveUnionExplicit = generate();
    data.push({
      ...generate_directory(0, 0),
      children: {} as any,
    });
    return data;
  }

  function generate_directory(limit: number, level: number): IDirectory {
    return {
      children: generate(limit, level + 1),
      ...generate_bucket("directory"),
    };
  }
  function generate_image_file(): IImageFile {
    return {
      width: TestRandomGenerator.integer(),
      height: TestRandomGenerator.integer(),
      url: TestRandomGenerator.string(),
      ...generate_file("jpg"),
    };
  }
  function generate_text_file(): ITextFile {
    return {
      content: TestRandomGenerator.string(),
      ...generate_file("txt"),
    };
  }
  function generate_zip_file(): IZipFile {
    return {
      count: TestRandomGenerator.integer(),
      ...generate_file("zip"),
    };
  }
  function generate_shortcut(target: IBucket): IShortcut {
    return {
      ...generate_bucket("file"),
      extension: "lnk",
      target,
    };
  }

  function generate_bucket<Type extends string>(type: Type) {
    return {
      id: TestRandomGenerator.integer(),
      name: TestRandomGenerator.string(),
      path: TestRandomGenerator.string(),
      type,
    };
  }
  function generate_file<Extension extends string>(extension: Extension) {
    return {
      extension,
      size: TestRandomGenerator.integer(),
      ...generate_bucket("file"),
    };
  }

  export const SPOILERS: Spoiler<ArrayRecursiveUnionExplicit>[] = [
    //----
    // SEQUENCE OF GENERATED BUCKETS
    //----
    // 0. IMAGE
    // 1. TEXT
    // 2. ZIP
    // 3~5. SHORTCUTS
    // 6. DIRECTORY
    // 7. SHORTCUT OF DIRECTORY

    //----
    // WRONG TYPES
    //----
    (input) => {
      input[0]!.type = "directory";
      return ["$input[0].children"];
    },
    (input) => {
      input[1]!.type = "directory";
      return ["$input[1].children"];
    },
    (input) => {
      input[2]!.type = "text" as "file";
      return ["$input[2].type"];
    },
    (input) => {
      input[3]!.type = "directory";
      return ["$input[3].children"];
    },
    (input) => {
      input[4]!.type = "text" as "file";
      return ["$input[4].type"];
    },
    (input) => {
      input[5]!.type = "directory";
      return ["$input[5].children"];
    },
    (input) => {
      input[6]!.type = "file";
      return ["$input[6]"];
    },

    //----
    // WRONG EXTENSIONS
    //---
    (input) => {
      (input[0] as ArrayRecursiveUnionExplicit.IFile).extension = "txt";
      return ["$input[0].content"];
    },
    (input) => {
      (input[1] as ArrayRecursiveUnionExplicit.IFile).extension = "zip";
      return ["$input[1].count"];
    },
    (input) => {
      (input[2] as ArrayRecursiveUnionExplicit.IFile).extension = "jpg";
      return ["$input[2].height", "$input[2].width", "$input[2].url"];
    },
    (input) => {
      (input[3] as ArrayRecursiveUnionExplicit.IFile).extension = "txt";
      return ["$input[3].content", "$input[3].size"];
    },
    (input) => {
      (input[4] as ArrayRecursiveUnionExplicit.IFile).extension = "zip";
      return ["$input[4].count", "$input[4].size"];
    },
    (input) => {
      (input[5] as ArrayRecursiveUnionExplicit.IFile).extension = "jpg";
      return [
        "$input[5].width",
        "$input[5].height",
        "$input[5].size",
        "$input[5].url",
      ];
    },

    //----
    // WRONG PROPERTIES
    //----
    (input) => {
      input[0]!.id = "uuid" as any;
      return ["$input[0].id"];
    },
    (input) => {
      input[1]!.name = 3 as any;
      return ["$input[1].name"];
    },
    (input) => {
      input[2]!.path = {} as any;
      return ["$input[2].path"];
    },
    (input) => {
      (input[3] as ArrayRecursiveUnionExplicit.IShortcut).target = [] as any;
      return ["$input[3].target"];
    },
    (input) => {
      (input[4] as ArrayRecursiveUnionExplicit.IShortcut).extension =
        null as any;
      return ["$input[4]"];
    },
    (input) => {
      input[5]!.type = {} as any;
      return ["$input[5].type"];
    },
    (input) => {
      (input[6] as ArrayRecursiveUnionExplicit.IDirectory).children[0]!.path =
        [] as any;
      return ["$input[6].children[0].path"];
    },
  ];

  export const BINARABLE = false;
}
