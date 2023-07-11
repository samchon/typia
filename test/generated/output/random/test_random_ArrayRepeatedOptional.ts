import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { ArrayRepeatedOptional } from "../../../structures/ArrayRepeatedOptional";

export const test_random_ArrayRepeatedOptional = _test_random(
    "ArrayRepeatedOptional",
    () =>
        ((
            generator?: Partial<typia.IRandomGenerator>,
        ): typia.Primitive<ArrayRepeatedOptional> => {
            const $generator = (typia.random as any).generator;
            const $pick = (typia.random as any).pick;
            const $ra0 = (
                length: number,
                _recursive: boolean = true,
                _depth: number = 0,
            ): any =>
                5 >= _depth
                    ? (generator?.array ?? $generator.array)(
                          () =>
                              $pick([
                                  () => undefined,
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
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
                () =>
                    (generator?.customs ?? $generator.customs)?.number?.([]) ??
                    (generator?.number ?? $generator.number)(0, 100),
                () => $ra0(generator?.length ?? $generator.length, true, 0),
            ])();
        })(),
    (input: any): typia.Primitive<ArrayRepeatedOptional> => {
        const __is = (
            input: any,
        ): input is typia.Primitive<ArrayRepeatedOptional> => {
            const $ia0 = (input: any): any =>
                input.every(
                    (elem: any) =>
                        null !== elem &&
                        (undefined === elem ||
                            "string" === typeof elem ||
                            ("number" === typeof elem &&
                                Number.isFinite(elem)) ||
                            (Array.isArray(elem) && ($ia0(elem) || false))),
                );
            return (
                null !== input &&
                (undefined === input ||
                    "string" === typeof input ||
                    ("number" === typeof input && Number.isFinite(input)) ||
                    (Array.isArray(input) && ($ia0(input) || false)))
            );
        };
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is typia.Primitive<ArrayRepeatedOptional> => {
                const $guard = (typia.createAssert as any).guard;
                const $aa0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): any =>
                    input.every(
                        (elem: any, _index1: number) =>
                            (null !== elem ||
                                $guard(_exceptionable, {
                                    path: _path + "[" + _index1 + "]",
                                    expected:
                                        "(Array<string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | ... 2 more ... | undefined)[] | undefined)[] | undefined)[] | undefined)[] | undefined)[] | undefined)[] | undefined)[] | undefined)[] | ...> | number | string | undefined)",
                                    value: elem,
                                })) &&
                            (undefined === elem ||
                                "string" === typeof elem ||
                                ("number" === typeof elem &&
                                    Number.isFinite(elem)) ||
                                ((Array.isArray(elem) ||
                                    $guard(_exceptionable, {
                                        path: _path + "[" + _index1 + "]",
                                        expected:
                                            "(Array<string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | ... 2 more ... | undefined)[] | undefined)[] | undefined)[] | undefined)[] | undefined)[] | undefined)[] | undefined)[] | undefined)[] | ...> | number | string | undefined)",
                                        value: elem,
                                    })) &&
                                    ($aa0(
                                        elem,
                                        _path + "[" + _index1 + "]",
                                        true && _exceptionable,
                                    ) ||
                                        $guard(_exceptionable, {
                                            path: _path + "[" + _index1 + "]",
                                            expected:
                                                "Array<string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | ... 2 more ... | undefined)[] | undefined)[] | undefined)[] | undefined)[] | undefined)[] | undefined)[] | undefined)[] | undefined)[] | ...>",
                                            value: elem,
                                        }))) ||
                                $guard(_exceptionable, {
                                    path: _path + "[" + _index1 + "]",
                                    expected:
                                        "(Array<string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | ... 2 more ... | undefined)[] | undefined)[] | undefined)[] | undefined)[] | undefined)[] | undefined)[] | undefined)[] | undefined)[] | ...> | number | string | undefined)",
                                    value: elem,
                                })),
                    );
                return (
                    (null !== input ||
                        $guard(true, {
                            path: _path + "",
                            expected:
                                "(Array<string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | ... 2 more ... | undefined)[] | undefined)[] | undefined)[] | undefined)[] | undefined)[] | undefined)[] | undefined)[] | undefined)[] | ...> | number | string | undefined)",
                            value: input,
                        })) &&
                    (undefined === input ||
                        "string" === typeof input ||
                        ("number" === typeof input && Number.isFinite(input)) ||
                        ((Array.isArray(input) ||
                            $guard(true, {
                                path: _path + "",
                                expected:
                                    "(Array<string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | ... 2 more ... | undefined)[] | undefined)[] | undefined)[] | undefined)[] | undefined)[] | undefined)[] | undefined)[] | undefined)[] | ...> | number | string | undefined)",
                                value: input,
                            })) &&
                            ($aa0(input, _path + "", true && _exceptionable) ||
                                $guard(_exceptionable, {
                                    path: _path + "",
                                    expected:
                                        "Array<string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | ... 2 more ... | undefined)[] | undefined)[] | undefined)[] | undefined)[] | undefined)[] | undefined)[] | undefined)[] | undefined)[] | ...>",
                                    value: input,
                                }))) ||
                        $guard(true, {
                            path: _path + "",
                            expected:
                                "(Array<string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | ... 2 more ... | undefined)[] | undefined)[] | undefined)[] | undefined)[] | undefined)[] | undefined)[] | undefined)[] | undefined)[] | ...> | number | string | undefined)",
                            value: input,
                        }))
                );
            })(input, "$input", true);
        return input;
    },
);
