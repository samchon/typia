import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_misc_clone_TypeTagMatrix = _test_misc_clone(
    "TypeTagMatrix",
)<TypeTagMatrix>(TypeTagMatrix)(typia.misc.createClone<TypeTagMatrix>());
