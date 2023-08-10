import typia from "../../../../src";
import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { DynamicConstant } from "../../../structures/DynamicConstant";

export const test_json_isStringify_DynamicConstant =
    _test_json_isStringify<DynamicConstant>(DynamicConstant)((input) =>
        ((
            input: IPointer<{ a: number; b: number; c: number; d: number }>,
        ): string | null => {
            const is = (
                input: any,
            ): input is IPointer<{
                a: number;
                b: number;
                c: number;
                d: number;
            }> => {
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
            const stringify = (
                input: IPointer<{ a: number; b: number; c: number; d: number }>,
            ): string => {
                const $io1 = (input: any): boolean =>
                    "number" === typeof input.a &&
                    "number" === typeof input.b &&
                    "number" === typeof input.c &&
                    "number" === typeof input.d;
                const $number = (typia.json.isStringify as any).number;
                return `{"value":${`{"a":${$number(
                    ((input as any).value as any).a,
                )},"b":${$number(
                    ((input as any).value as any).b,
                )},"c":${$number(
                    ((input as any).value as any).c,
                )},"d":${$number(((input as any).value as any).d)}}`}}`;
            };
            return is(input) ? stringify(input) : null;
        })(input),
    );
