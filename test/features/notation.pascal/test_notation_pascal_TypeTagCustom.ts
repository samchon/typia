import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_notation_validatePascal_TypeTagCustom =
    _test_notation_validateGeneral("TypeTagCustom")<TypeTagCustom>(
        TypeTagCustom,
    )<typia.PascalCase<TypeTagCustom>>({
        convert: (input) =>
            typia.notations.validatePascal<TypeTagCustom>(input),
        assert: typia.createAssert<typia.PascalCase<TypeTagCustom>>(),
    });
