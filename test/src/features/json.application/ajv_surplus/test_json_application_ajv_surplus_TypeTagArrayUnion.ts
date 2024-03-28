import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TypeTagArrayUnion } from "../../../structures/TypeTagArrayUnion";

export const test_json_application_ajv_surplus_TypeTagArrayUnion =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "TypeTagArrayUnion",
  })(typia.json.application<[TypeTagArrayUnion], "ajv", true>());
