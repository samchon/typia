import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_assertEquals_TypeTagLength = _test_assertEquals(
    "TypeTagLength",
)<TypeTagLength>(TypeTagLength)((input) =>
    typia.assertEquals<TypeTagLength>(input),
);
