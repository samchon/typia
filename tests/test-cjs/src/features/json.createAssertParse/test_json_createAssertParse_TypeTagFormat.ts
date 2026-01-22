import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_json_createAssertParse_TypeTagFormat = (): void =>
  _test_json_assertParse(TypeGuardError)("TypeTagFormat")<TypeTagFormat>(
    TypeTagFormat,
  )(typia.json.createAssertParse<TypeTagFormat>());
