import typia from "../../../src";
import { AtomicSimple } from "../../structures/AtomicSimple";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_createValidateParse_AtomicSimple = _test_validateParse(
    "AtomicSimple",
    AtomicSimple.generate,
    typia.createValidateParse<AtomicSimple>(),
    AtomicSimple.SPOILERS,
);