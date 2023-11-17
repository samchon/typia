import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_createAssertGuardEquals_DynamicUnion =
    _test_assertGuardEquals("DynamicUnion")<DynamicUnion>(DynamicUnion)(
        typia.createAssertGuardEquals<DynamicUnion>(),
    );
