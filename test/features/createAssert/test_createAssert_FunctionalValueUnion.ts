import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

export const test_assert_FunctionalValueUnion =
    _test_assert<FunctionalValueUnion>(FunctionalValueUnion)(
        typia.createAssert<FunctionalValueUnion>(),
    );
