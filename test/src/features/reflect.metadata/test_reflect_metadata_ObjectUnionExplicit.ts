import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_reflect_metadata_ObjectUnionExplicit = (): void =>
  _test_reflect_metadata("ObjectUnionExplicit")(
    typia.reflect.metadata<[ObjectUnionExplicit]>(),
  );
