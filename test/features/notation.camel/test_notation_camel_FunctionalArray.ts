import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { FunctionalArray } from "../../structures/FunctionalArray";

export const test_notation_validateCamel_FunctionalArray =
    _test_notation_validateGeneral("FunctionalArray")<FunctionalArray>(
        FunctionalArray,
    )<typia.CamelCase<FunctionalArray>>({
        convert: (input) =>
            typia.notations.validateCamel<FunctionalArray>(input),
        assert: typia.createAssert<typia.CamelCase<FunctionalArray>>(),
    });
