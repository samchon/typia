import typia from "../../../../src";
import { TagObjectUnion } from "../../../structures/TagObjectUnion";
import { _test_random } from "../../../internal/_test_random";
export const test_random_TagObjectUnion = _test_random("TagObjectUnion", () => ((generator?: Partial<typia.IRandomGenerator>): typia.Primitive<TagObjectUnion> => {
    const $generator = (typia.random as any).generator;
    const $pick = (typia.random as any).pick;
    const $ro0 = (_recursive: boolean = false, _depth: number = 0): any => ({
        value: (generator?.customs ?? $generator.customs)?.number?.([
            {
                name: "minimum",
                value: "3"
            }
        ]) ?? (generator?.number ?? $generator.number)(3, 13)
    });
    const $ro1 = (_recursive: boolean = false, _depth: number = 0): any => ({
        value: (generator?.customs ?? $generator.customs)?.string?.([
            {
                name: "minLength",
                value: "3"
            },
            {
                name: "maxLength",
                value: "7"
            }
        ]) ?? (generator?.string ?? $generator.string)((generator?.integer ?? $generator.integer)(3, 7))
    });
    return (generator?.array ?? $generator.array)(() => $pick([
        () => $ro1(),
        () => $ro0()
    ])());
})(), (input: any): typia.Primitive<TagObjectUnion> => {
    const __is = (input: any): input is typia.Primitive<TagObjectUnion> => {
        const $io0 = (input: any): boolean => "number" === typeof input.value && Number.isFinite(input.value) && 3 <= input.value;
        const $io1 = (input: any): boolean => "string" === typeof input.value && 3 <= input.value.length && 7 >= input.value.length;
        const $iu0 = (input: any): any => (() => {
            if ("string" === typeof input.value)
                return $io1(input);
            if ("number" === typeof input.value && Number.isFinite(input.value))
                return $io0(input);
            return false;
        })();
        return Array.isArray(input) && input.every((elem: any) => "object" === typeof elem && null !== elem && $iu0(elem));
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is typia.Primitive<TagObjectUnion> => {
            const $guard = (typia.createAssert as any).guard;
            const $ao0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => "number" === typeof input.value && Number.isFinite(input.value) && (3 <= input.value || $guard(_exceptionable, {
                path: _path + ".value",
                expected: "number (@minimum 3)",
                value: input.value
            })) || $guard(_exceptionable, {
                path: _path + ".value",
                expected: "number",
                value: input.value
            });
            const $ao1 = (input: any, _path: string, _exceptionable: boolean = true): boolean => "string" === typeof input.value && (3 <= input.value.length || $guard(_exceptionable, {
                path: _path + ".value",
                expected: "string (@minLength 3)",
                value: input.value
            })) && (7 >= input.value.length || $guard(_exceptionable, {
                path: _path + ".value",
                expected: "string (@maxLength 7)",
                value: input.value
            })) || $guard(_exceptionable, {
                path: _path + ".value",
                expected: "string",
                value: input.value
            });
            const $au0 = (input: any, _path: string, _exceptionable: boolean = true): any => (() => {
                if ("string" === typeof input.value)
                    return $ao1(input, _path, true && _exceptionable);
                if ("number" === typeof input.value)
                    return $ao0(input, _path, true && _exceptionable);
                return $guard(_exceptionable, {
                    path: _path,
                    expected: "(TagObjectUnion.Literal | TagObjectUnion.Numeric)",
                    value: input
                });
            })();
            return (Array.isArray(input) || $guard(true, {
                path: _path + "",
                expected: "TagObjectUnion",
                value: input
            })) && input.every((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $guard(true, {
                path: _path + "[" + _index1 + "]",
                expected: "(TagObjectUnion.Literal | TagObjectUnion.Numeric)",
                value: elem
            })) && $au0(elem, _path + "[" + _index1 + "]", true) || $guard(true, {
                path: _path + "[" + _index1 + "]",
                expected: "(TagObjectUnion.Literal | TagObjectUnion.Numeric)",
                value: elem
            })) || $guard(true, {
                path: _path + "",
                expected: "TagObjectUnion",
                value: input
            });
        })(input, "$input", true);
    return input;
});
