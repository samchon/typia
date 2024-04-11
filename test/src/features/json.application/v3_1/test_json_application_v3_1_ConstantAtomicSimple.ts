import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ConstantAtomicSimple } from "../../../structures/ConstantAtomicSimple";

export const test_json_application_v3_1_ConstantAtomicSimple =
  _test_json_application({
    version: "3.1",
    name: "ConstantAtomicSimple",
  })(typia.json.application<[ConstantAtomicSimple], "3.1">());
