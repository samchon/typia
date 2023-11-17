import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_notation_validatePascal_TypeTagInfinite =
  _test_notation_validateGeneral("TypeTagInfinite")<TypeTagInfinite>(
    TypeTagInfinite,
  )<typia.PascalCase<TypeTagInfinite>>({
    convert: (input) => typia.notations.validatePascal<TypeTagInfinite>(input),
    assert: typia.createAssert<typia.PascalCase<TypeTagInfinite>>(),
  });
