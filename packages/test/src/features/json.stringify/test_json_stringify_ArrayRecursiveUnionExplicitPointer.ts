import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_json_stringify_ArrayRecursiveUnionExplicitPointer =
  _test_json_stringify(
    "ArrayRecursiveUnionExplicitPointer",
  )<ArrayRecursiveUnionExplicitPointer>(ArrayRecursiveUnionExplicitPointer)(
    (input) => typia.json.stringify<ArrayRecursiveUnionExplicitPointer>(input),
  );
