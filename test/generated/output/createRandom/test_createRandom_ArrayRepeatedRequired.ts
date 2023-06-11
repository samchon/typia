import typia from "../../../../src";
import { ArrayRepeatedRequired } from "../../../structures/ArrayRepeatedRequired";
import { _test_random } from "../../../internal/_test_random";
export const test_createRandom_ArrayRepeatedRequired = _test_random("ArrayRepeatedRequired", (generator?: Partial<typia.IRandomGenerator>): typia.Primitive<ArrayRepeatedRequired> => {
    const $generator = (typia.createRandom as any).generator;
    const $pick = (typia.createRandom as any).pick;
    const $ra0 = (length: number, _recursive: boolean = true, _depth: number = 0): any => 5 >= _depth ? (generator?.array ?? $generator.array)(() => $pick([
        () => (generator?.customs ?? $generator.customs)?.string?.([]) ?? (generator?.string ?? $generator.string)(),
        () => (generator?.customs ?? $generator.customs)?.number?.([]) ?? (generator?.number ?? $generator.number)(0, 100),
        () => $ra0(generator?.length ?? $generator.length, true, 1 + _depth)
    ])(), length) : [];
    return $pick([
        () => (generator?.customs ?? $generator.customs)?.string?.([]) ?? (generator?.string ?? $generator.string)(),
        () => (generator?.customs ?? $generator.customs)?.number?.([]) ?? (generator?.number ?? $generator.number)(0, 100),
        () => $ra0(generator?.length ?? $generator.length, true, 0)
    ])();
}, (input: any): typia.Primitive<ArrayRepeatedRequired> => {
    const __is = (input: any): input is typia.Primitive<ArrayRepeatedRequired> => {
        const $ia0 = (input: any): any => input.every((elem: any) => null !== elem && undefined !== elem && ("string" === typeof elem || "number" === typeof elem && Number.isFinite(elem) || Array.isArray(elem) && ($ia0(elem) || false)));
        return null !== input && undefined !== input && ("string" === typeof input || "number" === typeof input && Number.isFinite(input) || Array.isArray(input) && ($ia0(input) || false));
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is typia.Primitive<ArrayRepeatedRequired> => {
            const $guard = (typia.createAssert as any).guard;
            const $aa0 = (input: any, _path: string, _exceptionable: boolean = true): any => input.every((elem: any, _index1: number) => (null !== elem || $guard(_exceptionable, {
                path: _path + "[" + _index1 + "]",
                expected: "(Array<string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | ... 1 more ... | (string | ... 1 more ... | (string | ... 1 more ... | ...)[])[])[])[])[])[])[])[])[])[])[]> | number | string)",
                value: elem
            })) && (undefined !== elem || $guard(_exceptionable, {
                path: _path + "[" + _index1 + "]",
                expected: "(Array<string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | ... 1 more ... | (string | ... 1 more ... | (string | ... 1 more ... | ...)[])[])[])[])[])[])[])[])[])[])[]> | number | string)",
                value: elem
            })) && ("string" === typeof elem || "number" === typeof elem && Number.isFinite(elem) || (Array.isArray(elem) || $guard(_exceptionable, {
                path: _path + "[" + _index1 + "]",
                expected: "(Array<string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | ... 1 more ... | (string | ... 1 more ... | (string | ... 1 more ... | ...)[])[])[])[])[])[])[])[])[])[])[]> | number | string)",
                value: elem
            })) && ($aa0(elem, _path + "[" + _index1 + "]", true && _exceptionable) || $guard(_exceptionable, {
                path: _path + "[" + _index1 + "]",
                expected: "Array<string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | ... 1 more ... | (string | ... 1 more ... | (string | ... 1 more ... | ...)[])[])[])[])[])[])[])[])[])[])[]>",
                value: elem
            })) || $guard(_exceptionable, {
                path: _path + "[" + _index1 + "]",
                expected: "(Array<string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | ... 1 more ... | (string | ... 1 more ... | (string | ... 1 more ... | ...)[])[])[])[])[])[])[])[])[])[])[]> | number | string)",
                value: elem
            })));
            return (null !== input || $guard(true, {
                path: _path + "",
                expected: "(Array<string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | ... 1 more ... | (string | ... 1 more ... | (string | ... 1 more ... | ...)[])[])[])[])[])[])[])[])[])[])[]> | number | string)",
                value: input
            })) && (undefined !== input || $guard(true, {
                path: _path + "",
                expected: "(Array<string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | ... 1 more ... | (string | ... 1 more ... | (string | ... 1 more ... | ...)[])[])[])[])[])[])[])[])[])[])[]> | number | string)",
                value: input
            })) && ("string" === typeof input || "number" === typeof input && Number.isFinite(input) || (Array.isArray(input) || $guard(true, {
                path: _path + "",
                expected: "(Array<string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | ... 1 more ... | (string | ... 1 more ... | (string | ... 1 more ... | ...)[])[])[])[])[])[])[])[])[])[])[]> | number | string)",
                value: input
            })) && ($aa0(input, _path + "", true && _exceptionable) || $guard(_exceptionable, {
                path: _path + "",
                expected: "Array<string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | ... 1 more ... | (string | ... 1 more ... | (string | ... 1 more ... | ...)[])[])[])[])[])[])[])[])[])[])[]>",
                value: input
            })) || $guard(true, {
                path: _path + "",
                expected: "(Array<string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | ... 1 more ... | (string | ... 1 more ... | (string | ... 1 more ... | ...)[])[])[])[])[])[])[])[])[])[])[]> | number | string)",
                value: input
            }));
        })(input, "$input", true);
    return input;
});
