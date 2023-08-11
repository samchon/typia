import typia from "../../../../src";
import { _test_misc_assertPrune } from "../../../internal/_test_misc_assertPrune";
import { ObjectJsonTag } from "../../../structures/ObjectJsonTag";

export const test_misc_assertPrune_ObjectJsonTag =
    _test_misc_assertPrune<ObjectJsonTag>(ObjectJsonTag)(
        (input: any): ObjectJsonTag => {
            const assert = (input: any): ObjectJsonTag => {
                const __is = (input: any): input is ObjectJsonTag => {
                    const $is_custom = (typia.misc.createAssertPrune as any)
                        .is_custom;
                    return (
                        "object" === typeof input &&
                        null !== input &&
                        "string" === typeof (input as any).vulnerable &&
                        $is_custom(
                            "deprecated",
                            "string",
                            "",
                            (input as any).vulnerable,
                        ) &&
                        "string" === typeof (input as any).description &&
                        "string" === typeof (input as any).title &&
                        $is_custom(
                            "title",
                            "string",
                            "something",
                            (input as any).title,
                        ) &&
                        "string" === typeof (input as any).complicate_title
                    );
                };
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is ObjectJsonTag => {
                        const $guard = (typia.misc.createAssertPrune as any)
                            .guard;
                        const $is_custom = (typia.misc.createAssertPrune as any)
                            .is_custom;
                        const $ao0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            (("string" === typeof input.vulnerable &&
                                ($is_custom(
                                    "deprecated",
                                    "string",
                                    "",
                                    input.vulnerable,
                                ) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".vulnerable",
                                        expected: "string (@deprecated)",
                                        value: input.vulnerable,
                                    }))) ||
                                $guard(_exceptionable, {
                                    path: _path + ".vulnerable",
                                    expected: "string",
                                    value: input.vulnerable,
                                })) &&
                            ("string" === typeof input.description ||
                                $guard(_exceptionable, {
                                    path: _path + ".description",
                                    expected: "string",
                                    value: input.description,
                                })) &&
                            (("string" === typeof input.title &&
                                ($is_custom(
                                    "title",
                                    "string",
                                    "something",
                                    input.title,
                                ) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".title",
                                        expected: "string (@title something)",
                                        value: input.title,
                                    }))) ||
                                $guard(_exceptionable, {
                                    path: _path + ".title",
                                    expected: "string",
                                    value: input.title,
                                })) &&
                            ("string" === typeof input.complicate_title ||
                                $guard(_exceptionable, {
                                    path: _path + ".complicate_title",
                                    expected: "string",
                                    value: input.complicate_title,
                                }));
                        return (
                            ((("object" === typeof input && null !== input) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected: "ObjectJsonTag",
                                    value: input,
                                })) &&
                                $ao0(input, _path + "", true)) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "ObjectJsonTag",
                                value: input,
                            })
                        );
                    })(input, "$input", true);
                return input;
            };
            const prune = (input: ObjectJsonTag): void => {
                const $is_custom = (typia.misc.createAssertPrune as any)
                    .is_custom;
                const $po0 = (input: any): any => {
                    for (const key of Object.keys(input)) {
                        if (
                            "vulnerable" === key ||
                            "description" === key ||
                            "title" === key ||
                            "complicate_title" === key
                        )
                            continue;
                        delete input[key];
                    }
                };
                if ("object" === typeof input && null !== input) $po0(input);
            };
            assert(input);
            prune(input);
            return input;
        },
    );
