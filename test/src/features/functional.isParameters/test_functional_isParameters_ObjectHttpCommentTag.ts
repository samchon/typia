import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_functional_isParameters_ObjectHttpCommentTag = (): void =>
  _test_functional_isParameters("ObjectHttpCommentTag")(ObjectHttpCommentTag)(
    (p: (input: ObjectHttpCommentTag) => ObjectHttpCommentTag) =>
      typia.functional.isParameters(p),
  );
