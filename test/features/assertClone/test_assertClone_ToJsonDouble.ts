import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_assertClone_ToJsonDouble = _test_assertClone(
    "ToJsonDouble",
    ToJsonDouble.generate,
    (input) => typia.assertClone<ToJsonDouble>(input),
);
