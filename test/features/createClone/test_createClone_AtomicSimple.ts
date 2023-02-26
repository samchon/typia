import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_createClone_AtomicSimple = _test_clone(
    "AtomicSimple",
    AtomicSimple.generate,
    typia.createClone<AtomicSimple>(),
);
