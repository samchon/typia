import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { TagDefault } from "../../../structures/TagDefault";

export const test_random_TagDefault = _test_random("TagDefault")<TagDefault>(
    TagDefault,
)({
    random: (
        generator?: Partial<typia.IRandomGenerator>,
    ): typia.Resolved<TagDefault> => {
        const $generator = (typia.createRandom as any).generator;
        const $pick = (typia.createRandom as any).pick;
        const $ro0 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            boolean: (generator?.boolean ?? $generator.boolean)(),
            number:
                (generator?.customs ?? $generator.customs)?.number?.([
                    {
                        name: "default",
                        value: "1",
                    },
                ]) ?? (generator?.number ?? $generator.number)(0, 100),
            string:
                (generator?.customs ?? $generator.customs)?.string?.([
                    {
                        name: "default",
                        value: "two",
                    },
                ]) ?? (generator?.string ?? $generator.string)(),
            text:
                (generator?.customs ?? $generator.customs)?.string?.([
                    {
                        name: "default",
                        value: "Very long text, can you understand it?",
                    },
                ]) ?? (generator?.string ?? $generator.string)(),
            template: `prefix_${
                (generator?.customs ?? $generator.customs)?.string?.([]) ??
                (generator?.string ?? $generator.string)()
            }`,
            boolean_and_number_and_string: $pick([
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([
                        {
                            name: "default",
                            value: "false",
                        },
                        {
                            name: "default",
                            value: "1",
                        },
                        {
                            name: "default",
                            value: "two",
                        },
                    ]) ?? (generator?.string ?? $generator.string)(),
                () =>
                    (generator?.customs ?? $generator.customs)?.number?.([
                        {
                            name: "default",
                            value: "false",
                        },
                        {
                            name: "default",
                            value: "1",
                        },
                        {
                            name: "default",
                            value: "two",
                        },
                    ]) ?? (generator?.number ?? $generator.number)(0, 100),
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            union_but_boolean: $pick([
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([
                        {
                            name: "default",
                            value: "false",
                        },
                    ]) ?? (generator?.string ?? $generator.string)(),
                () =>
                    (generator?.customs ?? $generator.customs)?.number?.([
                        {
                            name: "default",
                            value: "false",
                        },
                    ]) ?? (generator?.number ?? $generator.number)(0, 100),
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            union_but_number: $pick([
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([
                        {
                            name: "default",
                            value: "1",
                        },
                    ]) ?? (generator?.string ?? $generator.string)(),
                () =>
                    (generator?.customs ?? $generator.customs)?.number?.([
                        {
                            name: "default",
                            value: "1",
                        },
                    ]) ?? (generator?.number ?? $generator.number)(0, 100),
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            union_but_string: $pick([
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([
                        {
                            name: "default",
                            value: "two",
                        },
                    ]) ?? (generator?.string ?? $generator.string)(),
                () =>
                    (generator?.customs ?? $generator.customs)?.number?.([
                        {
                            name: "default",
                            value: "two",
                        },
                    ]) ?? (generator?.number ?? $generator.number)(0, 100),
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            vulnerable_range:
                (generator?.customs ?? $generator.customs)?.number?.([
                    {
                        name: "default",
                        value: "7",
                    },
                    {
                        name: "minimum",
                        value: "3",
                    },
                    {
                        name: "maximum",
                        value: "5",
                    },
                ]) ?? (generator?.number ?? $generator.number)(3, 5),
            vulnerable_template: `prefix_${
                (generator?.customs ?? $generator.customs)?.string?.([]) ??
                (generator?.string ?? $generator.string)()
            }`,
            boolean_and_number_and_template: $pick([
                () =>
                    `prefix_${
                        (generator?.customs ?? $generator.customs)?.string?.(
                            [],
                        ) ?? (generator?.string ?? $generator.string)()
                    }`,
                () =>
                    (generator?.customs ?? $generator.customs)?.number?.([
                        {
                            name: "default",
                            value: "false",
                        },
                        {
                            name: "default",
                            value: "1",
                        },
                        {
                            name: "default",
                            value: "prefix_B",
                        },
                    ]) ?? (generator?.number ?? $generator.number)(0, 100),
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
        });
        return $ro0();
    },
    assert: (input: any): TagDefault => {
        const __is = (input: any): input is TagDefault => {
            const $io0 = (input: any): boolean =>
                "boolean" === typeof input.boolean &&
                "number" === typeof input.number &&
                Number.isFinite(input.number) &&
                "string" === typeof input.string &&
                "string" === typeof input.text &&
                "string" === typeof input.template &&
                RegExp(/^prefix_(.*)/).test(input.template) &&
                ("string" === typeof input.boolean_and_number_and_string ||
                    ("number" === typeof input.boolean_and_number_and_string &&
                        Number.isFinite(input.boolean_and_number_and_string)) ||
                    "boolean" === typeof input.boolean_and_number_and_string) &&
                ("string" === typeof input.union_but_boolean ||
                    ("number" === typeof input.union_but_boolean &&
                        Number.isFinite(input.union_but_boolean)) ||
                    "boolean" === typeof input.union_but_boolean) &&
                ("string" === typeof input.union_but_number ||
                    ("number" === typeof input.union_but_number &&
                        Number.isFinite(input.union_but_number)) ||
                    "boolean" === typeof input.union_but_number) &&
                ("string" === typeof input.union_but_string ||
                    ("number" === typeof input.union_but_string &&
                        Number.isFinite(input.union_but_string)) ||
                    "boolean" === typeof input.union_but_string) &&
                "number" === typeof input.vulnerable_range &&
                Number.isFinite(input.vulnerable_range) &&
                3 <= input.vulnerable_range &&
                5 >= input.vulnerable_range &&
                "string" === typeof input.vulnerable_template &&
                RegExp(/^prefix_(.*)/).test(input.vulnerable_template) &&
                null !== input.boolean_and_number_and_template &&
                undefined !== input.boolean_and_number_and_template &&
                (("number" === typeof input.boolean_and_number_and_template &&
                    Number.isFinite(input.boolean_and_number_and_template)) ||
                    "boolean" ===
                        typeof input.boolean_and_number_and_template ||
                    ("string" ===
                        typeof input.boolean_and_number_and_template &&
                        RegExp(/^prefix_(.*)/).test(
                            input.boolean_and_number_and_template,
                        )));
            return "object" === typeof input && null !== input && $io0(input);
        };
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is TagDefault => {
                const $guard = (typia.createAssert as any).guard;
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ("boolean" === typeof input.boolean ||
                        $guard(_exceptionable, {
                            path: _path + ".boolean",
                            expected: "boolean",
                            value: input.boolean,
                        })) &&
                    (("number" === typeof input.number &&
                        Number.isFinite(input.number)) ||
                        $guard(_exceptionable, {
                            path: _path + ".number",
                            expected: "number",
                            value: input.number,
                        })) &&
                    ("string" === typeof input.string ||
                        $guard(_exceptionable, {
                            path: _path + ".string",
                            expected: "string",
                            value: input.string,
                        })) &&
                    ("string" === typeof input.text ||
                        $guard(_exceptionable, {
                            path: _path + ".text",
                            expected: "string",
                            value: input.text,
                        })) &&
                    (("string" === typeof input.template &&
                        RegExp(/^prefix_(.*)/).test(input.template)) ||
                        $guard(_exceptionable, {
                            path: _path + ".template",
                            expected: "`prefix_${string}`",
                            value: input.template,
                        })) &&
                    ("string" === typeof input.boolean_and_number_and_string ||
                        ("number" ===
                            typeof input.boolean_and_number_and_string &&
                            Number.isFinite(
                                input.boolean_and_number_and_string,
                            )) ||
                        "boolean" ===
                            typeof input.boolean_and_number_and_string ||
                        $guard(_exceptionable, {
                            path: _path + ".boolean_and_number_and_string",
                            expected: "(boolean | number | string)",
                            value: input.boolean_and_number_and_string,
                        })) &&
                    ("string" === typeof input.union_but_boolean ||
                        ("number" === typeof input.union_but_boolean &&
                            Number.isFinite(input.union_but_boolean)) ||
                        "boolean" === typeof input.union_but_boolean ||
                        $guard(_exceptionable, {
                            path: _path + ".union_but_boolean",
                            expected: "(boolean | number | string)",
                            value: input.union_but_boolean,
                        })) &&
                    ("string" === typeof input.union_but_number ||
                        ("number" === typeof input.union_but_number &&
                            Number.isFinite(input.union_but_number)) ||
                        "boolean" === typeof input.union_but_number ||
                        $guard(_exceptionable, {
                            path: _path + ".union_but_number",
                            expected: "(boolean | number | string)",
                            value: input.union_but_number,
                        })) &&
                    ("string" === typeof input.union_but_string ||
                        ("number" === typeof input.union_but_string &&
                            Number.isFinite(input.union_but_string)) ||
                        "boolean" === typeof input.union_but_string ||
                        $guard(_exceptionable, {
                            path: _path + ".union_but_string",
                            expected: "(boolean | number | string)",
                            value: input.union_but_string,
                        })) &&
                    (("number" === typeof input.vulnerable_range &&
                        Number.isFinite(input.vulnerable_range) &&
                        (3 <= input.vulnerable_range ||
                            $guard(_exceptionable, {
                                path: _path + ".vulnerable_range",
                                expected: "number (@minimum 3)",
                                value: input.vulnerable_range,
                            })) &&
                        (5 >= input.vulnerable_range ||
                            $guard(_exceptionable, {
                                path: _path + ".vulnerable_range",
                                expected: "number (@maximum 5)",
                                value: input.vulnerable_range,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".vulnerable_range",
                            expected: "number",
                            value: input.vulnerable_range,
                        })) &&
                    (("string" === typeof input.vulnerable_template &&
                        RegExp(/^prefix_(.*)/).test(
                            input.vulnerable_template,
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + ".vulnerable_template",
                            expected: "`prefix_${string}`",
                            value: input.vulnerable_template,
                        })) &&
                    (null !== input.boolean_and_number_and_template ||
                        $guard(_exceptionable, {
                            path: _path + ".boolean_and_number_and_template",
                            expected: "(`prefix_${string}` | boolean | number)",
                            value: input.boolean_and_number_and_template,
                        })) &&
                    (undefined !== input.boolean_and_number_and_template ||
                        $guard(_exceptionable, {
                            path: _path + ".boolean_and_number_and_template",
                            expected: "(`prefix_${string}` | boolean | number)",
                            value: input.boolean_and_number_and_template,
                        })) &&
                    (("number" ===
                        typeof input.boolean_and_number_and_template &&
                        Number.isFinite(
                            input.boolean_and_number_and_template,
                        )) ||
                        "boolean" ===
                            typeof input.boolean_and_number_and_template ||
                        ("string" ===
                            typeof input.boolean_and_number_and_template &&
                            RegExp(/^prefix_(.*)/).test(
                                input.boolean_and_number_and_template,
                            )) ||
                        $guard(_exceptionable, {
                            path: _path + ".boolean_and_number_and_template",
                            expected: "(`prefix_${string}` | boolean | number)",
                            value: input.boolean_and_number_and_template,
                        }));
                return (
                    ((("object" === typeof input && null !== input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "TagDefault",
                            value: input,
                        })) &&
                        $ao0(input, _path + "", true)) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "TagDefault",
                        value: input,
                    })
                );
            })(input, "$input", true);
        return input;
    },
});
