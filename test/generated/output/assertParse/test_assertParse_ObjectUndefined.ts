import typia from "../../../../src";
import { _test_assertParse } from "../../../internal/_test_assertParse";
import { ObjectUndefined } from "../../../structures/ObjectUndefined";

export const test_assertParse_ObjectUndefined = _test_assertParse(
    "ObjectUndefined",
    ObjectUndefined.generate,
    (input) =>
        ((input: string): typia.Primitive<Array<ObjectUndefined.ILecture>> => {
            const assert = (input: any): ObjectUndefined => {
                const $guard = (typia.assertParse as any).guard;
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
                                        "(Resolve<ObjectUndefined.IClassroom> | undefined)",
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
                            }));
                    return (
                        (Array.isArray(input) ||
                            $guard(true, {
                                path: _path + "",
                                expected:
                                    "Array<Resolve<ObjectUndefined.ILecture>>",
                                value: input,
                            })) &&
                        input.every(
                            (elem: any, _index1: number) =>
                                (("object" === typeof elem && null !== elem) ||
                                    $guard(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected:
                                            "Resolve<ObjectUndefined.ILecture>",
                                        value: elem,
                                    })) &&
                                $ao0(elem, _path + "[" + _index1 + "]", true),
                        )
                    );
                })(input, "$input", true);
                return input;
            };
            input = JSON.parse(input);
            return assert(input);
        })(input),
    ObjectUndefined.SPOILERS,
);
