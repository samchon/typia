import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_notation_validatePascal_ObjectJsonTag = (): void =>
  _test_notation_validateGeneral("ObjectJsonTag")<ObjectJsonTag>(ObjectJsonTag)<
    typia.PascalCase<ObjectJsonTag>
  >({
    convert: (input) => typia.notations.validatePascal<ObjectJsonTag>(input),
    assert: typia.createAssert<typia.PascalCase<ObjectJsonTag>>(),
  });
