import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ConstantAtomicWrapper } from "../../../structures/ConstantAtomicWrapper";

export const test_json_application_ajv_surplus_ConstantAtomicWrapper =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "ConstantAtomicWrapper",
  })(typia.json.application<[ConstantAtomicWrapper], "ajv", true>());
