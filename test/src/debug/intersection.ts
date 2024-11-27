import typia, { type tags } from "typia";

// interface ConstantAtomicTagged {
//   id: "latest" | (string & tags.Format<"uuid">);
//   age: -1 | (number & tags.Type<"uint32"> & tags.Maximum<100>);
// }

typia.json.schemas<
  [
    Array<"latest" | (string & tags.Format<"uuid">)> &
      tags.MinItems<1> &
      tags.MaxItems<10>,
    ObjectPartialAndRequired,
  ]
>();

type ObjectPartialAndRequired = Pick<
  Partial<ObjectPartialAndRequired.IBase>,
  "boolean" | "number" | "string"
> &
  Required<Pick<ObjectPartialAndRequired.IBase, "array" | "object">>;
namespace ObjectPartialAndRequired {
  export const RECURSIVE = true;

  export interface IBase {
    boolean: boolean;
    number: number;
    string: string;
    array?: number[];
    object?: ObjectPartialAndRequired | null;
  }
}
