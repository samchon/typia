import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";

export const test_notation_createValidateSnake_FunctionalArrayUnion =
    _test_notation_validateGeneral(
        "FunctionalArrayUnion",
    )<FunctionalArrayUnion>(FunctionalArrayUnion)<
        typia.SnakeCase<FunctionalArrayUnion>
    >({
        convert: typia.notations.createValidateSnake<FunctionalArrayUnion>(),
        assert: typia.createAssert<typia.SnakeCase<FunctionalArrayUnion>>(),
    });
