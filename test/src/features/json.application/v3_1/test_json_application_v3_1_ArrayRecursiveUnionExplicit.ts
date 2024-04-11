import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ArrayRecursiveUnionExplicit } from "../../../structures/ArrayRecursiveUnionExplicit";

export const test_json_application_v3_1_ArrayRecursiveUnionExplicit =
  _test_json_application({
    version: "3.1",
    name: "ArrayRecursiveUnionExplicit",
  })(typia.json.application<[ArrayRecursiveUnionExplicit], "3.1">());
