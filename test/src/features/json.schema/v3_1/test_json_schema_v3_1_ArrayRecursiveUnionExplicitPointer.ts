import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { ArrayRecursiveUnionExplicitPointer } from "../../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_json_schema_v3_1_ArrayRecursiveUnionExplicitPointer =
  _test_json_schema({
    version: "3.1",
    name: "ArrayRecursiveUnionExplicitPointer",
  })(typia.json.schema<ArrayRecursiveUnionExplicitPointer, "3.1">());
