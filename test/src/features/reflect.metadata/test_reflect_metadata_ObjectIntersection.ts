import typia from "typia";
import { ObjectIntersection } from "../../structures/ObjectIntersection";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_ObjectIntersection = (): void =>
  _test_reflect_metadata("ObjectIntersection")(
    typia.reflect.metadata<[ObjectIntersection]>()
  );