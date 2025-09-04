import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_reflect_metadata_ClassMethod = (): void =>
  _test_reflect_metadata("ClassMethod")(
    typia.reflect.metadata<[ClassMethod]>(),
  );
