import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_notation_validatePascal_TypeTagType =
    _test_notation_validateGeneral("TypeTagType")<TypeTagType>(TypeTagType)<
        typia.PascalCase<TypeTagType>
    >({
        convert: (input) => typia.notations.validatePascal<TypeTagType>(input),
        assert: typia.createAssert<typia.PascalCase<TypeTagType>>(),
    });
