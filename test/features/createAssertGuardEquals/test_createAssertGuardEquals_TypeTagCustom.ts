import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_createAssertGuardEquals_TypeTagCustom =
    _test_assertGuardEquals("TypeTagCustom")<TypeTagCustom>(TypeTagCustom)(
        typia.createAssertGuardEquals<TypeTagCustom>(),
    );
