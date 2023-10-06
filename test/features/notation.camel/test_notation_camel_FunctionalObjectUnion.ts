import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";

export const test_notation_validateCamel_FunctionalObjectUnion =
    _test_notation_validateGeneral(
        "FunctionalObjectUnion",
    )<FunctionalObjectUnion>(FunctionalObjectUnion)<
        typia.CamelCase<FunctionalObjectUnion>
    >({
        convert: (input) =>
            typia.notations.validateCamel<FunctionalObjectUnion>(input),
        assert: typia.createAssert<typia.CamelCase<FunctionalObjectUnion>>(),
    });
