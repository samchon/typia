import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_json_createAssertStringifyCustom_TypeTagTuple = (): void =>
  _test_json_assertStringify(CustomGuardError)("TypeTagTuple")<TypeTagTuple>(
    TypeTagTuple,
  )(
    typia.json.createAssertStringify<TypeTagTuple>(
      (p) => new CustomGuardError(p),
    ),
  );
