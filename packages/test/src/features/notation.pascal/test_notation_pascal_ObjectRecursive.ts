import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_notation_validatePascal_ObjectRecursive =
  _test_notation_validateGeneral("ObjectRecursive")<ObjectRecursive>(
    ObjectRecursive,
  )<typia.PascalCase<ObjectRecursive>>({
    convert: (input) => typia.notations.validatePascal<ObjectRecursive>(input),
    assert: typia.createAssert<typia.PascalCase<ObjectRecursive>>(),
  });
