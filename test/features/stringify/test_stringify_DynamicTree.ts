import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_stringify_DynamicTree = _test_stringify(
    "DynamicTree",
    DynamicTree.generate,
    (input) => typia.stringify(input),
);
