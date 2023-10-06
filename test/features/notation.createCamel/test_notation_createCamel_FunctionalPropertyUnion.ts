import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";

export const test_notation_createValidateCamel_FunctionalPropertyUnion =
    _test_notation_validateGeneral(
        "FunctionalPropertyUnion",
    )<FunctionalPropertyUnion>(FunctionalPropertyUnion)<
        typia.CamelCase<FunctionalPropertyUnion>
    >({
        convert: typia.notations.createValidateCamel<FunctionalPropertyUnion>(),
        assert: typia.createAssert<typia.CamelCase<FunctionalPropertyUnion>>(),
    });
