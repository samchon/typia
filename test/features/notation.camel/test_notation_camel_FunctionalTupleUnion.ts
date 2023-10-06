import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";

export const test_notation_validateCamel_FunctionalTupleUnion =
    _test_notation_validateGeneral(
        "FunctionalTupleUnion",
    )<FunctionalTupleUnion>(FunctionalTupleUnion)<
        typia.CamelCase<FunctionalTupleUnion>
    >({
        convert: (input) =>
            typia.notations.validateCamel<FunctionalTupleUnion>(input),
        assert: typia.createAssert<typia.CamelCase<FunctionalTupleUnion>>(),
    });
