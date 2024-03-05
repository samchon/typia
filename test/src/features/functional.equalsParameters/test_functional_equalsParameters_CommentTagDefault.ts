import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_functional_equalsParameters_CommentTagDefault =
  _test_functional_equalsParameters("CommentTagDefault")(CommentTagDefault)(
    (p: (input: CommentTagDefault) => CommentTagDefault) =>
      typia.functional.equalsParameters(p),
  );
