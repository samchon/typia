import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_isParse_AtomicAlias = _test_isParse(
    "AtomicAlias",
    AtomicAlias.generate,
    (input) => typia.isParse<AtomicAlias>(input),
    AtomicAlias.SPOILERS,
);
