import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_createAssertStringify_ToJsonTuple = _test_assertStringify(
    "ToJsonTuple",
    ToJsonTuple.generate,
    typia.createAssertStringify<ToJsonTuple>(),
);
