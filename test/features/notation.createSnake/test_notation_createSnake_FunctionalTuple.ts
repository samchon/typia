import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

export const test_notation_createValidateSnake_FunctionalTuple =
    _test_notation_validateGeneral("FunctionalTuple")<FunctionalTuple>(
        FunctionalTuple,
    )<typia.SnakeCase<FunctionalTuple>>({
        convert: typia.notations.createValidateSnake<FunctionalTuple>(),
        assert: typia.createAssert<typia.SnakeCase<FunctionalTuple>>(),
    });
