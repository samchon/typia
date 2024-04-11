import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TypeTagArrayUnion } from "../../../structures/TypeTagArrayUnion";

export const test_json_application_v3_0_TypeTagArrayUnion =
  _test_json_application({
    version: "3.0",
    name: "TypeTagArrayUnion",
  })(typia.json.application<[TypeTagArrayUnion], "3.0">());
