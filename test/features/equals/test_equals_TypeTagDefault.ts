import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_equals_TypeTagDefault = _test_equals(
    "TypeTagDefault",
)<TypeTagDefault>(TypeTagDefault)((input) =>
    typia.equals<TypeTagDefault>(input),
);
