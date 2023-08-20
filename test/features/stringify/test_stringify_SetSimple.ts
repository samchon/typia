import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { SetSimple } from "../../structures/SetSimple";

export const test_stringify_SetSimple = _test_stringify(
    "SetSimple",
    SetSimple.generate,
    (input) => typia.stringify<SetSimple>(input),
);
