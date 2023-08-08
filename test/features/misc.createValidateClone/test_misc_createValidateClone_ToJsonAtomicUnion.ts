import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

export const test_misc_validateClone_ToJsonAtomicUnion =
    _test_misc_validateClone(
        "ToJsonAtomicUnion",
        ToJsonAtomicUnion.generate,
        typia.misc.createValidateClone<ToJsonAtomicUnion>(),
    );
