import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_notation_createValidatePascal_ClassPropertyAssignment =
    _test_notation_validateGeneral("ClassPropertyAssignment")<ClassPropertyAssignment>(
        ClassPropertyAssignment
    )<typia.PascalCase<ClassPropertyAssignment>>({
        convert: (input) => typia.notations.validatePascal<ClassPropertyAssignment>(input),
        assert: typia.createAssert<typia.PascalCase<ClassPropertyAssignment>>(),
    });
