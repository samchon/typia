import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_validate_TypeTagArray = _test_validate(
    "TypeTagArray",
)<TypeTagArray>(TypeTagArray)((input) => typia.validate<TypeTagArray>(input));
