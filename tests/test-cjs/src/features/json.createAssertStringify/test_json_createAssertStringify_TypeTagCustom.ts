import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_json_createAssertStringify_TypeTagCustom = (): void =>
  _test_json_assertStringify(TypeGuardError)("TypeTagCustom")<TypeTagCustom>(
    TypeTagCustom,
  )(typia.json.createAssertStringify<TypeTagCustom>());
