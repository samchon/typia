import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_reflect_metadata_TypeTagTuple = (): void =>
  _test_reflect_metadata("TypeTagTuple")(
    typia.reflect.metadata<[TypeTagTuple]>(),
  );
