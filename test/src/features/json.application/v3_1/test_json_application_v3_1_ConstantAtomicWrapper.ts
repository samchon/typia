import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ConstantAtomicWrapper } from "../../../structures/ConstantAtomicWrapper";

export const test_json_application_v3_1_ConstantAtomicWrapper =
  _test_json_application({
    version: "3.1",
    name: "ConstantAtomicWrapper",
  })(typia.json.application<[ConstantAtomicWrapper], "3.1">());
