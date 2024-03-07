import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TypeTagLength } from "../../structures/TypeTagLength";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertStringifyCustom_TypeTagLength =
  _test_json_assertStringify(CustomGuardError)("TypeTagLength")<TypeTagLength>(
    TypeTagLength,
  )(
    typia.json.createAssertStringify<TypeTagLength>(
      (p) => new CustomGuardError(p),
    ),
  );
