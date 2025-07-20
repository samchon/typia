import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_functional_validateParametersAsync_ClassPropertyAssignment =
  (): Promise<void> =>
    _test_functional_validateParametersAsync("ClassPropertyAssignment")(
      ClassPropertyAssignment,
    )(
      (
        p: (input: ClassPropertyAssignment) => Promise<ClassPropertyAssignment>,
      ) => typia.functional.validateParameters(p),
    );
