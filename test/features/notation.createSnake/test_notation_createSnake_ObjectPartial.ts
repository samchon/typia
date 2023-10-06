import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_notation_createValidateSnake_ObjectPartial =
    _test_notation_validateGeneral("ObjectPartial")<ObjectPartial>(
        ObjectPartial,
    )<typia.SnakeCase<ObjectPartial>>({
        convert: typia.notations.createValidateSnake<ObjectPartial>(),
        assert: typia.createAssert<typia.SnakeCase<ObjectPartial>>(),
    });
