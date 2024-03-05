import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_functional_isParameters_ClassPropertyAssignment =
  _test_functional_isParameters("ClassPropertyAssignment")(
    ClassPropertyAssignment,
  )((p: (input: ClassPropertyAssignment) => ClassPropertyAssignment) =>
    typia.functional.isParameters(p),
  );
