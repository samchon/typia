import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TypeTagLength } from "../../../structures/TypeTagLength";

export const test_json_application_v3_1_TypeTagLength = _test_json_application({
  version: "3.1",
  name: "TypeTagLength",
})(typia.json.application<TypeTagLengthApplication, "3.1">());

interface TypeTagLengthApplication {
  insert(first: TypeTagLength): Promise<void>;
  reduce(
    first: TypeTagLength,
    second: TypeTagLength | null,
  ): Promise<TypeTagLength>;
  coalesce(
    first: TypeTagLength | null,
    second: TypeTagLength | null,
    third?: TypeTagLength | null,
  ): Promise<TypeTagLength | null>;
}
