import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_assertParse_AtomicAlias = _test_assertParse(
    "AtomicAlias",
    AtomicAlias.generate,
    (input) => typia.assertParse<AtomicAlias>(input),
    AtomicAlias.SPOILERS,
);
