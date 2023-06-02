import typia from "../../../../src";
import { _test_validateStringify } from "../../../internal/_test_validateStringify";
import { ObjectRecursive } from "../../../structures/ObjectRecursive";

export const test_validateStringify_ObjectRecursive = _test_validateStringify(
    "ObjectRecursive",
    ObjectRecursive.generate,
    (input) =>
        ((input: ObjectRecursive.IDepartment): typia.IValidation<string> => {
            const validate: any = (
                input: any,
            ): typia.IValidation<ObjectRecursive.IDepartment> => {
                const __is: any = (
                    input: any,
                ): input is ObjectRecursive.IDepartment => {
                    const $io0: any = (input: any): boolean =>
                        (null === input.parent ||
                            ("object" === typeof input.parent &&
                                null !== input.parent &&
                                $io0(input.parent))) &&
                        "number" === typeof input.id &&
                        Number.isFinite(input.id) &&
                        "string" === typeof input.code &&
                        "string" === typeof input.name &&
                        "number" === typeof input.sequence &&
                        Number.isFinite(input.sequence) &&
                        "object" === typeof input.created_at &&
                        null !== input.created_at &&
                        "number" === typeof input.created_at.time &&
                        Number.isFinite(input.created_at.time) &&
                        "number" === typeof input.created_at.zone &&
                        Number.isFinite(input.created_at.zone);
                    return (
                        "object" === typeof input &&
                        null !== input &&
                        $io0(input)
                    );
                };
                const errors: any = [] as any[];
                const $report: any = (typia.validateStringify as any).report(
                    errors,
                );
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is ObjectRecursive.IDepartment => {
                        const $vo0: any = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                null === input.parent ||
                                    ((("object" === typeof input.parent &&
                                        null !== input.parent) ||
                                        $report(_exceptionable, {
                                            path: _path + ".parent",
                                            expected:
                                                "(ObjectRecursive.IDepartment | null)",
                                            value: input.parent,
                                        })) &&
                                        $vo0(
                                            input.parent,
                                            _path + ".parent",
                                            true && _exceptionable,
                                        )) ||
                                    $report(_exceptionable, {
                                        path: _path + ".parent",
                                        expected:
                                            "(ObjectRecursive.IDepartment | null)",
                                        value: input.parent,
                                    }),
                                ("number" === typeof input.id &&
                                    Number.isFinite(input.id)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".id",
                                        expected: "number",
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
                                ("number" === typeof input.sequence &&
                                    Number.isFinite(input.sequence)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".sequence",
                                        expected: "number",
                                        value: input.sequence,
                                    }),
                                ((("object" === typeof input.created_at &&
                                    null !== input.created_at) ||
                                    $report(_exceptionable, {
                                        path: _path + ".created_at",
                                        expected: "ObjectRecursive.ITimestamp",
                                        value: input.created_at,
                                    })) &&
                                    $vo1(
                                        input.created_at,
                                        _path + ".created_at",
                                        true && _exceptionable,
                                    )) ||
                                    $report(_exceptionable, {
                                        path: _path + ".created_at",
                                        expected: "ObjectRecursive.ITimestamp",
                                        value: input.created_at,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo1: any = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                ("number" === typeof input.time &&
                                    Number.isFinite(input.time)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".time",
                                        expected: "number",
                                        value: input.time,
                                    }),
                                ("number" === typeof input.zone &&
                                    Number.isFinite(input.zone)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".zone",
                                        expected: "number",
                                        value: input.zone,
                                    }),
                            ].every((flag: boolean) => flag);
                        return (
                            ((("object" === typeof input && null !== input) ||
                                $report(true, {
                                    path: _path + "",
                                    expected: "ObjectRecursive.IDepartment",
                                    value: input,
                                })) &&
                                $vo0(input, _path + "", true)) ||
                            $report(true, {
                                path: _path + "",
                                expected: "ObjectRecursive.IDepartment",
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
            const stringify: any = (
                input: ObjectRecursive.IDepartment,
            ): string => {
                const $io0: any = (input: any): boolean =>
                    (null === input.parent ||
                        ("object" === typeof input.parent &&
                            null !== input.parent &&
                            $io0(input.parent))) &&
                    "number" === typeof input.id &&
                    "string" === typeof input.code &&
                    "string" === typeof input.name &&
                    "number" === typeof input.sequence &&
                    "object" === typeof input.created_at &&
                    null !== input.created_at &&
                    $io1(input.created_at);
                const $io1: any = (input: any): boolean =>
                    "number" === typeof input.time &&
                    "number" === typeof input.zone;
                const $number: any = (typia.validateStringify as any).number;
                const $string: any = (typia.validateStringify as any).string;
                const $so0: any = (input: any): any =>
                    `{"parent":${
                        null !== input.parent ? $so0(input.parent) : "null"
                    },"id":${$number(input.id)},"code":${$string(
                        input.code,
                    )},"name":${$string(input.name)},"sequence":${$number(
                        input.sequence,
                    )},"created_at":${`{"time":${$number(
                        input.created_at.time,
                    )},"zone":${$number(input.created_at.zone)}}`}}`;
                return $so0(input);
            };
            const output: any = validate(input) as any;
            if (output.success) output.data = stringify(input);
            return output;
        })(input),
    ObjectRecursive.SPOILERS,
);
