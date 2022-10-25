import TSON from "../../../src";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";
import { _test_is_stringify } from "./../is_stringify/_test_is_stringify";

export const test_create_is_stringify_to_json_atomic_simple =
    _test_is_stringify(
        "toJSON() returning atomic value",
        ToJsonAtomicSimple.generate,
        TSON.createIsStringify<ToJsonAtomicSimple>(),
    );
