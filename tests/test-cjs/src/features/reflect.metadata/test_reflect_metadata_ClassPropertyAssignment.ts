import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_reflect_metadata_ClassPropertyAssignment = (): void =>
  _test_reflect_metadata("ClassPropertyAssignment")(
    typia.reflect.metadata<[ClassPropertyAssignment]>(),
  );
