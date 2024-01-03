import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ArraySimple } from "../../../structures/ArraySimple";

export const test_json_application_ajv_surplus_ArraySimple =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "ArraySimple",
  })(typia.json.application<[ArraySimple], "ajv", true>());
