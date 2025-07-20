import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { ArrayRecursiveUnionImplicit } from "../../../structures/ArrayRecursiveUnionImplicit";

export const test_json_schema_v3_1_ArrayRecursiveUnionImplicit = (): void =>
  _test_json_schema({
    version: "3.1",
    name: "ArrayRecursiveUnionImplicit",
  })(typia.json.schema<ArrayRecursiveUnionImplicit, "3.1">());
