import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_misc_validateClone_TypeTagAtomicUnion =
    _test_misc_validateClone("TypeTagAtomicUnion")<TypeTagAtomicUnion>(
        TypeTagAtomicUnion,
    )((input) => typia.misc.validateClone<TypeTagAtomicUnion>(input));
