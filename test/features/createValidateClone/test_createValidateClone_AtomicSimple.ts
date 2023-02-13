import typia from "../../../src";
import { AtomicSimple } from "../../structures/AtomicSimple";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_createValidateClone_AtomicSimple = _test_validateClone(
    "AtomicSimple",
    AtomicSimple.generate,
    typia.createValidateClone<AtomicSimple>(),
    AtomicSimple.SPOILERS,
);