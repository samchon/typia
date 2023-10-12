import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_notation_createValidateCamel_ObjectOptional =
    _test_notation_validateGeneral("ObjectOptional")<ObjectOptional>(
        ObjectOptional,
    )<typia.CamelCase<ObjectOptional>>({
        convert: typia.notations.createValidateCamel<ObjectOptional>(),
        assert: typia.createAssert<typia.CamelCase<ObjectOptional>>(),
    });
