import typia from "../../../src";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_createValidateEquals_TypeTagTuple = _test_validateEquals(
    "TypeTagTuple",
)<TypeTagTuple>(
    TypeTagTuple
)(typia.createValidateEquals<TypeTagTuple>());
