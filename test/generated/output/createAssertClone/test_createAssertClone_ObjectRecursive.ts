import typia from "../../../../src";
import { _test_assertClone } from "../../../internal/_test_assertClone";
import { ObjectRecursive } from "../../../structures/ObjectRecursive";

export const test_createAssertClone_ObjectRecursive = _test_assertClone(
    "ObjectRecursive",
    ObjectRecursive.generate,
    (input: any): typia.Primitive<ObjectRecursive> => {
        const assert = (input: any): ObjectRecursive => {
            const __is = (input: any): input is ObjectRecursive => {
                const $io0 = (input: any): boolean =>
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
                    "number" === typeof (input.created_at as any).time &&
                    Number.isFinite((input.created_at as any).time) &&
                    "number" === typeof (input.created_at as any).zone &&
                    Number.isFinite((input.created_at as any).zone);
                return (
                    "object" === typeof input && null !== input && $io0(input)
                );
            };
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ObjectRecursive => {
                    const $guard = (typia.createAssertClone as any).guard;
                    const $ao0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (null === input.parent ||
                            ((("object" === typeof input.parent &&
                                null !== input.parent) ||
                                $guard(_exceptionable, {
                                    path: _path + ".parent",
                                    expected:
                                        "(ObjectRecursive.IDepartment | null)",
                                    value: input.parent,
                                })) &&
                                $ao0(
                                    input.parent,
                                    _path + ".parent",
                                    true && _exceptionable,
                                )) ||
                            $guard(_exceptionable, {
                                path: _path + ".parent",
                                expected:
                                    "(ObjectRecursive.IDepartment | null)",
                                value: input.parent,
                            })) &&
                        (("number" === typeof input.id &&
                            Number.isFinite(input.id)) ||
                            $guard(_exceptionable, {
                                path: _path + ".id",
                                expected: "number",
                                value: input.id,
                            })) &&
                        ("string" === typeof input.code ||
                            $guard(_exceptionable, {
                                path: _path + ".code",
                                expected: "string",
                                value: input.code,
                            })) &&
                        ("string" === typeof input.name ||
                            $guard(_exceptionable, {
                                path: _path + ".name",
                                expected: "string",
                                value: input.name,
                            })) &&
                        (("number" === typeof input.sequence &&
                            Number.isFinite(input.sequence)) ||
                            $guard(_exceptionable, {
                                path: _path + ".sequence",
                                expected: "number",
                                value: input.sequence,
                            })) &&
                        (((("object" === typeof input.created_at &&
                            null !== input.created_at) ||
                            $guard(_exceptionable, {
                                path: _path + ".created_at",
                                expected: "ObjectRecursive.ITimestamp",
                                value: input.created_at,
                            })) &&
                            $ao1(
                                input.created_at,
                                _path + ".created_at",
                                true && _exceptionable,
                            )) ||
                            $guard(_exceptionable, {
                                path: _path + ".created_at",
                                expected: "ObjectRecursive.ITimestamp",
                                value: input.created_at,
                            }));
                    const $ao1 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (("number" === typeof input.time &&
                            Number.isFinite(input.time)) ||
                            $guard(_exceptionable, {
                                path: _path + ".time",
                                expected: "number",
                                value: input.time,
                            })) &&
                        (("number" === typeof input.zone &&
                            Number.isFinite(input.zone)) ||
                            $guard(_exceptionable, {
                                path: _path + ".zone",
                                expected: "number",
                                value: input.zone,
                            }));
                    return (
                        ((("object" === typeof input && null !== input) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "ObjectRecursive.IDepartment",
                                value: input,
                            })) &&
                            $ao0(input, _path + "", true)) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "ObjectRecursive.IDepartment",
                            value: input,
                        })
                    );
                })(input, "$input", true);
            return input;
        };
        const clone = (
            input: ObjectRecursive,
        ): typia.Primitive<ObjectRecursive> => {
            const $io0 = (input: any): boolean =>
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
            const $io1 = (input: any): boolean =>
                "number" === typeof input.time &&
                "number" === typeof input.zone;
            const $co0 = (input: any): any => ({
                parent:
                    "object" === typeof input.parent && null !== input.parent
                        ? $co0(input.parent)
                        : (input.parent as any),
                id: input.id as any,
                code: input.code as any,
                name: input.name as any,
                sequence: input.sequence as any,
                created_at:
                    "object" === typeof input.created_at &&
                    null !== input.created_at
                        ? $co1(input.created_at)
                        : (input.created_at as any),
            });
            const $co1 = (input: any): any => ({
                time: input.time as any,
                zone: input.zone as any,
            });
            return "object" === typeof input && null !== input
                ? $co0(input)
                : (input as any);
        };
        assert(input);
        const output = clone(input);
        return output;
    },
    ObjectRecursive.SPOILERS,
);
