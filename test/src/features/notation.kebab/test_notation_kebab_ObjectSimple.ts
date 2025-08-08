import typia from "typia";

import { _test_notation_general } from "../../internal/_test_notation_general";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_notation_kebab_ObjectSimple = (): void =>
  _test_notation_general("ObjectSimple")<ObjectSimple>(ObjectSimple)<
    typia.KebabCase<ObjectSimple>
  >({
    convert: (input) => typia.notations.kebab<ObjectSimple>(input),
    assert: typia.createAssert<typia.KebabCase<ObjectSimple>>(),
  });
