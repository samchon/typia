import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_misc_createValidateClone_AtomicClass =
    _test_misc_validateClone("AtomicClass")<AtomicClass>(AtomicClass)(
        typia.misc.createValidateClone<AtomicClass>(),
    );
