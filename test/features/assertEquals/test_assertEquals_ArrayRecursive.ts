import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_assertEquals_ArrayRecursive =
    _test_assertEquals<ArrayRecursive>(ArrayRecursive)((input) =>
        typia.assertEquals(input),
    );
