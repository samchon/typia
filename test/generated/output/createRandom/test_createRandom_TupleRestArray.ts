import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { TupleRestArray } from "../../../structures/TupleRestArray";

export const test_createRandom_TupleRestArray = _test_random(
    "TupleRestArray",
    (
        generator?: Partial<typia.IRandomGenerator>,
    ): typia.Primitive<TupleRestArray> => {
        const $generator = (typia.createRandom as any).generator;
        return [
            (generator?.boolean ?? $generator.boolean)(),
            (generator?.customs ?? $generator.customs)?.number?.([]) ??
                (generator?.number ?? $generator.number)(0, 100),
            (generator?.array ?? $generator.array)(
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ),
        ];
    },
    (input: any): typia.Primitive<TupleRestArray> => {
        const $guard = (typia.createAssert as any).guard;
        const __is = (input: any): input is typia.Primitive<TupleRestArray> => {
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any) =>
                        null !== elem &&
                        undefined !== elem &&
                        (("number" === typeof elem && Number.isFinite(elem)) ||
                            "boolean" === typeof elem ||
                            (Array.isArray(elem) &&
                                elem.every(
                                    (elem: any) => "string" === typeof elem,
                                ))),
                )
            );
        };
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is typia.Primitive<TupleRestArray> => {
                return (
                    (Array.isArray(input) ||
                        $guard(true, {
                            path: _path + "",
                            expected:
                                "Array<(Array<string> | boolean | number)>",
                            value: input,
                        })) &&
                    input.every(
                        (elem: any, _index1: number) =>
                            (null !== elem ||
                                $guard(true, {
                                    path: _path + "[" + _index1 + "]",
                                    expected:
                                        "(Array<string> | boolean | number)",
                                    value: elem,
                                })) &&
                            (undefined !== elem ||
                                $guard(true, {
                                    path: _path + "[" + _index1 + "]",
                                    expected:
                                        "(Array<string> | boolean | number)",
                                    value: elem,
                                })) &&
                            (("number" === typeof elem &&
                                Number.isFinite(elem)) ||
                                "boolean" === typeof elem ||
                                ((Array.isArray(elem) ||
                                    $guard(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected:
                                            "(Array<string> | boolean | number)",
                                        value: elem,
                                    })) &&
                                    elem.every(
                                        (elem: any, _index2: number) =>
                                            "string" === typeof elem ||
                                            $guard(true, {
                                                path:
                                                    _path +
                                                    "[" +
                                                    _index1 +
                                                    "][" +
                                                    _index2 +
                                                    "]",
                                                expected: "string",
                                                value: elem,
                                            }),
                                    ))),
                    )
                );
            })(input, "$input", true);
        return input;
    },
);
