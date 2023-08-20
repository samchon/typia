import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_stringify_ToJsonDouble = _test_stringify(
    "ToJsonDouble",
    ToJsonDouble.generate,
    (input) => typia.stringify<ToJsonDouble>(input),
);
