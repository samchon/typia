import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_notation_validateCamel_TypeTagTuple =
    _test_notation_validateGeneral("TypeTagTuple")<TypeTagTuple>(
        TypeTagTuple
    )<typia.CamelCase<TypeTagTuple>>({
        convert: typia.notations.createValidateCamel<TypeTagTuple>(),
        assert: typia.createAssert<typia.CamelCase<TypeTagTuple>>(),
    });
