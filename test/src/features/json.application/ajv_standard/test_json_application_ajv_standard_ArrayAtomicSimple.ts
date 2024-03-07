import typia from "typia";
import { ArrayAtomicSimple } from "../../../structures/ArrayAtomicSimple";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_standard_ArrayAtomicSimple =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "ArrayAtomicSimple",
  })(typia.json.application<[ArrayAtomicSimple], "ajv", false>());
