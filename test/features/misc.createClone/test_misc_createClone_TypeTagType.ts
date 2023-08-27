import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_misc_clone_TypeTagType = _test_misc_clone(
    "TypeTagType",
)<TypeTagType>(TypeTagType)(typia.misc.createClone<TypeTagType>());
