import typia from "typia";

import { _test_notation_assertGeneral } from "../../internal/_test_notation_assertGeneral";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_notation_assertKebab_ObjectSimple = (): void =>
  _test_notation_assertGeneral("ObjectSimple")<ObjectSimple>(ObjectSimple)<
    typia.KebabCase<ObjectSimple>
  >({
    convert: (input) => typia.notations.assertKebab<ObjectSimple>(input),
    assert: typia.createAssert<typia.KebabCase<ObjectSimple>>(),
  });