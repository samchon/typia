import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_functional_validateEqualsParameters_ObjectHttpCommentTag =
  (): void =>
    _test_functional_validateEqualsParameters("ObjectHttpCommentTag")(
      ObjectHttpCommentTag,
    )((p: (input: ObjectHttpCommentTag) => ObjectHttpCommentTag) =>
      typia.functional.validateEqualsParameters(p),
    );
