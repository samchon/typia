import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_is_ToJsonDouble = _test_is(
    "ToJsonDouble",
    ToJsonDouble.generate,
    (input) => typia.is(input),
);
