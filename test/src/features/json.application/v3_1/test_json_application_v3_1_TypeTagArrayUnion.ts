import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TypeTagArrayUnion } from "../../../structures/TypeTagArrayUnion";

export const test_json_application_v3_1_TypeTagArrayUnion =
  _test_json_application({
    version: "3.1",
    name: "TypeTagArrayUnion",
  })(typia.json.application<[TypeTagArrayUnion], "3.1">());
