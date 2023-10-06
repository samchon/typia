import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_misc_isClone_TypeTagDefault = _test_misc_isClone(
    "TypeTagDefault",
)<TypeTagDefault>(TypeTagDefault)((input) =>
    typia.misc.isClone<TypeTagDefault>(input),
);
