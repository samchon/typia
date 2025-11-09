import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { ArrayRecursiveUnionExplicit } from "../../../structures/ArrayRecursiveUnionExplicit";

export const test_json_schemas_v3_0_ArrayRecursiveUnionExplicit = (): void =>
  _test_json_schemas({
    version: "3.0",
    name: "ArrayRecursiveUnionExplicit",
  })(typia.json.schemas<[ArrayRecursiveUnionExplicit], "3.0">());
