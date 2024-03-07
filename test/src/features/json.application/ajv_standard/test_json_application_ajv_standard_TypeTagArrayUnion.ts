import typia from "typia";
import { TypeTagArrayUnion } from "../../../structures/TypeTagArrayUnion";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_standard_TypeTagArrayUnion =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "TypeTagArrayUnion",
  })(typia.json.application<[TypeTagArrayUnion], "ajv", false>());
