import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_assertEquals_DynamicTag = _test_assertEquals(
    "DynamicTag",
)<DynamicTag>(DynamicTag)((input) => typia.assertEquals<DynamicTag>(input));
