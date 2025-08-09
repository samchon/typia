import typia from "typia";

import { _test_notation_isGeneral } from "../../internal/_test_notation_isGeneral";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_notation_isKebab_ObjectSimple = (): void =>
  _test_notation_isGeneral("ObjectSimple")<ObjectSimple>(ObjectSimple)<
    typia.KebabCase<ObjectSimple>
  >({
    convert: (input) => typia.notations.isKebab<ObjectSimple>(input),
    assert: typia.createAssert<typia.KebabCase<ObjectSimple>>(),
  });