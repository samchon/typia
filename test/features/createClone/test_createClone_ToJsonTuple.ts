import typia from "../../../src";
import { ToJsonTuple } from "../../structures/ToJsonTuple";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_ToJsonTuple = _test_clone(
    "ToJsonTuple",
    ToJsonTuple.generate,
    typia.createClone<ToJsonTuple>(),
);
