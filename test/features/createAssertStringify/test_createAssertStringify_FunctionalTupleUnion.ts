import TSON from "../../../src";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_FunctionalTupleUnion =
    _test_assertStringify(
        "FunctionalTupleUnion",
        FunctionalTupleUnion.generate,
        TSON.createAssertStringify<FunctionalTupleUnion>(),
        FunctionalTupleUnion.SPOILERS,
    );
