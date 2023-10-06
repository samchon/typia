import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_notation_createValidatePascal_ClassGetter =
    _test_notation_validateGeneral("ClassGetter")<ClassGetter>(ClassGetter)<
        typia.PascalCase<ClassGetter>
    >({
        convert: typia.notations.createValidatePascal<ClassGetter>(),
        assert: typia.createAssert<typia.PascalCase<ClassGetter>>(),
    });
