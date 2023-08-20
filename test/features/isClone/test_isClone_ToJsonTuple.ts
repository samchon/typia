import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_isClone_ToJsonTuple = _test_isClone(
    "ToJsonTuple",
    ToJsonTuple.generate,
    (input) => typia.isClone<ToJsonTuple>(input),
);
