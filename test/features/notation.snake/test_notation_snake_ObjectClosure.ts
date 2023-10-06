import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_notation_validateSnake_ObjectClosure =
    _test_notation_validateGeneral("ObjectClosure")<ObjectClosure>(
        ObjectClosure
    )<typia.SnakeCase<ObjectClosure>>({
        convert: typia.notations.createValidateSnake<ObjectClosure>(),
        assert: typia.createAssert<typia.SnakeCase<ObjectClosure>>(),
    });
