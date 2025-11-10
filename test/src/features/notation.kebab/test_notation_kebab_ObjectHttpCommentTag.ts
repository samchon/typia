import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_notation_validateKebab_ObjectHttpCommentTag = (): void =>
  _test_notation_validateGeneral("ObjectHttpCommentTag")<ObjectHttpCommentTag>(
    ObjectHttpCommentTag,
  )<typia.KebabCase<ObjectHttpCommentTag>>({
    convert: (input) =>
      typia.notations.validateKebab<ObjectHttpCommentTag>(input),
    assert: typia.createAssert<typia.KebabCase<ObjectHttpCommentTag>>(),
  });
