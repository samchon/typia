import typia from "../../../src";
import { DynamicConstant } from "../../structures/DynamicConstant";
import { _test_stringify } from "../internal/_test_stringify";

export const test_createStringify_DynamicConstant = _test_stringify(
    "DynamicConstant",
    DynamicConstant.generate,
    typia.createStringify<DynamicConstant>(),
);
