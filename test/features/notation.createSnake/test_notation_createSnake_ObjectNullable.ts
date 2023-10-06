import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_notation_createValidateSnake_ObjectNullable =
    _test_notation_validateGeneral("ObjectNullable")<ObjectNullable>(
        ObjectNullable
    )<typia.SnakeCase<ObjectNullable>>({
        convert: (input) => typia.notations.validateSnake<ObjectNullable>(input),
        assert: typia.createAssert<typia.SnakeCase<ObjectNullable>>(),
    });
