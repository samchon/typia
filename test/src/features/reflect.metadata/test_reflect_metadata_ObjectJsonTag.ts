import typia from "typia";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_ObjectJsonTag = (): void =>
  _test_reflect_metadata("ObjectJsonTag")(
    typia.reflect.metadata<[ObjectJsonTag]>()
  );