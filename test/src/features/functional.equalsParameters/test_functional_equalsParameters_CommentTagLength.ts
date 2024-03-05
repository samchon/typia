import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_functional_equalsParameters_CommentTagLength =
  _test_functional_equalsParameters("CommentTagLength")(CommentTagLength)(
    (p: (input: CommentTagLength) => CommentTagLength) =>
      typia.functional.equalsParameters(p),
  );
