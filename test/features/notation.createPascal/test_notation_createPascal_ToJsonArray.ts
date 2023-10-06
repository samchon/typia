import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_notation_createValidatePascal_ToJsonArray =
    _test_notation_validateGeneral("ToJsonArray")<ToJsonArray>(ToJsonArray)<
        typia.PascalCase<ToJsonArray>
    >({
        convert: typia.notations.createValidatePascal<ToJsonArray>(),
        assert: typia.createAssert<typia.PascalCase<ToJsonArray>>(),
    });
