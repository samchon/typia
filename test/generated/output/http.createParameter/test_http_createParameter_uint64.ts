import typia, { tags } from "../../../../src";
import { TestValidator } from "../../../helpers/TestValidator";

export const test_http_createParameter_uint64 = () => {
    const decoder = (input: string): uint64 => {
        const $bigint = (typia.http.createParameter as any).bigint;
        const assert = (input: any): uint64 => {
            const __is = (input: any): input is uint64 => {
                return "bigint" === typeof input && BigInt(0) <= input;
            };
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is uint64 => {
                    const $guard = (typia.http.createParameter as any).guard;
                    return (
                        ("bigint" === typeof input &&
                            (BigInt(0) <= input ||
                                $guard(true, {
                                    path: _path + "",
                                    expected: 'bigint & Type<"uint64">',
                                    value: input,
                                }))) ||
                        $guard(true, {
                            path: _path + "",
                            expected: '(bigint & Type<"uint64">)',
                            value: input,
                        })
                    );
                })(input, "$input", true);
            return input;
        };
        const value = $bigint(input);
        return assert(value);
    };
    const value: uint64 = decoder("2000");
    TestValidator.equals("parameter<uint64>(uint64)")(value)(2000n);
    TestValidator.error("parameter<uint64>(int64)")(() => decoder("-2000"));
    TestValidator.error("parameter<uint64>(double)")(() => decoder("3.14"));
    TestValidator.error("parameter<uint64>(null)")(() => decoder("null"));
    TestValidator.error("parameter<uint64>(string)")(() => decoder("one"));
    TestValidator.error("parameter<uint64>(boolean)")(() => decoder("false"));
};
type uint64 = bigint & tags.Type<"uint64">;
