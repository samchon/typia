import TSON from "../../../src";
import { AtomicAlias } from "../../structures/AtomicAlias";
import { _test_isParse } from "../internal/_test_isParse";

export const test_isParse_AtomicAlias = _test_isParse(
    "AtomicAlias",
    AtomicAlias.generate,
    (input) => TSON.isParse<AtomicAlias>(input),
    AtomicAlias.SPOILERS,
);
