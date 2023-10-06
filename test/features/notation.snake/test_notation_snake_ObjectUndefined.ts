import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_notation_validateSnake_ObjectUndefined =
    _test_notation_validateGeneral("ObjectUndefined")<ObjectUndefined>(
        ObjectUndefined,
    )<typia.SnakeCase<ObjectUndefined>>({
        convert: (input) =>
            typia.notations.validateSnake<ObjectUndefined>(input),
        assert: typia.createAssert<typia.SnakeCase<ObjectUndefined>>(),
    });
