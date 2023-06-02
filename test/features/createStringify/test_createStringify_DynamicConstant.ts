import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_createStringify_DynamicConstant = _test_stringify(
    "DynamicConstant",
    DynamicConstant.generate,
    typia.createStringify<DynamicConstant>(),
);
