import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_json_createAssertStringify_TypeTagMatrix = (): void =>
  _test_json_assertStringify(TypeGuardError)("TypeTagMatrix")<TypeTagMatrix>(
    TypeTagMatrix,
  )(typia.json.createAssertStringify<TypeTagMatrix>());
