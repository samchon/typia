import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ConstantAtomicWrapper } from "../../../structures/ConstantAtomicWrapper";

export const test_json_application_swagger_standard_ConstantAtomicWrapper =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "ConstantAtomicWrapper",
  })(typia.json.application<[ConstantAtomicWrapper], "swagger", false>());
