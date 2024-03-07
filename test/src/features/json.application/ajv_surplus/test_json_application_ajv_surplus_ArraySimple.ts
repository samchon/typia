import typia from "typia";
import { ArraySimple } from "../../../structures/ArraySimple";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_surplus_ArraySimple =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "ArraySimple",
  })(typia.json.application<[ArraySimple], "ajv", true>());
