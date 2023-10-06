import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

export const test_notation_validatePascal_ArrayRepeatedUnion =
    _test_notation_validateGeneral("ArrayRepeatedUnion")<ArrayRepeatedUnion>(
        ArrayRepeatedUnion,
    )<typia.PascalCase<ArrayRepeatedUnion>>({
        convert: (input) =>
            typia.notations.validatePascal<ArrayRepeatedUnion>(input),
        assert: typia.createAssert<typia.PascalCase<ArrayRepeatedUnion>>(),
    });
