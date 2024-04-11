import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { AtomicUnion } from "../../../structures/AtomicUnion";

export const test_json_application_v3_0_AtomicUnion = _test_json_application({
  version: "3.0",
  name: "AtomicUnion",
})(typia.json.application<[AtomicUnion], "3.0">());
