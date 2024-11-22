import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TypeTagArray } from "../../../structures/TypeTagArray";

export const test_json_application_v3_1_TypeTagArray = _test_json_application({
  version: "3.1",
  name: "TypeTagArray",
})(typia.json.application<TypeTagArrayApplication, "3.1">());

interface TypeTagArrayApplication {
  insert(first: TypeTagArray): Promise<void>;
  reduce(
    first: TypeTagArray,
    second: TypeTagArray | null,
  ): Promise<TypeTagArray>;
  coalesce(
    first: TypeTagArray | null,
    second: TypeTagArray | null,
    third?: TypeTagArray | null,
  ): Promise<TypeTagArray | null>;
}
