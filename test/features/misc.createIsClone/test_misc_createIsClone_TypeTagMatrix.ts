import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_misc_isClone_TypeTagMatrix = _test_misc_isClone(
    "TypeTagMatrix",
)<TypeTagMatrix>(TypeTagMatrix)(typia.misc.createIsClone<TypeTagMatrix>());
