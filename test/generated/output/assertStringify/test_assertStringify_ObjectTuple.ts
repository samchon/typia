import typia from "../../../../src";
import { _test_assertStringify } from "../../../internal/_test_assertStringify";
import { ObjectTuple } from "../../../structures/ObjectTuple";

export const test_assertStringify_ObjectTuple = _test_assertStringify(
    "ObjectTuple",
    ObjectTuple.generate,
    (input) =>
        ((input: any): string => {
            const assert = (
                input: any,
            ): [ObjectTuple.ISection, ObjectTuple.ICitizen] => {
                const $guard = (typia.assertStringify as any).guard;
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is [ObjectTuple.ISection, ObjectTuple.ICitizen] => {
                    const $ao0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        ("string" === typeof input.id ||
                            $guard(_exceptionable, {
                                path: _path + ".id",
                                expected: "string",
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
                            }));
                    const $ao1 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        ("string" === typeof input.id ||
                            $guard(_exceptionable, {
                                path: _path + ".id",
                                expected: "string",
                                value: input.id,
                            })) &&
                        ("string" === typeof input.mobile ||
                            $guard(_exceptionable, {
                                path: _path + ".mobile",
                                expected: "string",
                                value: input.mobile,
                            })) &&
                        ("string" === typeof input.name ||
                            $guard(_exceptionable, {
                                path: _path + ".name",
                                expected: "string",
                                value: input.name,
                            }));
                    return (
                        (Array.isArray(input) ||
                            $guard(true, {
                                path: _path + "",
                                expected:
                                    "[Resolve<ObjectTuple.ISection>, Resolve<ObjectTuple.ICitizen>]",
                                value: input,
                            })) &&
                        (input.length === 2 ||
                            $guard(true, {
                                path: _path + "",
                                expected:
                                    "[Resolve<ObjectTuple.ISection>, Resolve<ObjectTuple.ICitizen>]",
                                value: input,
                            })) &&
                        (("object" === typeof input[0] && null !== input[0]) ||
                            $guard(true, {
                                path: _path + "[0]",
                                expected: "Resolve<ObjectTuple.ISection>",
                                value: input[0],
                            })) &&
                        $ao0(input[0], _path + "[0]", true) &&
                        (("object" === typeof input[1] && null !== input[1]) ||
                            $guard(true, {
                                path: _path + "[1]",
                                expected: "Resolve<ObjectTuple.ICitizen>",
                                value: input[1],
                            })) &&
                        $ao1(input[1], _path + "[1]", true)
                    );
                })(input, "$input", true);
                return input;
            };
            const stringify = (
                input: [ObjectTuple.ISection, ObjectTuple.ICitizen],
            ): string => {
                const $string = (typia.assertStringify as any).string;
                return `[${`{"id":${$string(input[0].id)},"code":${$string(
                    input[0].code,
                )},"name":${$string(input[0].name)}}`},${`{"id":${$string(
                    input[1].id,
                )},"mobile":${$string(input[1].mobile)},"name":${$string(
                    input[1].name,
                )}}`}]`;
            };
            return stringify(assert(input));
        })(input),
    ObjectTuple.SPOILERS,
);
