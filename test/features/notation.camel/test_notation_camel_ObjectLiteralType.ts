import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_notation_validateCamel_ObjectLiteralType =
    _test_notation_validateGeneral("ObjectLiteralType")<ObjectLiteralType>(
        ObjectLiteralType
    )<typia.CamelCase<ObjectLiteralType>>({
        convert: typia.notations.createValidateCamel<ObjectLiteralType>(),
        assert: typia.createAssert<typia.CamelCase<ObjectLiteralType>>(),
    });
