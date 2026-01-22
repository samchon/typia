import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_notation_createValidatePascal_ObjectHttpCommentTag =
  (): void =>
    _test_notation_validateGeneral(
      "ObjectHttpCommentTag",
    )<ObjectHttpCommentTag>(ObjectHttpCommentTag)<
      typia.PascalCase<ObjectHttpCommentTag>
    >({
      convert: typia.notations.createValidatePascal<ObjectHttpCommentTag>(),
      assert: typia.createAssert<typia.PascalCase<ObjectHttpCommentTag>>(),
    });
