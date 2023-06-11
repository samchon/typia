import typia from "../../../../src";
import { ArrayUnion } from "../../../structures/ArrayUnion";
import { _test_equals } from "../../../internal/_test_equals";
export const test_createEquals_ArrayUnion = _test_equals("ArrayUnion", ArrayUnion.generate, (input: any, _exceptionable: boolean = true): input is ArrayUnion => {
    const $ip0 = (input: any, _exceptionable: boolean = true) => {
        const array = input;
        const top = input[0];
        if (0 === input.length)
            return true;
        const arrayPredicators = [
            [
                (top: any): any => "string" === typeof top,
                (entire: any[]): any => entire.every((elem: any, _index5: number) => "string" === typeof elem)
            ],
            [
                (top: any): any => "boolean" === typeof top,
                (entire: any[]): any => entire.every((elem: any, _index6: number) => "boolean" === typeof elem)
            ],
            [
                (top: any): any => "number" === typeof top && Number.isFinite(top),
                (entire: any[]): any => entire.every((elem: any, _index7: number) => "number" === typeof elem && Number.isFinite(elem))
            ]
        ];
        const passed = arrayPredicators.filter((pred: any) => pred[0](top));
        if (1 === passed.length)
            return passed[0][1](array);
        else if (1 < passed.length)
            for (const pred of passed)
                if (array.every((value: any) => true === pred[0](value)))
                    return pred[1](array);
        return false;
    };
    return Array.isArray(input) && input.every((elem: any, _index1: number) => Array.isArray(elem) && ($ip0(elem, true && _exceptionable) || false));
});
