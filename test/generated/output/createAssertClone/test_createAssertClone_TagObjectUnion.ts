import typia from "../../../../src";
import { _test_assertClone } from "../../../internal/_test_assertClone";
import { TagObjectUnion } from "../../../structures/TagObjectUnion";

export const test_createAssertClone_TagObjectUnion = _test_assertClone(
    "TagObjectUnion",
    TagObjectUnion.generate,
    (input: any): typia.Primitive<TagObjectUnion> => {
        const assert = (input: any): TagObjectUnion => {
            const $guard = (typia.createAssertClone as any).guard;
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is TagObjectUnion => {
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ("number" === typeof input.value &&
                        Number.isFinite(input.value) &&
                        3 <= input.value) ||
                    $guard(_exceptionable, {
                        path: _path + ".value",
                        expected: "number",
                        value: input.value,
                    });
                const $ao1 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ("string" === typeof input.value &&
                        3 <= input.value.length &&
                        7 >= input.value.length) ||
                    $guard(_exceptionable, {
                        path: _path + ".value",
                        expected: "string",
                        value: input.value,
                    });
                const $au0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): any =>
                    (() => {
                        if ("number" === typeof input.value)
                            return $ao0(input, _path, true && _exceptionable);
                        if ("string" === typeof input.value)
                            return $ao1(input, _path, true && _exceptionable);
                        return $guard(_exceptionable, {
                            path: _path,
                            expected:
                                "(TagObjectUnion.Numeric | TagObjectUnion.Literal)",
                            value: input,
                        });
                    })();
                return (
                    (Array.isArray(input) ||
                        $guard(true, {
                            path: _path + "",
                            expected:
                                "Array<(Resolve<TagObjectUnion.Literal> | Resolve<TagObjectUnion.Numeric>)>",
                            value: input,
                        })) &&
                    input.every(
                        (elem: any, _index1: number) =>
                            (("object" === typeof elem && null !== elem) ||
                                $guard(true, {
                                    path: _path + "[" + _index1 + "]",
                                    expected:
                                        "(Resolve<TagObjectUnion.Literal> | Resolve<TagObjectUnion.Numeric>)",
                                    value: elem,
                                })) &&
                            $au0(elem, _path + "[" + _index1 + "]", true),
                    )
                );
            })(input, "$input", true);
            return input;
        };
        const clone = (
            input: TagObjectUnion,
        ): typia.Primitive<TagObjectUnion> => {
            const $throws = (typia.createAssertClone as any).throws;
            const $io0 = (input: any): boolean =>
                "number" === typeof input.value && 3 <= input.value;
            const $io1 = (input: any): boolean =>
                "string" === typeof input.value &&
                3 <= input.value.length &&
                7 >= input.value.length;
            const $iu0 = (input: any): any =>
                (() => {
                    if ("number" === typeof input.value) return $io0(input);
                    if ("string" === typeof input.value) return $io1(input);
                    return false;
                })();
            const $co0 = (input: any): any => ({
                value: input.value as any,
            });
            const $co1 = (input: any): any => ({
                value: input.value as any,
            });
            const $cu0 = (input: any): any =>
                (() => {
                    if ("number" === typeof input.value) return $co0(input);
                    if ("string" === typeof input.value) return $co1(input);
                    $throws({
                        expected:
                            "(TagObjectUnion.Numeric | TagObjectUnion.Literal)",
                        value: input,
                    });
                })();
            return Array.isArray(input)
                ? input.map((elem: any) =>
                      "object" === typeof elem && null !== elem
                          ? $cu0(elem)
                          : (elem as any),
                  )
                : (input as any);
        };
        assert(input);
        const output = clone(input);
        return output;
    },
    TagObjectUnion.SPOILERS,
);
