import typia from "../../../../src";
import { _test_assertClone } from "../../../internal/_test_assertClone";
import { ArraySimple } from "../../../structures/ArraySimple";

export const test_createAssertClone_ArraySimple = _test_assertClone(
    "ArraySimple",
    ArraySimple.generate,
    (input: any): typia.Primitive<Array<ArraySimple.IPerson>> => {
        const assert = (input: any): ArraySimple => {
            const $guard = (typia.createAssertClone as any).guard;
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is ArraySimple => {
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
                    ("string" === typeof input.email ||
                        $guard(_exceptionable, {
                            path: _path + ".email",
                            expected: "string",
                            value: input.email,
                        })) &&
                    (Array.isArray(input.hobbies) ||
                        $guard(_exceptionable, {
                            path: _path + ".hobbies",
                            expected: "Array<Resolve<ArraySimple.IHobby>>",
                            value: input.hobbies,
                        })) &&
                    input.hobbies.every(
                        (elem: any, _index2: number) =>
                            (("object" === typeof elem && null !== elem) ||
                                $guard(_exceptionable, {
                                    path: _path + ".hobbies[" + _index2 + "]",
                                    expected: "Resolve<ArraySimple.IHobby>",
                                    value: elem,
                                })) &&
                            $ao1(
                                elem,
                                _path + ".hobbies[" + _index2 + "]",
                                true && _exceptionable,
                            ),
                    );
                const $ao1 = (
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
                    ("string" === typeof input.body ||
                        $guard(_exceptionable, {
                            path: _path + ".body",
                            expected: "string",
                            value: input.body,
                        })) &&
                    (("number" === typeof input.rank &&
                        Number.isFinite(input.rank)) ||
                        $guard(_exceptionable, {
                            path: _path + ".rank",
                            expected: "number",
                            value: input.rank,
                        }));
                return (
                    (Array.isArray(input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "Array<Resolve<ArraySimple.IPerson>>",
                            value: input,
                        })) &&
                    input.every(
                        (elem: any, _index1: number) =>
                            (("object" === typeof elem && null !== elem) ||
                                $guard(true, {
                                    path: _path + "[" + _index1 + "]",
                                    expected: "Resolve<ArraySimple.IPerson>",
                                    value: elem,
                                })) &&
                            $ao0(elem, _path + "[" + _index1 + "]", true),
                    )
                );
            })(input, "$input", true);
            return input;
        };
        const clone = (input: ArraySimple): typia.Primitive<ArraySimple> => {
            const $io1 = (input: any): boolean =>
                "string" === typeof input.name &&
                "string" === typeof input.body &&
                "number" === typeof input.rank;
            const $co0 = (input: any): any => ({
                name: input.name as any,
                email: input.email as any,
                hobbies: Array.isArray(input.hobbies)
                    ? input.hobbies.map((elem: any) =>
                          "object" === typeof elem && null !== elem
                              ? $co1(elem)
                              : (elem as any),
                      )
                    : (input.hobbies as any),
            });
            const $co1 = (input: any): any => ({
                name: input.name as any,
                body: input.body as any,
                rank: input.rank as any,
            });
            return Array.isArray(input)
                ? input.map((elem: any) =>
                      "object" === typeof elem && null !== elem
                          ? $co0(elem)
                          : (elem as any),
                  )
                : (input as any);
        };
        assert(input);
        const output = clone(input);
        return output;
    },
    ArraySimple.SPOILERS,
);
