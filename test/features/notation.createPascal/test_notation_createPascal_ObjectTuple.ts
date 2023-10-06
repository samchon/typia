import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_notation_createValidatePascal_ObjectTuple =
    _test_notation_validateGeneral("ObjectTuple")<ObjectTuple>(
        ObjectTuple
    )<typia.PascalCase<ObjectTuple>>({
        convert: (input) => typia.notations.validatePascal<ObjectTuple>(input),
        assert: typia.createAssert<typia.PascalCase<ObjectTuple>>(),
    });
