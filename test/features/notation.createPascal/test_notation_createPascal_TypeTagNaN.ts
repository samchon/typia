import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_notation_createValidatePascal_TypeTagNaN =
  _test_notation_validateGeneral("TypeTagNaN")<TypeTagNaN>(TypeTagNaN)<
    typia.PascalCase<TypeTagNaN>
  >({
    convert: typia.notations.createValidatePascal<TypeTagNaN>(),
    assert: typia.createAssert<typia.PascalCase<TypeTagNaN>>(),
  });
