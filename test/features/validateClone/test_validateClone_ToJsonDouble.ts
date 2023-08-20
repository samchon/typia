import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_validateClone_ToJsonDouble = _test_validateClone(
    "ToJsonDouble",
    ToJsonDouble.generate,
    (input) => typia.validateClone<ToJsonDouble>(input),
);
