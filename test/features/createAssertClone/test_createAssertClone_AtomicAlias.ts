import typia from "../../../src";
import { AtomicAlias } from "../../structures/AtomicAlias";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_AtomicAlias = _test_assertClone(
    "AtomicAlias",
    AtomicAlias.generate,
    typia.createAssertClone<AtomicAlias>(),
    AtomicAlias.SPOILERS,
);