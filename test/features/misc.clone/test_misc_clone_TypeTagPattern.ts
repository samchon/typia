import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_misc_clone_TypeTagPattern = _test_misc_clone(
    "TypeTagPattern",
)<TypeTagPattern>(TypeTagPattern)((input) =>
    typia.misc.clone<TypeTagPattern>(input),
);
