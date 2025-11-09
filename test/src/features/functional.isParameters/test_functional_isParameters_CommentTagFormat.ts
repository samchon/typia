import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_functional_isParameters_CommentTagFormat = (): void =>
  _test_functional_isParameters("CommentTagFormat")(CommentTagFormat)(
    (p: (input: CommentTagFormat) => CommentTagFormat) =>
      typia.functional.isParameters(p),
  );
