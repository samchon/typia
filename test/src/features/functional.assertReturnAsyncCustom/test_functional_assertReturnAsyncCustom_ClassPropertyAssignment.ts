import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_functional_assertReturnAsyncCustom_ClassPropertyAssignment =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(CustomGuardError)(
      "ClassPropertyAssignment",
    )(ClassPropertyAssignment)(
      (
        p: (input: ClassPropertyAssignment) => Promise<ClassPropertyAssignment>,
      ) => typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
    );
