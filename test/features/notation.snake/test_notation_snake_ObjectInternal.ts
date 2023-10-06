import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_notation_validateSnake_ObjectInternal =
    _test_notation_validateGeneral("ObjectInternal")<ObjectInternal>(
        ObjectInternal,
    )<typia.SnakeCase<ObjectInternal>>({
        convert: (input) =>
            typia.notations.validateSnake<ObjectInternal>(input),
        assert: typia.createAssert<typia.SnakeCase<ObjectInternal>>(),
    });
