import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_notation_createValidateKebab_ObjectJsonTag = (): void =>
  _test_notation_validateGeneral("ObjectJsonTag")<ObjectJsonTag>(ObjectJsonTag)<
    typia.KebabCase<ObjectJsonTag>
  >({
    convert: typia.notations.createValidateKebab<ObjectJsonTag>(),
    assert: typia.createAssert<typia.KebabCase<ObjectJsonTag>>(),
  });
