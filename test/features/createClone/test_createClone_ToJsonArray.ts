import TSON from "../../../src";
import { ToJsonArray } from "../../structures/ToJsonArray";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_ToJsonArray = _test_clone(
    "ToJsonArray",
    ToJsonArray.generate,
    TSON.createClone<ToJsonArray>(),
);
