import typia from "../../../../src";
import { DynamicTree } from "../../../structures/DynamicTree";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_assertClone_DynamicTree = _test_assertClone(
    "DynamicTree",
    DynamicTree.generate,
    (input) =>
        ((input: any): typia.Primitive<DynamicTree> => {
            const assert = (input: any): DynamicTree => {
                const $guard = (typia.assertClone as any).guard;
                const $join = (typia.assertClone as any).join;
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
                                            expected: "Resolve<DynamicTree>",
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
            const clone = (
                input: DynamicTree,
            ): typia.Primitive<DynamicTree> => {
                const $join = (typia.assertClone as any).join;
                const $io0 = (input: any): boolean =>
                    "string" === typeof input.id &&
                    "number" === typeof input.sequence &&
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
                const $co0 = (input: any): any => ({
                    id: input.id as any,
                    sequence: input.sequence as any,
                    children:
                        "object" === typeof input.children &&
                        null !== input.children
                            ? $co1(input.children)
                            : (input.children as any),
                });
                const $co1 = (input: any): any => {
                    const output = {} as any;
                    for (const [key, value] of Object.entries(input)) {
                        if (RegExp(/(.*)/).test(key)) {
                            output[key] =
                                "object" === typeof value && null !== value
                                    ? $co0(value)
                                    : (value as any);
                            continue;
                        }
                    }
                    return output;
                };
                return "object" === typeof input && null !== input
                    ? $co0(input)
                    : (input as any);
            };
            assert(input);
            const output = clone(input);
            return output;
        })(input),
    DynamicTree.SPOILERS,
);
