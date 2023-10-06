import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_notation_createValidateCamel_ObjectPrimitive =
    _test_notation_validateGeneral("ObjectPrimitive")<ObjectPrimitive>(
        ObjectPrimitive
    )<typia.CamelCase<ObjectPrimitive>>({
        convert: (input) => typia.notations.validateCamel<ObjectPrimitive>(input),
        assert: typia.createAssert<typia.CamelCase<ObjectPrimitive>>(),
    });
