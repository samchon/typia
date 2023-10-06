import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_notation_validatePascal_ToJsonArray =
    _test_notation_validateGeneral("ToJsonArray")<ToJsonArray>(ToJsonArray)<
        typia.PascalCase<ToJsonArray>
    >({
        convert: (input) => typia.notations.validatePascal<ToJsonArray>(input),
        assert: typia.createAssert<typia.PascalCase<ToJsonArray>>(),
    });
