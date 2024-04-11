import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ConstantAtomicAbsorbed } from "../../../structures/ConstantAtomicAbsorbed";

export const test_json_application_v3_0_ConstantAtomicAbsorbed =
  _test_json_application({
    version: "3.0",
    name: "ConstantAtomicAbsorbed",
  })(typia.json.application<[ConstantAtomicAbsorbed], "3.0">());
