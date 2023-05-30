import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { ObjectUnionNonPredictable } from "../../../structures/ObjectUnionNonPredictable";
export const test_createStringify_ObjectUnionNonPredictable = _test_stringify("ObjectUnionNonPredictable", ObjectUnionNonPredictable.generate, (input: ObjectUnionNonPredictable): string => {
    const $number = (typia.createStringify as any).number;
    const $string = (typia.createStringify as any).string;
    const $throws = (typia.createStringify as any).throws;
    const $io1 = (input: any): boolean => "object" === typeof input.value && null !== input.value && $iu0(input.value);
    const $io2 = (input: any): boolean => "object" === typeof input.value && null !== input.value && $io3(input.value);
    const $io3 = (input: any): boolean => "boolean" === typeof input.value;
    const $io4 = (input: any): boolean => "object" === typeof input.value && null !== input.value && $io5(input.value);
    const $io5 = (input: any): boolean => "number" === typeof input.value;
    const $io6 = (input: any): boolean => "object" === typeof input.value && null !== input.value && $io7(input.value);
    const $io7 = (input: any): boolean => "string" === typeof input.value;
    const $iu0 = (input: any): any => $io6(input) || $io4(input) || $io2(input);
    const $so0 = (input: any): any => `{"value":${$so1(input.value)}}`;
    const $so1 = (input: any): any => `{"value":${$su0(input.value)}}`;
    const $so2 = (input: any): any => `{"value":${`{"value":${input.value.value}}`}}`;
    const $so4 = (input: any): any => `{"value":${`{"value":${$number(input.value.value)}}`}}`;
    const $so6 = (input: any): any => `{"value":${`{"value":${$string(input.value.value)}}`}}`;
    const $su0 = (input: any): any => (() => {
        if ($io6(input))
            return $so6(input);
        if ($io4(input))
            return $so4(input);
        if ($io2(input))
            return $so2(input);
        $throws({
            expected: "(ObjectUnionNonPredictable.IWrapper<string> | ObjectUnionNonPredictable.IWrapper<number> | ObjectUnionNonPredictable.IWrapper<boolean>)",
            value: input
        });
    })();
    return `[${input.map((elem: any) => $so0(elem)).join(",")}]`;
});
