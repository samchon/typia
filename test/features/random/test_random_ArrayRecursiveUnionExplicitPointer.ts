import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_random_ArrayRecursiveUnionExplicitPointer = _test_random(
    "ArrayRecursiveUnionExplicitPointer",
)<ArrayRecursiveUnionExplicitPointer>(ArrayRecursiveUnionExplicitPointer)({
    random: () =>
        typia.random<ArrayRecursiveUnionExplicitPointer>(
            (ArrayRecursiveUnionExplicitPointer as any).RANDOM,
        ),
    assert: typia.createAssert<ArrayRecursiveUnionExplicitPointer>(),
});
