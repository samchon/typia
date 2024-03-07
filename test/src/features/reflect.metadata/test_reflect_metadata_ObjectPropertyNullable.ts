import typia from "typia";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_ObjectPropertyNullable =
  _test_reflect_metadata("ObjectPropertyNullable")(
    typia.reflect.metadata<[ObjectPropertyNullable]>(),
  );
