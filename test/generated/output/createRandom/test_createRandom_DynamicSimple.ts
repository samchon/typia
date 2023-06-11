import typia from "../../../../src";
import { DynamicSimple } from "../../../structures/DynamicSimple";
import { _test_random } from "../../../internal/_test_random";
export const test_createRandom_DynamicSimple = _test_random("DynamicSimple", (generator?: Partial<typia.IRandomGenerator>): typia.Primitive<DynamicSimple> => {
    const $generator = (typia.createRandom as any).generator;
    const $ro0 = (_recursive: boolean = false, _depth: number = 0): any => {
        const output = {} as any;
        (generator?.array ?? $generator.array)(() => output[(generator?.customs ?? $generator.customs)?.string?.([]) ?? (generator?.string ?? $generator.string)()] = (generator?.customs ?? $generator.customs)?.number?.([]) ?? (generator?.number ?? $generator.number)(0, 100), (generator?.integer ?? $generator.integer)(0, 3));
        return output;
    };
    return $ro0();
}, (input: any): typia.Primitive<DynamicSimple> => {
    const __is = (input: any): input is typia.Primitive<DynamicSimple> => {
        const $join = (typia.createAssert as any).join;
        const $io0 = (input: any): boolean => Object.keys(input).every((key: any) => {
            const value = input[key];
            if (undefined === value)
                return true;
            if (RegExp(/(.*)/).test(key))
                return "number" === typeof value && Number.isFinite(value);
            return true;
        });
        return "object" === typeof input && null !== input && false === Array.isArray(input) && $io0(input);
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is typia.Primitive<DynamicSimple> => {
            const $guard = (typia.createAssert as any).guard;
            const $join = (typia.createAssert as any).join;
            const $ao0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => false === _exceptionable || Object.keys(input).every((key: any) => {
                const value = input[key];
                if (undefined === value)
                    return true;
                if (RegExp(/(.*)/).test(key))
                    return "number" === typeof value && Number.isFinite(value) || $guard(_exceptionable, {
                        path: _path + $join(key),
                        expected: "number",
                        value: value
                    });
                return true;
            });
            return ("object" === typeof input && null !== input && false === Array.isArray(input) || $guard(true, {
                path: _path + "",
                expected: "DynamicSimple",
                value: input
            })) && $ao0(input, _path + "", true) || $guard(true, {
                path: _path + "",
                expected: "DynamicSimple",
                value: input
            });
        })(input, "$input", true);
    return input;
});
