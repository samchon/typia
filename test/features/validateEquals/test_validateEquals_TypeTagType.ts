import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_validateEquals_TypeTagType = _test_validateEquals(
    "TypeTagType",
)<TypeTagType>(TypeTagType)((input) =>
    typia.validateEquals<TypeTagType>(input),
);
