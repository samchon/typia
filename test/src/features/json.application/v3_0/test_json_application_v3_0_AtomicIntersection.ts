import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { AtomicIntersection } from "../../../structures/AtomicIntersection";

export const test_json_application_v3_0_AtomicIntersection =
  _test_json_application({
    version: "3.0",
    name: "AtomicIntersection",
  })(typia.json.application<[AtomicIntersection], "3.0">());
