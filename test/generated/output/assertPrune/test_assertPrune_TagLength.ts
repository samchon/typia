import typia from "../../../../src";
import { _test_assertPrune } from "../../../internal/_test_assertPrune";
import { TagLength } from "../../../structures/TagLength";

export const test_assertPrune_TagLength = _test_assertPrune(
    "TagLength",
    TagLength.generate,
    (input) =>
        ((input: any): Array<TagLength.Type> => {
            const assert = (input: any): Array<TagLength.Type> => {
                const $guard = (typia.assertPrune as any).guard;
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is Array<TagLength.Type> => {
                    const $ao0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (("string" === typeof input.fixed &&
                            5 === input.fixed.length) ||
                            $guard(_exceptionable, {
                                path: _path + ".fixed",
                                expected: "string",
                                value: input.fixed,
                            })) &&
                        (("string" === typeof input.minimum &&
                            3 <= input.minimum.length) ||
                            $guard(_exceptionable, {
                                path: _path + ".minimum",
                                expected: "string",
                                value: input.minimum,
                            })) &&
                        (("string" === typeof input.maximum &&
                            7 >= input.maximum.length) ||
                            $guard(_exceptionable, {
                                path: _path + ".maximum",
                                expected: "string",
                                value: input.maximum,
                            })) &&
                        (("string" === typeof input.minimum_and_maximum &&
                            3 <= input.minimum_and_maximum.length &&
                            7 >= input.minimum_and_maximum.length) ||
                            $guard(_exceptionable, {
                                path: _path + ".minimum_and_maximum",
                                expected: "string",
                                value: input.minimum_and_maximum,
                            }));
                    return (
                        (Array.isArray(input) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "Array<Resolve<TagLength.Type>>",
                                value: input,
                            })) &&
                        input.every(
                            (elem: any, _index1: number) =>
                                (("object" === typeof elem && null !== elem) ||
                                    $guard(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected: "Resolve<TagLength.Type>",
                                        value: elem,
                                    })) &&
                                $ao0(elem, _path + "[" + _index1 + "]", true),
                        )
                    );
                })(input, "$input", true);
                return input;
            };
            const prune = (input: Array<TagLength.Type>): void => {
                const $po0 = (input: any): any => {
                    for (const key of Object.keys(input)) {
                        if (
                            "fixed" === key ||
                            "minimum" === key ||
                            "maximum" === key ||
                            "minimum_and_maximum" === key
                        )
                            continue;
                        delete input[key];
                    }
                };
                if (Array.isArray(input))
                    input.forEach((elem: any) => {
                        if ("object" === typeof elem && null !== elem)
                            $po0(elem);
                    });
            };
            assert(input);
            prune(input);
            return input;
        })(input),
    TagLength.SPOILERS,
);
