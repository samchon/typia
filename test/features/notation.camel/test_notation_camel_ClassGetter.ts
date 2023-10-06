import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_notation_validateCamel_ClassGetter =
    _test_notation_validateGeneral("ClassGetter")<ClassGetter>(
        ClassGetter
    )<typia.CamelCase<ClassGetter>>({
        convert: typia.notations.createValidateCamel<ClassGetter>(),
        assert: typia.createAssert<typia.CamelCase<ClassGetter>>(),
    });
