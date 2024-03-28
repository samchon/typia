import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TypeTagAtomicUnion } from "../../../structures/TypeTagAtomicUnion";

export const test_json_application_swagger_standard_TypeTagAtomicUnion =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "TypeTagAtomicUnion",
  })(typia.json.application<[TypeTagAtomicUnion], "swagger", false>());
