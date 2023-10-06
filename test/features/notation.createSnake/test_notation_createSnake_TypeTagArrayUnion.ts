import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_notation_createValidateSnake_TypeTagArrayUnion =
    _test_notation_validateGeneral("TypeTagArrayUnion")<TypeTagArrayUnion>(
        TypeTagArrayUnion
    )<typia.SnakeCase<TypeTagArrayUnion>>({
        convert: (input) => typia.notations.validateSnake<TypeTagArrayUnion>(input),
        assert: typia.createAssert<typia.SnakeCase<TypeTagArrayUnion>>(),
    });
