import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_functional_validateReturnAsync_ObjectHttpCommentTag =
  (): Promise<void> =>
    _test_functional_validateReturnAsync("ObjectHttpCommentTag")(
      ObjectHttpCommentTag,
    )((p: (input: ObjectHttpCommentTag) => Promise<ObjectHttpCommentTag>) =>
      typia.functional.validateReturn(p),
    );
