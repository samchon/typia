import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_reflect_metadata_ObjectGenericUnion = (): void =>
  _test_reflect_metadata("ObjectGenericUnion")(
    typia.reflect.metadata<[ObjectGenericUnion]>(),
  );
