import typia from "../../../src";

import { _test_is } from "../../internal/_test_is";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_createIs_TypeTagRange = _test_is(
    "TypeTagRange",
)<TypeTagRange>(
    TypeTagRange
)(typia.createIs<TypeTagRange>());
