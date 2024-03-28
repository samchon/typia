import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_json_assertStringify_TypeTagCustom =
  _test_json_assertStringify(TypeGuardError)("TypeTagCustom")<TypeTagCustom>(
    TypeTagCustom,
  )((input) => typia.json.assertStringify<TypeTagCustom>(input));
