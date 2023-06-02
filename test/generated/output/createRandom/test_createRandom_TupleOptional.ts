import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { TupleOptional } from "../../../structures/TupleOptional";

export const test_createRandom_TupleOptional = _test_random(
    "TupleOptional",
    (
        generator?: Partial<typia.IRandomGenerator>,
    ): typia.Primitive<TupleOptional> => {
        const $generator: any = (typia.createRandom as any).generator;
        const $pick: any = (typia.createRandom as any).pick;
        return (generator?.array ?? $generator.array)(() => [
            (generator?.customs ?? $generator.customs)?.number?.([]) ??
                (generator?.number ?? $generator.number)(0, 100),
            (generator?.boolean ?? $generator.boolean)(),
            (generator?.customs ?? $generator.customs)?.string?.([]) ??
                (generator?.string ?? $generator.string)(),
            $pick([
                () => undefined,
                () => null,
                () =>
                    (generator?.customs ?? $generator.customs)?.number?.([]) ??
                    (generator?.number ?? $generator.number)(0, 100),
            ])(),
            $pick([
                () => undefined,
                () => null,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
        ]);
    },
    (input: any): typia.Primitive<TupleOptional> => {
        const __is: any = (
            input: any,
        ): input is typia.Primitive<TupleOptional> => {
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any) =>
                        Array.isArray(elem) &&
                        3 <= elem.length &&
                        5 >= elem.length &&
                        "number" === typeof elem[0] &&
                        Number.isFinite(elem[0]) &&
                        "boolean" === typeof elem[1] &&
                        "string" === typeof elem[2] &&
                        (null === elem[3] ||
                            undefined === elem[3] ||
                            ("number" === typeof elem[3] &&
                                Number.isFinite(elem[3]))) &&
                        (null === elem[4] ||
                            undefined === elem[4] ||
                            "string" === typeof elem[4]),
                )
            );
        };
        const $guard: any = (typia.createAssert as any).guard;
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is typia.Primitive<TupleOptional> => {
                return (
                    (Array.isArray(input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "TupleOptional",
                            value: input,
                        })) &&
                    input.every(
                        (elem: any, _index1: number) =>
                            (Array.isArray(elem) ||
                                $guard(true, {
                                    path: _path + "[" + _index1 + "]",
                                    expected:
                                        "[number, boolean, string, (number | null | undefined)?, (string | null | undefined)?]",
                                    value: elem,
                                })) &&
                            ((3 <= elem.length && 5 >= elem.length) ||
                                $guard(true, {
                                    path: _path + "[" + _index1 + "]",
                                    expected:
                                        "[number, boolean, string, (null | number | undefined), (null | string | undefined)]",
                                    value: elem,
                                })) &&
                            (("number" === typeof elem[0] &&
                                Number.isFinite(elem[0])) ||
                                $guard(true, {
                                    path: _path + "[" + _index1 + "][0]",
                                    expected: "number",
                                    value: elem[0],
                                })) &&
                            ("boolean" === typeof elem[1] ||
                                $guard(true, {
                                    path: _path + "[" + _index1 + "][1]",
                                    expected: "boolean",
                                    value: elem[1],
                                })) &&
                            ("string" === typeof elem[2] ||
                                $guard(true, {
                                    path: _path + "[" + _index1 + "][2]",
                                    expected: "string",
                                    value: elem[2],
                                })) &&
                            (null === elem[3] ||
                                undefined === elem[3] ||
                                ("number" === typeof elem[3] &&
                                    Number.isFinite(elem[3])) ||
                                $guard(true, {
                                    path: _path + "[" + _index1 + "][3]",
                                    expected: "(null | number | undefined)",
                                    value: elem[3],
                                })) &&
                            (null === elem[4] ||
                                undefined === elem[4] ||
                                "string" === typeof elem[4] ||
                                $guard(true, {
                                    path: _path + "[" + _index1 + "][4]",
                                    expected: "(null | string | undefined)",
                                    value: elem[4],
                                })),
                    )
                );
            })(input, "$input", true);
        return input;
    },
);
