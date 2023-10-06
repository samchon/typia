import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";

export const test_notation_validatePascal_FunctionalArrayUnion =
    _test_notation_validateGeneral(
        "FunctionalArrayUnion",
    )<FunctionalArrayUnion>(FunctionalArrayUnion)<
        typia.PascalCase<FunctionalArrayUnion>
    >({
        convert: (input) =>
            typia.notations.validatePascal<FunctionalArrayUnion>(input),
        assert: typia.createAssert<typia.PascalCase<FunctionalArrayUnion>>(),
    });
