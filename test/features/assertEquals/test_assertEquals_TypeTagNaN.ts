import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_assertEquals_TypeTagNaN = _test_assertEquals(
    "TypeTagNaN",
)<TypeTagNaN>(TypeTagNaN)((input) => typia.assertEquals<TypeTagNaN>(input));
