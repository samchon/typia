import typia from "../../../src";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_createAssertEquals_TypeTagMatrix = _test_assertEquals(
    "TypeTagMatrix",
)<TypeTagMatrix>(
    TypeTagMatrix
)(typia.createAssertEquals<TypeTagMatrix>());
