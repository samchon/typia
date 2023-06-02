import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_createEquals_ToJsonDouble = _test_equals(
    "ToJsonDouble",
    ToJsonDouble.generate,
    typia.createEquals<ToJsonDouble>(),
);
