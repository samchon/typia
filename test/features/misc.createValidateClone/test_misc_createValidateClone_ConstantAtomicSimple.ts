import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_misc_validateClone_ConstantAtomicSimple =
    _test_misc_validateClone("ConstantAtomicSimple")<ConstantAtomicSimple>(
        ConstantAtomicSimple,
    )(typia.misc.createValidateClone<ConstantAtomicSimple>());
