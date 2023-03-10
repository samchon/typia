import typia from "../../../../src";
import { _test_assertPrune } from "../../../internal/_test_assertPrune";
import { ObjectIntersection } from "../../../structures/ObjectIntersection";

export const test_assertPrune_ObjectIntersection = _test_assertPrune(
    "ObjectIntersection",
    ObjectIntersection.generate,
    (input) =>
        ((input: any): ObjectIntersection.IEmail & ObjectIntersection.IName => {
            const assert = (
                input: any,
            ): ObjectIntersection.IEmail & ObjectIntersection.IName => {
                const $guard = (typia.assertPrune as any).guard;
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ObjectIntersection.IEmail &
                    ObjectIntersection.IName => {
                    const $ao0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
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
                        ("boolean" === typeof input.vulnerable ||
                            $guard(_exceptionable, {
                                path: _path + ".vulnerable",
                                expected: "boolean",
                                value: input.vulnerable,
                            }));
                    return (
                        (("object" === typeof input && null !== input) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "ObjectIntersection",
                                value: input,
                            })) &&
                        $ao0(input, _path + "", true)
                    );
                })(input, "$input", true);
                return input;
            };
            const prune = (
                input: ObjectIntersection.IEmail & ObjectIntersection.IName,
            ): void => {
                const $po0 = (input: any): any => {
                    for (const key of Object.keys(input)) {
                        if (
                            "email" === key ||
                            "name" === key ||
                            "vulnerable" === key
                        )
                            continue;
                        delete input[key];
                    }
                };
                if ("object" === typeof input && null !== input) $po0(input);
            };
            assert(input);
            prune(input);
            return input;
        })(input),
    ObjectIntersection.SPOILERS,
);
