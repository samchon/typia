import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_json_isStringify_ArrayRecursiveUnionExplicitPointer =
  _test_json_isStringify(
    "ArrayRecursiveUnionExplicitPointer",
  )<ArrayRecursiveUnionExplicitPointer>(ArrayRecursiveUnionExplicitPointer)(
    (input) =>
      typia.json.isStringify<ArrayRecursiveUnionExplicitPointer>(input),
  );
