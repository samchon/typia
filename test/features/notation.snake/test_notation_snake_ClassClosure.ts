import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ClassClosure } from "../../structures/ClassClosure";

export const test_notation_validateSnake_ClassClosure =
    _test_notation_validateGeneral("ClassClosure")<ClassClosure>(
        ClassClosure
    )<typia.SnakeCase<ClassClosure>>({
        convert: typia.notations.createValidateSnake<ClassClosure>(),
        assert: typia.createAssert<typia.SnakeCase<ClassClosure>>(),
    });
