import typia from "../../../../src";
import { _test_assertStringify } from "../../../internal/_test_assertStringify";
import { ClassPropertyAssignment } from "../../../structures/ClassPropertyAssignment";

export const test_createAssertStringify_ClassPropertyAssignment =
    _test_assertStringify(
        "ClassPropertyAssignment",
        ClassPropertyAssignment.generate,
        (input: any): string => {
            const assert: any = (input: any): ClassPropertyAssignment => {
                const __is: any = (
                    input: any,
                ): input is ClassPropertyAssignment => {
                    const $io0: any = (input: any): boolean =>
                        "number" === typeof input.id &&
                        Number.isFinite(input.id) &&
                        "string" === typeof input.name &&
                        "assignment" === input.note &&
                        false === input.editable &&
                        "boolean" === typeof input.incremental;
                    return (
                        "object" === typeof input &&
                        null !== input &&
                        $io0(input)
                    );
                };
                const $guard: any = (typia.createAssertStringify as any).guard;
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is ClassPropertyAssignment => {
                        const $ao0: any = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            (("number" === typeof input.id &&
                                Number.isFinite(input.id)) ||
                                $guard(_exceptionable, {
                                    path: _path + ".id",
                                    expected: "number",
                                    value: input.id,
                                })) &&
                            ("string" === typeof input.name ||
                                $guard(_exceptionable, {
                                    path: _path + ".name",
                                    expected: "string",
                                    value: input.name,
                                })) &&
                            ("assignment" === input.note ||
                                $guard(_exceptionable, {
                                    path: _path + ".note",
                                    expected: '"assignment"',
                                    value: input.note,
                                })) &&
                            (false === input.editable ||
                                $guard(_exceptionable, {
                                    path: _path + ".editable",
                                    expected: "false",
                                    value: input.editable,
                                })) &&
                            ("boolean" === typeof input.incremental ||
                                $guard(_exceptionable, {
                                    path: _path + ".incremental",
                                    expected: "boolean",
                                    value: input.incremental,
                                }));
                        return (
                            (("object" === typeof input && null !== input) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected: "ClassPropertyAssignment",
                                    value: input,
                                })) &&
                            $ao0(input, _path + "", true)
                        );
                    })(input, "$input", true);
                return input;
            };
            const stringify: any = (input: ClassPropertyAssignment): string => {
                const $number: any = (typia.createAssertStringify as any)
                    .number;
                const $string: any = (typia.createAssertStringify as any)
                    .string;
                const $throws: any = (typia.createAssertStringify as any)
                    .throws;
                const $so0: any = (input: any): any =>
                    `{"id":${$number(input.id)},"name":${$string(
                        input.name,
                    )},"note":${(() => {
                        if ("string" === typeof input.note)
                            return $string(input.note);
                        if ("string" === typeof input.note)
                            return '"' + input.note + '"';
                        $throws({
                            expected: '"assignment"',
                            value: input.note,
                        });
                    })()},"editable":${input.editable},"incremental":${
                        input.incremental
                    }}`;
                return $so0(input);
            };
            return stringify(assert(input));
        },
        ClassPropertyAssignment.SPOILERS,
    );
