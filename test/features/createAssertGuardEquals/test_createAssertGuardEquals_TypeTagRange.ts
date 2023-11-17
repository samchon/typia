import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_createAssertGuardEquals_TypeTagRange =
    _test_assertGuardEquals("TypeTagRange")<TypeTagRange>(TypeTagRange)(
        typia.createAssertGuardEquals<TypeTagRange>(),
    );
