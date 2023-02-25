import typia from "../../../../src";
import { TagTuple } from "../../../structures/TagTuple";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_createAssertEquals_TagTuple = _test_assertEquals(
    "TagTuple",
    TagTuple.generate,
    (input: any): TagTuple => {
        const $guard = (typia.createAssertEquals as any).guard;
        const $join = (typia.createAssertEquals as any).join;
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is TagTuple => {
            const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                (Array.isArray(input.tuple) ||
                    $guard(_exceptionable, {
                        path: _path + ".tuple",
                        expected:
                            "[string, number, Array<string>, Array<number>]",
                        value: input.tuple,
                    })) &&
                (input.tuple.length === 4 ||
                    $guard(_exceptionable, {
                        path: _path + ".tuple",
                        expected:
                            "[string, number, Array<string>, Array<number>]",
                        value: input.tuple,
                    })) &&
                (("string" === typeof input.tuple[0] &&
                    3 <= input.tuple[0].length &&
                    7 >= input.tuple[0].length) ||
                    $guard(_exceptionable, {
                        path: _path + ".tuple[0]",
                        expected: "string",
                        value: input.tuple[0],
                    })) &&
                (("number" === typeof input.tuple[1] &&
                    3 <= input.tuple[1] &&
                    7 >= input.tuple[1]) ||
                    $guard(_exceptionable, {
                        path: _path + ".tuple[1]",
                        expected: "number",
                        value: input.tuple[1],
                    })) &&
                ((Array.isArray(input.tuple[2]) &&
                    3 <= input.tuple[2].length &&
                    7 >= input.tuple[2].length) ||
                    $guard(_exceptionable, {
                        path: _path + ".tuple[2]",
                        expected: "Array<string>",
                        value: input.tuple[2],
                    })) &&
                input.tuple[2].every(
                    (elem: any, _index1: number) =>
                        ("string" === typeof elem &&
                            3 <= elem.length &&
                            7 >= elem.length) ||
                        $guard(_exceptionable, {
                            path: _path + ".tuple[2][" + _index1 + "]",
                            expected: "string",
                            value: elem,
                        }),
                ) &&
                ((Array.isArray(input.tuple[3]) &&
                    3 <= input.tuple[3].length &&
                    7 >= input.tuple[3].length) ||
                    $guard(_exceptionable, {
                        path: _path + ".tuple[3]",
                        expected: "Array<number>",
                        value: input.tuple[3],
                    })) &&
                input.tuple[3].every(
                    (elem: any, _index2: number) =>
                        ("number" === typeof elem && 3 <= elem && 7 >= elem) ||
                        $guard(_exceptionable, {
                            path: _path + ".tuple[3][" + _index2 + "]",
                            expected: "number",
                            value: elem,
                        }),
                ) &&
                (1 === Object.keys(input).length ||
                    false === _exceptionable ||
                    Object.keys(input).every((key) => {
                        if (["tuple"].some((prop) => key === prop)) return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return $guard(_exceptionable, {
                            path: _path + $join(key),
                            expected: "undefined",
                            value: value,
                        });
                    }));
            return (
                (("object" === typeof input && null !== input) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "Resolve<TagTuple>",
                        value: input,
                    })) &&
                $ao0(input, _path + "", true)
            );
        })(input, "$input", true);
        return input;
    },
);
