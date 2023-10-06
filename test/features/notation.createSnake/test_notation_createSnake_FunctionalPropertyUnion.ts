import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";

export const test_notation_createValidateSnake_FunctionalPropertyUnion =
    _test_notation_validateGeneral(
        "FunctionalPropertyUnion",
    )<FunctionalPropertyUnion>(FunctionalPropertyUnion)<
        typia.SnakeCase<FunctionalPropertyUnion>
    >({
        convert: typia.notations.createValidateSnake<FunctionalPropertyUnion>(),
        assert: typia.createAssert<typia.SnakeCase<FunctionalPropertyUnion>>(),
    });
