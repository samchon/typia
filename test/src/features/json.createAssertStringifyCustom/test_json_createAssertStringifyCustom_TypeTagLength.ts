import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_json_createAssertStringifyCustom_TypeTagLength = (): void =>
  _test_json_assertStringify(CustomGuardError)("TypeTagLength")<TypeTagLength>(
    TypeTagLength,
  )(
    typia.json.createAssertStringify<TypeTagLength>(
      (p) => new CustomGuardError(p),
    ),
  );
