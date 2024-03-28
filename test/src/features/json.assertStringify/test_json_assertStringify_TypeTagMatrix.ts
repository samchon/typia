import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_json_assertStringify_TypeTagMatrix =
  _test_json_assertStringify(TypeGuardError)("TypeTagMatrix")<TypeTagMatrix>(
    TypeTagMatrix,
  )((input) => typia.json.assertStringify<TypeTagMatrix>(input));
