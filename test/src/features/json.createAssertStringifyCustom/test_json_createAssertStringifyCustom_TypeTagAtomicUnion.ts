import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_json_createAssertStringifyCustom_TypeTagAtomicUnion =
  _test_json_assertStringify(CustomGuardError)(
    "TypeTagAtomicUnion",
  )<TypeTagAtomicUnion>(TypeTagAtomicUnion)(
    typia.json.createAssertStringify<TypeTagAtomicUnion>(
      (p) => new CustomGuardError(p),
    ),
  );
