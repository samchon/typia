import typia from "../../../src";
import { DynamicUnion } from "../../structures/DynamicUnion";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_DynamicUnion = _test_stringify(
    "DynamicUnion",
    DynamicUnion.generate,
    (input) => typia.stringify(input),
);