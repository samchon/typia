import typia from "../../../src";
import { ToJsonDouble } from "../../structures/ToJsonDouble";
import { _test_equals } from "../internal/_test_equals";

export const test_createEquals_ToJsonDouble = _test_equals(
    "ToJsonDouble",
    ToJsonDouble.generate,
    typia.createEquals<ToJsonDouble>(),
);