import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_assertStringify_ToJsonTuple = _test_assertStringify(
    "ToJsonTuple",
    ToJsonTuple.generate,
    (input) => typia.assertStringify<ToJsonTuple>(input),
);
