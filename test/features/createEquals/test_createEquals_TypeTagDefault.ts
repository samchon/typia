import typia from "../../../src";

import { _test_equals } from "../../internal/_test_equals";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_createEquals_TypeTagDefault = _test_equals(
    "TypeTagDefault",
)<TypeTagDefault>(
    TypeTagDefault
)(typia.createEquals<TypeTagDefault>());
