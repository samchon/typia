import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_assertEquals_ToJsonArray = _test_assertEquals(
    "ToJsonArray",
    ToJsonArray.generate,
    (input) => typia.assertEquals<ToJsonArray>(input),
);
