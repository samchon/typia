import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TypeTagRange } from "../../../structures/TypeTagRange";

export const test_json_application_v3_0_TypeTagRange = _test_json_application({
  version: "3.0",
  name: "TypeTagRange",
})(typia.json.application<TypeTagRangeApplication, "3.0">());

interface TypeTagRangeApplication {
  insert(first: TypeTagRange): Promise<void>;
  reduce(
    first: TypeTagRange,
    second: TypeTagRange | null,
  ): Promise<TypeTagRange>;
  coalesce(
    first: TypeTagRange | null,
    second: TypeTagRange | null,
    third?: TypeTagRange | null,
  ): Promise<TypeTagRange | null>;
}
