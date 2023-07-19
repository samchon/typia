import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { DynamicConstant } from "../../../structures/DynamicConstant";

export const test_is_DynamicConstant = _test_is<DynamicConstant>(
    DynamicConstant,
)((input: any): input is DynamicConstant => {
    return (
        "object" === typeof input &&
        null !== input &&
        "number" === typeof (input as any).a &&
        Number.isFinite((input as any).a) &&
        "number" === typeof (input as any).b &&
        Number.isFinite((input as any).b) &&
        "number" === typeof (input as any).c &&
        Number.isFinite((input as any).c) &&
        "number" === typeof (input as any).d &&
        Number.isFinite((input as any).d)
    );
});
