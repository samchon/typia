import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_notation_createValidateCamel_TypeTagArray =
  _test_notation_validateGeneral("TypeTagArray")<TypeTagArray>(TypeTagArray)<
    typia.CamelCase<TypeTagArray>
  >({
    convert: typia.notations.createValidateCamel<TypeTagArray>(),
    assert: typia.createAssert<typia.CamelCase<TypeTagArray>>(),
  });
