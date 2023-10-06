import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_notation_createValidateCamel_ObjectGenericArray =
    _test_notation_validateGeneral("ObjectGenericArray")<ObjectGenericArray>(
        ObjectGenericArray
    )<typia.CamelCase<ObjectGenericArray>>({
        convert: (input) => typia.notations.validateCamel<ObjectGenericArray>(input),
        assert: typia.createAssert<typia.CamelCase<ObjectGenericArray>>(),
    });
