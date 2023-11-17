import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_createAssert_TypeTagAtomicUnion = _test_assert(
  "TypeTagAtomicUnion",
)<TypeTagAtomicUnion>(TypeTagAtomicUnion)(
  typia.createAssert<TypeTagAtomicUnion>(),
);
