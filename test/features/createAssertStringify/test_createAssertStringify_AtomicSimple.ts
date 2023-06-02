import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_createAssertStringify_AtomicSimple = _test_assertStringify(
    "AtomicSimple",
    AtomicSimple.generate,
    typia.createAssertStringify<AtomicSimple>(),
    AtomicSimple.SPOILERS,
);
