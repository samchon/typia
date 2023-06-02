import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { DynamicJsonValue } from "../../../structures/DynamicJsonValue";

export const test_random_DynamicJsonValue = _test_random(
    "DynamicJsonValue",
    () =>
        ((
            generator?: Partial<typia.IRandomGenerator>,
        ): typia.Primitive<DynamicJsonValue> => {
            const $generator: any = (typia.random as any).generator;
            const $pick: any = (typia.random as any).pick;
            const $ro0: any = (
                _recursive: boolean = false,
                _depth: number = 0,
            ): any => {
                const output: any = {} as any;
                (generator?.array ?? $generator.array)(
                    () =>
                        (output[
                            (
                                generator?.customs ?? $generator.customs
                            )?.string?.([]) ??
                                (generator?.string ?? $generator.string)()
                        ] = $pick([
                            () => undefined,
                            () => null,
                            () =>
                                (
                                    generator?.customs ?? $generator.customs
                                )?.string?.([]) ??
                                (generator?.string ?? $generator.string)(),
                            () =>
                                (
                                    generator?.customs ?? $generator.customs
                                )?.number?.([]) ??
                                (generator?.number ?? $generator.number)(
                                    0,
                                    100,
                                ),
                            () => (generator?.boolean ?? $generator.boolean)(),
                            () =>
                                $ra0(
                                    generator?.length ?? $generator.length,
                                    true,
                                    0,
                                ),
                            () =>
                                $ro0(
                                    _recursive,
                                    _recursive ? 1 + _depth : _depth,
                                ),
                        ])()),
                    (generator?.integer ?? $generator.integer)(0, 3),
                );
                return output;
            };
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
                                      (
                                          generator?.boolean ??
                                          $generator.boolean
                                      )(),
                                  () =>
                                      $ra0(
                                          generator?.length ??
                                              $generator.length,
                                          true,
                                          1 + _depth,
                                      ),
                                  () =>
                                      $ro0(
                                          true,
                                          _recursive ? 1 + _depth : _depth,
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
                () => (generator?.boolean ?? $generator.boolean)(),
                () => $ra0(generator?.length ?? $generator.length, true, 0),
                () => $ro0(),
            ])();
        })(),
    (input: any): typia.Primitive<DynamicJsonValue> => {
        const __is: any = (
            input: any,
        ): input is typia.Primitive<DynamicJsonValue> => {
            const $join: any = (typia.createAssert as any).join;
            const $io0: any = (input: any): boolean =>
                Object.keys(input).every((key: any) => {
                    const value: any = input[key];
                    if (undefined === value) return true;
                    if (RegExp(/(.*)/).test(key))
                        return (
                            null === value ||
                            undefined === value ||
                            "string" === typeof value ||
                            ("number" === typeof value &&
                                Number.isFinite(value)) ||
                            "boolean" === typeof value ||
                            (Array.isArray(value) && $ia0(value)) ||
                            ("object" === typeof value &&
                                null !== value &&
                                false === Array.isArray(value) &&
                                $io0(value))
                        );
                    return true;
                });
            const $ia0: any = (input: any): any =>
                input.every(
                    (elem: any) =>
                        undefined !== elem &&
                        (null === elem ||
                            "string" === typeof elem ||
                            ("number" === typeof elem &&
                                Number.isFinite(elem)) ||
                            "boolean" === typeof elem ||
                            (Array.isArray(elem) && $ia0(elem)) ||
                            ("object" === typeof elem &&
                                null !== elem &&
                                false === Array.isArray(elem) &&
                                $io0(elem))),
                );
            return (
                undefined !== input &&
                (null === input ||
                    "string" === typeof input ||
                    ("number" === typeof input && Number.isFinite(input)) ||
                    "boolean" === typeof input ||
                    (Array.isArray(input) && $ia0(input)) ||
                    ("object" === typeof input &&
                        null !== input &&
                        false === Array.isArray(input) &&
                        $io0(input)))
            );
        };
        const $guard: any = (typia.createAssert as any).guard;
        const $join: any = (typia.createAssert as any).join;
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is typia.Primitive<DynamicJsonValue> => {
                const $ao0: any = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    false === _exceptionable ||
                    Object.keys(input).every((key: any) => {
                        const value: any = input[key];
                        if (undefined === value) return true;
                        if (RegExp(/(.*)/).test(key))
                            return (
                                null === value ||
                                undefined === value ||
                                "string" === typeof value ||
                                ("number" === typeof value &&
                                    Number.isFinite(value)) ||
                                "boolean" === typeof value ||
                                (Array.isArray(value) &&
                                    $aa0(
                                        value,
                                        _path,
                                        true && _exceptionable,
                                    )) ||
                                ("object" === typeof value &&
                                    null !== value &&
                                    false === Array.isArray(value) &&
                                    $ao0(
                                        value,
                                        _path + $join(key),
                                        true && _exceptionable,
                                    ))
                            );
                        return true;
                    });
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
                                        "(DynamicJsonValue.JsonArray | DynamicJsonValue.JsonObject | boolean | null | number | string)",
                                    value: elem,
                                })) &&
                            (null === elem ||
                                "string" === typeof elem ||
                                ("number" === typeof elem &&
                                    Number.isFinite(elem)) ||
                                "boolean" === typeof elem ||
                                (Array.isArray(elem) &&
                                    $aa0(
                                        elem,
                                        _path,
                                        true && _exceptionable,
                                    )) ||
                                ("object" === typeof elem &&
                                    null !== elem &&
                                    false === Array.isArray(elem) &&
                                    $ao0(
                                        elem,
                                        _path + "[" + _index1 + "]",
                                        true && _exceptionable,
                                    ))),
                    );
                return (
                    (undefined !== input ||
                        $guard(true, {
                            path: _path + "",
                            expected:
                                "(DynamicJsonValue.JsonArray | DynamicJsonValue.JsonObject | boolean | null | number | string)",
                            value: input,
                        })) &&
                    (null === input ||
                        "string" === typeof input ||
                        ("number" === typeof input && Number.isFinite(input)) ||
                        "boolean" === typeof input ||
                        (Array.isArray(input) &&
                            $aa0(input, _path, true && _exceptionable)) ||
                        ("object" === typeof input &&
                            null !== input &&
                            false === Array.isArray(input) &&
                            $ao0(input, _path + "", true)))
                );
            })(input, "$input", true);
        return input;
    },
);
