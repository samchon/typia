import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TypeTagArrayUnion } from "../../../structures/TypeTagArrayUnion";

export const test_json_application_swagger_surplus_TypeTagArrayUnion =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "TypeTagArrayUnion",
  })(typia.json.application<[TypeTagArrayUnion], "swagger", true>());
