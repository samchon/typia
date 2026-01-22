import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_functional_validateParameters_ClassPropertyAssignment =
  (): void =>
    _test_functional_validateParameters("ClassPropertyAssignment")(
      ClassPropertyAssignment,
    )((p: (input: ClassPropertyAssignment) => ClassPropertyAssignment) =>
      typia.functional.validateParameters(p),
    );
