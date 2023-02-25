import typia from "../../../src";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";
import { _test_stringify } from "../internal/_test_stringify";
export const test_stringify_ObjectUnionNonPredictable = _test_stringify("ObjectUnionNonPredictable", ObjectUnionNonPredictable.generate, (input) => ((input: ObjectUnionNonPredictable): string => {
    const $number = (typia.stringify as any).number;
    const $string = (typia.stringify as any).string;
    const $throws = (typia.stringify as any).throws;
    const $io1 = (input: any) => "object" === typeof input.value && null !== input.value && $iu0(input.value);
    const $io2 = (input: any) => "object" === typeof input.value && null !== input.value && $io3(input.value);
    const $io3 = (input: any) => "boolean" === typeof input.value;
    const $io4 = (input: any) => "object" === typeof input.value && null !== input.value && $io5(input.value);
    const $io5 = (input: any) => "number" === typeof input.value;
    const $io6 = (input: any) => "object" === typeof input.value && null !== input.value && $io7(input.value);
    const $io7 = (input: any) => "string" === typeof input.value;
    const $iu0 = (input: any) => $io2(input) || $io4(input) || $io6(input);
    const $so0 = (input: any) => `{"value":${$so1(input.value)}}`;
    const $so1 = (input: any) => `{"value":${$su0(input.value)}}`;
    const $so2 = (input: any) => `{"value":${`{"value":${input.value.value}}`}}`;
    const $so4 = (input: any) => `{"value":${`{"value":${$number(input.value.value)}}`}}`;
    const $so6 = (input: any) => `{"value":${`{"value":${$string(input.value.value)}}`}}`;
    const $su0 = (input: any) => (() => {
        if ($io2(input))
            return $so2(input);
        if ($io4(input))
            return $so4(input);
        if ($io6(input))
            return $so6(input);
        $throws({
            expected: "(ObjectUnionNonPredictable.IWrapper<boolean> | ObjectUnionNonPredictable.IWrapper<number> | ObjectUnionNonPredictable.IWrapper<string>)",
            value: input
        });
    })();
    return `[${input.map((elem: any) => $so0(elem)).join(",")}]`;
})(input));
