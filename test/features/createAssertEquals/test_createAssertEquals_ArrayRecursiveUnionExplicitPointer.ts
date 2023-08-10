import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_assertEquals_ArrayRecursiveUnionExplicitPointer =
    _test_assertEquals<ArrayRecursiveUnionExplicitPointer>(
        ArrayRecursiveUnionExplicitPointer,
    )(typia.createAssertEquals<ArrayRecursiveUnionExplicitPointer>());
