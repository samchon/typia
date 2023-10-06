import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_notation_createValidateSnake_ObjectClosure =
    _test_notation_validateGeneral("ObjectClosure")<ObjectClosure>(
        ObjectClosure
    )<typia.SnakeCase<ObjectClosure>>({
        convert: (input) => typia.notations.validateSnake<ObjectClosure>(input),
        assert: typia.createAssert<typia.SnakeCase<ObjectClosure>>(),
    });
