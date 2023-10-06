import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

export const test_notation_createValidateCamel_FunctionalValueUnion =
    _test_notation_validateGeneral(
        "FunctionalValueUnion",
    )<FunctionalValueUnion>(FunctionalValueUnion)<
        typia.CamelCase<FunctionalValueUnion>
    >({
        convert: typia.notations.createValidateCamel<FunctionalValueUnion>(),
        assert: typia.createAssert<typia.CamelCase<FunctionalValueUnion>>(),
    });
