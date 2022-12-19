import typia from "../../../src";
import { ToJsonDouble } from "../../structures/ToJsonDouble";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_ToJsonDouble = _test_assertStringify(
    "ToJsonDouble",
    ToJsonDouble.generate,
    (input) => typia.assertStringify(input),
);