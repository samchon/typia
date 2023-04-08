import typia from "../../../../src";
import { _test_assertStringify } from "../../../internal/_test_assertStringify";
import { ArraySimple } from "../../../structures/ArraySimple";

export const test_createAssertStringify_ArraySimple = _test_assertStringify(
    "ArraySimple",
    ArraySimple.generate,
    (input: any): string => {
        const assert = (input: any): ArraySimple => {
            const $guard = (typia.createAssertStringify as any).guard;
            const __is = (input: any): input is ArraySimple => {
                const $io0 = (input: any): boolean =>
                    "string" === typeof input.name &&
                    "string" === typeof input.email &&
                    Array.isArray(input.hobbies) &&
                    input.hobbies.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io1(elem),
                    );
                const $io1 = (input: any): boolean =>
                    "string" === typeof input.name &&
                    "string" === typeof input.body &&
                    "number" === typeof input.rank &&
                    Number.isFinite(input.rank);
                return (
                    Array.isArray(input) &&
                    input.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io0(elem),
                    )
                );
            };
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ArraySimple => {
                    const $ao0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        ("string" === typeof input.name ||
                            $guard(_exceptionable, {
                                path: _path + ".name",
                                expected: "string",
                                value: input.name,
                            })) &&
                        ("string" === typeof input.email ||
                            $guard(_exceptionable, {
                                path: _path + ".email",
                                expected: "string",
                                value: input.email,
                            })) &&
                        (Array.isArray(input.hobbies) ||
                            $guard(_exceptionable, {
                                path: _path + ".hobbies",
                                expected: "Array<Resolve<ArraySimple.IHobby>>",
                                value: input.hobbies,
                            })) &&
                        input.hobbies.every(
                            (elem: any, _index2: number) =>
                                (("object" === typeof elem && null !== elem) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path + ".hobbies[" + _index2 + "]",
                                        expected: "Resolve<ArraySimple.IHobby>",
                                        value: elem,
                                    })) &&
                                $ao1(
                                    elem,
                                    _path + ".hobbies[" + _index2 + "]",
                                    true && _exceptionable,
                                ),
                        );
                    const $ao1 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        ("string" === typeof input.name ||
                            $guard(_exceptionable, {
                                path: _path + ".name",
                                expected: "string",
                                value: input.name,
                            })) &&
                        ("string" === typeof input.body ||
                            $guard(_exceptionable, {
                                path: _path + ".body",
                                expected: "string",
                                value: input.body,
                            })) &&
                        (("number" === typeof input.rank &&
                            Number.isFinite(input.rank)) ||
                            $guard(_exceptionable, {
                                path: _path + ".rank",
                                expected: "number",
                                value: input.rank,
                            }));
                    return (
                        (Array.isArray(input) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "Array<Resolve<ArraySimple.IPerson>>",
                                value: input,
                            })) &&
                        input.every(
                            (elem: any, _index1: number) =>
                                (("object" === typeof elem && null !== elem) ||
                                    $guard(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected:
                                            "Resolve<ArraySimple.IPerson>",
                                        value: elem,
                                    })) &&
                                $ao0(elem, _path + "[" + _index1 + "]", true),
                        )
                    );
                })(input, "$input", true);
            return input;
        };
        const stringify = (input: ArraySimple): string => {
            const $string = (typia.createAssertStringify as any).string;
            const $number = (typia.createAssertStringify as any).number;
            const $io1 = (input: any): boolean =>
                "string" === typeof input.name &&
                "string" === typeof input.body &&
                "number" === typeof input.rank;
            const $so0 = (input: any): any =>
                `{"name":${$string(input.name)},"email":${$string(
                    input.email,
                )},"hobbies":${`[${input.hobbies
                    .map(
                        (elem: any) =>
                            `{"name":${$string(elem.name)},"body":${$string(
                                elem.body,
                            )},"rank":${$number(elem.rank)}}`,
                    )
                    .join(",")}]`}}`;
            return `[${input.map((elem: any) => $so0(elem)).join(",")}]`;
        };
        return stringify(assert(input));
    },
    ArraySimple.SPOILERS,
);
