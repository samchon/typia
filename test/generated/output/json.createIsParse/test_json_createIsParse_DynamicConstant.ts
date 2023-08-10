import typia from "../../../../src";
import { _test_json_isParse } from "../../../internal/_test_json_isParse";
import { DynamicConstant } from "../../../structures/DynamicConstant";

export const test_json_isParse_DynamicConstant =
    _test_json_isParse<DynamicConstant>(DynamicConstant)(
        (input: any): typia.Primitive<DynamicConstant> => {
            const is = (input: any): input is DynamicConstant => {
                return (
                    "object" === typeof input &&
                    null !== input &&
                    "object" === typeof (input as any).value &&
                    null !== (input as any).value &&
                    "number" === typeof ((input as any).value as any).a &&
                    Number.isFinite(((input as any).value as any).a) &&
                    "number" === typeof ((input as any).value as any).b &&
                    Number.isFinite(((input as any).value as any).b) &&
                    "number" === typeof ((input as any).value as any).c &&
                    Number.isFinite(((input as any).value as any).c) &&
                    "number" === typeof ((input as any).value as any).d &&
                    Number.isFinite(((input as any).value as any).d)
                );
            };
            input = JSON.parse(input);
            return is(input) ? (input as any) : null;
        },
    );
