import typia from "../../../src";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_misc_createIsClone_TypeTagAtomicUnion = _test_misc_isClone(
    "TypeTagAtomicUnion",
)<TypeTagAtomicUnion>(
    TypeTagAtomicUnion
)(typia.misc.createIsClone<TypeTagAtomicUnion>());
