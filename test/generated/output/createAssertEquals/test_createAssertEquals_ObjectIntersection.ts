import typia from "../../../../src";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { ObjectIntersection } from "../../../structures/ObjectIntersection";

export const test_createAssertEquals_ObjectIntersection = _test_assertEquals(
    "ObjectIntersection",
    ObjectIntersection.generate,
    (input: any): ObjectIntersection => {
        const $guard = (typia.createAssertEquals as any).guard;
        const $join = (typia.createAssertEquals as any).join;
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is ObjectIntersection => {
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
                    })) &&
                (3 === Object.keys(input).length ||
                    false === _exceptionable ||
                    Object.keys(input).every((key) => {
                        if (
                            ["email", "name", "vulnerable"].some(
                                (prop) => key === prop,
                            )
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
            return (
                (("object" === typeof input && null !== input) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "Resolve<ObjectIntersection>",
                        value: input,
                    })) &&
                $ao0(input, _path + "", true)
            );
        })(input, "$input", true);
        return input;
    },
);
