import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_notation_createValidateKebab_ObjectHttpCommentTag =
  (): void =>
    _test_notation_validateGeneral(
      "ObjectHttpCommentTag",
    )<ObjectHttpCommentTag>(ObjectHttpCommentTag)<
      typia.KebabCase<ObjectHttpCommentTag>
    >({
      convert: typia.notations.createValidateKebab<ObjectHttpCommentTag>(),
      assert: typia.createAssert<typia.KebabCase<ObjectHttpCommentTag>>(),
    });
