import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_createIsStringify_ToJsonArray = _test_isStringify(
    "ToJsonArray",
    ToJsonArray.generate,
    typia.createIsStringify<ToJsonArray>(),
);
