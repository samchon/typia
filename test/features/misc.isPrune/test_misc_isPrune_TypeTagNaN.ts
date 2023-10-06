import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_misc_isPrune_TypeTagNaN = _test_misc_isPrune(
    "TypeTagNaN",
)<TypeTagNaN>(TypeTagNaN)((input) => typia.misc.isPrune<TypeTagNaN>(input));
