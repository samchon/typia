import typia from "typia";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_ObjectGenericArray = (): void =>
  _test_reflect_metadata("ObjectGenericArray")(
    typia.reflect.metadata<[ObjectGenericArray]>()
  );