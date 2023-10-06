import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_notation_createValidateCamel_TypeTagFormat =
    _test_notation_validateGeneral("TypeTagFormat")<TypeTagFormat>(
        TypeTagFormat
    )<typia.CamelCase<TypeTagFormat>>({
        convert: (input) => typia.notations.validateCamel<TypeTagFormat>(input),
        assert: typia.createAssert<typia.CamelCase<TypeTagFormat>>(),
    });
