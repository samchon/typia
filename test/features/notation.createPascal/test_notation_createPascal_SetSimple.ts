import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { SetSimple } from "../../structures/SetSimple";

export const test_notation_createValidatePascal_SetSimple =
    _test_notation_validateGeneral("SetSimple")<SetSimple>(SetSimple)<
        typia.PascalCase<SetSimple>
    >({
        convert: typia.notations.createValidatePascal<SetSimple>(),
        assert: typia.createAssert<typia.PascalCase<SetSimple>>(),
    });
