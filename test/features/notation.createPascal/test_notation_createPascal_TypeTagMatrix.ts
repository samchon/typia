import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_notation_createValidatePascal_TypeTagMatrix =
    _test_notation_validateGeneral("TypeTagMatrix")<TypeTagMatrix>(
        TypeTagMatrix,
    )<typia.PascalCase<TypeTagMatrix>>({
        convert: typia.notations.createValidatePascal<TypeTagMatrix>(),
        assert: typia.createAssert<typia.PascalCase<TypeTagMatrix>>(),
    });
