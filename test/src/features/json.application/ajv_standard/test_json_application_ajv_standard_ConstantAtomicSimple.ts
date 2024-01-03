import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ConstantAtomicSimple } from "../../../structures/ConstantAtomicSimple";

export const test_json_application_ajv_standard_ConstantAtomicSimple =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "ConstantAtomicSimple",
  })(typia.json.application<[ConstantAtomicSimple], "ajv", false>());
