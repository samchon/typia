import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_notation_createValidateSnake_ClassGetter =
    _test_notation_validateGeneral("ClassGetter")<ClassGetter>(ClassGetter)<
        typia.SnakeCase<ClassGetter>
    >({
        convert: typia.notations.createValidateSnake<ClassGetter>(),
        assert: typia.createAssert<typia.SnakeCase<ClassGetter>>(),
    });
