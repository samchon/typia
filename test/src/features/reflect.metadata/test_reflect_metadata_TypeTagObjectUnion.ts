import typia from "typia";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_TypeTagObjectUnion = (): void =>
  _test_reflect_metadata("TypeTagObjectUnion")(
    typia.reflect.metadata<[TypeTagObjectUnion]>()
  );