import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_notation_validateKebab_ObjectSimple = (): void =>
  _test_notation_validateGeneral("ObjectSimple")<ObjectSimple>(ObjectSimple)<
    typia.KebabCase<ObjectSimple>
  >({
    convert: (input) => typia.notations.validateKebab<ObjectSimple>(input),
    assert: typia.createAssert<typia.KebabCase<ObjectSimple>>(),
  });
