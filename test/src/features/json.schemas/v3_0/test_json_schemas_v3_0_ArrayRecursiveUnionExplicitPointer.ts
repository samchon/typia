import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { ArrayRecursiveUnionExplicitPointer } from "../../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_json_schemas_v3_0_ArrayRecursiveUnionExplicitPointer =
  _test_json_schemas({
    version: "3.0",
    name: "ArrayRecursiveUnionExplicitPointer",
  })(typia.json.schemas<[ArrayRecursiveUnionExplicitPointer], "3.0">());
