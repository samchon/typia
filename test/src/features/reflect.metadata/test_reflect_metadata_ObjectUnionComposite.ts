import typia from "typia";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_ObjectUnionComposite = (): void =>
  _test_reflect_metadata("ObjectUnionComposite")(
    typia.reflect.metadata<[ObjectUnionComposite]>()
  );