import typia from "../../../../src";
import { _test_json_assertParse } from "../../../internal/_test_json_assertParse";
import { ObjectInternal } from "../../../structures/ObjectInternal";

export const test_json_assertParse_ObjectInternal = _test_json_assertParse(
    "ObjectInternal",
    ObjectInternal.generate,
    (input) =>
        ((input: string): typia.Primitive<ObjectInternal> => {
            const assert = (input: any): ObjectInternal => {
                const __is = (input: any): input is ObjectInternal => {
                    return (
                        "object" === typeof input &&
                        null !== input &&
                        "string" === typeof (input as any).id &&
                        "string" === typeof (input as any).name
                    );
                };
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is ObjectInternal => {
                        const $guard = (typia.json.assertParse as any).guard;
                        const $ao0 = (
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
                            ((("object" === typeof input && null !== input) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected: "ObjectInternal",
                                    value: input,
                                })) &&
                                $ao0(input, _path + "", true)) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "ObjectInternal",
                                value: input,
                            })
                        );
                    })(input, "$input", true);
                return input;
            };
            input = JSON.parse(input);
            return assert(input) as any;
        })(input),
    ObjectInternal.SPOILERS,
);
