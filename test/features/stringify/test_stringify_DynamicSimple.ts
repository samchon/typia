import typia from "../../../src";
import { DynamicSimple } from "../../structures/DynamicSimple";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_DynamicSimple = _test_stringify(
    "DynamicSimple",
    DynamicSimple.generate,
    (input) => typia.stringify(input),
);