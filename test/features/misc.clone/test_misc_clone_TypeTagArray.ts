import typia from "../../../src";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_misc_clone_TypeTagArray = _test_misc_clone(
    "TypeTagArray",
)<TypeTagArray>(
    TypeTagArray
)((input) => typia.misc.clone<TypeTagArray>(input));
