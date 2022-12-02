import TSON from "../../../src";
import { ToJsonDouble } from "../../structures/ToJsonDouble";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_assertEquals_ToJsonDouble = _test_assertEquals(
    "ToJsonDouble",
    ToJsonDouble.generate,
    (input) => TSON.assertEquals(input),
);
