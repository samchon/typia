import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_notation_validateSnake_ToJsonTuple =
    _test_notation_validateGeneral("ToJsonTuple")<ToJsonTuple>(ToJsonTuple)<
        typia.SnakeCase<ToJsonTuple>
    >({
        convert: (input) => typia.notations.validateSnake<ToJsonTuple>(input),
        assert: typia.createAssert<typia.SnakeCase<ToJsonTuple>>(),
    });
