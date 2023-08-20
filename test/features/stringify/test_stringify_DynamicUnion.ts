import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_stringify_DynamicUnion = _test_stringify(
    "DynamicUnion",
    DynamicUnion.generate,
    (input) => typia.stringify<DynamicUnion>(input),
);
