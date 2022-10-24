import TSON from "../../../src";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";
import { _test_assert_stringify } from "./../assert_stringify/_test_assert_stringify";

export const test_create_assert_stringify_to_json_atomic_simple =
    _test_assert_stringify(
        "toJSON() returning atomic value",
        ToJsonAtomicSimple.generate,
        TSON.createAssertStringify<ToJsonAtomicSimple>(),
    );
