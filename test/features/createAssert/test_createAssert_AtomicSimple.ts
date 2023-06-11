import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_createAssert_AtomicSimple = _test_assert(
    "AtomicSimple",
    AtomicSimple.generate,
    typia.createAssert<AtomicSimple>(),
    AtomicSimple.SPOILERS,
);
