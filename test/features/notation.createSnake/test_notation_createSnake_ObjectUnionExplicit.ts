import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_notation_createValidateSnake_ObjectUnionExplicit =
    _test_notation_validateGeneral("ObjectUnionExplicit")<ObjectUnionExplicit>(
        ObjectUnionExplicit
    )<typia.SnakeCase<ObjectUnionExplicit>>({
        convert: (input) => typia.notations.validateSnake<ObjectUnionExplicit>(input),
        assert: typia.createAssert<typia.SnakeCase<ObjectUnionExplicit>>(),
    });
