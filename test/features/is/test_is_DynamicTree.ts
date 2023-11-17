import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_is_DynamicTree = _test_is("DynamicTree")<DynamicTree>(
  DynamicTree,
)((input) => typia.is<DynamicTree>(input));
