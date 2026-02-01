import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_notation_validateCamel_ObjectHttpUndefindable = (): void =>
    _test_notation_validateGeneral("ObjectHttpUndefindable")<ObjectHttpUndefindable>(
        ObjectHttpUndefindable
  )<typia.CamelCase<ObjectHttpUndefindable>>({
    convert: (input) => typia.notations.validateCamel<ObjectHttpUndefindable>(input),
    assert: typia.createAssert<typia.CamelCase<ObjectHttpUndefindable>>(),
  });
