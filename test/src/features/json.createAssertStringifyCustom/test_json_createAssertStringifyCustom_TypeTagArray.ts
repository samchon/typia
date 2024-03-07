import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TypeTagArray } from "../../structures/TypeTagArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertStringifyCustom_TypeTagArray =
  _test_json_assertStringify(CustomGuardError)("TypeTagArray")<TypeTagArray>(
    TypeTagArray,
  )(
    typia.json.createAssertStringify<TypeTagArray>(
      (p) => new CustomGuardError(p),
    ),
  );
