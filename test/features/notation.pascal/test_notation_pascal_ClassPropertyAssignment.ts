import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_notation_validatePascal_ClassPropertyAssignment =
    _test_notation_validateGeneral("ClassPropertyAssignment")<ClassPropertyAssignment>(
        ClassPropertyAssignment
    )<typia.PascalCase<ClassPropertyAssignment>>({
        convert: typia.notations.createValidatePascal<ClassPropertyAssignment>(),
        assert: typia.createAssert<typia.PascalCase<ClassPropertyAssignment>>(),
    });
