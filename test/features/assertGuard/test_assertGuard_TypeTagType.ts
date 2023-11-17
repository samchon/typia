import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_assertGuard_TypeTagType = _test_assertGuard(
    "TypeTagType",
)<TypeTagType>(TypeTagType)((input) => typia.assertGuard<TypeTagType>(input));
