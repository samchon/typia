import typia from "typia";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_ObjectHttpTypeTag = (): void =>
  _test_reflect_metadata("ObjectHttpTypeTag")(
    typia.reflect.metadata<[ObjectHttpTypeTag]>()
  );