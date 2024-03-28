import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TypeTagAtomicUnion } from "../../../structures/TypeTagAtomicUnion";

export const test_json_application_ajv_surplus_TypeTagAtomicUnion =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "TypeTagAtomicUnion",
  })(typia.json.application<[TypeTagAtomicUnion], "ajv", true>());
