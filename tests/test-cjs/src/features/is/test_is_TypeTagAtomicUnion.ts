import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_is_TypeTagAtomicUnion = (): void =>
  _test_is("TypeTagAtomicUnion")<TypeTagAtomicUnion>(TypeTagAtomicUnion)(
    (input) => typia.is<TypeTagAtomicUnion>(input),
  );
