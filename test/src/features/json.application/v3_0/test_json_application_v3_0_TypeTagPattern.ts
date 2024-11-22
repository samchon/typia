import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TypeTagPattern } from "../../../structures/TypeTagPattern";

export const test_json_application_v3_0_TypeTagPattern = _test_json_application(
  {
    version: "3.0",
    name: "TypeTagPattern",
  },
)(typia.json.application<TypeTagPatternApplication, "3.0">());

interface TypeTagPatternApplication {
  insert(first: TypeTagPattern): Promise<void>;
  reduce(
    first: TypeTagPattern,
    second: TypeTagPattern | null,
  ): Promise<TypeTagPattern>;
  coalesce(
    first: TypeTagPattern | null,
    second: TypeTagPattern | null,
    third?: TypeTagPattern | null,
  ): Promise<TypeTagPattern | null>;
}
