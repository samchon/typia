import typia from "../../../src";
import { ToJsonUndefined } from "../../structures/ToJsonUndefined";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_ToJsonUndefined = _test_equals(
    "ToJsonUndefined",
    ToJsonUndefined.generate,
    (input) => typia.equals(input),
);
