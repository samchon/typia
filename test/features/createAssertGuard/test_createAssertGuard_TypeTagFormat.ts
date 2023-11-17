import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_createAssertGuard_TypeTagFormat = _test_assertGuard(
    "TypeTagFormat",
)<TypeTagFormat>(TypeTagFormat)(typia.createAssertGuard<TypeTagFormat>());
