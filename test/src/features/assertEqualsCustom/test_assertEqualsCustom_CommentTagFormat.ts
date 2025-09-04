import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_assertEqualsCustom_CommentTagFormat = (): void =>
  _test_assertEquals(CustomGuardError)("CommentTagFormat")<CommentTagFormat>(
    CommentTagFormat,
  )((input) =>
    typia.assertEquals<CommentTagFormat>(input, (p) => new CustomGuardError(p)),
  );
