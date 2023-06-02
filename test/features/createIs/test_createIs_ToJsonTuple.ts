import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_createIs_ToJsonTuple = _test_is(
    "ToJsonTuple",
    ToJsonTuple.generate,
    typia.createIs<ToJsonTuple>(),
);
