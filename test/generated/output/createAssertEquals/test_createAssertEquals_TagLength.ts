import typia from "../../../../src";
import { TagLength } from "../../../structures/TagLength";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_createAssertEquals_TagLength = _test_assertEquals(
    "TagLength",
    TagLength.generate,
    (input: any): TagLength => {
        const $guard = (typia.createAssertEquals as any).guard;
        const $join = (typia.createAssertEquals as any).join;
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is TagLength => {
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
                    })) &&
                (4 === Object.keys(input).length ||
                    false === _exceptionable ||
                    Object.keys(input).every((key) => {
                        if (
                            [
                                "fixed",
                                "minimum",
                                "maximum",
                                "minimum_and_maximum",
                            ].some((prop) => key === prop)
                        )
                            return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return $guard(_exceptionable, {
                            path: _path + $join(key),
                            expected: "undefined",
                            value: value,
                        });
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
    },
);
