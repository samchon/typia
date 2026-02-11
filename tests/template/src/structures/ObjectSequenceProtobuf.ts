import { IPointer, randint } from "tstl";
import { tags } from "typia";
import { v4 } from "uuid";

import { Spoiler } from "../utils/Spoiler";
import { TestRandomGenerator } from "../utils/TestRandomGenerator";

export type ObjectSequenceProtobuf = IPointer<ObjectSequenceProtobuf.IMember[]>;
export namespace ObjectSequenceProtobuf {
  export interface IMember {
    id:
      | (string & tags.Sequence<11>)
      | (number & tags.Type<"uint64"> & tags.Sequence<12>)
      | (Uint8Array & tags.Sequence<13>);
    name: (string & tags.Sequence<20>) | null;
    children: Array<IMember> & tags.Sequence<30>;
    keywords: Map<string, string> & tags.Sequence<40>;
    thumbnail:
      | (string & tags.Format<"uri"> & tags.ContentMediaType<"image/*">)
      | Uint8Array;
    email: string & tags.Format<"email">;
    hobbies: Array<IHobby>;
  }
  export interface IHobby {
    id: string & tags.Format<"uuid">;
    name: string;
    valid: boolean;
  }

  export const ADDABLE = false;
  export const JSONABLE = false;
  export const PRIMITIVE = false;

  export function generate(level: number = 0): ObjectSequenceProtobuf {
    const members: IMember[] = [];
    for (const id of [v4(), randint(0, 1_000_000), new Uint8Array()])
      for (const thumbnail of ["https://typia.io/logo.png", new Uint8Array()])
        members.push({
          id,
          name: TestRandomGenerator.string(10),
          children: level < 2 ? generate(level + 1).value : [],
          keywords: new Map(
            new Array(randint(1, 4))
              .fill(null)
              .map(() => [
                TestRandomGenerator.string(10),
                TestRandomGenerator.string(10),
              ]),
          ),
          thumbnail,
          email: TestRandomGenerator.email(),
          hobbies: new Array(randint(1, 4)).fill(null).map(() => ({
            id: v4(),
            name: TestRandomGenerator.string(10),
            valid: TestRandomGenerator.boolean(),
          })),
        });
    return {
      value: members,
    };
  }

  export const SPOILERS: Spoiler<ObjectSequenceProtobuf>[] = [
    (input) => {
      input.value[0]!.id = 3.141592;
      return ["$input.value[0].id"];
    },
    (input) => {
      input.value[1]!.name = undefined!;
      return ["$input.value[1].name"];
    },
    (input) => {
      input.value[2]!.children[3]!.thumbnail = "thumbnail URL";
      return ["$input.value[2].children[3].thumbnail"];
    },
    (input) => {
      const map = input.value[0]!.keywords;
      map.set("key", 3 as any);
      return [`$input.value[0].keywords[${map.size - 1}][1]`];
    },
  ];
}
