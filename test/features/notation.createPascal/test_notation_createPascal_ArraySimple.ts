import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_notation_createValidatePascal_ArraySimple =
    _test_notation_validateGeneral("ArraySimple")<ArraySimple>(ArraySimple)<
        typia.PascalCase<ArraySimple>
    >({
        convert: typia.notations.createValidatePascal<ArraySimple>(),
        assert: typia.createAssert<typia.PascalCase<ArraySimple>>(),
    });
