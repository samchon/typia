import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_notation_validatePascal_TypeTagDefault =
    _test_notation_validateGeneral("TypeTagDefault")<TypeTagDefault>(
        TypeTagDefault,
    )<typia.PascalCase<TypeTagDefault>>({
        convert: (input) =>
            typia.notations.validatePascal<TypeTagDefault>(input),
        assert: typia.createAssert<typia.PascalCase<TypeTagDefault>>(),
    });
