import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_json_createAssertParse_TypeTagType = (): void =>
  _test_json_assertParse(TypeGuardError)("TypeTagType")<TypeTagType>(
    TypeTagType,
  )(typia.json.createAssertParse<TypeTagType>());
