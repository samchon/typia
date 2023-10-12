import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_notation_createValidateCamel_ArrayHierarchical =
    _test_notation_validateGeneral("ArrayHierarchical")<ArrayHierarchical>(
        ArrayHierarchical,
    )<typia.CamelCase<ArrayHierarchical>>({
        convert: typia.notations.createValidateCamel<ArrayHierarchical>(),
        assert: typia.createAssert<typia.CamelCase<ArrayHierarchical>>(),
    });
