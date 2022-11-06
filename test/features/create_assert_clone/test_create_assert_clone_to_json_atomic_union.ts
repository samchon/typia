import TSON from "../../../src";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";
import { _test_assert_clone } from "./../assert_clone/_test_assert_clone";

export const test_create_assert_clone_to_json_atomic_union =
    _test_assert_clone(
        "toJSON() method returning atomic union type",
        ToJsonAtomicUnion.generate,
        TSON.createAssertClone<ToJsonAtomicUnion>(),
    );
