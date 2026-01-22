import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_functional_equalsFunctionAsync_CommentTagLength =
  (): Promise<void> =>
    _test_functional_equalsFunctionAsync("CommentTagLength")(CommentTagLength)(
      (p: (input: CommentTagLength) => Promise<CommentTagLength>) =>
        typia.functional.equalsFunction(p),
    );
