import TSON from "../../../src";
import { ToJsonArray } from "../../structures/ToJsonArray";
import { _test_stringify } from "../internal/_test_stringify";

export const test_createStringify_ToJsonArray = _test_stringify(
    "ToJsonArray",
    ToJsonArray.generate,
    TSON.createStringify<ToJsonArray>(),
);