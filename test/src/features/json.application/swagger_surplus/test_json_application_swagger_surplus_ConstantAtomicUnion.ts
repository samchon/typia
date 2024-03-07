import typia from "typia";
import { ConstantAtomicUnion } from "../../../structures/ConstantAtomicUnion";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_surplus_ConstantAtomicUnion =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "ConstantAtomicUnion",
  })(typia.json.application<[ConstantAtomicUnion], "swagger", true>());
