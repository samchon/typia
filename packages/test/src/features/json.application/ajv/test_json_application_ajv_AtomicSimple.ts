import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { AtomicSimple } from "../../../structures/AtomicSimple";

export const test_json_application_ajv_AtomicSimple = _test_json_application(
  "ajv",
)("AtomicSimple")(typia.json.application<[AtomicSimple], "ajv">());
