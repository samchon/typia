import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

import { TypeGuardError } from "typia";

export const test_json_createAssertStringify_TypeTagMatrix =
  _test_json_assertStringify(TypeGuardError)("TypeTagMatrix")<TypeTagMatrix>(
    TypeTagMatrix,
  )(typia.json.createAssertStringify<TypeTagMatrix>());
