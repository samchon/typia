import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_json_createAssertParse_TypeTagAtomicUnion = (): void =>
  _test_json_assertParse(TypeGuardError)(
    "TypeTagAtomicUnion",
  )<TypeTagAtomicUnion>(TypeTagAtomicUnion)(
    typia.json.createAssertParse<TypeTagAtomicUnion>(),
  );
