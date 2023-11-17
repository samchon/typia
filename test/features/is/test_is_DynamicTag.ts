import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_is_DynamicTag = _test_is("DynamicTag")<DynamicTag>(
  DynamicTag,
)((input) => typia.is<DynamicTag>(input));
