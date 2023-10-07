import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_notation_createValidateSnake_ObjectRecursive =
    _test_notation_validateGeneral("ObjectRecursive")<ObjectRecursive>(
        ObjectRecursive,
    )<typia.SnakeCase<ObjectRecursive>>({
        convert: typia.notations.createValidateSnake<ObjectRecursive>(),
        assert: typia.createAssert<typia.SnakeCase<ObjectRecursive>>(),
    });
