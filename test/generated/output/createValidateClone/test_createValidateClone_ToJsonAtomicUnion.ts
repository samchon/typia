import typia from "../../../../src";
import { _test_validateClone } from "../../../internal/_test_validateClone";
import { ToJsonAtomicUnion } from "../../../structures/ToJsonAtomicUnion";

export const test_createValidateClone_ToJsonAtomicUnion = _test_validateClone(
    "ToJsonAtomicUnion",
    ToJsonAtomicUnion.generate,
    (input: any): typia.IValidation<typia.Primitive<ToJsonAtomicUnion>> => {
        const validate = (input: any): typia.IValidation<ToJsonAtomicUnion> => {
            const __is = (input: any): input is ToJsonAtomicUnion => {
                const $io0 = (input: any): boolean => true;
                return (
                    Array.isArray(input) &&
                    input.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io0(elem),
                    )
                );
            };
            const errors = [] as any[];
            const $report = (typia.createValidateClone as any).report(errors);
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ToJsonAtomicUnion => {
                    const $vo0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            true ||
                                $report(_exceptionable, {
                                    path: _path + ".toJSON",
                                    expected: "unknown",
                                    value: input.toJSON,
                                }),
                        ].every((flag: boolean) => flag);
                    return (
                        ((Array.isArray(input) ||
                            $report(true, {
                                path: _path + "",
                                expected:
                                    "Array<Resolve<ToJsonAtomicUnion.IToJson>>",
                                value: input,
                            })) &&
                            input
                                .map(
                                    (elem: any, _index1: number) =>
                                        ((("object" === typeof elem &&
                                            null !== elem) ||
                                            $report(true, {
                                                path:
                                                    _path + "[" + _index1 + "]",
                                                expected:
                                                    "Resolve<ToJsonAtomicUnion.IToJson>",
                                                value: elem,
                                            })) &&
                                            $vo0(
                                                elem,
                                                _path + "[" + _index1 + "]",
                                                true,
                                            )) ||
                                        $report(true, {
                                            path: _path + "[" + _index1 + "]",
                                            expected:
                                                "Resolve<ToJsonAtomicUnion.IToJson>",
                                            value: elem,
                                        }),
                                )
                                .every((flag: boolean) => flag)) ||
                        $report(true, {
                            path: _path + "",
                            expected:
                                "Array<Resolve<ToJsonAtomicUnion.IToJson>>",
                            value: input,
                        })
                    );
                })(input, "$input", true);
            const success = 0 === errors.length;
            return {
                success,
                errors,
                data: success ? input : undefined,
            } as any;
        };
        const clone = (
            input: ToJsonAtomicUnion,
        ): typia.Primitive<ToJsonAtomicUnion> => {
            return Array.isArray(input)
                ? input.map((elem: any) =>
                      "object" === typeof elem &&
                      null !== elem &&
                      "function" === typeof elem.toJSON
                          ? (elem.toJSON() as any)
                          : (elem as any),
                  )
                : (input as any);
        };
        const output = validate(input) as any;
        if (output.success) output.data = clone(input);
        return output;
    },
);
