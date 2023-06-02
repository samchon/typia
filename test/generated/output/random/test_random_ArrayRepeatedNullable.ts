import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { ArrayRepeatedNullable } from "../../../structures/ArrayRepeatedNullable";

export const test_random_ArrayRepeatedNullable = _test_random(
    "ArrayRepeatedNullable",
    () =>
        ((
            generator?: Partial<typia.IRandomGenerator>,
        ): typia.Primitive<ArrayRepeatedNullable> => {
            const $generator: any = (typia.random as any).generator;
            const $pick: any = (typia.random as any).pick;
            const $ra0: any = (
                length: number,
                _recursive: boolean = true,
                _depth: number = 0,
            ): any =>
                5 >= _depth
                    ? (generator?.array ?? $generator.array)(
                          () =>
                              $pick([
                                  () => null,
                                  () =>
                                      (
                                          generator?.customs ??
                                          $generator.customs
                                      )?.string?.([]) ??
                                      (
                                          generator?.string ?? $generator.string
                                      )(),
                                  () =>
                                      (
                                          generator?.customs ??
                                          $generator.customs
                                      )?.number?.([]) ??
                                      (generator?.number ?? $generator.number)(
                                          0,
                                          100,
                                      ),
                                  () =>
                                      $ra0(
                                          generator?.length ??
                                              $generator.length,
                                          true,
                                          1 + _depth,
                                      ),
                              ])(),
                          length,
                      )
                    : [];
            return $pick([
                () => null,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
                () =>
                    (generator?.customs ?? $generator.customs)?.number?.([]) ??
                    (generator?.number ?? $generator.number)(0, 100),
                () => $ra0(generator?.length ?? $generator.length, true, 0),
            ])();
        })(),
    (input: any): typia.Primitive<ArrayRepeatedNullable> => {
        const __is: any = (
            input: any,
        ): input is typia.Primitive<ArrayRepeatedNullable> => {
            const $ia0: any = (input: any): any =>
                input.every(
                    (elem: any) =>
                        undefined !== elem &&
                        (null === elem ||
                            "string" === typeof elem ||
                            ("number" === typeof elem &&
                                Number.isFinite(elem)) ||
                            (Array.isArray(elem) && $ia0(elem))),
                );
            return (
                undefined !== input &&
                (null === input ||
                    "string" === typeof input ||
                    ("number" === typeof input && Number.isFinite(input)) ||
                    (Array.isArray(input) && $ia0(input)))
            );
        };
        const $guard: any = (typia.createAssert as any).guard;
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is typia.Primitive<ArrayRepeatedNullable> => {
                const $aa0: any = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): any =>
                    input.every(
                        (elem: any, _index1: number) =>
                            (undefined !== elem ||
                                $guard(_exceptionable, {
                                    path: _path + "[" + _index1 + "]",
                                    expected:
                                        "(Array<ArrayRepeatedNullable> | null | number | string)",
                                    value: elem,
                                })) &&
                            (null === elem ||
                                "string" === typeof elem ||
                                ("number" === typeof elem &&
                                    Number.isFinite(elem)) ||
                                ((Array.isArray(elem) ||
                                    $guard(_exceptionable, {
                                        path: _path + "[" + _index1 + "]",
                                        expected:
                                            "(Array<ArrayRepeatedNullable> | null | number | string)",
                                        value: elem,
                                    })) &&
                                    $aa0(elem, _path, true && _exceptionable))),
                    );
                return (
                    (undefined !== input ||
                        $guard(true, {
                            path: _path + "",
                            expected:
                                "(Array<ArrayRepeatedNullable> | null | number | string)",
                            value: input,
                        })) &&
                    (null === input ||
                        "string" === typeof input ||
                        ("number" === typeof input && Number.isFinite(input)) ||
                        ((Array.isArray(input) ||
                            $guard(true, {
                                path: _path + "",
                                expected:
                                    "(Array<ArrayRepeatedNullable> | null | number | string)",
                                value: input,
                            })) &&
                            $aa0(input, _path, true && _exceptionable)))
                );
            })(input, "$input", true);
        return input;
    },
);
