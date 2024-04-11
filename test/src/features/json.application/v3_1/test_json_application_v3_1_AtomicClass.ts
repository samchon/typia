import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { AtomicClass } from "../../../structures/AtomicClass";

export const test_json_application_v3_1_AtomicClass = _test_json_application({
  version: "3.1",
  name: "AtomicClass",
})(typia.json.application<[AtomicClass], "3.1">());
