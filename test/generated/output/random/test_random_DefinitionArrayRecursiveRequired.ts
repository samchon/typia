import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { DefinitionArrayRecursiveRequired } from "../../../structures/DefinitionArrayRecursiveRequired";
export const test_random_DefinitionArrayRecursiveRequired = _test_random("DefinitionArrayRecursiveRequired", () => ((generator?: Partial<typia.IRandomGenerator>): typia.Primitive<DefinitionArrayRecursiveRequired> => {
    const $generator = (typia.random as any).generator;
    const $pick = (typia.random as any).pick;
    const $rd0 = (_recursive: boolean = true, _depth: number = 0): any => $pick([
        () => (generator?.customs ?? $generator.customs)?.string?.([]) ?? (generator?.string ?? $generator.string)(),
        () => (generator?.customs ?? $generator.customs)?.number?.([]) ?? (generator?.number ?? $generator.number)(0, 100),
        () => (generator?.array ?? $generator.array)(() => $rd0(true, _recursive ? 1 + _depth : _depth))
    ])();
    return $rd0();
})(), (input: any): typia.Primitive<DefinitionArrayRecursiveRequired> => {
    const $guard = (typia.createAssert as any).guard;
    const __is = (input: any): input is typia.Primitive<DefinitionArrayRecursiveRequired> => {
        const $id0 = (input: any): any => null !== input && undefined !== input && ("string" === typeof input || "number" === typeof input && Number.isFinite(input) || Array.isArray(input) && input.every((elem: any) => null !== elem && undefined !== elem && $id0(elem)));
        return null !== input && undefined !== input && ("string" === typeof input || "number" === typeof input && Number.isFinite(input) || Array.isArray(input) && input.every((elem: any) => null !== elem && undefined !== elem && $id0(elem)) || $id0(input));
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is typia.Primitive<DefinitionArrayRecursiveRequired> => {
            const $ad0 = (input: any, _path: string, _exceptionable: boolean = true): any => (null !== input || $guard(_exceptionable, {
                path: _path,
                expected: "(Array<DefinitionArrayRecursiveRequired> | number | string)",
                value: input
            })) && (undefined !== input || $guard(_exceptionable, {
                path: _path,
                expected: "(Array<DefinitionArrayRecursiveRequired> | number | string)",
                value: input
            })) && ("string" === typeof input || "number" === typeof input && Number.isFinite(input) || (Array.isArray(input) || $guard(_exceptionable, {
                path: _path,
                expected: "(Array<DefinitionArrayRecursiveRequired> | number | string)",
                value: input
            })) && input.every((elem: any, _index2: number) => (null !== elem || $guard(_exceptionable, {
                path: _path + "[" + _index2 + "]",
                expected: "DefinitionArrayRecursiveRequired",
                value: elem
            })) && (undefined !== elem || $guard(_exceptionable, {
                path: _path + "[" + _index2 + "]",
                expected: "DefinitionArrayRecursiveRequired",
                value: elem
            })) && $ad0(elem, _path + "[" + _index2 + "]", true && _exceptionable)));
            return (null !== input || $guard(true, {
                path: _path + "",
                expected: "(Array<DefinitionArrayRecursiveRequired> | DefinitionArrayRecursiveRequired | number | string)",
                value: input
            })) && (undefined !== input || $guard(true, {
                path: _path + "",
                expected: "(Array<DefinitionArrayRecursiveRequired> | DefinitionArrayRecursiveRequired | number | string)",
                value: input
            })) && ("string" === typeof input || "number" === typeof input && Number.isFinite(input) || (Array.isArray(input) || $guard(true, {
                path: _path + "",
                expected: "(Array<DefinitionArrayRecursiveRequired> | DefinitionArrayRecursiveRequired | number | string)",
                value: input
            })) && input.every((elem: any, _index1: number) => (null !== elem || $guard(true, {
                path: _path + "[" + _index1 + "]",
                expected: "DefinitionArrayRecursiveRequired",
                value: elem
            })) && (undefined !== elem || $guard(true, {
                path: _path + "[" + _index1 + "]",
                expected: "DefinitionArrayRecursiveRequired",
                value: elem
            })) && $ad0(elem, _path + "[" + _index1 + "]", true)) || $ad0(input, _path + "", true));
        })(input, "$input", true);
    return input;
});
