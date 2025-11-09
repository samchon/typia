import typia from "typia";
import { ObjectDynamic } from "../../structures/ObjectDynamic";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_ObjectDynamic = (): void =>
  _test_reflect_metadata("ObjectDynamic")(
    typia.reflect.metadata<[ObjectDynamic]>()
  );