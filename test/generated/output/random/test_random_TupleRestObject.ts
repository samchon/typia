import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { TupleRestObject } from "../../../structures/TupleRestObject";

export const test_random_TupleRestObject = _test_random(
    "TupleRestObject",
    () =>
        ((
            generator?: Partial<typia.IRandomGenerator>,
        ): typia.Primitive<TupleRestObject> => {
            const $generator: any = (typia.random as any).generator;
            const $ro0: any = (
                _recursive: boolean = false,
                _depth: number = 0,
            ): any => ({
                value:
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            });
            return [
                (generator?.boolean ?? $generator.boolean)(),
                (generator?.customs ?? $generator.customs)?.number?.([]) ??
                    (generator?.number ?? $generator.number)(0, 100),
                $ro0(),
            ];
        })(),
    (input: any): typia.Primitive<TupleRestObject> => {
        const __is: any = (
            input: any,
        ): input is typia.Primitive<TupleRestObject> => {
            const $io0: any = (input: any): boolean =>
                "string" === typeof input.value;
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any) =>
                        null !== elem &&
                        undefined !== elem &&
                        (("number" === typeof elem && Number.isFinite(elem)) ||
                            "boolean" === typeof elem ||
                            ("object" === typeof elem &&
                                null !== elem &&
                                $io0(elem))),
                )
            );
        };
        const $guard: any = (typia.createAssert as any).guard;
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is typia.Primitive<TupleRestObject> => {
                const $ao0: any = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    "string" === typeof input.value ||
                    $guard(_exceptionable, {
                        path: _path + ".value",
                        expected: "string",
                        value: input.value,
                    });
                return (
                    (Array.isArray(input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "Array<number | boolean | IObject>",
                            value: input,
                        })) &&
                    input.every(
                        (elem: any, _index1: number) =>
                            (null !== elem ||
                                $guard(true, {
                                    path: _path + "[" + _index1 + "]",
                                    expected:
                                        "(TupleRestObject.IObject | boolean | number)",
                                    value: elem,
                                })) &&
                            (undefined !== elem ||
                                $guard(true, {
                                    path: _path + "[" + _index1 + "]",
                                    expected:
                                        "(TupleRestObject.IObject | boolean | number)",
                                    value: elem,
                                })) &&
                            (("number" === typeof elem &&
                                Number.isFinite(elem)) ||
                                "boolean" === typeof elem ||
                                ((("object" === typeof elem && null !== elem) ||
                                    $guard(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected:
                                            "(TupleRestObject.IObject | boolean | number)",
                                        value: elem,
                                    })) &&
                                    $ao0(
                                        elem,
                                        _path + "[" + _index1 + "]",
                                        true,
                                    ))),
                    )
                );
            })(input, "$input", true);
        return input;
    },
);
