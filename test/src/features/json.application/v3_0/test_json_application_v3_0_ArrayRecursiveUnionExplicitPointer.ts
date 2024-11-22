import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ArrayRecursiveUnionExplicitPointer } from "../../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_json_application_v3_0_ArrayRecursiveUnionExplicitPointer =
  _test_json_application({
    version: "3.0",
    name: "ArrayRecursiveUnionExplicitPointer",
  })(
    typia.json.application<
      ArrayRecursiveUnionExplicitPointerApplication,
      "3.0"
    >(),
  );

interface ArrayRecursiveUnionExplicitPointerApplication {
  insert(first: ArrayRecursiveUnionExplicitPointer): Promise<void>;
  reduce(
    first: ArrayRecursiveUnionExplicitPointer,
    second: ArrayRecursiveUnionExplicitPointer | null,
  ): Promise<ArrayRecursiveUnionExplicitPointer>;
  coalesce(
    first: ArrayRecursiveUnionExplicitPointer | null,
    second: ArrayRecursiveUnionExplicitPointer | null,
    third?: ArrayRecursiveUnionExplicitPointer | null,
  ): Promise<ArrayRecursiveUnionExplicitPointer | null>;
}
