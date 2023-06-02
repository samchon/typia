import typia from "../../../../src";
import { _test_assertStringify } from "../../../internal/_test_assertStringify";
import { TupleRestObject } from "../../../structures/TupleRestObject";

export const test_assertStringify_TupleRestObject = _test_assertStringify(
    "TupleRestObject",
    TupleRestObject.generate,
    (input) =>
        ((input: any): string => {
            const assert: any = (
                input: any,
            ): [boolean, number, ...TupleRestObject.IObject[]] => {
                const __is: any = (
                    input: any,
                ): input is [boolean, number, ...TupleRestObject.IObject[]] => {
                    const $io0: any = (input: any): boolean =>
                        "string" === typeof input.value;
                    return (
                        Array.isArray(input) &&
                        "boolean" === typeof input[0] &&
                        "number" === typeof input[1] &&
                        Number.isFinite(input[1]) &&
                        Array.isArray(input.slice(2)) &&
                        input
                            .slice(2)
                            .every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io0(elem),
                            )
                    );
                };
                const $guard: any = (typia.assertStringify as any).guard;
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is [
                        boolean,
                        number,
                        ...TupleRestObject.IObject[],
                    ] => {
                        const $ao0: any = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            "string" === typeof input.value ||
                            $guard(_exceptionable, {
                                path: _path + ".value",
                                expected: "string",
                                value: input.value,
                            });
                        return (
                            (Array.isArray(input) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected: "TupleRestObject",
                                    value: input,
                                })) &&
                            ("boolean" === typeof input[0] ||
                                $guard(true, {
                                    path: _path + "[0]",
                                    expected: "boolean",
                                    value: input[0],
                                })) &&
                            (("number" === typeof input[1] &&
                                Number.isFinite(input[1])) ||
                                $guard(true, {
                                    path: _path + "[1]",
                                    expected: "number",
                                    value: input[1],
                                })) &&
                            (Array.isArray(input.slice(2)) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected: "...TupleRestObject.IObject",
                                    value: input.slice(2),
                                })) &&
                            input.slice(2).every(
                                (elem: any, _index1: number) =>
                                    (("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(true, {
                                            path:
                                                _path +
                                                "[" +
                                                (2 + _index1) +
                                                "]",
                                            expected: "TupleRestObject.IObject",
                                            value: elem,
                                        })) &&
                                    $ao0(
                                        elem,
                                        _path + "[" + (2 + _index1) + "]",
                                        true,
                                    ),
                            )
                        );
                    })(input, "$input", true);
                return input;
            };
            const stringify: any = (
                input: [boolean, number, ...TupleRestObject.IObject[]],
            ): string => {
                const $number: any = (typia.assertStringify as any).number;
                const $string: any = (typia.assertStringify as any).string;
                const $rest: any = (typia.assertStringify as any).rest;
                return `[${input[0]},${$number(input[1])}${$rest(
                    (() =>
                        `[${input
                            .slice(2)
                            .map(
                                (elem: any) =>
                                    `{"value":${$string(elem.value)}}`,
                            )
                            .join(",")}]`)(),
                )}]`;
            };
            return stringify(assert(input));
        })(input),
    TupleRestObject.SPOILERS,
);
