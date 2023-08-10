import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { TagCustom } from "../../../structures/TagCustom";

export const test_random_TagCustom = _test_random<TagCustom>(TagCustom)({
    random: (
        generator: Partial<typia.IRandomGenerator> = TagCustom.RANDOM,
    ): typia.Primitive<TagCustom> => {
        const $generator = (typia.createRandom as any).generator;
        const $ro0 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            id:
                (generator?.customs ?? $generator.customs)?.string?.([
                    {
                        name: "format",
                        value: "uuid",
                    },
                ]) ?? (generator?.uuid ?? $generator.uuid)(),
            dollar:
                (generator?.customs ?? $generator.customs)?.string?.([
                    {
                        name: "dollar",
                    },
                ]) ?? (generator?.string ?? $generator.string)(),
            postfix:
                (generator?.customs ?? $generator.customs)?.string?.([
                    {
                        name: "postfix",
                        value: "abcd",
                    },
                ]) ?? (generator?.string ?? $generator.string)(),
            log:
                (generator?.customs ?? $generator.customs)?.number?.([
                    {
                        name: "powerOf",
                        value: "10",
                    },
                ]) ?? (generator?.number ?? $generator.number)(0, 100),
        });
        return $ro0();
    },
    assert: (input: any): TagCustom => {
        const __is = (input: any): input is TagCustom => {
            const $is_uuid = (typia.createAssert as any).is_uuid;
            const $is_custom = (typia.createAssert as any).is_custom;
            return (
                "object" === typeof input &&
                null !== input &&
                "string" === typeof (input as any).id &&
                $is_uuid((input as any).id) &&
                "string" === typeof (input as any).dollar &&
                $is_custom("dollar", "string", "", (input as any).dollar) &&
                "string" === typeof (input as any).postfix &&
                $is_custom(
                    "postfix",
                    "string",
                    "abcd",
                    (input as any).postfix,
                ) &&
                "number" === typeof (input as any).log &&
                Number.isFinite((input as any).log) &&
                $is_custom("powerOf", "number", "10", (input as any).log)
            );
        };
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is TagCustom => {
                const $guard = (typia.createAssert as any).guard;
                const $is_uuid = (typia.createAssert as any).is_uuid;
                const $is_custom = (typia.createAssert as any).is_custom;
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (("string" === typeof input.id &&
                        ($is_uuid(input.id) ||
                            $guard(_exceptionable, {
                                path: _path + ".id",
                                expected: "string (@format uuid)",
                                value: input.id,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".id",
                            expected: "string",
                            value: input.id,
                        })) &&
                    (("string" === typeof input.dollar &&
                        ($is_custom("dollar", "string", "", input.dollar) ||
                            $guard(_exceptionable, {
                                path: _path + ".dollar",
                                expected: "string (@dollar)",
                                value: input.dollar,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".dollar",
                            expected: "string",
                            value: input.dollar,
                        })) &&
                    (("string" === typeof input.postfix &&
                        ($is_custom(
                            "postfix",
                            "string",
                            "abcd",
                            input.postfix,
                        ) ||
                            $guard(_exceptionable, {
                                path: _path + ".postfix",
                                expected: "string (@postfix abcd)",
                                value: input.postfix,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".postfix",
                            expected: "string",
                            value: input.postfix,
                        })) &&
                    (("number" === typeof input.log &&
                        Number.isFinite(input.log) &&
                        ($is_custom("powerOf", "number", "10", input.log) ||
                            $guard(_exceptionable, {
                                path: _path + ".log",
                                expected: "number (@powerOf 10)",
                                value: input.log,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".log",
                            expected: "number",
                            value: input.log,
                        }));
                return (
                    ((("object" === typeof input && null !== input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "TagCustom",
                            value: input,
                        })) &&
                        $ao0(input, _path + "", true)) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "TagCustom",
                        value: input,
                    })
                );
            })(input, "$input", true);
        return input;
    },
});
