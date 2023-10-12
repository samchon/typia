import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { SetSimple } from "../../structures/SetSimple";

export const test_notation_createValidateCamel_SetSimple =
    _test_notation_validateGeneral("SetSimple")<SetSimple>(SetSimple)<
        typia.CamelCase<SetSimple>
    >({
        convert: typia.notations.createValidateCamel<SetSimple>(),
        assert: typia.createAssert<typia.CamelCase<SetSimple>>(),
    });
