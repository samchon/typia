import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_createRandom_ArrayRecursiveUnionExplicitPointer = (): void => _test_random("ArrayRecursiveUnionExplicitPointer")<ArrayRecursiveUnionExplicitPointer>(
    ArrayRecursiveUnionExplicitPointer
)({
  random: typia.createRandom<ArrayRecursiveUnionExplicitPointer>((ArrayRecursiveUnionExplicitPointer as any).RANDOM),
  assert: typia.createAssert<ArrayRecursiveUnionExplicitPointer>(),
});
