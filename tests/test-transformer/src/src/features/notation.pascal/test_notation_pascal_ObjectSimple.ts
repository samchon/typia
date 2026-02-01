import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_notation_validatePascal_ObjectSimple = (): void =>
    _test_notation_validateGeneral("ObjectSimple")<ObjectSimple>(
        ObjectSimple
  )<typia.PascalCase<ObjectSimple>>({
    convert: (input) => typia.notations.validatePascal<ObjectSimple>(input),
    assert: typia.createAssert<typia.PascalCase<ObjectSimple>>(),
  });
