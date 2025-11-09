import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_reflect_metadata_TypeTagAtomicUnion = (): void =>
  _test_reflect_metadata("TypeTagAtomicUnion")(
    typia.reflect.metadata<[TypeTagAtomicUnion]>(),
  );
