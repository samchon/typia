import typia from "typia";
import { ConstantAtomicWrapper } from "../../../structures/ConstantAtomicWrapper";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_surplus_ConstantAtomicWrapper =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "ConstantAtomicWrapper",
  })(typia.json.application<[ConstantAtomicWrapper], "swagger", true>());
