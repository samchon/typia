import typia from "../../../../src";
import { _test_validateStringify } from "../../../internal/_test_validateStringify";
import { ObjectTuple } from "../../../structures/ObjectTuple";

export const test_validateStringify_ObjectTuple = _test_validateStringify(
    "ObjectTuple",
    ObjectTuple.generate,
    (input) =>
        ((
            input: [ObjectTuple.ISection, ObjectTuple.ICitizen],
        ): typia.IValidation<string> => {
            const validate = (
                input: any,
            ): typia.IValidation<
                [ObjectTuple.ISection, ObjectTuple.ICitizen]
            > => {
                const __is = (
                    input: any,
                ): input is [ObjectTuple.ISection, ObjectTuple.ICitizen] => {
                    const $io0 = (input: any): boolean =>
                        "string" === typeof input.id &&
                        "string" === typeof input.code &&
                        "string" === typeof input.name;
                    const $io1 = (input: any): boolean =>
                        "string" === typeof input.id &&
                        "string" === typeof input.mobile &&
                        "string" === typeof input.name;
                    return (
                        Array.isArray(input) &&
                        input.length === 2 &&
                        "object" === typeof input[0] &&
                        null !== input[0] &&
                        $io0(input[0]) &&
                        "object" === typeof input[1] &&
                        null !== input[1] &&
                        $io1(input[1])
                    );
                };
                const errors = [] as any[];
                const $report = (typia.validateStringify as any).report(errors);
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is [
                        ObjectTuple.ISection,
                        ObjectTuple.ICitizen,
                    ] => {
                        const $vo0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                "string" === typeof input.id ||
                                    $report(_exceptionable, {
                                        path: _path + ".id",
                                        expected: "string",
                                        value: input.id,
                                    }),
                                "string" === typeof input.code ||
                                    $report(_exceptionable, {
                                        path: _path + ".code",
                                        expected: "string",
                                        value: input.code,
                                    }),
                                "string" === typeof input.name ||
                                    $report(_exceptionable, {
                                        path: _path + ".name",
                                        expected: "string",
                                        value: input.name,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo1 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                "string" === typeof input.id ||
                                    $report(_exceptionable, {
                                        path: _path + ".id",
                                        expected: "string",
                                        value: input.id,
                                    }),
                                "string" === typeof input.mobile ||
                                    $report(_exceptionable, {
                                        path: _path + ".mobile",
                                        expected: "string",
                                        value: input.mobile,
                                    }),
                                "string" === typeof input.name ||
                                    $report(_exceptionable, {
                                        path: _path + ".name",
                                        expected: "string",
                                        value: input.name,
                                    }),
                            ].every((flag: boolean) => flag);
                        return (
                            ((Array.isArray(input) ||
                                $report(true, {
                                    path: _path + "",
                                    expected:
                                        "[ObjectTuple.ISection, ObjectTuple.ICitizen]",
                                    value: input,
                                })) &&
                                (input.length === 2 ||
                                    $report(true, {
                                        path: _path + "",
                                        expected:
                                            "[ObjectTuple.ISection, ObjectTuple.ICitizen]",
                                        value: input,
                                    })) &&
                                [
                                    ((("object" === typeof input[0] &&
                                        null !== input[0]) ||
                                        $report(true, {
                                            path: _path + "[0]",
                                            expected: "ObjectTuple.ISection",
                                            value: input[0],
                                        })) &&
                                        $vo0(input[0], _path + "[0]", true)) ||
                                        $report(true, {
                                            path: _path + "[0]",
                                            expected: "ObjectTuple.ISection",
                                            value: input[0],
                                        }),
                                    ((("object" === typeof input[1] &&
                                        null !== input[1]) ||
                                        $report(true, {
                                            path: _path + "[1]",
                                            expected: "ObjectTuple.ICitizen",
                                            value: input[1],
                                        })) &&
                                        $vo1(input[1], _path + "[1]", true)) ||
                                        $report(true, {
                                            path: _path + "[1]",
                                            expected: "ObjectTuple.ICitizen",
                                            value: input[1],
                                        }),
                                ].every((flag: boolean) => flag)) ||
                            $report(true, {
                                path: _path + "",
                                expected:
                                    "[ObjectTuple.ISection, ObjectTuple.ICitizen]",
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
            const stringify = (
                input: [ObjectTuple.ISection, ObjectTuple.ICitizen],
            ): string => {
                const $string = (typia.validateStringify as any).string;
                return `[${`{"id":${$string(input[0].id)},"code":${$string(
                    input[0].code,
                )},"name":${$string(input[0].name)}}`},${`{"id":${$string(
                    input[1].id,
                )},"mobile":${$string(input[1].mobile)},"name":${$string(
                    input[1].name,
                )}}`}]`;
            };
            const output = validate(input) as any;
            if (output.success) output.data = stringify(input);
            return output;
        })(input),
    ObjectTuple.SPOILERS,
);
