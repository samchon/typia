import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { SetUnion } from "../../structures/SetUnion";

export const test_notation_validateSnake_SetUnion =
    _test_notation_validateGeneral("SetUnion")<SetUnion>(SetUnion)<
        typia.SnakeCase<SetUnion>
    >({
        convert: (input) => typia.notations.validateSnake<SetUnion>(input),
        assert: typia.createAssert<typia.SnakeCase<SetUnion>>(),
    });
