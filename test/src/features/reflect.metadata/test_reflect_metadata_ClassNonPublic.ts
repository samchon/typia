import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

export const test_reflect_metadata_ClassNonPublic = (): void =>
  _test_reflect_metadata("ClassNonPublic")(
    typia.reflect.metadata<[ClassNonPublic]>(),
  );
