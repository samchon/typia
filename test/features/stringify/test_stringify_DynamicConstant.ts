import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_stringify_DynamicConstant = _test_stringify(
    "DynamicConstant",
    DynamicConstant.generate,
    (input) => typia.stringify<DynamicConstant>(input),
);
