import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertPruneCustom_CommentTagFormat =
  _test_misc_assertPrune(CustomGuardError)(
    "CommentTagFormat",
  )<CommentTagFormat>(CommentTagFormat)(
    typia.misc.createAssertPrune<CommentTagFormat>(
      (p) => new CustomGuardError(p),
    ),
  );
