import TSON from "../../../src";
import { ToJsonDouble } from "../../structures/ToJsonDouble";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_ToJsonDouble = _test_assertStringify(
    "ToJsonDouble",
    ToJsonDouble.generate,
    TSON.createAssertStringify<ToJsonDouble>(),
);