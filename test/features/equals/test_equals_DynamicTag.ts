import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_equals_DynamicTag = _test_equals("DynamicTag")<DynamicTag>(
    DynamicTag,
)((input) => typia.equals<DynamicTag>(input));
