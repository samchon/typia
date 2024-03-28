import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ArraySimple } from "../../../structures/ArraySimple";

export const test_json_application_ajv_standard_ArraySimple =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "ArraySimple",
  })(typia.json.application<[ArraySimple], "ajv", false>());
