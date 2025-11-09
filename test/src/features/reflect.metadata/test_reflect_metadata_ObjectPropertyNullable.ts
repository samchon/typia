import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_reflect_metadata_ObjectPropertyNullable = (): void =>
  _test_reflect_metadata("ObjectPropertyNullable")(
    typia.reflect.metadata<[ObjectPropertyNullable]>(),
  );
