import TSON from "../../../src";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";
import { _test_assert_stringify } from "./../assert_stringify/_test_assert_stringify";

export const test_create_assert_stringify_to_json_atomic_union =
    _test_assert_stringify(
        "toJSON() method returning atomic union type",
        ToJsonAtomicUnion.generate,
        TSON.createAssertStringify<ToJsonAtomicUnion>(),
    );
