import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TypeTagArrayUnion } from "../../../structures/TypeTagArrayUnion";

export const test_json_application_ajv_standard_TypeTagArrayUnion =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "TypeTagArrayUnion",
  })(typia.json.application<[TypeTagArrayUnion], "ajv", false>());
