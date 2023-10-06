import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

export const test_notation_validateCamel_FunctionalValueUnion =
    _test_notation_validateGeneral(
        "FunctionalValueUnion",
    )<FunctionalValueUnion>(FunctionalValueUnion)<
        typia.CamelCase<FunctionalValueUnion>
    >({
        convert: (input) =>
            typia.notations.validateCamel<FunctionalValueUnion>(input),
        assert: typia.createAssert<typia.CamelCase<FunctionalValueUnion>>(),
    });
