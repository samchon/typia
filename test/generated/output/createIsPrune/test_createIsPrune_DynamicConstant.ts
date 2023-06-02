import typia from "../../../../src";
import { _test_isPrune } from "../../../internal/_test_isPrune";
import { DynamicConstant } from "../../../structures/DynamicConstant";

export const test_createIsPrune_DynamicConstant = _test_isPrune(
    "DynamicConstant",
    DynamicConstant.generate,
    (input: any): input is DynamicConstant => {
        const is: any = (input: any): input is DynamicConstant => {
            const $io0: any = (input: any): boolean =>
                "number" === typeof input.a &&
                Number.isFinite(input.a) &&
                "number" === typeof input.b &&
                Number.isFinite(input.b) &&
                "number" === typeof input.c &&
                Number.isFinite(input.c) &&
                "number" === typeof input.d &&
                Number.isFinite(input.d);
            return "object" === typeof input && null !== input && $io0(input);
        };
        const prune: any = (input: DynamicConstant): void => {
            const $po0: any = (input: any): any => {
                for (const key: any of Object.keys(input)) {
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
    },
    DynamicConstant.SPOILERS,
);
