import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_misc_clone_TypeTagFormat = _test_misc_clone(
    "TypeTagFormat",
)<TypeTagFormat>(TypeTagFormat)(typia.misc.createClone<TypeTagFormat>());
