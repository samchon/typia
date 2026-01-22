import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_functional_assertParametersAsyncCustom_CommentTagFormat =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(CustomGuardError)(
      "CommentTagFormat",
    )(CommentTagFormat)(
      (p: (input: CommentTagFormat) => Promise<CommentTagFormat>) =>
        typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
