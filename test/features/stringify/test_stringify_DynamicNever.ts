import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_stringify_DynamicNever = _test_stringify(
    "DynamicNever",
    DynamicNever.generate,
    (input) => typia.stringify<DynamicNever>(input),
);
