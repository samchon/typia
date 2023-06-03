import typia from "../../../../src";
import { _test_assertStringify } from "../../../internal/_test_assertStringify";
import { ArraySimple } from "../../../structures/ArraySimple";

export const test_assertStringify_ArraySimple = _test_assertStringify(
    "ArraySimple",
    ArraySimple.generate,
    (input) =>
        ((input: any): string => {
            const assert = (input: any): Array<ArraySimple.IPerson> => {
                const __is = (
                    input: any,
                ): input is Array<ArraySimple.IPerson> => {
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
                    ): input is Array<ArraySimple.IPerson> => {
                        const $guard = (typia.assertStringify as any).guard;
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
                            (((Array.isArray(input.hobbies) ||
                                $guard(_exceptionable, {
                                    path: _path + ".hobbies",
                                    expected: "Array<ArraySimple.IHobby>",
                                    value: input.hobbies,
                                })) &&
                                input.hobbies.every(
                                    (elem: any, _index2: number) =>
                                        ((("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".hobbies[" +
                                                    _index2 +
                                                    "]",
                                                expected: "ArraySimple.IHobby",
                                                value: elem,
                                            })) &&
                                            $ao1(
                                                elem,
                                                _path +
                                                    ".hobbies[" +
                                                    _index2 +
                                                    "]",
                                                true && _exceptionable,
                                            )) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".hobbies[" +
                                                _index2 +
                                                "]",
                                            expected: "ArraySimple.IHobby",
                                            value: elem,
                                        }),
                                )) ||
                                $guard(_exceptionable, {
                                    path: _path + ".hobbies",
                                    expected: "Array<ArraySimple.IHobby>",
                                    value: input.hobbies,
                                }));
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
                            ((Array.isArray(input) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected: "ArraySimple",
                                    value: input,
                                })) &&
                                input.every(
                                    (elem: any, _index1: number) =>
                                        ((("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(true, {
                                                path:
                                                    _path + "[" + _index1 + "]",
                                                expected: "ArraySimple.IPerson",
                                                value: elem,
                                            })) &&
                                            $ao0(
                                                elem,
                                                _path + "[" + _index1 + "]",
                                                true,
                                            )) ||
                                        $guard(true, {
                                            path: _path + "[" + _index1 + "]",
                                            expected: "ArraySimple.IPerson",
                                            value: elem,
                                        }),
                                )) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "ArraySimple",
                                value: input,
                            })
                        );
                    })(input, "$input", true);
                return input;
            };
            const stringify = (input: Array<ArraySimple.IPerson>): string => {
                const $io1 = (input: any): boolean =>
                    "string" === typeof input.name &&
                    "string" === typeof input.body &&
                    "number" === typeof input.rank;
                const $string = (typia.assertStringify as any).string;
                const $number = (typia.assertStringify as any).number;
                const $so0 = (input: any): any =>
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
                return `[${input.map((elem: any) => $so0(elem)).join(",")}]`;
            };
            return stringify(assert(input));
        })(input),
    ArraySimple.SPOILERS,
);
