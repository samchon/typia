import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_json_createAssertStringifyCustom_TypeTagRange = (): void =>
  _test_json_assertStringify(CustomGuardError)("TypeTagRange")<TypeTagRange>(
    TypeTagRange,
  )(
    typia.json.createAssertStringify<TypeTagRange>(
      (p) => new CustomGuardError(p),
    ),
  );
