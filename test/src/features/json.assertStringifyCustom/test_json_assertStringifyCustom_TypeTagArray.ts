import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_json_assertStringifyCustom_TypeTagArray =
  _test_json_assertStringify(CustomGuardError)("TypeTagArray")<TypeTagArray>(
    TypeTagArray,
  )((input) =>
    typia.json.assertStringify<TypeTagArray>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
