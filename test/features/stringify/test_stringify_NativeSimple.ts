import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { NativeSimple } from "../../structures/NativeSimple";

export const test_stringify_NativeSimple = _test_stringify(
    "NativeSimple",
    NativeSimple.generate,
    (input) => typia.stringify<NativeSimple>(input),
);
