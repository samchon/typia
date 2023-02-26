import typia from "../../../../src";
import { _test_assertStringify } from "../../../internal/_test_assertStringify";
import { TagAtomicUnion } from "../../../structures/TagAtomicUnion";

export const test_createAssertStringify_TagAtomicUnion = _test_assertStringify(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    (input: any): string => {
        const assert = (input: any): TagAtomicUnion => {
            const $guard = (typia.createAssertStringify as any).guard;
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is TagAtomicUnion => {
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ("string" === typeof input.value &&
                        3 <= input.value.length &&
                        7 >= input.value.length) ||
                    ("number" === typeof input.value &&
                        Number.isFinite(input.value) &&
                        3 <= input.value) ||
                    $guard(_exceptionable, {
                        path: _path + ".value",
                        expected: "(number | string)",
                        value: input.value,
                    });
                return (
                    (Array.isArray(input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "Array<Resolve<TagAtomicUnion.Type>>",
                            value: input,
                        })) &&
                    input.every(
                        (elem: any, _index1: number) =>
                            (("object" === typeof elem && null !== elem) ||
                                $guard(true, {
                                    path: _path + "[" + _index1 + "]",
                                    expected: "Resolve<TagAtomicUnion.Type>",
                                    value: elem,
                                })) &&
                            $ao0(elem, _path + "[" + _index1 + "]", true),
                    )
                );
            })(input, "$input", true);
            return input;
        };
        const stringify = (input: TagAtomicUnion): string => {
            const $string = (typia.createAssertStringify as any).string;
            const $number = (typia.createAssertStringify as any).number;
            const $throws = (typia.createAssertStringify as any).throws;
            const $so0 = (input: any): any =>
                `{"value":${(() => {
                    if ("string" === typeof input.value)
                        return $string(input.value);
                    if ("number" === typeof input.value)
                        return $number(input.value);
                    $throws({
                        expected: "(number | string)",
                        value: input.value,
                    });
                })()}}`;
            return `[${input.map((elem: any) => $so0(elem)).join(",")}]`;
        };
        return stringify(assert(input));
    },
    TagAtomicUnion.SPOILERS,
);
