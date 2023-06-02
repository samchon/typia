import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { ObjectDynamic } from "../../../structures/ObjectDynamic";

export const test_is_ObjectDynamic = _test_is(
    "ObjectDynamic",
    ObjectDynamic.generate,
    (input) =>
        ((input: any): input is ObjectDynamic => {
            const $join: any = (typia.is as any).join;
            const $io0: any = (input: any): boolean =>
                Object.keys(input).every((key: any) => {
                    const value: any = input[key];
                    if (undefined === value) return true;
                    if (RegExp(/(.*)/).test(key))
                        return (
                            "string" === typeof value ||
                            ("number" === typeof value &&
                                Number.isFinite(value)) ||
                            "boolean" === typeof value
                        );
                    return true;
                });
            return (
                "object" === typeof input &&
                null !== input &&
                false === Array.isArray(input) &&
                $io0(input)
            );
        })(input),
    ObjectDynamic.SPOILERS,
);
