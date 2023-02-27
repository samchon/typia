import typia from "../../../../src";
import { _test_assertPrune } from "../../../internal/_test_assertPrune";
import { ObjectLiteralType } from "../../../structures/ObjectLiteralType";

export const test_createAssertPrune_ObjectLiteralType = _test_assertPrune(
    "ObjectLiteralType",
    ObjectLiteralType.generate,
    (input: any): ObjectLiteralType => {
        const assert = (input: any): ObjectLiteralType => {
            const $guard = (typia.createAssertPrune as any).guard;
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is ObjectLiteralType => {
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
                        })) &&
                    (("number" === typeof input.age &&
                        Number.isFinite(input.age)) ||
                        $guard(_exceptionable, {
                            path: _path + ".age",
                            expected: "number",
                            value: input.age,
                        }));
                return (
                    (("object" === typeof input && null !== input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "Resolve<__object>",
                            value: input,
                        })) &&
                    $ao0(input, _path + "", true)
                );
            })(input, "$input", true);
            return input;
        };
        const prune = (input: ObjectLiteralType): void => {
            const $po0 = (input: any): any => {
                for (const key of Object.keys(input)) {
                    if ("id" === key || "name" === key || "age" === key)
                        continue;
                    delete input[key];
                }
            };
            if ("object" === typeof input && null !== input) $po0(input);
        };
        assert(input);
        prune(input);
        return input;
    },
    ObjectLiteralType.SPOILERS,
);
