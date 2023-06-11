import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_createAssertParse_AtomicSimple = _test_assertParse(
    "AtomicSimple",
    AtomicSimple.generate,
    typia.createAssertParse<AtomicSimple>(),
    AtomicSimple.SPOILERS,
);
