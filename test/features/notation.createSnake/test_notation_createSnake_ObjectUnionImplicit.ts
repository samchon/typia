import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_notation_createValidateSnake_ObjectUnionImplicit =
    _test_notation_validateGeneral("ObjectUnionImplicit")<ObjectUnionImplicit>(
        ObjectUnionImplicit,
    )<typia.SnakeCase<ObjectUnionImplicit>>({
        convert: typia.notations.createValidateSnake<ObjectUnionImplicit>(),
        assert: typia.createAssert<typia.SnakeCase<ObjectUnionImplicit>>(),
    });
