import typia from "typia";
import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_ObjectSimple = 
  _test_reflect_metadata("ObjectSimple")(
    typia.reflect.metadata<[ObjectSimple]>()
  );