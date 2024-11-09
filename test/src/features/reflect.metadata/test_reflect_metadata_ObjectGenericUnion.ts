import typia from "typia";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_ObjectGenericUnion = 
  _test_reflect_metadata("ObjectGenericUnion")(
    typia.reflect.metadata<[ObjectGenericUnion]>()
  );