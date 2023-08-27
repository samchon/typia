import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_is_TypeTagArray = _test_is("TypeTagArray")<TypeTagArray>(
    TypeTagArray,
)(typia.createIs<TypeTagArray>());
