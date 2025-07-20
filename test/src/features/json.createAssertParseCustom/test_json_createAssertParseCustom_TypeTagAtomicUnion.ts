import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_json_createAssertParseCustom_TypeTagAtomicUnion = (): void =>
  _test_json_assertParse(CustomGuardError)(
    "TypeTagAtomicUnion",
  )<TypeTagAtomicUnion>(TypeTagAtomicUnion)(
    typia.json.createAssertParse<TypeTagAtomicUnion>(
      (p) => new CustomGuardError(p),
    ),
  );
