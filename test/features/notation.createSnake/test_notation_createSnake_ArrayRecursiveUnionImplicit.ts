import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_notation_createValidateSnake_ArrayRecursiveUnionImplicit =
    _test_notation_validateGeneral(
        "ArrayRecursiveUnionImplicit",
    )<ArrayRecursiveUnionImplicit>(ArrayRecursiveUnionImplicit)<
        typia.SnakeCase<ArrayRecursiveUnionImplicit>
    >({
        convert:
            typia.notations.createValidateSnake<ArrayRecursiveUnionImplicit>(),
        assert: typia.createAssert<
            typia.SnakeCase<ArrayRecursiveUnionImplicit>
        >(),
    });
