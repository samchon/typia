import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_assertEquals_TypeTagType = _test_assertEquals(
    "TypeTagType",
)<TypeTagType>(TypeTagType)((input) => typia.assertEquals<TypeTagType>(input));
