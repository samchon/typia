import typia from "../../../../src";
import { _test_misc_assertPrune } from "../../../internal/_test_misc_assertPrune";
import { ArraySimple } from "../../../structures/ArraySimple";

export const test_misc_assertPrune_ArraySimple = _test_misc_assertPrune(
    "ArraySimple",
)<ArraySimple>(ArraySimple)((input) =>
    ((input: any): ArraySimple => {
        const assert = (input: any): ArraySimple => {
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
                    const $guard = (typia.misc.assertPrune as any).guard;
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
                                            _path + ".hobbies[" + _index2 + "]",
                                            true && _exceptionable,
                                        )) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path + ".hobbies[" + _index2 + "]",
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
                                            path: _path + "[" + _index1 + "]",
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
        const prune = (input: ArraySimple): void => {
            const $io1 = (input: any): boolean =>
                "string" === typeof input.name &&
                "string" === typeof input.body &&
                "number" === typeof input.rank;
            const $pp0 = (input: any) =>
                input.forEach((elem: any) => {
                    if ("object" === typeof elem && null !== elem) $po0(elem);
                });
            const $pp1 = (input: any) =>
                input.forEach((elem: any) => {
                    if ("object" === typeof elem && null !== elem) $po1(elem);
                });
            const $po0 = (input: any): any => {
                if (Array.isArray(input.hobbies)) $pp1(input.hobbies);
                for (const key of Object.keys(input)) {
                    if ("name" === key || "email" === key || "hobbies" === key)
                        continue;
                    delete input[key];
                }
            };
            const $po1 = (input: any): any => {
                for (const key of Object.keys(input)) {
                    if ("name" === key || "body" === key || "rank" === key)
                        continue;
                    delete input[key];
                }
            };
            if (Array.isArray(input)) $pp0(input);
        };
        assert(input);
        prune(input);
        return input;
    })(input),
);
