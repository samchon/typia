import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { TupleRestAtomic } from "../../../structures/TupleRestAtomic";

export const test_random_TupleRestAtomic = _test_random(
    "TupleRestAtomic",
    () =>
        ((
            generator?: Partial<typia.IRandomGenerator>,
        ): typia.Primitive<TupleRestAtomic> => {
            const $generator = (typia.random as any).generator;
            return [
                (generator?.boolean ?? $generator.boolean)(),
                (generator?.customs ?? $generator.customs)?.number?.([]) ??
                    (generator?.number ?? $generator.number)(0, 100),
                (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ];
        })(),
    (input: any): typia.Primitive<TupleRestAtomic> => {
        const __is = (
            input: any,
        ): input is typia.Primitive<TupleRestAtomic> => {
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any) =>
                        "string" === typeof elem ||
                        ("number" === typeof elem && Number.isFinite(elem)) ||
                        "boolean" === typeof elem,
                )
            );
        };
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is typia.Primitive<TupleRestAtomic> => {
                const $guard = (typia.createAssert as any).guard;
                return (
                    ((Array.isArray(input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "Array<string | number | boolean>",
                            value: input,
                        })) &&
                        input.every(
                            (elem: any, _index1: number) =>
                                "string" === typeof elem ||
                                ("number" === typeof elem &&
                                    Number.isFinite(elem)) ||
                                "boolean" === typeof elem ||
                                $guard(true, {
                                    path: _path + "[" + _index1 + "]",
                                    expected: "(boolean | number | string)",
                                    value: elem,
                                }),
                        )) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "Array<string | number | boolean>",
                        value: input,
                    })
                );
            })(input, "$input", true);
        return input;
    },
);
