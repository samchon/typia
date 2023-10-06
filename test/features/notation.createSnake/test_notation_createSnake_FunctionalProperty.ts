import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

export const test_notation_createValidateSnake_FunctionalProperty =
    _test_notation_validateGeneral("FunctionalProperty")<FunctionalProperty>(
        FunctionalProperty,
    )<typia.SnakeCase<FunctionalProperty>>({
        convert: typia.notations.createValidateSnake<FunctionalProperty>(),
        assert: typia.createAssert<typia.SnakeCase<FunctionalProperty>>(),
    });
