import typia from "../../../../src";
import { _test_validateEquals } from "../../../internal/_test_validateEquals";
import { ToJsonAtomicUnion } from "../../../structures/ToJsonAtomicUnion";

export const test_validateEquals_ToJsonAtomicUnion = _test_validateEquals(
    "ToJsonAtomicUnion",
    ToJsonAtomicUnion.generate,
    (input) =>
        ((input: any): typia.IValidation<Array<ToJsonAtomicUnion.IToJson>> => {
            const errors = [] as any[];
            const $report = (typia.validateEquals as any).report(errors);
            const $join = (typia.validateEquals as any).join;
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is Array<ToJsonAtomicUnion.IToJson> => {
                const $vo0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    [
                        "function" === typeof input.toJSON ||
                            $report(_exceptionable, {
                                path: _path + ".toJSON",
                                expected: "unknown",
                                value: input.toJSON,
                            }),
                        1 === Object.keys(input).length ||
                            false === _exceptionable ||
                            Object.keys(input)
                                .map((key) => {
                                    if (["toJSON"].some((prop) => key === prop))
                                        return true;
                                    const value = input[key];
                                    if (undefined === value) return true;
                                    return $report(_exceptionable, {
                                        path: _path + $join(key),
                                        expected: "undefined",
                                        value: value,
                                    });
                                })
                                .every((flag: boolean) => flag),
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
                                            path: _path + "[" + _index1 + "]",
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
                        expected: "Array<Resolve<ToJsonAtomicUnion.IToJson>>",
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
        })(input),
);
