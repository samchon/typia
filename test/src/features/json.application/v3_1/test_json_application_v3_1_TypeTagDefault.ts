import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TypeTagDefault } from "../../../structures/TypeTagDefault";

export const test_json_application_v3_1_TypeTagDefault = _test_json_application(
  {
    version: "3.1",
    name: "TypeTagDefault",
  },
)(typia.json.application<TypeTagDefaultApplication, "3.1">());

interface TypeTagDefaultApplication {
  insert(first: TypeTagDefault): Promise<void>;
  reduce(
    first: TypeTagDefault,
    second: TypeTagDefault | null,
  ): Promise<TypeTagDefault>;
  coalesce(
    first: TypeTagDefault | null,
    second: TypeTagDefault | null,
    third?: TypeTagDefault | null,
  ): Promise<TypeTagDefault | null>;
}
