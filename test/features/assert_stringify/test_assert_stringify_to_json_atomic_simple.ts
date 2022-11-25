import TSON from "../../../src";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";
import { _test_assert_stringify } from "../internal/_test_assert_stringify";

export const test_assert_stringify_to_json_atomic_simple =
    _test_assert_stringify(
        "toJSON() returning atomic value",
        ToJsonAtomicSimple.generate,
        (input) => TSON.assertStringify(input),
    );
