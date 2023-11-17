import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_createAssertGuardEquals_TypeTagPattern =
    _test_assertGuardEquals("TypeTagPattern")<TypeTagPattern>(TypeTagPattern)(
        typia.createAssertGuardEquals<TypeTagPattern>(),
    );
