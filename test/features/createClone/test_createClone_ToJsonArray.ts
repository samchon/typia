import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_createClone_ToJsonArray = _test_clone(
    "ToJsonArray",
    ToJsonArray.generate,
    typia.createClone<ToJsonArray>(),
);
