import typia from "../../../../src";
import { _test_assertClone } from "../../../internal/_test_assertClone";
import { ObjectInternal } from "../../../structures/ObjectInternal";

export const test_assertClone_ObjectInternal = _test_assertClone(
    "ObjectInternal",
    ObjectInternal.generate,
    (input) =>
        ((input: any): typia.Primitive<ObjectInternal> => {
            const assert: any = (input: any): ObjectInternal => {
                const __is: any = (input: any): input is ObjectInternal => {
                    return (
                        "object" === typeof input &&
                        null !== input &&
                        "string" === typeof input.id &&
                        "string" === typeof input.name
                    );
                };
                const $guard: any = (typia.assertClone as any).guard;
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is ObjectInternal => {
                        const $ao0: any = (
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
                            (("object" === typeof input && null !== input) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected: "ObjectInternal",
                                    value: input,
                                })) &&
                            $ao0(input, _path + "", true)
                        );
                    })(input, "$input", true);
                return input;
            };
            const clone: any = (
                input: ObjectInternal,
            ): typia.Primitive<ObjectInternal> => {
                const $co0: any = (input: any): any => ({
                    id: input.id as any,
                    name: input.name as any,
                });
                return "object" === typeof input && null !== input
                    ? $co0(input)
                    : (input as any);
            };
            assert(input);
            const output: any = clone(input);
            return output;
        })(input),
    ObjectInternal.SPOILERS,
);
