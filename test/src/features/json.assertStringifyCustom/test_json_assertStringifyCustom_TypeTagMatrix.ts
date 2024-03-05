import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_json_assertStringifyCustom_TypeTagMatrix =
  _test_json_assertStringify(CustomGuardError)("TypeTagMatrix")<TypeTagMatrix>(
    TypeTagMatrix,
  )((input) =>
    typia.json.assertStringify<TypeTagMatrix>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
