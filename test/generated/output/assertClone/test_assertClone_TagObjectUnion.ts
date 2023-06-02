import typia from "../../../../src";
import { _test_assertClone } from "../../../internal/_test_assertClone";
import { TagObjectUnion } from "../../../structures/TagObjectUnion";

export const test_assertClone_TagObjectUnion = _test_assertClone(
    "TagObjectUnion",
    TagObjectUnion.generate,
    (input) =>
        ((input: any): typia.Primitive<Array<TagObjectUnion.Type>> => {
            const assert: any = (input: any): Array<TagObjectUnion.Type> => {
                const __is: any = (
                    input: any,
                ): input is Array<TagObjectUnion.Type> => {
                    const $io0: any = (input: any): boolean =>
                        "number" === typeof input.value &&
                        Number.isFinite(input.value) &&
                        3 <= input.value;
                    const $io1: any = (input: any): boolean =>
                        "string" === typeof input.value &&
                        3 <= input.value.length &&
                        7 >= input.value.length;
                    const $iu0: any = (input: any): any =>
                        (() => {
                            if ("string" === typeof input.value)
                                return $io1(input);
                            if (
                                "number" === typeof input.value &&
                                Number.isFinite(input.value)
                            )
                                return $io0(input);
                            return false;
                        })();
                    return (
                        Array.isArray(input) &&
                        input.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $iu0(elem),
                        )
                    );
                };
                const $guard: any = (typia.assertClone as any).guard;
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is Array<TagObjectUnion.Type> => {
                        const $ao0: any = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            ("number" === typeof input.value &&
                                Number.isFinite(input.value) &&
                                (3 <= input.value ||
                                    $guard(_exceptionable, {
                                        path: _path + ".value",
                                        expected: "number (@minimum 3)",
                                        value: input.value,
                                    }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".value",
                                expected: "number",
                                value: input.value,
                            });
                        const $ao1: any = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            ("string" === typeof input.value &&
                                (3 <= input.value.length ||
                                    $guard(_exceptionable, {
                                        path: _path + ".value",
                                        expected: "string (@minLength 3)",
                                        value: input.value,
                                    })) &&
                                (7 >= input.value.length ||
                                    $guard(_exceptionable, {
                                        path: _path + ".value",
                                        expected: "string (@maxLength 7)",
                                        value: input.value,
                                    }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".value",
                                expected: "string",
                                value: input.value,
                            });
                        const $au0: any = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): any =>
                            (() => {
                                if ("string" === typeof input.value)
                                    return $ao1(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                if ("number" === typeof input.value)
                                    return $ao0(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                return $guard(_exceptionable, {
                                    path: _path,
                                    expected:
                                        "(TagObjectUnion.Literal | TagObjectUnion.Numeric)",
                                    value: input,
                                });
                            })();
                        return (
                            (Array.isArray(input) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected: "TagObjectUnion",
                                    value: input,
                                })) &&
                            input.every(
                                (elem: any, _index1: number) =>
                                    (("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(true, {
                                            path: _path + "[" + _index1 + "]",
                                            expected:
                                                "(TagObjectUnion.Literal | TagObjectUnion.Numeric)",
                                            value: elem,
                                        })) &&
                                    $au0(
                                        elem,
                                        _path + "[" + _index1 + "]",
                                        true,
                                    ),
                            )
                        );
                    })(input, "$input", true);
                return input;
            };
            const clone: any = (
                input: Array<TagObjectUnion.Type>,
            ): typia.Primitive<Array<TagObjectUnion.Type>> => {
                const $io0: any = (input: any): boolean =>
                    "number" === typeof input.value && 3 <= input.value;
                const $io1: any = (input: any): boolean =>
                    "string" === typeof input.value &&
                    3 <= input.value.length &&
                    7 >= input.value.length;
                const $throws: any = (typia.assertClone as any).throws;
                const $co0: any = (input: any): any => ({
                    value: input.value as any,
                });
                const $co1: any = (input: any): any => ({
                    value: input.value as any,
                });
                return Array.isArray(input)
                    ? (() =>
                          input.map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $cu0(elem)
                                  : (elem as any),
                          ))()
                    : (input as any);
            };
            assert(input);
            const output: any = clone(input);
            return output;
        })(input),
    TagObjectUnion.SPOILERS,
);
