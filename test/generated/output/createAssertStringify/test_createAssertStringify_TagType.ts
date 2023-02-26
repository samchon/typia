import typia from "../../../../src";
import { _test_assertStringify } from "../../../internal/_test_assertStringify";
import { TagType } from "../../../structures/TagType";

export const test_createAssertStringify_TagType = _test_assertStringify(
    "TagType",
    TagType.generate,
    (input: any): string => {
        const assert = (input: any): TagType => {
            const $guard = (typia.createAssertStringify as any).guard;
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is TagType => {
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (("number" === typeof input.int &&
                        Number.isFinite(input.int) &&
                        parseInt(input.int) === input.int) ||
                        $guard(_exceptionable, {
                            path: _path + ".int",
                            expected: "number",
                            value: input.int,
                        })) &&
                    (("number" === typeof input.uint &&
                        Number.isFinite(input.uint) &&
                        parseInt(input.uint) === input.uint &&
                        0 <= input.uint) ||
                        $guard(_exceptionable, {
                            path: _path + ".uint",
                            expected: "number",
                            value: input.uint,
                        }));
                return (
                    (Array.isArray(input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "Array<Resolve<TagType.Type>>",
                            value: input,
                        })) &&
                    input.every(
                        (elem: any, _index1: number) =>
                            (("object" === typeof elem && null !== elem) ||
                                $guard(true, {
                                    path: _path + "[" + _index1 + "]",
                                    expected: "Resolve<TagType.Type>",
                                    value: elem,
                                })) &&
                            $ao0(elem, _path + "[" + _index1 + "]", true),
                    )
                );
            })(input, "$input", true);
            return input;
        };
        const stringify = (input: TagType): string => {
            const $number = (typia.createAssertStringify as any).number;
            return `[${input
                .map(
                    (elem: any) =>
                        `{"int":${$number(elem.int)},"uint":${$number(
                            elem.uint,
                        )}}`,
                )
                .join(",")}]`;
        };
        return stringify(assert(input));
    },
    TagType.SPOILERS,
);
