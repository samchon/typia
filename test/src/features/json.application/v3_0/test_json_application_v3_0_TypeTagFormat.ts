import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TypeTagFormat } from "../../../structures/TypeTagFormat";

export const test_json_application_v3_0_TypeTagFormat = _test_json_application({
  version: "3.0",
  name: "TypeTagFormat",
})(typia.json.application<TypeTagFormatApplication, "3.0">());

interface TypeTagFormatApplication {
  insert(first: TypeTagFormat): Promise<void>;
  reduce(
    first: TypeTagFormat,
    second: TypeTagFormat | null,
  ): Promise<TypeTagFormat>;
  coalesce(
    first: TypeTagFormat | null,
    second: TypeTagFormat | null,
    third?: TypeTagFormat | null,
  ): Promise<TypeTagFormat | null>;
}
