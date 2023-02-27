import typia from "../../../../src";
import { _test_assert } from "../../../internal/_test_assert";
import { ObjectAlias } from "../../../structures/ObjectAlias";

export const test_assert_ObjectAlias = _test_assert(
    "ObjectAlias",
    ObjectAlias.generate,
    (input) =>
        ((input: any): Array<ObjectAlias.IMember> => {
            const $guard = (typia.assert as any).guard;
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is Array<ObjectAlias.IMember> => {
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (null === input.id ||
                        "string" === typeof input.id ||
                        $guard(_exceptionable, {
                            path: _path + ".id",
                            expected: "(null | string)",
                            value: input.id,
                        })) &&
                    ("string" === typeof input.email ||
                        $guard(_exceptionable, {
                            path: _path + ".email",
                            expected: "string",
                            value: input.email,
                        })) &&
                    ("string" === typeof input.name ||
                        $guard(_exceptionable, {
                            path: _path + ".name",
                            expected: "string",
                            value: input.name,
                        })) &&
                    (null === input.sex ||
                        1 === input.sex ||
                        2 === input.sex ||
                        "male" === input.sex ||
                        "female" === input.sex ||
                        $guard(_exceptionable, {
                            path: _path + ".sex",
                            expected: '("female" | "male" | 1 | 2 | null)',
                            value: input.sex,
                        })) &&
                    (null === input.age ||
                        ("number" === typeof input.age &&
                            Number.isFinite(input.age)) ||
                        $guard(_exceptionable, {
                            path: _path + ".age",
                            expected: "(null | number)",
                            value: input.age,
                        })) &&
                    (null === input.dead ||
                        "boolean" === typeof input.dead ||
                        $guard(_exceptionable, {
                            path: _path + ".dead",
                            expected: "(boolean | null)",
                            value: input.dead,
                        }));
                return (
                    (Array.isArray(input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "Array<Resolve<ObjectAlias.IMember>>",
                            value: input,
                        })) &&
                    input.every(
                        (elem: any, _index1: number) =>
                            (("object" === typeof elem && null !== elem) ||
                                $guard(true, {
                                    path: _path + "[" + _index1 + "]",
                                    expected: "Resolve<ObjectAlias.IMember>",
                                    value: elem,
                                })) &&
                            $ao0(elem, _path + "[" + _index1 + "]", true),
                    )
                );
            })(input, "$input", true);
            return input;
        })(input),
    ObjectAlias.SPOILERS,
);
