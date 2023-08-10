import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";

export const test_equals_FunctionalTupleUnion =
    _test_equals<FunctionalTupleUnion>(FunctionalTupleUnion)(
        typia.createEquals<FunctionalTupleUnion>(),
    );
