import typia from "../../../src";
import { DynamicConstant } from "../../structures/DynamicConstant";
import { _test_isPrune } from "../internal/_test_isPrune";
export const test_isPrune_DynamicConstant = _test_isPrune("DynamicConstant", DynamicConstant.generate, (input) => ((input: any): input is DynamicConstant => { const is = (input: any): input is DynamicConstant => {
    const $io0 = (input: any) => "number" === typeof input.a && "number" === typeof input.b && "number" === typeof input.c && "number" === typeof input.d;
    return "object" === typeof input && null !== input && $io0(input);
}; const prune = (input: DynamicConstant): void => {
    const $po0 = (input: any) => {
        for (const key of Object.keys(input)) {
            if ("a" === key || "b" === key || "c" === key || "d" === key)
                continue;
            delete input[key];
        }
    };
    if ("object" === typeof input && null !== input)
        $po0(input);
}; if (!is(input))
    return false; prune(input); return true; })(input), DynamicConstant.SPOILERS);
