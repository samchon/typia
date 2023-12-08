import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_notation_validateCamel_TypeTagCustom =
  _test_notation_validateGeneral("TypeTagCustom")<TypeTagCustom>(TypeTagCustom)<
    typia.CamelCase<TypeTagCustom>
  >({
    convert: (input) => typia.notations.validateCamel<TypeTagCustom>(input),
    assert: typia.createAssert<typia.CamelCase<TypeTagCustom>>(),
  });
