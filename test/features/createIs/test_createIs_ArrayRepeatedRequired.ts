import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

export const test_is_ArrayRepeatedRequired = _test_is(
    "ArrayRepeatedRequired",
)<ArrayRepeatedRequired>(ArrayRepeatedRequired)(
    typia.createIs<ArrayRepeatedRequired>(),
);
