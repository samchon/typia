import typia from "../../../../src";
import { _test_assertPrune } from "../../../internal/_test_assertPrune";
import { TagType } from "../../../structures/TagType";

export const test_createAssertPrune_TagType = _test_assertPrune(
    "TagType",
    TagType.generate,
    (input: any): TagType => {
        const assert: any = (input: any): TagType => {
            const __is: any = (input: any): input is TagType => {
                const $io0: any = (input: any): boolean =>
                    "number" === typeof input.int &&
                    Number.isFinite(input.int) &&
                    parseInt(input.int) === input.int &&
                    "number" === typeof input.uint &&
                    Number.isFinite(input.uint) &&
                    parseInt(input.uint) === input.uint &&
                    0 <= input.uint;
                return (
                    Array.isArray(input) &&
                    input.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io0(elem),
                    )
                );
            };
            const $guard: any = (typia.createAssertPrune as any).guard;
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is TagType => {
                    const $ao0: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (("number" === typeof input.int &&
                            Number.isFinite(input.int) &&
                            (parseInt(input.int) === input.int ||
                                $guard(_exceptionable, {
                                    path: _path + ".int",
                                    expected: "number (@type int)",
                                    value: input.int,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".int",
                                expected: "number",
                                value: input.int,
                            })) &&
                        (("number" === typeof input.uint &&
                            Number.isFinite(input.uint) &&
                            (parseInt(input.uint) === input.uint ||
                                $guard(_exceptionable, {
                                    path: _path + ".uint",
                                    expected: "number (@type uint)",
                                    value: input.uint,
                                })) &&
                            (0 <= input.uint ||
                                $guard(_exceptionable, {
                                    path: _path + ".uint",
                                    expected: "number (@type uint)",
                                    value: input.uint,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".uint",
                                expected: "number",
                                value: input.uint,
                            }));
                    return (
                        (Array.isArray(input) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "TagType",
                                value: input,
                            })) &&
                        input.every(
                            (elem: any, _index1: number) =>
                                (("object" === typeof elem && null !== elem) ||
                                    $guard(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected: "TagType.Type",
                                        value: elem,
                                    })) &&
                                $ao0(elem, _path + "[" + _index1 + "]", true),
                        )
                    );
                })(input, "$input", true);
            return input;
        };
        const prune: any = (input: TagType): void => {
            const $po0: any = (input: any): any => {
                for (const key: any of Object.keys(input)) {
                    if ("int" === key || "uint" === key) continue;
                    delete input[key];
                }
            };
            if (Array.isArray(input))
                (() =>
                    input.forEach((elem: any) => {
                        if ("object" === typeof elem && null !== elem)
                            $po0(elem);
                    }))();
        };
        assert(input);
        prune(input);
        return input;
    },
    TagType.SPOILERS,
);
