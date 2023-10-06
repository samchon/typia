import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_notation_validateSnake_ObjectGeneric =
    _test_notation_validateGeneral("ObjectGeneric")<ObjectGeneric>(
        ObjectGeneric,
    )<typia.SnakeCase<ObjectGeneric>>({
        convert: (input) => typia.notations.validateSnake<ObjectGeneric>(input),
        assert: typia.createAssert<typia.SnakeCase<ObjectGeneric>>(),
    });
