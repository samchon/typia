import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_notation_validateSnake_ObjectHttpUndefindable =
    _test_notation_validateGeneral(
        "ObjectHttpUndefindable",
    )<ObjectHttpUndefindable>(ObjectHttpUndefindable)<
        typia.SnakeCase<ObjectHttpUndefindable>
    >({
        convert: (input) =>
            typia.notations.validateSnake<ObjectHttpUndefindable>(input),
        assert: typia.createAssert<typia.SnakeCase<ObjectHttpUndefindable>>(),
    });
