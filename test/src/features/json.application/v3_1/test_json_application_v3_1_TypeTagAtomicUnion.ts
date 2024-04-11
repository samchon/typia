import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TypeTagAtomicUnion } from "../../../structures/TypeTagAtomicUnion";

export const test_json_application_v3_1_TypeTagAtomicUnion =
  _test_json_application({
    version: "3.1",
    name: "TypeTagAtomicUnion",
  })(typia.json.application<[TypeTagAtomicUnion], "3.1">());
