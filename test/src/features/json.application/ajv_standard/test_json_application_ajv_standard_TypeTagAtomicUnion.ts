import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TypeTagAtomicUnion } from "../../../structures/TypeTagAtomicUnion";

export const test_json_application_ajv_standard_TypeTagAtomicUnion =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "TypeTagAtomicUnion",
  })(typia.json.application<[TypeTagAtomicUnion], "ajv", false>());
