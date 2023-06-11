import typia from "../../../../src";
import { AtomicClass } from "../../../structures/AtomicClass";
import { _test_random } from "../../../internal/_test_random";
export const test_random_AtomicClass = _test_random("AtomicClass", () => ((generator?: Partial<typia.IRandomGenerator>): typia.Primitive<AtomicClass> => {
    const $generator = (typia.random as any).generator;
    const $pick = (typia.random as any).pick;
    return [
        (generator?.boolean ?? $generator.boolean)(),
        $pick([
            () => false,
            () => (generator?.boolean ?? $generator.boolean)()
        ])(),
        $pick([
            () => (generator?.boolean ?? $generator.boolean)(),
            () => (generator?.boolean ?? $generator.boolean)()
        ])(),
        (generator?.customs ?? $generator.customs)?.number?.([]) ?? (generator?.number ?? $generator.number)(0, 100),
        $pick([
            () => 1,
            () => (generator?.customs ?? $generator.customs)?.number?.([]) ?? (generator?.number ?? $generator.number)(0, 100)
        ])(),
        $pick([
            () => (generator?.customs ?? $generator.customs)?.number?.([]) ?? (generator?.number ?? $generator.number)(0, 100),
            () => (generator?.customs ?? $generator.customs)?.number?.([]) ?? (generator?.number ?? $generator.number)(0, 100)
        ])(),
        (generator?.customs ?? $generator.customs)?.string?.([]) ?? (generator?.string ?? $generator.string)(),
        $pick([
            () => "characters",
            () => (generator?.customs ?? $generator.customs)?.string?.([]) ?? (generator?.string ?? $generator.string)()
        ])(),
        $pick([
            () => (generator?.customs ?? $generator.customs)?.string?.([]) ?? (generator?.string ?? $generator.string)(),
            () => (generator?.customs ?? $generator.customs)?.string?.([]) ?? (generator?.string ?? $generator.string)()
        ])()
    ];
})(), (input: any): typia.Primitive<AtomicClass> => {
    const __is = (input: any): input is typia.Primitive<AtomicClass> => {
        return Array.isArray(input) && (input.length === 9 && "boolean" === typeof input[0] && "boolean" === typeof input[1] && "boolean" === typeof input[2] && ("number" === typeof input[3] && Number.isFinite(input[3])) && ("number" === typeof input[4] && Number.isFinite(input[4])) && ("number" === typeof input[5] && Number.isFinite(input[5])) && "string" === typeof input[6] && "string" === typeof input[7] && "string" === typeof input[8]);
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is typia.Primitive<AtomicClass> => {
            const $guard = (typia.createAssert as any).guard;
            return (Array.isArray(input) || $guard(true, {
                path: _path + "",
                expected: "[boolean, boolean, boolean, number, number, number, string, string, string]",
                value: input
            })) && ((input.length === 9 || $guard(true, {
                path: _path + "",
                expected: "[boolean, boolean, boolean, number, number, number, string, string, string]",
                value: input
            })) && ("boolean" === typeof input[0] || $guard(true, {
                path: _path + "[0]",
                expected: "boolean",
                value: input[0]
            })) && ("boolean" === typeof input[1] || $guard(true, {
                path: _path + "[1]",
                expected: "boolean",
                value: input[1]
            })) && ("boolean" === typeof input[2] || $guard(true, {
                path: _path + "[2]",
                expected: "boolean",
                value: input[2]
            })) && ("number" === typeof input[3] && Number.isFinite(input[3]) || $guard(true, {
                path: _path + "[3]",
                expected: "number",
                value: input[3]
            })) && ("number" === typeof input[4] && Number.isFinite(input[4]) || $guard(true, {
                path: _path + "[4]",
                expected: "number",
                value: input[4]
            })) && ("number" === typeof input[5] && Number.isFinite(input[5]) || $guard(true, {
                path: _path + "[5]",
                expected: "number",
                value: input[5]
            })) && ("string" === typeof input[6] || $guard(true, {
                path: _path + "[6]",
                expected: "string",
                value: input[6]
            })) && ("string" === typeof input[7] || $guard(true, {
                path: _path + "[7]",
                expected: "string",
                value: input[7]
            })) && ("string" === typeof input[8] || $guard(true, {
                path: _path + "[8]",
                expected: "string",
                value: input[8]
            }))) || $guard(true, {
                path: _path + "",
                expected: "[boolean, boolean, boolean, number, number, number, string, string, string]",
                value: input
            });
        })(input, "$input", true);
    return input;
});
