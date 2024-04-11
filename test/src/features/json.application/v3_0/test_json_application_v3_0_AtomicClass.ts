import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { AtomicClass } from "../../../structures/AtomicClass";

export const test_json_application_v3_0_AtomicClass = _test_json_application({
  version: "3.0",
  name: "AtomicClass",
})(typia.json.application<[AtomicClass], "3.0">());
