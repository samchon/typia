import typia from "../../../src";
import { ToJsonTuple } from "../../structures/ToJsonTuple";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_assertEquals_ToJsonTuple = _test_assertEquals(
    "ToJsonTuple",
    ToJsonTuple.generate,
    (input) => typia.assertEquals(input),
);
