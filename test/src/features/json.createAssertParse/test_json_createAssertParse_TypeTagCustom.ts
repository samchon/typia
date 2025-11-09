import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_json_createAssertParse_TypeTagCustom = (): void =>
  _test_json_assertParse(TypeGuardError)("TypeTagCustom")<TypeTagCustom>(
    TypeTagCustom,
  )(typia.json.createAssertParse<TypeTagCustom>());
