import typia from "../../../src";
import { ToJsonUndefined } from "../../structures/ToJsonUndefined";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_assertEquals_ToJsonUndefined = _test_assertEquals(
    "ToJsonUndefined",
    ToJsonUndefined.generate,
    (input) => typia.assertEquals(input),
);
