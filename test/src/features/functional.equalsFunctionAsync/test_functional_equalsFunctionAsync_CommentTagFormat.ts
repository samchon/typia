import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_functional_equalsFunctionAsync_CommentTagFormat =
  (): Promise<void> =>
    _test_functional_equalsFunctionAsync("CommentTagFormat")(CommentTagFormat)(
      (p: (input: CommentTagFormat) => Promise<CommentTagFormat>) =>
        typia.functional.equalsFunction(p),
    );
