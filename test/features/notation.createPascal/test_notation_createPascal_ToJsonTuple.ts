import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_notation_createValidatePascal_ToJsonTuple =
    _test_notation_validateGeneral("ToJsonTuple")<ToJsonTuple>(ToJsonTuple)<
        typia.PascalCase<ToJsonTuple>
    >({
        convert: typia.notations.createValidatePascal<ToJsonTuple>(),
        assert: typia.createAssert<typia.PascalCase<ToJsonTuple>>(),
    });
