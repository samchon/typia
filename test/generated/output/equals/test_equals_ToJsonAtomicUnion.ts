import typia from "../../../src";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";
import { _test_equals } from "../internal/_test_equals";
export const test_equals_ToJsonAtomicUnion = _test_equals("ToJsonAtomicUnion", ToJsonAtomicUnion.generate, (input) => ((input: any, _exceptionable: boolean): input is ToJsonAtomicUnion => {
    const $io0 = (input: any, _exceptionable: boolean) => true && (1 === Object.keys(input).length || Object.keys(input).every(key => {
        if (["toJSON"].some(prop => key === prop))
            return true;
        const value = input[key];
        if (undefined === value)
            return true;
        return false;
    }));
    return Array.isArray(input) && input.every((elem: any, _index1: number) => "object" === typeof elem && null !== elem && $io0(elem, true));
})(input));
