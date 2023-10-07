import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_notation_createValidateCamel_ObjectPartial =
    _test_notation_validateGeneral("ObjectPartial")<ObjectPartial>(
        ObjectPartial,
    )<typia.CamelCase<ObjectPartial>>({
        convert: typia.notations.createValidateCamel<ObjectPartial>(),
        assert: typia.createAssert<typia.CamelCase<ObjectPartial>>(),
    });
