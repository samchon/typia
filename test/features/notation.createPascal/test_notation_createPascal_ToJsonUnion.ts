import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_notation_createValidatePascal_ToJsonUnion =
    _test_notation_validateGeneral("ToJsonUnion")<ToJsonUnion>(ToJsonUnion)<
        typia.PascalCase<ToJsonUnion>
    >({
        convert: typia.notations.createValidatePascal<ToJsonUnion>(),
        assert: typia.createAssert<typia.PascalCase<ToJsonUnion>>(),
    });
