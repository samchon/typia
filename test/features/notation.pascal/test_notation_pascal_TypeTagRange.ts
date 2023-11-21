import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_notation_validatePascal_TypeTagRange =
  _test_notation_validateGeneral("TypeTagRange")<TypeTagRange>(TypeTagRange)<
    typia.PascalCase<TypeTagRange>
  >({
    convert: (input) => typia.notations.validatePascal<TypeTagRange>(input),
    assert: typia.createAssert<typia.PascalCase<TypeTagRange>>(),
  });
