import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_is_DynamicConstant = _test_is(
    "DynamicConstant",
)<DynamicConstant>(DynamicConstant)((input) =>
    typia.is<DynamicConstant>(input),
);
