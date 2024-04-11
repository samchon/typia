import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { AtomicSimple } from "../../../structures/AtomicSimple";

export const test_json_application_v3_1_AtomicSimple = _test_json_application({
  version: "3.1",
  name: "AtomicSimple",
})(typia.json.application<[AtomicSimple], "3.1">());
