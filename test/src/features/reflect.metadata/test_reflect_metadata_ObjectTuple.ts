import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_reflect_metadata_ObjectTuple = (): void =>
  _test_reflect_metadata("ObjectTuple")(
    typia.reflect.metadata<[ObjectTuple]>(),
  );
