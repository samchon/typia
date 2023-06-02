import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_createIsParse_AtomicSimple = _test_isParse(
    "AtomicSimple",
    AtomicSimple.generate,
    typia.createIsParse<AtomicSimple>(),
    AtomicSimple.SPOILERS,
);
