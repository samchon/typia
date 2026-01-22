import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_validateEquals_CommentTagBigInt = (): void =>
  _test_validateEquals("CommentTagBigInt")<CommentTagBigInt>(CommentTagBigInt)(
    (input) => typia.validateEquals<CommentTagBigInt>(input),
  );
