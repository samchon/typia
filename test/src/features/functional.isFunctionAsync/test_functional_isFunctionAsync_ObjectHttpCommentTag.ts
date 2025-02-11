import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_functional_isFunctionAsync_ObjectHttpCommentTag =
  _test_functional_isFunctionAsync("ObjectHttpCommentTag")(
    ObjectHttpCommentTag,
  )((p: (input: ObjectHttpCommentTag) => Promise<ObjectHttpCommentTag>) =>
    typia.functional.isFunction(p),
  );
