import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { ArrayRecursiveUnionExplicit } from "../../../structures/ArrayRecursiveUnionExplicit";

export const test_json_schema_v3_1_ArrayRecursiveUnionExplicit =
  _test_json_schema({
    version: "3.1",
    name: "ArrayRecursiveUnionExplicit",
  })(typia.json.schema<ArrayRecursiveUnionExplicit, "3.1">());
