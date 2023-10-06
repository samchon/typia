import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_notation_validateCamel_ObjectHttpNullable =
    _test_notation_validateGeneral("ObjectHttpNullable")<ObjectHttpNullable>(
        ObjectHttpNullable
    )<typia.CamelCase<ObjectHttpNullable>>({
        convert: typia.notations.createValidateCamel<ObjectHttpNullable>(),
        assert: typia.createAssert<typia.CamelCase<ObjectHttpNullable>>(),
    });
