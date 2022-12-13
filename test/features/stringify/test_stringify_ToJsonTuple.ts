import typia from "../../../src";
import { ToJsonTuple } from "../../structures/ToJsonTuple";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_ToJsonTuple = _test_stringify(
    "ToJsonTuple",
    ToJsonTuple.generate,
    (input) => typia.stringify(input),
);