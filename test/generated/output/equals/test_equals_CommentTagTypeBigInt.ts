import typia from "../../../../src";
import { _test_equals } from "../../../internal/_test_equals";
import { CommentTagTypeBigInt } from "../../../structures/CommentTagTypeBigInt";

export const test_equals_CommentTagTypeBigInt = _test_equals(
    "CommentTagTypeBigInt",
)<CommentTagTypeBigInt>(CommentTagTypeBigInt)((input) =>
    ((
        input: any,
        _exceptionable: boolean = true,
    ): input is CommentTagTypeBigInt => {
        const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
            "bigint" === typeof input.in64 &&
            "bigint" === typeof input.uint64 &&
            BigInt(0) <= input.uint64 &&
            (2 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                    if (["in64", "uint64"].some((prop: any) => key === prop))
                        return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                }));
        return "object" === typeof input && null !== input && $io0(input, true);
    })(input),
);
