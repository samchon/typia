import TSON from "../../../src";
import { ToJsonDouble } from "../../structures/ToJsonDouble";
import { _test_is } from "../internal/_test_is";

export const test_is_ToJsonDouble = _test_is(
    "ToJsonDouble",
    ToJsonDouble.generate,
    (input) => TSON.is(input),
);