import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_notation_validateCamel_ArrayRecursiveUnionExplicit =
    _test_notation_validateGeneral(
        "ArrayRecursiveUnionExplicit",
    )<ArrayRecursiveUnionExplicit>(ArrayRecursiveUnionExplicit)<
        typia.CamelCase<ArrayRecursiveUnionExplicit>
    >({
        convert: (input) =>
            typia.notations.validateCamel<ArrayRecursiveUnionExplicit>(input),
        assert: typia.createAssert<
            typia.CamelCase<ArrayRecursiveUnionExplicit>
        >(),
    });
