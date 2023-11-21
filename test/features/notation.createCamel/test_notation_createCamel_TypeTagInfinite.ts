import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_notation_createValidateCamel_TypeTagInfinite =
  _test_notation_validateGeneral("TypeTagInfinite")<TypeTagInfinite>(
    TypeTagInfinite,
  )<typia.CamelCase<TypeTagInfinite>>({
    convert: typia.notations.createValidateCamel<TypeTagInfinite>(),
    assert: typia.createAssert<typia.CamelCase<TypeTagInfinite>>(),
  });
