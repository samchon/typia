import typia from "../../../../src";
import { _test_validate } from "../../../internal/_test_validate";
import { TagObjectUnion } from "../../../structures/TagObjectUnion";

export const test_validate_TagObjectUnion = _test_validate(
    "TagObjectUnion",
)<TagObjectUnion>(TagObjectUnion)((input) =>
    ((input: any): typia.IValidation<TagObjectUnion> => {
        const errors = [] as any[];
        const __is = (input: any): input is TagObjectUnion => {
            const $io0 = (input: any): boolean =>
                "number" === typeof input.value &&
                Number.isFinite(input.value) &&
                3 <= input.value;
            const $io1 = (input: any): boolean =>
                "string" === typeof input.value &&
                3 <= input.value.length &&
                7 >= input.value.length;
            const $iu0 = (input: any): any =>
                (() => {
                    if ("string" === typeof input.value) return $io1(input);
                    else if (
                        "number" === typeof input.value &&
                        Number.isFinite(input.value)
                    )
                        return $io0(input);
                    else return false;
                })();
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $iu0(elem),
                )
            );
        };
        if (false === __is(input)) {
            const $report = (typia.validate as any).report(errors);
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is TagObjectUnion => {
                const $vo0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    [
                        ("number" === typeof input.value &&
                            Number.isFinite(input.value) &&
                            (3 <= input.value ||
                                $report(_exceptionable, {
                                    path: _path + ".value",
                                    expected: "number (@minimum 3)",
                                    value: input.value,
                                }))) ||
                            $report(_exceptionable, {
                                path: _path + ".value",
                                expected: "number",
                                value: input.value,
                            }),
                    ].every((flag: boolean) => flag);
                const $vo1 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    [
                        ("string" === typeof input.value &&
                            (3 <= input.value.length ||
                                $report(_exceptionable, {
                                    path: _path + ".value",
                                    expected: "string (@minLength 3)",
                                    value: input.value,
                                })) &&
                            (7 >= input.value.length ||
                                $report(_exceptionable, {
                                    path: _path + ".value",
                                    expected: "string (@maxLength 7)",
                                    value: input.value,
                                }))) ||
                            $report(_exceptionable, {
                                path: _path + ".value",
                                expected: "string",
                                value: input.value,
                            }),
                    ].every((flag: boolean) => flag);
                const $vu0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): any =>
                    (() => {
                        if ("string" === typeof input.value)
                            return $vo1(input, _path, true && _exceptionable);
                        else if ("number" === typeof input.value)
                            return $vo0(input, _path, true && _exceptionable);
                        else
                            return $report(_exceptionable, {
                                path: _path,
                                expected:
                                    "(TagObjectUnion.Literal | TagObjectUnion.Numeric)",
                                value: input,
                            });
                    })();
                return (
                    ((Array.isArray(input) ||
                        $report(true, {
                            path: _path + "",
                            expected: "TagObjectUnion",
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
                                                "(TagObjectUnion.Literal | TagObjectUnion.Numeric)",
                                            value: elem,
                                        })) &&
                                        $vu0(
                                            elem,
                                            _path + "[" + _index1 + "]",
                                            true,
                                        )) ||
                                    $report(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected:
                                            "(TagObjectUnion.Literal | TagObjectUnion.Numeric)",
                                        value: elem,
                                    }),
                            )
                            .every((flag: boolean) => flag)) ||
                    $report(true, {
                        path: _path + "",
                        expected: "TagObjectUnion",
                        value: input,
                    })
                );
            })(input, "$input", true);
        }
        const success = 0 === errors.length;
        return {
            success,
            errors,
            data: success ? input : undefined,
        } as any;
    })(input),
);
