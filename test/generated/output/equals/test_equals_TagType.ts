import typia from "../../../../src";
import { TagType } from "../../../structures/TagType";
import { _test_equals } from "../../../internal/_test_equals";
export const test_equals_TagType = _test_equals("TagType", TagType.generate, (input) => ((input: any, _exceptionable: boolean = true): input is Array<TagType.Type> => {
    const $io0 = (input: any, _exceptionable: boolean = true): boolean => "number" === typeof input.int && Number.isFinite(input.int) && parseInt(input.int) === input.int && ("number" === typeof input.uint && Number.isFinite(input.uint) && parseInt(input.uint) === input.uint && 0 <= input.uint) && (2 === Object.keys(input).length || Object.keys(input).every((key: any) => {
        if (["int", "uint"].some((prop: any) => key === prop))
            return true;
        const value = input[key];
        if (undefined === value)
            return true;
        return false;
    }));
    return Array.isArray(input) && input.every((elem: any, _index1: number) => "object" === typeof elem && null !== elem && $io0(elem, true));
})(input));
