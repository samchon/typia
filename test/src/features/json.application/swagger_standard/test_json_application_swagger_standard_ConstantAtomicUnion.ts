import typia from "typia";
import { ConstantAtomicUnion } from "../../../structures/ConstantAtomicUnion";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_standard_ConstantAtomicUnion =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "ConstantAtomicUnion",
  })(typia.json.application<[ConstantAtomicUnion], "swagger", false>());
