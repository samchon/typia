import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_notation_validatePascal_ObjectHttpConstant =
    _test_notation_validateGeneral("ObjectHttpConstant")<ObjectHttpConstant>(
        ObjectHttpConstant
    )<typia.PascalCase<ObjectHttpConstant>>({
        convert: typia.notations.createValidatePascal<ObjectHttpConstant>(),
        assert: typia.createAssert<typia.PascalCase<ObjectHttpConstant>>(),
    });
