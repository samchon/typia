import typia from "../../../../src";
import { _test_assertClone } from "../../../internal/_test_assertClone";
import { ArrayRecursive } from "../../../structures/ArrayRecursive";

export const test_assertClone_ArrayRecursive = _test_assertClone(
    "ArrayRecursive",
    ArrayRecursive.generate,
    (input) =>
        ((input: any): typia.Primitive<ArrayRecursive.ICategory> => {
            const assert = (input: any): ArrayRecursive.ICategory => {
                const $guard = (typia.assertClone as any).guard;
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ArrayRecursive.ICategory => {
                    const $ao0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (Array.isArray(input.children) ||
                            $guard(_exceptionable, {
                                path: _path + ".children",
                                expected:
                                    "Array<Resolve<ArrayRecursive.ICategory>>",
                                value: input.children,
                            })) &&
                        input.children.every(
                            (elem: any, _index1: number) =>
                                (("object" === typeof elem && null !== elem) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            ".children[" +
                                            _index1 +
                                            "]",
                                        expected:
                                            "Resolve<ArrayRecursive.ICategory>",
                                        value: elem,
                                    })) &&
                                $ao0(
                                    elem,
                                    _path + ".children[" + _index1 + "]",
                                    true && _exceptionable,
                                ),
                        ) &&
                        (("number" === typeof input.id &&
                            Number.isFinite(input.id)) ||
                            $guard(_exceptionable, {
                                path: _path + ".id",
                                expected: "number",
                                value: input.id,
                            })) &&
                        ("string" === typeof input.code ||
                            $guard(_exceptionable, {
                                path: _path + ".code",
                                expected: "string",
                                value: input.code,
                            })) &&
                        (("number" === typeof input.sequence &&
                            Number.isFinite(input.sequence)) ||
                            $guard(_exceptionable, {
                                path: _path + ".sequence",
                                expected: "number",
                                value: input.sequence,
                            })) &&
                        (("object" === typeof input.created_at &&
                            null !== input.created_at) ||
                            $guard(_exceptionable, {
                                path: _path + ".created_at",
                                expected: "Resolve<ArrayRecursive.ITimestamp>",
                                value: input.created_at,
                            })) &&
                        $ao1(
                            input.created_at,
                            _path + ".created_at",
                            true && _exceptionable,
                        );
                    const $ao1 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (("number" === typeof input.time &&
                            Number.isFinite(input.time)) ||
                            $guard(_exceptionable, {
                                path: _path + ".time",
                                expected: "number",
                                value: input.time,
                            })) &&
                        (("number" === typeof input.zone &&
                            Number.isFinite(input.zone)) ||
                            $guard(_exceptionable, {
                                path: _path + ".zone",
                                expected: "number",
                                value: input.zone,
                            }));
                    return (
                        (("object" === typeof input && null !== input) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "Resolve<ArrayRecursive.ICategory>",
                                value: input,
                            })) &&
                        $ao0(input, _path + "", true)
                    );
                })(input, "$input", true);
                return input;
            };
            const clone = (
                input: ArrayRecursive.ICategory,
            ): typia.Primitive<ArrayRecursive.ICategory> => {
                const $io0 = (input: any): boolean =>
                    Array.isArray(input.children) &&
                    input.children.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io0(elem),
                    ) &&
                    "number" === typeof input.id &&
                    "string" === typeof input.code &&
                    "number" === typeof input.sequence &&
                    "object" === typeof input.created_at &&
                    null !== input.created_at &&
                    $io1(input.created_at);
                const $io1 = (input: any): boolean =>
                    "number" === typeof input.time &&
                    "number" === typeof input.zone;
                const $co0 = (input: any): any => ({
                    children: Array.isArray(input.children)
                        ? input.children.map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $co0(elem)
                                  : (elem as any),
                          )
                        : (input.children as any),
                    id: input.id as any,
                    code: input.code as any,
                    sequence: input.sequence as any,
                    created_at:
                        "object" === typeof input.created_at &&
                        null !== input.created_at
                            ? $co1(input.created_at)
                            : (input.created_at as any),
                });
                const $co1 = (input: any): any => ({
                    time: input.time as any,
                    zone: input.zone as any,
                });
                return "object" === typeof input && null !== input
                    ? $co0(input)
                    : (input as any);
            };
            assert(input);
            const output = clone(input);
            return output;
        })(input),
    ArrayRecursive.SPOILERS,
);
