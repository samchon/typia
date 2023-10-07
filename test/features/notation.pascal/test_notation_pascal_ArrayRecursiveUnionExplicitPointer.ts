import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_notation_validatePascal_ArrayRecursiveUnionExplicitPointer =
    _test_notation_validateGeneral(
        "ArrayRecursiveUnionExplicitPointer",
    )<ArrayRecursiveUnionExplicitPointer>(ArrayRecursiveUnionExplicitPointer)<
        typia.PascalCase<ArrayRecursiveUnionExplicitPointer>
    >({
        convert: (input) =>
            typia.notations.validatePascal<ArrayRecursiveUnionExplicitPointer>(
                input,
            ),
        assert: typia.createAssert<
            typia.PascalCase<ArrayRecursiveUnionExplicitPointer>
        >(),
    });
