import typia from "../../../../src";
import { _test_equals } from "../../../internal/_test_equals";
import { ObjectIntersection } from "../../../structures/ObjectIntersection";

export const test_equals_ObjectIntersection = _test_equals(
    "ObjectIntersection",
    ObjectIntersection.generate,
    (input) =>
        ((
            input: any,
            _exceptionable: boolean = true,
        ): input is ObjectIntersection.IEmail & ObjectIntersection.IName => {
            const $io0 = (
                input: any,
                _exceptionable: boolean = true,
            ): boolean =>
                "string" === typeof input.email &&
                "string" === typeof input.name &&
                "boolean" === typeof input.vulnerable &&
                (3 === Object.keys(input).length ||
                    Object.keys(input).every((key: any) => {
                        if (
                            ["email", "name", "vulnerable"].some(
                                (prop: any) => key === prop,
                            )
                        )
                            return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return false;
                    }));
            return (
                "object" === typeof input && null !== input && $io0(input, true)
            );
        })(input),
);
