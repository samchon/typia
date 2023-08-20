import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_isClone_ToJsonDouble = _test_isClone(
    "ToJsonDouble",
    ToJsonDouble.generate,
    (input) => typia.isClone<ToJsonDouble>(input),
);
