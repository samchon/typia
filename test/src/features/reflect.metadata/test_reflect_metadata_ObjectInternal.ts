import typia from "typia";
import { ObjectInternal } from "../../structures/ObjectInternal";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_ObjectInternal = (): void =>
  _test_reflect_metadata("ObjectInternal")(
    typia.reflect.metadata<[ObjectInternal]>()
  );