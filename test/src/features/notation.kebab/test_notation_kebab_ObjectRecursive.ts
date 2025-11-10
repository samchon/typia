import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_notation_validateKebab_ObjectRecursive = (): void =>
  _test_notation_validateGeneral("ObjectRecursive")<ObjectRecursive>(
    ObjectRecursive,
  )<typia.KebabCase<ObjectRecursive>>({
    convert: (input) => typia.notations.validateKebab<ObjectRecursive>(input),
    assert: typia.createAssert<typia.KebabCase<ObjectRecursive>>(),
  });
