import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ArrayRecursiveUnionExplicit } from "../../../structures/ArrayRecursiveUnionExplicit";

export const test_json_application_ajv_surplus_ArrayRecursiveUnionExplicit =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "ArrayRecursiveUnionExplicit",
  })(typia.json.application<[ArrayRecursiveUnionExplicit], "ajv", true>());
