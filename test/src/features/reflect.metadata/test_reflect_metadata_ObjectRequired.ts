import typia from "typia";
import { ObjectRequired } from "../../structures/ObjectRequired";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_ObjectRequired = (): void =>
  _test_reflect_metadata("ObjectRequired")(
    typia.reflect.metadata<[ObjectRequired]>()
  );