import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_notation_validateSnake_ClassGetter =
    _test_notation_validateGeneral("ClassGetter")<ClassGetter>(ClassGetter)<
        typia.SnakeCase<ClassGetter>
    >({
        convert: (input) => typia.notations.validateSnake<ClassGetter>(input),
        assert: typia.createAssert<typia.SnakeCase<ClassGetter>>(),
    });
