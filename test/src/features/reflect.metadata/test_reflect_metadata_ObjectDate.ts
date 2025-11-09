import typia from "typia";
import { ObjectDate } from "../../structures/ObjectDate";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_ObjectDate = (): void =>
  _test_reflect_metadata("ObjectDate")(
    typia.reflect.metadata<[ObjectDate]>()
  );