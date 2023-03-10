import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_createValidateClone_AtomicSimple = _test_validateClone(
    "AtomicSimple",
    AtomicSimple.generate,
    typia.createValidateClone<AtomicSimple>(),
    AtomicSimple.SPOILERS,
);
