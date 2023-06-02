import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_clone_ToJsonDouble = _test_clone(
    "ToJsonDouble",
    ToJsonDouble.generate,
    (input) => typia.clone(input),
);
