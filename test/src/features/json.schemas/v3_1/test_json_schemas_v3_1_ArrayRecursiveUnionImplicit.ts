import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { ArrayRecursiveUnionImplicit } from "../../../structures/ArrayRecursiveUnionImplicit";

export const test_json_schemas_v3_1_ArrayRecursiveUnionImplicit = (): void =>
  _test_json_schemas({
    version: "3.1",
    name: "ArrayRecursiveUnionImplicit",
  })(typia.json.schemas<[ArrayRecursiveUnionImplicit], "3.1">());
