import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_createAssertClone_ToJsonArray = _test_assertClone(
    "ToJsonArray",
    ToJsonArray.generate,
    typia.createAssertClone<ToJsonArray>(),
);
