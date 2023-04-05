import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { TupleRestObject } from "../../../structures/TupleRestObject";

export const test_random_TupleRestObject = _test_random(
    "TupleRestObject",
    () =>
        ((
            generator?: Partial<typia.IRandomGenerator>,
        ): typia.Primitive<TupleRestObject> => {
            const $generator = (typia.random as any).generator;
            const $ro0 = (
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
    (input: any): TupleRestObject => {
        const $guard = (typia.createAssert as any).guard;
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is TupleRestObject => {
            const $ao0 = (
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
                        expected:
                            "[boolean, number, ...Resolve<TupleRestObject.IObject>]",
                        value: input,
                    })) &&
                ("boolean" === typeof input[0] ||
                    $guard(true, {
                        path: _path + "[0]",
                        expected: "boolean",
                        value: input[0],
                    })) &&
                (("number" === typeof input[1] && Number.isFinite(input[1])) ||
                    $guard(true, {
                        path: _path + "[1]",
                        expected: "number",
                        value: input[1],
                    })) &&
                (Array.isArray(input.slice(2)) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "Array<Resolve<TupleRestObject.IObject>>",
                        value: input.slice(2),
                    })) &&
                input.slice(2).every(
                    (elem: any, _index1: number) =>
                        (("object" === typeof elem && null !== elem) ||
                            $guard(true, {
                                path: _path + "[" + (2 + _index1) + "]",
                                expected: "Resolve<TupleRestObject.IObject>",
                                value: elem,
                            })) &&
                        $ao0(elem, _path + "[" + (2 + _index1) + "]", true),
                )
            );
        })(input, "$input", true);
        return input;
    },
);
