import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_assert_ToJsonNull = _test_assert<ToJsonNull>(ToJsonNull)(
    (input) => typia.assert(input),
);
