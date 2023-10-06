import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_notation_validateCamel_ObjectLiteralProperty =
    _test_notation_validateGeneral("ObjectLiteralProperty")<ObjectLiteralProperty>(
        ObjectLiteralProperty
    )<typia.CamelCase<ObjectLiteralProperty>>({
        convert: typia.notations.createValidateCamel<ObjectLiteralProperty>(),
        assert: typia.createAssert<typia.CamelCase<ObjectLiteralProperty>>(),
    });
