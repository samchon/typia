import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_notation_createValidatePascal_TypeTagDefault =
    _test_notation_validateGeneral("TypeTagDefault")<TypeTagDefault>(
        TypeTagDefault,
    )<typia.PascalCase<TypeTagDefault>>({
        convert: typia.notations.createValidatePascal<TypeTagDefault>(),
        assert: typia.createAssert<typia.PascalCase<TypeTagDefault>>(),
    });
