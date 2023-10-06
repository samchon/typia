import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_equals_TypeTagType = _test_equals("TypeTagType")<TypeTagType>(
    TypeTagType,
)((input) => typia.equals<TypeTagType>(input));
