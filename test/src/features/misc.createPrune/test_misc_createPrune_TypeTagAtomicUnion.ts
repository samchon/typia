import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_misc_createPrune_TypeTagAtomicUnion = (): void =>
  _test_misc_prune("TypeTagAtomicUnion")<TypeTagAtomicUnion>(
    TypeTagAtomicUnion,
  )(typia.misc.createPrune<TypeTagAtomicUnion>());
