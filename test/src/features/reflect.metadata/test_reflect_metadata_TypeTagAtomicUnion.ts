import typia from "typia";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_TypeTagAtomicUnion = (): void =>
  _test_reflect_metadata("TypeTagAtomicUnion")(
    typia.reflect.metadata<[TypeTagAtomicUnion]>()
  );