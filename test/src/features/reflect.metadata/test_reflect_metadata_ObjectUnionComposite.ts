import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_reflect_metadata_ObjectUnionComposite =
  _test_reflect_metadata("ObjectUnionComposite")(
    typia.reflect.metadata<[ObjectUnionComposite]>(),
  );
