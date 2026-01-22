import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_misc_createValidateClone_TypeTagAtomicUnion = (): void =>
  _test_misc_validateClone("TypeTagAtomicUnion")<TypeTagAtomicUnion>(
    TypeTagAtomicUnion,
  )(typia.misc.createValidateClone<TypeTagAtomicUnion>());
