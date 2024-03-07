import typia from "typia";
import { ConstantAtomicAbsorbed } from "../../../structures/ConstantAtomicAbsorbed";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_surplus_ConstantAtomicAbsorbed =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "ConstantAtomicAbsorbed",
  })(typia.json.application<[ConstantAtomicAbsorbed], "ajv", true>());
