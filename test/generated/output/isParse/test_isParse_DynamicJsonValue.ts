import typia from "../../../../src";
import { _test_isParse } from "../../../internal/_test_isParse";
import { DynamicJsonValue } from "../../../structures/DynamicJsonValue";

export const test_isParse_DynamicJsonValue = _test_isParse(
    "DynamicJsonValue",
    DynamicJsonValue.generate,
    (input) =>
        ((input: any): typia.Primitive<DynamicJsonValue> => {
            const is: any = (input: any): input is DynamicJsonValue => {
                const $join: any = (typia.isParse as any).join;
                const $io0: any = (input: any): boolean =>
                    Object.keys(input).every((key: any) => {
                        const value: any = input[key];
                        if (undefined === value) return true;
                        if (RegExp(/(.*)/).test(key))
                            return (
                                null === value ||
                                undefined === value ||
                                "string" === typeof value ||
                                ("number" === typeof value &&
                                    Number.isFinite(value)) ||
                                "boolean" === typeof value ||
                                (Array.isArray(value) && $ia0(value)) ||
                                ("object" === typeof value &&
                                    null !== value &&
                                    false === Array.isArray(value) &&
                                    $io0(value))
                            );
                        return true;
                    });
                const $ia0: any = (input: any): any =>
                    input.every(
                        (elem: any) =>
                            undefined !== elem &&
                            (null === elem ||
                                "string" === typeof elem ||
                                ("number" === typeof elem &&
                                    Number.isFinite(elem)) ||
                                "boolean" === typeof elem ||
                                (Array.isArray(elem) && $ia0(elem)) ||
                                ("object" === typeof elem &&
                                    null !== elem &&
                                    false === Array.isArray(elem) &&
                                    $io0(elem))),
                    );
                return (
                    undefined !== input &&
                    (null === input ||
                        "string" === typeof input ||
                        ("number" === typeof input && Number.isFinite(input)) ||
                        "boolean" === typeof input ||
                        (Array.isArray(input) && $ia0(input)) ||
                        ("object" === typeof input &&
                            null !== input &&
                            false === Array.isArray(input) &&
                            $io0(input)))
                );
            };
            input = JSON.parse(input);
            return is(input) ? (input as any) : null;
        })(input),
    DynamicJsonValue.SPOILERS,
);
