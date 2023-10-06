import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_notation_validateCamel_ObjectNullable =
    _test_notation_validateGeneral("ObjectNullable")<ObjectNullable>(
        ObjectNullable
    )<typia.CamelCase<ObjectNullable>>({
        convert: typia.notations.createValidateCamel<ObjectNullable>(),
        assert: typia.createAssert<typia.CamelCase<ObjectNullable>>(),
    });
