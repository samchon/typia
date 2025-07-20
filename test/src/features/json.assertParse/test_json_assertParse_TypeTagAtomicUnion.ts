import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_json_assertParse_TypeTagAtomicUnion = (): void =>
  _test_json_assertParse(TypeGuardError)(
    "TypeTagAtomicUnion",
  )<TypeTagAtomicUnion>(TypeTagAtomicUnion)((input) =>
    typia.json.assertParse<TypeTagAtomicUnion>(input),
  );
