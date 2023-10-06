import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_notation_createValidatePascal_ToJsonNull =
    _test_notation_validateGeneral("ToJsonNull")<ToJsonNull>(ToJsonNull)<
        typia.PascalCase<ToJsonNull>
    >({
        convert: typia.notations.createValidatePascal<ToJsonNull>(),
        assert: typia.createAssert<typia.PascalCase<ToJsonNull>>(),
    });
