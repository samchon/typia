import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_notation_createValidatePascal_ToJsonDouble =
    _test_notation_validateGeneral("ToJsonDouble")<ToJsonDouble>(ToJsonDouble)<
        typia.PascalCase<ToJsonDouble>
    >({
        convert: typia.notations.createValidatePascal<ToJsonDouble>(),
        assert: typia.createAssert<typia.PascalCase<ToJsonDouble>>(),
    });
