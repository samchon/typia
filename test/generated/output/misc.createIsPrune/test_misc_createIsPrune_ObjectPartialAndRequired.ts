import typia from "../../../../src";
import { _test_misc_isPrune } from "../../../internal/_test_misc_isPrune";
import { ObjectPartialAndRequired } from "../../../structures/ObjectPartialAndRequired";

export const test_misc_createIsPrune_ObjectPartialAndRequired =
    _test_misc_isPrune("ObjectPartialAndRequired")<ObjectPartialAndRequired>(
        ObjectPartialAndRequired,
    )((input: any): input is ObjectPartialAndRequired => {
        const is = (input: any): input is ObjectPartialAndRequired => {
            const $io0 = (input: any): boolean =>
                (undefined === input.string ||
                    "string" === typeof input.string) &&
                (undefined === input.number ||
                    ("number" === typeof input.number &&
                        Number.isFinite(input.number))) &&
                (undefined === input.boolean ||
                    "boolean" === typeof input.boolean) &&
                (null === input.object ||
                    ("object" === typeof input.object &&
                        null !== input.object &&
                        $io0(input.object))) &&
                Array.isArray(input.array) &&
                input.array.every(
                    (elem: any) =>
                        "number" === typeof elem && Number.isFinite(elem),
                );
            return "object" === typeof input && null !== input && $io0(input);
        };
        const prune = (input: ObjectPartialAndRequired): void => {
            const $io0 = (input: any): boolean =>
                (undefined === input.string ||
                    "string" === typeof input.string) &&
                (undefined === input.number ||
                    "number" === typeof input.number) &&
                (undefined === input.boolean ||
                    "boolean" === typeof input.boolean) &&
                (null === input.object ||
                    ("object" === typeof input.object &&
                        null !== input.object &&
                        $io0(input.object))) &&
                Array.isArray(input.array) &&
                input.array.every((elem: any) => "number" === typeof elem);
            const $po0 = (input: any): any => {
                if ("object" === typeof input.object && null !== input.object)
                    $po0(input.object);
                for (const key of Object.keys(input)) {
                    if (
                        "string" === key ||
                        "number" === key ||
                        "boolean" === key ||
                        "object" === key ||
                        "array" === key
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
