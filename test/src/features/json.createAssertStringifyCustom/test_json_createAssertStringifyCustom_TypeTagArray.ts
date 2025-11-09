import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_json_createAssertStringifyCustom_TypeTagArray = (): void =>
  _test_json_assertStringify(CustomGuardError)("TypeTagArray")<TypeTagArray>(
    TypeTagArray,
  )(
    typia.json.createAssertStringify<TypeTagArray>(
      (p) => new CustomGuardError(p),
    ),
  );
