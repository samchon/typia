import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_notation_createValidatePascal_ObjectHttpArray =
    _test_notation_validateGeneral("ObjectHttpArray")<ObjectHttpArray>(
        ObjectHttpArray
    )<typia.PascalCase<ObjectHttpArray>>({
        convert: (input) => typia.notations.validatePascal<ObjectHttpArray>(input),
        assert: typia.createAssert<typia.PascalCase<ObjectHttpArray>>(),
    });
