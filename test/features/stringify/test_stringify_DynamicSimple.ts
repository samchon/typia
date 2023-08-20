import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_stringify_DynamicSimple = _test_stringify(
    "DynamicSimple",
    DynamicSimple.generate,
    (input) => typia.stringify<DynamicSimple>(input),
);
