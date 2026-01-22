import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_reflect_metadata_ObjectUnionExplicitPointer = (): void =>
  _test_reflect_metadata("ObjectUnionExplicitPointer")(
    typia.reflect.metadata<[ObjectUnionExplicitPointer]>(),
  );
