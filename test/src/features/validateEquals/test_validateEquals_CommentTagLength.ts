import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_validateEquals_CommentTagLength = (): void =>
  _test_validateEquals("CommentTagLength")<CommentTagLength>(CommentTagLength)(
    (input) => typia.validateEquals<CommentTagLength>(input),
  );
