import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_functional_equalsFunction_ObjectHttpCommentTag =
  _test_functional_equalsFunction("ObjectHttpCommentTag")(ObjectHttpCommentTag)(
    (p: (input: ObjectHttpCommentTag) => ObjectHttpCommentTag) =>
      typia.functional.equalsFunction(p),
  );
