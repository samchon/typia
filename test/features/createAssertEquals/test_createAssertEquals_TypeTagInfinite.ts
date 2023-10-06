import typia from "../../../src";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_createAssertEquals_TypeTagInfinite = _test_assertEquals(
    "TypeTagInfinite",
)<TypeTagInfinite>(
    TypeTagInfinite
)(typia.createAssertEquals<TypeTagInfinite>());
