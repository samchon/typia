import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_createClone_ToJsonTuple = _test_clone(
    "ToJsonTuple",
    ToJsonTuple.generate,
    typia.createClone<ToJsonTuple>(),
);
