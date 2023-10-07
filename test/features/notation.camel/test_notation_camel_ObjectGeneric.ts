import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_notation_validateCamel_ObjectGeneric =
    _test_notation_validateGeneral("ObjectGeneric")<ObjectGeneric>(
        ObjectGeneric,
    )<typia.CamelCase<ObjectGeneric>>({
        convert: (input) => typia.notations.validateCamel<ObjectGeneric>(input),
        assert: typia.createAssert<typia.CamelCase<ObjectGeneric>>(),
    });
