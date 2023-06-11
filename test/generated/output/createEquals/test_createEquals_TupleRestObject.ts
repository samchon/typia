import typia from "../../../../src";
import { TupleRestObject } from "../../../structures/TupleRestObject";
import { _test_equals } from "../../../internal/_test_equals";
export const test_createEquals_TupleRestObject = _test_equals("TupleRestObject", TupleRestObject.generate, (input: any, _exceptionable: boolean = true): input is TupleRestObject => {
    const $io0 = (input: any, _exceptionable: boolean = true): boolean => "string" === typeof input.value && (1 === Object.keys(input).length || Object.keys(input).every((key: any) => {
        if (["value"].some((prop: any) => key === prop))
            return true;
        const value = input[key];
        if (undefined === value)
            return true;
        return false;
    }));
    return Array.isArray(input) && ("boolean" === typeof input[0] && ("number" === typeof input[1] && Number.isFinite(input[1])) && (Array.isArray(input.slice(2)) && input.slice(2).every((elem: any, _index1: number) => "object" === typeof elem && null !== elem && $io0(elem, true))));
});
