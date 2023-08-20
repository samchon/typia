import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_is_AtomicAlias = _test_is(
    "AtomicAlias",
    AtomicAlias.generate,
    (input) => typia.is<AtomicAlias>(input),
    AtomicAlias.SPOILERS,
);
