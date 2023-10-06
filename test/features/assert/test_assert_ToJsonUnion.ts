import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_assert_ToJsonUnion = _test_assert("ToJsonUnion")<ToJsonUnion>(
    ToJsonUnion,
)((input) => typia.assert<ToJsonUnion>(input));
