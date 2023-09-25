import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_misc_createIsClone_TypeTagFormat = _test_misc_isClone(
    "TypeTagFormat",
)<TypeTagFormat>(TypeTagFormat)(typia.misc.createIsClone<TypeTagFormat>());
