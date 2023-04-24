import typia from "../../../../src";
import { _test_assertParse } from "../../../internal/_test_assertParse";
import { DynamicTree } from "../../../structures/DynamicTree";

export const test_assertParse_DynamicTree = _test_assertParse(
    "DynamicTree",
    DynamicTree.generate,
    (input) =>
        ((input: string): typia.Primitive<DynamicTree> => {
            const assert = (input: any): DynamicTree => {
                const $guard = (typia.assertParse as any).guard;
                const $join = (typia.assertParse as any).join;
                const __is = (input: any): input is DynamicTree => {
                    const $join = (typia.assertParse as any).join;
                    const $io0 = (input: any): boolean =>
                        "string" === typeof input.id &&
                        "number" === typeof input.sequence &&
                        Number.isFinite(input.sequence) &&
                        "object" === typeof input.children &&
                        null !== input.children &&
                        false === Array.isArray(input.children) &&
                        $io1(input.children);
                    const $io1 = (input: any): boolean =>
                        Object.keys(input).every((key) => {
                            const value = input[key];
                            if (undefined === value) return true;
                            if (RegExp(/(.*)/).test(key))
                                return (
                                    "object" === typeof value &&
                                    null !== value &&
                                    $io0(value)
                                );
                            return true;
                        });
                    return (
                        "object" === typeof input &&
                        null !== input &&
                        $io0(input)
                    );
                };
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is DynamicTree => {
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
                            (("number" === typeof input.sequence &&
                                Number.isFinite(input.sequence)) ||
                                $guard(_exceptionable, {
                                    path: _path + ".sequence",
                                    expected: "number",
                                    value: input.sequence,
                                })) &&
                            (("object" === typeof input.children &&
                                null !== input.children &&
                                false === Array.isArray(input.children)) ||
                                $guard(_exceptionable, {
                                    path: _path + ".children",
                                    expected:
                                        "Resolve<Record<string, DynamicTree>>",
                                    value: input.children,
                                })) &&
                            $ao1(
                                input.children,
                                _path + ".children",
                                true && _exceptionable,
                            );
                        const $ao1 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            false === _exceptionable ||
                            Object.keys(input).every((key) => {
                                const value = input[key];
                                if (undefined === value) return true;
                                if (RegExp(/(.*)/).test(key))
                                    return (
                                        (("object" === typeof value &&
                                            null !== value) ||
                                            $guard(_exceptionable, {
                                                path: _path + $join(key),
                                                expected:
                                                    "Resolve<DynamicTree>",
                                                value: value,
                                            })) &&
                                        $ao0(
                                            value,
                                            _path + $join(key),
                                            true && _exceptionable,
                                        )
                                    );
                                return true;
                            });
                        return (
                            (("object" === typeof input && null !== input) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected: "Resolve<DynamicTree>",
                                    value: input,
                                })) &&
                            $ao0(input, _path + "", true)
                        );
                    })(input, "$input", true);
                return input;
            };
            input = JSON.parse(input);
            return assert(input) as any;
        })(input),
    DynamicTree.SPOILERS,
);
