import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TypeTagArrayUnion } from "../../../structures/TypeTagArrayUnion";

export const test_json_application_swagger_standard_TypeTagArrayUnion =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "TypeTagArrayUnion",
  })(typia.json.application<[TypeTagArrayUnion], "swagger", false>());
