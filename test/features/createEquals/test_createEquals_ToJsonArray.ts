import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_equals_ToJsonArray = _test_equals<ToJsonArray>(ToJsonArray)(
    typia.createEquals<ToJsonArray>(),
);
