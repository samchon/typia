import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_misc_clone_TypeTagCustom = _test_misc_clone(
    "TypeTagCustom",
)<TypeTagCustom>(TypeTagCustom)((input) =>
    typia.misc.clone<TypeTagCustom>(input),
);
