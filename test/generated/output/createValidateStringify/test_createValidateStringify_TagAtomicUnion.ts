import typia from "../../../../src";
import { _test_validateStringify } from "../../../internal/_test_validateStringify";
import { TagAtomicUnion } from "../../../structures/TagAtomicUnion";

export const test_createValidateStringify_TagAtomicUnion =
    _test_validateStringify(
        "TagAtomicUnion",
        TagAtomicUnion.generate,
        (input: TagAtomicUnion): typia.IValidation<string> => {
            const validate = (
                input: any,
            ): typia.IValidation<TagAtomicUnion> => {
                const errors = [] as any[];
                const $report = (typia.createValidateStringify as any).report(
                    errors,
                );
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is TagAtomicUnion => {
                    const $vo0 = (
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
                                    expected: "(number | string)",
                                    value: input.value,
                                }),
                        ].every((flag: boolean) => flag);
                    return (
                        ((Array.isArray(input) ||
                            $report(true, {
                                path: _path + "",
                                expected: "Array<Resolve<TagAtomicUnion.Type>>",
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
                                                    "Resolve<TagAtomicUnion.Type>",
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
                                                "Resolve<TagAtomicUnion.Type>",
                                            value: elem,
                                        }),
                                )
                                .every((flag: boolean) => flag)) ||
                        $report(true, {
                            path: _path + "",
                            expected: "Array<Resolve<TagAtomicUnion.Type>>",
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
            const stringify = (input: TagAtomicUnion): string => {
                const $string = (typia.createValidateStringify as any).string;
                const $number = (typia.createValidateStringify as any).number;
                const $throws = (typia.createValidateStringify as any).throws;
                const $so0 = (input: any): any =>
                    `{"value":${(() => {
                        if ("string" === typeof input.value)
                            return $string(input.value);
                        if ("number" === typeof input.value)
                            return $number(input.value);
                        $throws({
                            expected: "(number | string)",
                            value: input.value,
                        });
                    })()}}`;
                return `[${input.map((elem: any) => $so0(elem)).join(",")}]`;
            };
            const output = validate(input) as any;
            if (output.success) output.data = stringify(input);
            return output;
        },
        TagAtomicUnion.SPOILERS,
    );
