import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_assertStringify_ToJsonDouble = _test_assertStringify(
    "ToJsonDouble",
    ToJsonDouble.generate,
    (input) => typia.assertStringify<ToJsonDouble>(input),
);
