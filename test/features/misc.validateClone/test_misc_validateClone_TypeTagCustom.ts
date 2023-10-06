import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_misc_validateClone_TypeTagCustom = _test_misc_validateClone(
    "TypeTagCustom",
)<TypeTagCustom>(TypeTagCustom)((input) =>
    typia.misc.validateClone<TypeTagCustom>(input),
);
