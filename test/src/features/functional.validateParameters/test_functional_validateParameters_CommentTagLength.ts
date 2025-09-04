import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_functional_validateParameters_CommentTagLength = (): void =>
  _test_functional_validateParameters("CommentTagLength")(CommentTagLength)(
    (p: (input: CommentTagLength) => CommentTagLength) =>
      typia.functional.validateParameters(p),
  );
