import typia from "typia";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_TypeTagMatrix = (): void =>
  _test_reflect_metadata("TypeTagMatrix")(
    typia.reflect.metadata<[TypeTagMatrix]>()
  );