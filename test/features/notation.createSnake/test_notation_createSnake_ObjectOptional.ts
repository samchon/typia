import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_notation_createValidateSnake_ObjectOptional =
    _test_notation_validateGeneral("ObjectOptional")<ObjectOptional>(
        ObjectOptional
    )<typia.SnakeCase<ObjectOptional>>({
        convert: (input) => typia.notations.validateSnake<ObjectOptional>(input),
        assert: typia.createAssert<typia.SnakeCase<ObjectOptional>>(),
    });
