import typia from "../../../../src";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { TagType } from "../../../structures/TagType";

export const test_createAssertEquals_TagType = _test_assertEquals(
    "TagType",
    TagType.generate,
    (input: any): TagType => {
        const $guard = (typia.createAssertEquals as any).guard;
        const $join = (typia.createAssertEquals as any).join;
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
                    })) &&
                (2 === Object.keys(input).length ||
                    false === _exceptionable ||
                    Object.keys(input).every((key) => {
                        if (["int", "uint"].some((prop) => key === prop))
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
    },
);
