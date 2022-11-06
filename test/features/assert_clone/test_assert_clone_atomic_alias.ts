import TSON from "../../../src";
import { AtomicAlias } from "../../structures/AtomicAlias";
import { _test_assert_clone } from "./_test_assert_clone";

export const test_assert_clone_atomic_alias = _test_assert_clone(
    "generic alias",
    AtomicAlias.generate,
    (input) => TSON.assertClone(input),
    AtomicAlias.SPOILERS,
);
