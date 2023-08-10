import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_random_ArrayRecursiveUnionExplicitPointer =
    _test_random<ArrayRecursiveUnionExplicitPointer>(
        ArrayRecursiveUnionExplicitPointer,
    )({
        random: typia.createRandom<ArrayRecursiveUnionExplicitPointer>(),
        assert: typia.createAssert<ArrayRecursiveUnionExplicitPointer>(),
    });
