import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_notation_createValidateCamel_ObjectHttpCommentTag =
  _test_notation_validateGeneral("ObjectHttpCommentTag")<ObjectHttpCommentTag>(
    ObjectHttpCommentTag,
  )<typia.CamelCase<ObjectHttpCommentTag>>({
    convert: typia.notations.createValidateCamel<ObjectHttpCommentTag>(),
    assert: typia.createAssert<typia.CamelCase<ObjectHttpCommentTag>>(),
  });
