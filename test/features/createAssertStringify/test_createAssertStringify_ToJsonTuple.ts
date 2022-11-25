import TSON from "../../../src";
import { ToJsonTuple } from "../../structures/ToJsonTuple";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_ToJsonTuple = _test_assertStringify(
    "ToJsonTuple",
    ToJsonTuple.generate,
    TSON.createAssertStringify<ToJsonTuple>(),
);
