import typia from "../../../../src";
import { _test_misc_isPrune } from "../../../internal/_test_misc_isPrune";
import { ObjectPartial } from "../../../structures/ObjectPartial";

export const test_misc_createIsPrune_ObjectPartial = _test_misc_isPrune(
    "ObjectPartial",
)<ObjectPartial>(ObjectPartial)((input: any): input is ObjectPartial => {
    const is = (input: any): input is ObjectPartial => {
        const $io0 = (input: any): boolean =>
            (undefined === input.boolean ||
                "boolean" === typeof input.boolean) &&
            (undefined === input.number ||
                ("number" === typeof input.number &&
                    Number.isFinite(input.number))) &&
            (undefined === input.string || "string" === typeof input.string) &&
            (undefined === input.array ||
                (Array.isArray(input.array) &&
                    input.array.every(
                        (elem: any) =>
                            "number" === typeof elem && Number.isFinite(elem),
                    ))) &&
            (null === input.object ||
                undefined === input.object ||
                ("object" === typeof input.object &&
                    null !== input.object &&
                    $io1(input.object)));
        const $io1 = (input: any): boolean =>
            "boolean" === typeof input.boolean &&
            "number" === typeof input.number &&
            Number.isFinite(input.number) &&
            "string" === typeof input.string &&
            Array.isArray(input.array) &&
            input.array.every(
                (elem: any) =>
                    "number" === typeof elem && Number.isFinite(elem),
            ) &&
            (null === input.object ||
                ("object" === typeof input.object &&
                    null !== input.object &&
                    $io1(input.object)));
        return (
            "object" === typeof input &&
            null !== input &&
            false === Array.isArray(input) &&
            $io0(input)
        );
    };
    const prune = (input: ObjectPartial): void => {
        const $io1 = (input: any): boolean =>
            "boolean" === typeof input.boolean &&
            "number" === typeof input.number &&
            "string" === typeof input.string &&
            Array.isArray(input.array) &&
            input.array.every((elem: any) => "number" === typeof elem) &&
            (null === input.object ||
                ("object" === typeof input.object &&
                    null !== input.object &&
                    $io1(input.object)));
        const $po0 = (input: any): any => {
            if ("object" === typeof input.object && null !== input.object)
                $po1(input.object);
            for (const key of Object.keys(input)) {
                if (
                    "boolean" === key ||
                    "number" === key ||
                    "string" === key ||
                    "array" === key ||
                    "object" === key
                )
                    continue;
                delete input[key];
            }
        };
        const $po1 = (input: any): any => {
            if ("object" === typeof input.object && null !== input.object)
                $po1(input.object);
            for (const key of Object.keys(input)) {
                if (
                    "boolean" === key ||
                    "number" === key ||
                    "string" === key ||
                    "array" === key ||
                    "object" === key
                )
                    continue;
                delete input[key];
            }
        };
        if ("object" === typeof input && null !== input) $po0(input);
    };
    if (!is(input)) return false;
    prune(input);
    return true;
});
