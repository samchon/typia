import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_notation_validateSnake_ObjectPartialAndRequired =
    _test_notation_validateGeneral(
        "ObjectPartialAndRequired",
    )<ObjectPartialAndRequired>(ObjectPartialAndRequired)<
        typia.SnakeCase<ObjectPartialAndRequired>
    >({
        convert: (input) =>
            typia.notations.validateSnake<ObjectPartialAndRequired>(input),
        assert: typia.createAssert<typia.SnakeCase<ObjectPartialAndRequired>>(),
    });
