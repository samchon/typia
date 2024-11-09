import typia from "typia";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_ObjectUnionCompositePointer = 
  _test_reflect_metadata("ObjectUnionCompositePointer")(
    typia.reflect.metadata<[ObjectUnionCompositePointer]>()
  );