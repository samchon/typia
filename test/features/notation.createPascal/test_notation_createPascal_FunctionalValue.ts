import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { FunctionalValue } from "../../structures/FunctionalValue";

export const test_notation_createValidatePascal_FunctionalValue =
    _test_notation_validateGeneral("FunctionalValue")<FunctionalValue>(
        FunctionalValue,
    )<typia.PascalCase<FunctionalValue>>({
        convert: typia.notations.createValidatePascal<FunctionalValue>(),
        assert: typia.createAssert<typia.PascalCase<FunctionalValue>>(),
    });
