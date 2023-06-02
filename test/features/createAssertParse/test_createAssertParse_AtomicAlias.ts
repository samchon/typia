import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_createAssertParse_AtomicAlias = _test_assertParse(
    "AtomicAlias",
    AtomicAlias.generate,
    typia.createAssertParse<AtomicAlias>(),
    AtomicAlias.SPOILERS,
);
