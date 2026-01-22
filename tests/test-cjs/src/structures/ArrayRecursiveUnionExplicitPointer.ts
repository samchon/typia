import { IPointer } from "../helpers/IPointer";
import { Spoiler } from "../helpers/Spoiler";
import { TestRandomGenerator } from "../helpers/TestRandomGenerator";

export type ArrayRecursiveUnionExplicitPointer = IPointer<
  ArrayRecursiveUnionExplicitPointer.IBucket[]
>;
export namespace ArrayRecursiveUnionExplicitPointer {
  export const RECURSIVE = true;

  export type IBucket = IPointer<
    IDirectory | IImageFile | ITextFile | IZipFile | IShortcut
  >;
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
  ): ArrayRecursiveUnionExplicitPointer {
    const files = () => [
      generate_image_file(),
      generate_text_file(),
      generate_zip_file(),
    ];
    const directory = () => generate_directory(limit, level + 1);

    const output: ArrayRecursiveUnionExplicitPointer.IBucket[] = [
      ...files(),
      ...files().map((file) =>
        generate_shortcut({
          value: file,
        }),
      ),
    ].map((value) => ({ value }));
    if (level < limit)
      output.push(
        { value: directory() },
        {
          value: generate_shortcut({
            value: directory(),
          }),
        },
      );
    return { value: output };
  }

  export function trail() {
    const data: ArrayRecursiveUnionExplicitPointer = generate();
    data.value.push({
      value: {
        ...generate_directory(0, 0),
        children: {} as any,
      },
    });
    return data;
  }

  function generate_directory(limit: number, level: number): IDirectory {
    return {
      children: generate(limit, level + 1).value,
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

  export const SPOILERS: Spoiler<ArrayRecursiveUnionExplicitPointer>[] = [
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
      input.value[0]!.value.type = "directory";
      return ["$input.value[0].value.children"];
    },
    (input) => {
      input.value[1]!.value.type = "directory";
      return ["$input.value[1].value.children"];
    },
    (input) => {
      input.value[2]!.value.type = "text" as "file";
      return ["$input.value[2].value.type"];
    },
    (input) => {
      input.value[3]!.value.type = "directory";
      return ["$input.value[3].value.children"];
    },
    (input) => {
      input.value[4]!.value.type = "text" as "file";
      return ["$input.value[4].value.type"];
    },
    (input) => {
      input.value[5]!.value.type = "directory";
      return ["$input.value[5].value.children"];
    },
    (input) => {
      input.value[6]!.value.type = "file";
      return ["$input.value[6].value"];
    },

    //----
    // WRONG EXTENSIONS
    //---
    (input) => {
      (
        input.value[0]!.value as ArrayRecursiveUnionExplicitPointer.IFile
      ).extension = "txt";
      return ["$input.value[0].value.content"];
    },
    (input) => {
      (
        input.value[1]!.value as ArrayRecursiveUnionExplicitPointer.IFile
      ).extension = "zip";
      return ["$input.value[1].value.count"];
    },
    (input) => {
      (
        input.value[2]!.value as ArrayRecursiveUnionExplicitPointer.IFile
      ).extension = "jpg";
      return [
        "$input.value[2].value.height",
        "$input.value[2].value.width",
        "$input.value[2].value.url",
      ];
    },
    (input) => {
      (
        input.value[3]!.value as ArrayRecursiveUnionExplicitPointer.IFile
      ).extension = "txt";
      return ["$input.value[3].value.content", "$input.value[3].value.size"];
    },
    (input) => {
      (
        input.value[4]!.value as ArrayRecursiveUnionExplicitPointer.IFile
      ).extension = "zip";
      return ["$input.value[4].value.count", "$input.value[4].value.size"];
    },
    (input) => {
      (
        input.value[5]!.value as ArrayRecursiveUnionExplicitPointer.IFile
      ).extension = "jpg";
      return [
        "$input.value[5].value.width",
        "$input.value[5].value.height",
        "$input.value[5].value.size",
        "$input.value[5].value.url",
      ];
    },

    //----
    // WRONG PROPERTIES
    //----
    (input) => {
      input.value[0]!.value.id = "uuid" as any;
      return ["$input.value[0].value.id"];
    },
    (input) => {
      input.value[1]!.value.name = 3 as any;
      return ["$input.value[1].value.name"];
    },
    (input) => {
      input.value[2]!.value.path = {} as any;
      return ["$input.value[2].value.path"];
    },
    (input) => {
      (
        input.value[3]!.value as ArrayRecursiveUnionExplicitPointer.IShortcut
      ).target = [] as any;
      return ["$input.value[3].value.target.value"];
    },
    (input) => {
      (
        input.value[4]!.value as ArrayRecursiveUnionExplicitPointer.IShortcut
      ).extension = null as any;
      return ["$input.value[4].value"];
    },
    (input) => {
      input.value[5]!.value.type = {} as any;
      return ["$input.value[5].value.type"];
    },
    (input) => {
      (
        input.value[6]!.value as ArrayRecursiveUnionExplicitPointer.IDirectory
      ).children[0]!.value.path = [] as any;
      return ["$input.value[6].value.children[0].value.path"];
    },
  ];
}
