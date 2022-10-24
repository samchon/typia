import TSON from "../../../src";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";
import { _test_assert_stringify } from "./_test_assert_stringify";

export const test_assert_stringify_to_json_atomic_union =
    _test_assert_stringify(
        "toJSON() method returning atomic union type",
        ToJsonAtomicUnion.generate,
        (input) => TSON.assertStringify(input),
    );
