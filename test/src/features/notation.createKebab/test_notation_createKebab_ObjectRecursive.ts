import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_notation_createValidateKebab_ObjectRecursive = (): void =>
  _test_notation_validateGeneral("ObjectRecursive")<ObjectRecursive>(
    ObjectRecursive,
  )<typia.KebabCase<ObjectRecursive>>({
    convert: typia.notations.createValidateKebab<ObjectRecursive>(),
    assert: typia.createAssert<typia.KebabCase<ObjectRecursive>>(),
  });
