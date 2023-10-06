import typia from "../../../src";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

export const test_createValidateEquals_TypeTagTypeUnion = _test_validateEquals(
    "TypeTagTypeUnion",
)<TypeTagTypeUnion>(
    TypeTagTypeUnion
)(typia.createValidateEquals<TypeTagTypeUnion>());
