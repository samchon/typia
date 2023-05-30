import typia from "../../../../src";
import { _test_equals } from "../../../internal/_test_equals";
import { TagTuple } from "../../../structures/TagTuple";
export const test_createEquals_TagTuple = _test_equals("TagTuple", TagTuple.generate, (input: any, _exceptionable: boolean = true): input is TagTuple => {
    const $io0 = (input: any, _exceptionable: boolean = true): boolean => Array.isArray(input.tuple) && (input.tuple.length === 4 && ("string" === typeof input.tuple[0] && 3 <= input.tuple[0].length && 7 >= input.tuple[0].length) && ("number" === typeof input.tuple[1] && 3 <= input.tuple[1] && 7 >= input.tuple[1]) && (Array.isArray(input.tuple[2]) && 3 <= input.tuple[2].length && 7 >= input.tuple[2].length && input.tuple[2].every((elem: any, _index1: number) => "string" === typeof elem && 3 <= elem.length && 7 >= elem.length)) && (Array.isArray(input.tuple[3]) && 3 <= input.tuple[3].length && 7 >= input.tuple[3].length && input.tuple[3].every((elem: any, _index2: number) => "number" === typeof elem && 3 <= elem && 7 >= elem))) && (1 === Object.keys(input).length || Object.keys(input).every(key => {
        if (["tuple"].some(prop => key === prop))
            return true;
        const value = input[key];
        if (undefined === value)
            return true;
        return false;
    }));
    return "object" === typeof input && null !== input && $io0(input, true);
});
