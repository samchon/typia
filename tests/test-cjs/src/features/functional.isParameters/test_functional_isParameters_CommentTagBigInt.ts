import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_functional_isParameters_CommentTagBigInt = (): void =>
  _test_functional_isParameters("CommentTagBigInt")(CommentTagBigInt)(
    (p: (input: CommentTagBigInt) => CommentTagBigInt) =>
      typia.functional.isParameters(p),
  );
