import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_functional_equalsParameters_ObjectHttpCommentTag =
  _test_functional_equalsParameters("ObjectHttpCommentTag")(
    ObjectHttpCommentTag,
  )((p: (input: ObjectHttpCommentTag) => ObjectHttpCommentTag) =>
    typia.functional.equalsParameters(p),
  );
