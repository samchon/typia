import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_notation_createValidatePascal_ObjectHttpUndefindable = (): void =>
    _test_notation_validateGeneral("ObjectHttpUndefindable")<ObjectHttpUndefindable>(
        ObjectHttpUndefindable
  )<typia.PascalCase<ObjectHttpUndefindable>>({
    convert: typia.notations.createValidatePascal<ObjectHttpUndefindable>(),
    assert: typia.createAssert<typia.PascalCase<ObjectHttpUndefindable>>(),
  });
