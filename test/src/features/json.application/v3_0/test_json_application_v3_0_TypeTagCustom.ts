import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TypeTagCustom } from "../../../structures/TypeTagCustom";

export const test_json_application_v3_0_TypeTagCustom = _test_json_application({
  version: "3.0",
  name: "TypeTagCustom",
})(typia.json.application<TypeTagCustomApplication, "3.0">());

interface TypeTagCustomApplication {
  insert(first: TypeTagCustom): Promise<void>;
  reduce(
    first: TypeTagCustom,
    second: TypeTagCustom | null,
  ): Promise<TypeTagCustom>;
  coalesce(
    first: TypeTagCustom | null,
    second: TypeTagCustom | null,
    third?: TypeTagCustom | null,
  ): Promise<TypeTagCustom | null>;
}
