import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_json_createAssertStringifyCustom_TypeTagFormat = (): void =>
  _test_json_assertStringify(CustomGuardError)("TypeTagFormat")<TypeTagFormat>(
    TypeTagFormat,
  )(
    typia.json.createAssertStringify<TypeTagFormat>(
      (p) => new CustomGuardError(p),
    ),
  );
