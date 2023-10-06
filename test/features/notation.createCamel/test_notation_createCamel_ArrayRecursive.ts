import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_notation_createValidateCamel_ArrayRecursive =
    _test_notation_validateGeneral("ArrayRecursive")<ArrayRecursive>(
        ArrayRecursive,
    )<typia.CamelCase<ArrayRecursive>>({
        convert: typia.notations.createValidateCamel<ArrayRecursive>(),
        assert: typia.createAssert<typia.CamelCase<ArrayRecursive>>(),
    });
