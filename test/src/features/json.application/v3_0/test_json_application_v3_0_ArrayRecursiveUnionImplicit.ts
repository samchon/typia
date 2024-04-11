import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ArrayRecursiveUnionImplicit } from "../../../structures/ArrayRecursiveUnionImplicit";

export const test_json_application_v3_0_ArrayRecursiveUnionImplicit =
  _test_json_application({
    version: "3.0",
    name: "ArrayRecursiveUnionImplicit",
  })(typia.json.application<[ArrayRecursiveUnionImplicit], "3.0">());
