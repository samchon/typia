import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_misc_createValidatePrune_TypeTagAtomicUnion = (): void =>
  _test_misc_validatePrune("TypeTagAtomicUnion")<TypeTagAtomicUnion>(
    TypeTagAtomicUnion,
  )(typia.misc.createValidatePrune<TypeTagAtomicUnion>());
