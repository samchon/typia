import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_stringify_ToJsonArray = _test_stringify(
    "ToJsonArray",
    ToJsonArray.generate,
    (input) => typia.stringify<ToJsonArray>(input),
);
