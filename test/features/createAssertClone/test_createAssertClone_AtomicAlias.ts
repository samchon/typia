import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_createAssertClone_AtomicAlias = _test_assertClone(
    "AtomicAlias",
    AtomicAlias.generate,
    typia.createAssertClone<AtomicAlias>(),
    AtomicAlias.SPOILERS,
);
