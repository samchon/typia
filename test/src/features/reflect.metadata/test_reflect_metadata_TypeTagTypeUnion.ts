import typia from "typia";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_TypeTagTypeUnion = (): void =>
  _test_reflect_metadata("TypeTagTypeUnion")(
    typia.reflect.metadata<[TypeTagTypeUnion]>()
  );