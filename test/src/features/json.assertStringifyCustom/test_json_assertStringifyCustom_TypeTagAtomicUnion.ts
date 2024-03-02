import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_json_assertStringifyCustom_TypeTagAtomicUnion =
  _test_json_assertStringify(CustomGuardError)(
    "TypeTagAtomicUnion",
  )<TypeTagAtomicUnion>(TypeTagAtomicUnion)((input) =>
    typia.json.assertStringify<TypeTagAtomicUnion>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
