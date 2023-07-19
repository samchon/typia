import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { ToJsonUndefined } from "../../structures/ToJsonUndefined";

export const test_equals_ToJsonUndefined = _test_equals<ToJsonUndefined>(
    ToJsonUndefined,
)((input) => typia.equals(input));
