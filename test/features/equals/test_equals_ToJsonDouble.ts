import TSON from "../../../src";
import { ToJsonDouble } from "../../structures/ToJsonDouble";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_ToJsonDouble = _test_equals(
    "ToJsonDouble",
    ToJsonDouble.generate,
    (input) => TSON.equals(input),
);