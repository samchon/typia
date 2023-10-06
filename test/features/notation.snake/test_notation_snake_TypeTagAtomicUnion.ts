import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_notation_validateSnake_TypeTagAtomicUnion =
    _test_notation_validateGeneral("TypeTagAtomicUnion")<TypeTagAtomicUnion>(
        TypeTagAtomicUnion
    )<typia.SnakeCase<TypeTagAtomicUnion>>({
        convert: typia.notations.createValidateSnake<TypeTagAtomicUnion>(),
        assert: typia.createAssert<typia.SnakeCase<TypeTagAtomicUnion>>(),
    });
