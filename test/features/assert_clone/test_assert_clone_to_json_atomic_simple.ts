import TSON from "../../../src";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";
import { _test_assert_clone } from "./_test_assert_clone";

export const test_assert_clone_to_json_atomic_simple =
    _test_assert_clone(
        "toJSON() returning atomic value",
        ToJsonAtomicSimple.generate,
        (input) => TSON.assertClone(input),
    );
