import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ConstantAtomicUnion } from "../../../structures/ConstantAtomicUnion";

export const test_json_application_swagger_surplus_ConstantAtomicUnion =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "ConstantAtomicUnion",
  })(typia.json.application<[ConstantAtomicUnion], "swagger", true>());
