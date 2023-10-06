import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

export const test_notation_validateCamel_ArrayRepeatedRequired =
    _test_notation_validateGeneral(
        "ArrayRepeatedRequired",
    )<ArrayRepeatedRequired>(ArrayRepeatedRequired)<
        typia.CamelCase<ArrayRepeatedRequired>
    >({
        convert: (input) =>
            typia.notations.validateCamel<ArrayRepeatedRequired>(input),
        assert: typia.createAssert<typia.CamelCase<ArrayRepeatedRequired>>(),
    });
