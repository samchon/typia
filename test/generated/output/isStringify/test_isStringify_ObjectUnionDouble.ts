import typia from "../../../src";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";
import { _test_isStringify } from "../internal/_test_isStringify";
export const test_isStringify_ObjectUnionDouble = _test_isStringify("ObjectUnionDouble", ObjectUnionDouble.generate, (input) => ((input: ObjectUnionDouble): string | null => { const is = (input: any): input is ObjectUnionDouble => {
    const $io0 = (input: any) => "object" === typeof input.value && null !== input.value && ("number" === typeof input.value.x && !Number.isNaN(input.value.x)) && ("object" === typeof input.child && null !== input.child && $iu0(input.child));
    const $io2 = (input: any) => "object" === typeof input.value && null !== input.value && "boolean" === typeof input.value.y;
    const $io4 = (input: any) => "object" === typeof input.value && null !== input.value && ("number" === typeof input.value.y && !Number.isNaN(input.value.y));
    const $io6 = (input: any) => "object" === typeof input.value && null !== input.value && "string" === typeof input.value.x && ("object" === typeof input.child && null !== input.child && $iu1(input.child));
    const $io8 = (input: any) => "object" === typeof input.value && null !== input.value && "string" === typeof input.value.y;
    const $io10 = (input: any) => "object" === typeof input.value && null !== input.value && $io11(input.value);
    const $io11 = (input: any) => Array.isArray(input.y) && input.y.every((elem: any) => "number" === typeof elem && !Number.isNaN(elem));
    const $iu0 = (input: any) => (() => {
        if ($io2(input))
            return $io2(input);
        if ($io4(input))
            return $io4(input);
        return false;
    })();
    const $iu1 = (input: any) => (() => {
        if ($io8(input))
            return $io8(input);
        if ($io10(input))
            return $io10(input);
        return false;
    })();
    const $iu2 = (input: any) => (() => {
        if ($io0(input))
            return $io0(input);
        if ($io6(input))
            return $io6(input);
        return false;
    })();
    return Array.isArray(input) && input.every((elem: any) => "object" === typeof elem && null !== elem && $iu2(elem));
}; const stringify = (input: ObjectUnionDouble): string => {
    const $string = (typia.isStringify as any).string;
    const $throws = (typia.isStringify as any).throws;
    const $io0 = (input: any) => "object" === typeof input.value && null !== input.value && $io1(input.value) && ("object" === typeof input.child && null !== input.child && $iu0(input.child));
    const $io1 = (input: any) => "number" === typeof input.x;
    const $io2 = (input: any) => "object" === typeof input.value && null !== input.value && $io3(input.value);
    const $io3 = (input: any) => "boolean" === typeof input.y;
    const $io4 = (input: any) => "object" === typeof input.value && null !== input.value && $io5(input.value);
    const $io5 = (input: any) => "number" === typeof input.y;
    const $io6 = (input: any) => "object" === typeof input.value && null !== input.value && $io7(input.value) && ("object" === typeof input.child && null !== input.child && $iu1(input.child));
    const $io7 = (input: any) => "string" === typeof input.x;
    const $io8 = (input: any) => "object" === typeof input.value && null !== input.value && $io9(input.value);
    const $io9 = (input: any) => "string" === typeof input.y;
    const $io10 = (input: any) => "object" === typeof input.value && null !== input.value && $io11(input.value);
    const $io11 = (input: any) => Array.isArray(input.y) && input.y.every((elem: any) => "number" === typeof elem);
    const $iu0 = (input: any) => $io2(input) || $io4(input);
    const $iu1 = (input: any) => $io8(input) || $io10(input);
    const $iu2 = (input: any) => $io0(input) || $io6(input);
    const $so0 = (input: any) => `{"value":${`{"x":${input.value.x}}`},"child":${$su0(input.child)}}`;
    const $so2 = (input: any) => `{"value":${`{"y":${input.value.y}}`}}`;
    const $so4 = (input: any) => `{"value":${`{"y":${input.value.y}}`}}`;
    const $so6 = (input: any) => `{"value":${`{"x":${$string(input.value.x)}}`},"child":${$su1(input.child)}}`;
    const $so8 = (input: any) => `{"value":${`{"y":${$string(input.value.y)}}`}}`;
    const $so10 = (input: any) => `{"value":${$so11(input.value)}}`;
    const $so11 = (input: any) => `{"y":${`[${input.y.map((elem: any) => elem).join(",")}]`}}`;
    const $su0 = (input: any) => (() => {
        if ($io2(input))
            return $so2(input);
        if ($io4(input))
            return $so4(input);
        $throws({
            expected: "(ObjectUnionDouble.IAA | ObjectUnionDouble.IAB)",
            value: input
        });
    })();
    const $su1 = (input: any) => (() => {
        if ($io8(input))
            return $so8(input);
        if ($io10(input))
            return $so10(input);
        $throws({
            expected: "(ObjectUnionDouble.IBA | ObjectUnionDouble.IBB)",
            value: input
        });
    })();
    const $su2 = (input: any) => (() => {
        if ($io0(input))
            return $so0(input);
        if ($io6(input))
            return $so6(input);
        $throws({
            expected: "(ObjectUnionDouble.IA | ObjectUnionDouble.IB)",
            value: input
        });
    })();
    return `[${input.map((elem: any) => $su2(elem)).join(",")}]`;
}; return is(input) ? stringify(input) : null; })(input), ObjectUnionDouble.SPOILERS);
