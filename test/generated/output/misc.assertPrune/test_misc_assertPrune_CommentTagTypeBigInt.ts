import typia from "../../../../src";
import { _test_misc_assertPrune } from "../../../internal/_test_misc_assertPrune";
import { CommentTagTypeBigInt } from "../../../structures/CommentTagTypeBigInt";

export const test_misc_assertPrune_CommentTagTypeBigInt =
    _test_misc_assertPrune("CommentTagTypeBigInt")<CommentTagTypeBigInt>(
        CommentTagTypeBigInt,
    )((input) =>
        ((input: any): CommentTagTypeBigInt => {
            const assert = (input: any): CommentTagTypeBigInt => {
                const __is = (input: any): input is CommentTagTypeBigInt => {
                    return (
                        "object" === typeof input &&
                        null !== input &&
                        "bigint" === typeof (input as any).in64 &&
                        "bigint" === typeof (input as any).uint64 &&
                        BigInt(0) <= (input as any).uint64
                    );
                };
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is CommentTagTypeBigInt => {
                        const $guard = (typia.misc.assertPrune as any).guard;
                        const $ao0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            ("bigint" === typeof input.in64 ||
                                $guard(_exceptionable, {
                                    path: _path + ".in64",
                                    expected: "bigint",
                                    value: input.in64,
                                })) &&
                            (("bigint" === typeof input.uint64 &&
                                (BigInt(0) <= input.uint64 ||
                                    $guard(_exceptionable, {
                                        path: _path + ".uint64",
                                        expected: "bigint & Type<uint64>",
                                        value: input.uint64,
                                    }))) ||
                                $guard(_exceptionable, {
                                    path: _path + ".uint64",
                                    expected: "(bigint & Type<uint64>)",
                                    value: input.uint64,
                                }));
                        return (
                            ((("object" === typeof input && null !== input) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected: "CommentTagTypeBigInt",
                                    value: input,
                                })) &&
                                $ao0(input, _path + "", true)) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "CommentTagTypeBigInt",
                                value: input,
                            })
                        );
                    })(input, "$input", true);
                return input;
            };
            const prune = (input: CommentTagTypeBigInt): void => {
                const $po0 = (input: any): any => {
                    for (const key of Object.keys(input)) {
                        if ("in64" === key || "uint64" === key) continue;
                        delete input[key];
                    }
                };
                if ("object" === typeof input && null !== input) $po0(input);
            };
            assert(input);
            prune(input);
            return input;
        })(input),
    );
