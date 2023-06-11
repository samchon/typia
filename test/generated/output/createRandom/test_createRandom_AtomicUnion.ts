import typia from "../../../../src";
import { AtomicUnion } from "../../../structures/AtomicUnion";
import { _test_random } from "../../../internal/_test_random";
export const test_createRandom_AtomicUnion = _test_random("AtomicUnion", (generator?: Partial<typia.IRandomGenerator>): typia.Primitive<AtomicUnion> => {
    const $generator = (typia.createRandom as any).generator;
    const $pick = (typia.createRandom as any).pick;
    return (generator?.array ?? $generator.array)(() => $pick([
        () => null,
        () => (generator?.customs ?? $generator.customs)?.string?.([]) ?? (generator?.string ?? $generator.string)(),
        () => (generator?.customs ?? $generator.customs)?.number?.([]) ?? (generator?.number ?? $generator.number)(0, 100),
        () => (generator?.boolean ?? $generator.boolean)()
    ])());
}, (input: any): typia.Primitive<AtomicUnion> => {
    const __is = (input: any): input is typia.Primitive<AtomicUnion> => {
        return Array.isArray(input) && input.every((elem: any) => null === elem || "string" === typeof elem || "number" === typeof elem && Number.isFinite(elem) || "boolean" === typeof elem);
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is typia.Primitive<AtomicUnion> => {
            const $guard = (typia.createAssert as any).guard;
            return (Array.isArray(input) || $guard(true, {
                path: _path + "",
                expected: "AtomicUnion",
                value: input
            })) && input.every((elem: any, _index1: number) => null === elem || "string" === typeof elem || "number" === typeof elem && Number.isFinite(elem) || "boolean" === typeof elem || $guard(true, {
                path: _path + "[" + _index1 + "]",
                expected: "(boolean | null | number | string)",
                value: elem
            })) || $guard(true, {
                path: _path + "",
                expected: "AtomicUnion",
                value: input
            });
        })(input, "$input", true);
    return input;
});
