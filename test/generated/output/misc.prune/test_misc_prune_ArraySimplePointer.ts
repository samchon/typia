import typia from "../../../../src";
import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { ArraySimplePointer } from "../../../structures/ArraySimplePointer";

export const test_misc_prune_ArraySimplePointer =
    _test_misc_prune<ArraySimplePointer>(ArraySimplePointer)((input) =>
        ((input: ArraySimplePointer): void => {
            const $io1 = (input: any): boolean =>
                "string" === typeof input.name &&
                "string" === typeof input.email &&
                Array.isArray(input.hobbies) &&
                input.hobbies.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io2(elem),
                );
            const $io2 = (input: any): boolean =>
                "string" === typeof input.name &&
                "string" === typeof input.body &&
                "number" === typeof input.rank;
            const $pp0 = (input: any) =>
                input.forEach((elem: any) => {
                    if ("object" === typeof elem && null !== elem) $po1(elem);
                });
            const $pp1 = (input: any) =>
                input.forEach((elem: any) => {
                    if ("object" === typeof elem && null !== elem) $po2(elem);
                });
            const $po0 = (input: any): any => {
                if (Array.isArray(input.value)) $pp0(input.value);
                for (const key of Object.keys(input)) {
                    if ("value" === key) continue;
                    delete input[key];
                }
            };
            const $po1 = (input: any): any => {
                if (Array.isArray(input.hobbies)) $pp1(input.hobbies);
                for (const key of Object.keys(input)) {
                    if ("name" === key || "email" === key || "hobbies" === key)
                        continue;
                    delete input[key];
                }
            };
            const $po2 = (input: any): any => {
                for (const key of Object.keys(input)) {
                    if ("name" === key || "body" === key || "rank" === key)
                        continue;
                    delete input[key];
                }
            };
            if ("object" === typeof input && null !== input) $po0(input);
        })(input),
    );
