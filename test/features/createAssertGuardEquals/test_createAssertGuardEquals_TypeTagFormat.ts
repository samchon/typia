import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_createAssertGuardEquals_TypeTagFormat =
    _test_assertGuardEquals("TypeTagFormat")<TypeTagFormat>(TypeTagFormat)(
        typia.createAssertGuardEquals<TypeTagFormat>(),
    );
