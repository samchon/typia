import typia from "../../../../src";
import { _test_misc_isPrune } from "../../../internal/_test_misc_isPrune";
import { DynamicConstant } from "../../../structures/DynamicConstant";

export const test_misc_isPrune_DynamicConstant =
    _test_misc_isPrune<DynamicConstant>(DynamicConstant)((input) =>
        ((
            input: any,
        ): input is { a: number; b: number; c: number; d: number } => {
            const is = (
                input: any,
            ): input is { a: number; b: number; c: number; d: number } => {
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
            };
            const prune = (input: {
                a: number;
                b: number;
                c: number;
                d: number;
            }): void => {
                const $po0 = (input: any): any => {
                    for (const key of Object.keys(input)) {
                        if (
                            "a" === key ||
                            "b" === key ||
                            "c" === key ||
                            "d" === key
                        )
                            continue;
                        delete input[key];
                    }
                };
                if ("object" === typeof input && null !== input) $po0(input);
            };
            if (!is(input)) return false;
            prune(input);
            return true;
        })(input),
    );
