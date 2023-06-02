import typia from "../../../../src";
import { _test_validateClone } from "../../../internal/_test_validateClone";
import { TagObjectUnion } from "../../../structures/TagObjectUnion";

export const test_validateClone_TagObjectUnion = _test_validateClone(
    "TagObjectUnion",
    TagObjectUnion.generate,
    (input) =>
        ((
            input: any,
        ): typia.IValidation<typia.Primitive<Array<TagObjectUnion.Type>>> => {
            const validate: any = (
                input: any,
            ): typia.IValidation<Array<TagObjectUnion.Type>> => {
                const __is: any = (
                    input: any,
                ): input is Array<TagObjectUnion.Type> => {
                    const $io0: any = (input: any): boolean =>
                        "number" === typeof input.value &&
                        Number.isFinite(input.value) &&
                        3 <= input.value;
                    const $io1: any = (input: any): boolean =>
                        "string" === typeof input.value &&
                        3 <= input.value.length &&
                        7 >= input.value.length;
                    const $iu0: any = (input: any): any =>
                        (() => {
                            if ("string" === typeof input.value)
                                return $io1(input);
                            if (
                                "number" === typeof input.value &&
                                Number.isFinite(input.value)
                            )
                                return $io0(input);
                            return false;
                        })();
                    return (
                        Array.isArray(input) &&
                        input.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $iu0(elem),
                        )
                    );
                };
                const errors: any = [] as any[];
                const $report: any = (typia.validateClone as any).report(
                    errors,
                );
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is Array<TagObjectUnion.Type> => {
                        const $vo0: any = (
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
                        const $vo1: any = (
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
                        const $vu0: any = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): any =>
                            (() => {
                                if ("string" === typeof input.value)
                                    return $vo1(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                if ("number" === typeof input.value)
                                    return $vo0(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
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
                                                    path:
                                                        _path +
                                                        "[" +
                                                        _index1 +
                                                        "]",
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
                                                path:
                                                    _path + "[" + _index1 + "]",
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
                const success: any = 0 === errors.length;
                return {
                    success,
                    errors,
                    data: success ? input : undefined,
                } as any;
            };
            const clone: any = (
                input: Array<TagObjectUnion.Type>,
            ): typia.Primitive<Array<TagObjectUnion.Type>> => {
                const $io0: any = (input: any): boolean =>
                    "number" === typeof input.value && 3 <= input.value;
                const $io1: any = (input: any): boolean =>
                    "string" === typeof input.value &&
                    3 <= input.value.length &&
                    7 >= input.value.length;
                const $throws: any = (typia.validateClone as any).throws;
                const $co0: any = (input: any): any => ({
                    value: input.value as any,
                });
                const $co1: any = (input: any): any => ({
                    value: input.value as any,
                });
                return Array.isArray(input)
                    ? (() =>
                          input.map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $cu0(elem)
                                  : (elem as any),
                          ))()
                    : (input as any);
            };
            const output: any = validate(input) as any;
            if (output.success) output.data = clone(input);
            return output;
        })(input),
    TagObjectUnion.SPOILERS,
);
