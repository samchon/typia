import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_functional_equalsParameters_CommentTagNaN = (): void =>
  _test_functional_equalsParameters("CommentTagNaN")(CommentTagNaN)(
    (p: (input: CommentTagNaN) => CommentTagNaN) =>
      typia.functional.equalsParameters(p),
  );
