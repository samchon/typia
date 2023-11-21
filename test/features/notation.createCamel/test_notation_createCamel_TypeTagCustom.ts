import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_notation_createValidateCamel_TypeTagCustom =
  _test_notation_validateGeneral("TypeTagCustom")<TypeTagCustom>(TypeTagCustom)<
    typia.CamelCase<TypeTagCustom>
  >({
    convert: typia.notations.createValidateCamel<TypeTagCustom>(),
    assert: typia.createAssert<typia.CamelCase<TypeTagCustom>>(),
  });
