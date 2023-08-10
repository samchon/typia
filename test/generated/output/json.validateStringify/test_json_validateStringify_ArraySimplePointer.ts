import typia from "../../../../src";
import { _test_json_validateStringify } from "../../../internal/_test_json_validateStringify";
import { ArraySimplePointer } from "../../../structures/ArraySimplePointer";

export const test_json_validateStringify_ArraySimplePointer =
    _test_json_validateStringify<ArraySimplePointer>(ArraySimplePointer)(
        (input) =>
            ((input: ArraySimplePointer): typia.IValidation<string> => {
                const validate = (
                    input: any,
                ): typia.IValidation<ArraySimplePointer> => {
                    const errors = [] as any[];
                    const __is = (input: any): input is ArraySimplePointer => {
                        const $io0 = (input: any): boolean =>
                            Array.isArray(input.value) &&
                            input.value.every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io1(elem),
                            );
                        const $io1 = (input: any): boolean =>
                            "string" === typeof input.name &&
                            "string" === typeof input.email &&
                            Array.isArray(input.hobbies) &&
                            input.hobbies.every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io2(elem),
                            );
                        const $io2 = (input: any): boolean =>
                            "string" === typeof input.name &&
                            "string" === typeof input.body &&
                            "number" === typeof input.rank &&
                            Number.isFinite(input.rank);
                        return (
                            "object" === typeof input &&
                            null !== input &&
                            $io0(input)
                        );
                    };
                    if (false === __is(input)) {
                        const $report = (
                            typia.json.validateStringify as any
                        ).report(errors);
                        ((
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): input is ArraySimplePointer => {
                            const $vo0 = (
                                input: any,
                                _path: string,
                                _exceptionable: boolean = true,
                            ): boolean =>
                                [
                                    ((Array.isArray(input.value) ||
                                        $report(_exceptionable, {
                                            path: _path + ".value",
                                            expected:
                                                "Array<ArraySimplePointer.IPerson>",
                                            value: input.value,
                                        })) &&
                                        input.value
                                            .map(
                                                (elem: any, _index1: number) =>
                                                    ((("object" ===
                                                        typeof elem &&
                                                        null !== elem) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    ".value[" +
                                                                    _index1 +
                                                                    "]",
                                                                expected:
                                                                    "ArraySimplePointer.IPerson",
                                                                value: elem,
                                                            },
                                                        )) &&
                                                        $vo1(
                                                            elem,
                                                            _path +
                                                                ".value[" +
                                                                _index1 +
                                                                "]",
                                                            true &&
                                                                _exceptionable,
                                                        )) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".value[" +
                                                            _index1 +
                                                            "]",
                                                        expected:
                                                            "ArraySimplePointer.IPerson",
                                                        value: elem,
                                                    }),
                                            )
                                            .every((flag: boolean) => flag)) ||
                                        $report(_exceptionable, {
                                            path: _path + ".value",
                                            expected:
                                                "Array<ArraySimplePointer.IPerson>",
                                            value: input.value,
                                        }),
                                ].every((flag: boolean) => flag);
                            const $vo1 = (
                                input: any,
                                _path: string,
                                _exceptionable: boolean = true,
                            ): boolean =>
                                [
                                    "string" === typeof input.name ||
                                        $report(_exceptionable, {
                                            path: _path + ".name",
                                            expected: "string",
                                            value: input.name,
                                        }),
                                    "string" === typeof input.email ||
                                        $report(_exceptionable, {
                                            path: _path + ".email",
                                            expected: "string",
                                            value: input.email,
                                        }),
                                    ((Array.isArray(input.hobbies) ||
                                        $report(_exceptionable, {
                                            path: _path + ".hobbies",
                                            expected:
                                                "Array<ArraySimplePointer.IHobby>",
                                            value: input.hobbies,
                                        })) &&
                                        input.hobbies
                                            .map(
                                                (elem: any, _index2: number) =>
                                                    ((("object" ===
                                                        typeof elem &&
                                                        null !== elem) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    ".hobbies[" +
                                                                    _index2 +
                                                                    "]",
                                                                expected:
                                                                    "ArraySimplePointer.IHobby",
                                                                value: elem,
                                                            },
                                                        )) &&
                                                        $vo2(
                                                            elem,
                                                            _path +
                                                                ".hobbies[" +
                                                                _index2 +
                                                                "]",
                                                            true &&
                                                                _exceptionable,
                                                        )) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".hobbies[" +
                                                            _index2 +
                                                            "]",
                                                        expected:
                                                            "ArraySimplePointer.IHobby",
                                                        value: elem,
                                                    }),
                                            )
                                            .every((flag: boolean) => flag)) ||
                                        $report(_exceptionable, {
                                            path: _path + ".hobbies",
                                            expected:
                                                "Array<ArraySimplePointer.IHobby>",
                                            value: input.hobbies,
                                        }),
                                ].every((flag: boolean) => flag);
                            const $vo2 = (
                                input: any,
                                _path: string,
                                _exceptionable: boolean = true,
                            ): boolean =>
                                [
                                    "string" === typeof input.name ||
                                        $report(_exceptionable, {
                                            path: _path + ".name",
                                            expected: "string",
                                            value: input.name,
                                        }),
                                    "string" === typeof input.body ||
                                        $report(_exceptionable, {
                                            path: _path + ".body",
                                            expected: "string",
                                            value: input.body,
                                        }),
                                    ("number" === typeof input.rank &&
                                        Number.isFinite(input.rank)) ||
                                        $report(_exceptionable, {
                                            path: _path + ".rank",
                                            expected: "number",
                                            value: input.rank,
                                        }),
                                ].every((flag: boolean) => flag);
                            return (
                                ((("object" === typeof input &&
                                    null !== input) ||
                                    $report(true, {
                                        path: _path + "",
                                        expected: "ArraySimplePointer",
                                        value: input,
                                    })) &&
                                    $vo0(input, _path + "", true)) ||
                                $report(true, {
                                    path: _path + "",
                                    expected: "ArraySimplePointer",
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
                };
                const stringify = (input: ArraySimplePointer): string => {
                    const $io1 = (input: any): boolean =>
                        "string" === typeof input.name &&
                        "string" === typeof input.email &&
                        Array.isArray(input.hobbies) &&
                        input.hobbies.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io2(elem),
                        );
                    const $io2 = (input: any): boolean =>
                        "string" === typeof input.name &&
                        "string" === typeof input.body &&
                        "number" === typeof input.rank;
                    const $string = (typia.json.validateStringify as any)
                        .string;
                    const $number = (typia.json.validateStringify as any)
                        .number;
                    const $so0 = (input: any): any =>
                        `{"value":${`[${input.value
                            .map((elem: any) => $so1(elem))
                            .join(",")}]`}}`;
                    const $so1 = (input: any): any =>
                        `{"name":${$string(input.name)},"email":${$string(
                            input.email,
                        )},"hobbies":${`[${input.hobbies
                            .map(
                                (elem: any) =>
                                    `{"name":${$string(
                                        (elem as any).name,
                                    )},"body":${$string(
                                        (elem as any).body,
                                    )},"rank":${$number((elem as any).rank)}}`,
                            )
                            .join(",")}]`}}`;
                    return $so0(input);
                };
                const output = validate(input) as any;
                if (output.success) output.data = stringify(input);
                return output;
            })(input),
    );
