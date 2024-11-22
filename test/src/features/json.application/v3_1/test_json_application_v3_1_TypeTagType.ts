import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TypeTagType } from "../../../structures/TypeTagType";

export const test_json_application_v3_1_TypeTagType = _test_json_application({
  version: "3.1",
  name: "TypeTagType",
})(typia.json.application<TypeTagTypeApplication, "3.1">());

interface TypeTagTypeApplication {
  insert(first: TypeTagType): Promise<void>;
  reduce(first: TypeTagType, second: TypeTagType | null): Promise<TypeTagType>;
  coalesce(
    first: TypeTagType | null,
    second: TypeTagType | null,
    third?: TypeTagType | null,
  ): Promise<TypeTagType | null>;
}
