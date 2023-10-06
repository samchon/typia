import typia from "../../../src";

import { _test_is } from "../../internal/_test_is";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_createIs_TypeTagLength = _test_is(
    "TypeTagLength",
)<TypeTagLength>(
    TypeTagLength
)(typia.createIs<TypeTagLength>());
