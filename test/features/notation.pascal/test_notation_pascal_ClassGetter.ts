import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_notation_validatePascal_ClassGetter =
    _test_notation_validateGeneral("ClassGetter")<ClassGetter>(ClassGetter)<
        typia.PascalCase<ClassGetter>
    >({
        convert: (input) => typia.notations.validatePascal<ClassGetter>(input),
        assert: typia.createAssert<typia.PascalCase<ClassGetter>>(),
    });
