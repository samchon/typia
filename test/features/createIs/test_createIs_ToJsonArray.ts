import typia from "../../../src";
import { ToJsonArray } from "../../structures/ToJsonArray";
import { _test_is } from "../internal/_test_is";

export const test_createIs_ToJsonArray = _test_is(
    "ToJsonArray",
    ToJsonArray.generate,
    typia.createIs<ToJsonArray>(),
);
