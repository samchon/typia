import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { SetSimple } from "../../structures/SetSimple";

export const test_notation_validatePascal_SetSimple =
    _test_notation_validateGeneral("SetSimple")<SetSimple>(SetSimple)<
        typia.PascalCase<SetSimple>
    >({
        convert: (input) => typia.notations.validatePascal<SetSimple>(input),
        assert: typia.createAssert<typia.PascalCase<SetSimple>>(),
    });
