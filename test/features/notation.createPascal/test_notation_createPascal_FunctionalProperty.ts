import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

export const test_notation_createValidatePascal_FunctionalProperty =
    _test_notation_validateGeneral("FunctionalProperty")<FunctionalProperty>(
        FunctionalProperty,
    )<typia.PascalCase<FunctionalProperty>>({
        convert: typia.notations.createValidatePascal<FunctionalProperty>(),
        assert: typia.createAssert<typia.PascalCase<FunctionalProperty>>(),
    });
