import typia from "../../../../src";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { ObjectUndefined } from "../../../structures/ObjectUndefined";

export const test_createAssertEquals_ObjectUndefined = _test_assertEquals(
    "ObjectUndefined",
    ObjectUndefined.generate,
    (input: any): ObjectUndefined => {
        const $guard = (typia.createAssertEquals as any).guard;
        const $join = (typia.createAssertEquals as any).join;
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is ObjectUndefined => {
            const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                ("string" === typeof input.name ||
                    $guard(_exceptionable, {
                        path: _path + ".name",
                        expected: "string",
                        value: input.name,
                    })) &&
                (undefined === input.professor ||
                    "string" === typeof input.professor ||
                    ("number" === typeof input.professor &&
                        Number.isFinite(input.professor)) ||
                    $guard(_exceptionable, {
                        path: _path + ".professor",
                        expected: "(number | string | undefined)",
                        value: input.professor,
                    })) &&
                (undefined === input.classroom ||
                    ((("object" === typeof input.classroom &&
                        null !== input.classroom) ||
                        $guard(_exceptionable, {
                            path: _path + ".classroom",
                            expected:
                                "(ObjectUndefined.IClassroom | undefined)",
                            value: input.classroom,
                        })) &&
                        $ao1(
                            input.classroom,
                            _path + ".classroom",
                            true && _exceptionable,
                        ))) &&
                (undefined === input.grade ||
                    ("number" === typeof input.grade &&
                        Number.isFinite(input.grade)) ||
                    $guard(_exceptionable, {
                        path: _path + ".grade",
                        expected: "(number | undefined)",
                        value: input.grade,
                    })) &&
                (null !== input.nothing ||
                    $guard(_exceptionable, {
                        path: _path + ".nothing",
                        expected: "undefined",
                        value: input.nothing,
                    })) &&
                (undefined === input.nothing ||
                    $guard(_exceptionable, {
                        path: _path + ".nothing",
                        expected: "undefined",
                        value: input.nothing,
                    })) &&
                true &&
                (null !== input.never ||
                    $guard(_exceptionable, {
                        path: _path + ".never",
                        expected: "undefined",
                        value: input.never,
                    })) &&
                (undefined === input.never ||
                    $guard(_exceptionable, {
                        path: _path + ".never",
                        expected: "undefined",
                        value: input.never,
                    })) &&
                (2 === Object.keys(input).length ||
                    false === _exceptionable ||
                    Object.keys(input).every((key) => {
                        if (
                            [
                                "name",
                                "professor",
                                "classroom",
                                "grade",
                                "nothing",
                                "unknown",
                                "never",
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
            const $ao1 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                ("string" === typeof input.id ||
                    $guard(_exceptionable, {
                        path: _path + ".id",
                        expected: "string",
                        value: input.id,
                    })) &&
                ("string" === typeof input.name ||
                    $guard(_exceptionable, {
                        path: _path + ".name",
                        expected: "string",
                        value: input.name,
                    })) &&
                (2 === Object.keys(input).length ||
                    false === _exceptionable ||
                    Object.keys(input).every((key) => {
                        if (["id", "name"].some((prop) => key === prop))
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
                        expected: "Array<ObjectUndefined.ILecture>",
                        value: input,
                    })) &&
                input.every(
                    (elem: any, _index1: number) =>
                        (("object" === typeof elem && null !== elem) ||
                            $guard(true, {
                                path: _path + "[" + _index1 + "]",
                                expected: "ObjectUndefined.ILecture",
                                value: elem,
                            })) &&
                        $ao0(elem, _path + "[" + _index1 + "]", true),
                )
            );
        })(input, "$input", true);
        return input;
    },
);
