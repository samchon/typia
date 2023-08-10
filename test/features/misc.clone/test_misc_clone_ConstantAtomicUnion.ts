import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_misc_clone_ConstantAtomicUnion =
    _test_misc_clone<ConstantAtomicUnion>(ConstantAtomicUnion)((input) =>
        typia.misc.clone<ConstantAtomicUnion>(input),
    );
