import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_json_createAssertStringifyCustom_TypeTagMatrix =
  _test_json_assertStringify(CustomGuardError)("TypeTagMatrix")<TypeTagMatrix>(
    TypeTagMatrix,
  )(
    typia.json.createAssertStringify<TypeTagMatrix>(
      (p) => new CustomGuardError(p),
    ),
  );
