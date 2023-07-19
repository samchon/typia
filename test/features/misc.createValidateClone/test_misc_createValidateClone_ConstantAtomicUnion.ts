import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_misc_validateClone_ConstantAtomicUnion =
    _test_misc_validateClone<ConstantAtomicUnion>(ConstantAtomicUnion)(
        typia.misc.createValidateClone<ConstantAtomicUnion>(),
    );
