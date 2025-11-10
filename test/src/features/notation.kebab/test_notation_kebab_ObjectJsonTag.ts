import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_notation_validateKebab_ObjectJsonTag = (): void =>
  _test_notation_validateGeneral("ObjectJsonTag")<ObjectJsonTag>(ObjectJsonTag)<
    typia.KebabCase<ObjectJsonTag>
  >({
    convert: (input) => typia.notations.validateKebab<ObjectJsonTag>(input),
    assert: typia.createAssert<typia.KebabCase<ObjectJsonTag>>(),
  });
