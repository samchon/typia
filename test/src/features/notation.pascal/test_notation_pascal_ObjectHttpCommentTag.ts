import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_notation_validatePascal_ObjectHttpCommentTag = (): void =>
    _test_notation_validateGeneral("ObjectHttpCommentTag")<ObjectHttpCommentTag>(
        ObjectHttpCommentTag
  )<typia.PascalCase<ObjectHttpCommentTag>>({
    convert: (input) => typia.notations.validatePascal<ObjectHttpCommentTag>(input),
    assert: typia.createAssert<typia.PascalCase<ObjectHttpCommentTag>>(),
  });
