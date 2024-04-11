import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ConstantAtomicTagged } from "../../../structures/ConstantAtomicTagged";

export const test_json_application_v3_1_ConstantAtomicTagged =
  _test_json_application({
    version: "3.1",
    name: "ConstantAtomicTagged",
  })(typia.json.application<[ConstantAtomicTagged], "3.1">());
