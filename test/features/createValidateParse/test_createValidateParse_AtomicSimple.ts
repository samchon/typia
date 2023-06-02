import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_createValidateParse_AtomicSimple = _test_validateParse(
    "AtomicSimple",
    AtomicSimple.generate,
    typia.createValidateParse<AtomicSimple>(),
    AtomicSimple.SPOILERS,
);
