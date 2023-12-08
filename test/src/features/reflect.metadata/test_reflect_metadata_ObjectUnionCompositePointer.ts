import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_reflect_metadata_ObjectUnionCompositePointer =
  _test_reflect_metadata("ObjectUnionCompositePointer")(
    typia.reflect.metadata<[ObjectUnionCompositePointer]>(),
  );
