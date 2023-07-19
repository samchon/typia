import typia from "../../../../src";
import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { ArraySimple } from "../../../structures/ArraySimple";

export const test_misc_prune_ArraySimple = _test_misc_prune<ArraySimple>(
    ArraySimple,
)((input) =>
    ((input: Array<ArraySimple.IPerson>): void => {
        const $io1 = (input: any): boolean =>
            "string" === typeof input.name &&
            "string" === typeof input.body &&
            "number" === typeof input.rank;
        const $pp0 = (input: any) =>
            input.forEach((elem: any) => {
                if ("object" === typeof elem && null !== elem) $po0(elem);
            });
        const $pp1 = (input: any) =>
            input.forEach((elem: any) => {
                if ("object" === typeof elem && null !== elem) $po1(elem);
            });
        const $po0 = (input: any): any => {
            if (Array.isArray(input.hobbies)) $pp1(input.hobbies);
            for (const key of Object.keys(input)) {
                if ("name" === key || "email" === key || "hobbies" === key)
                    continue;
                delete input[key];
            }
        };
        const $po1 = (input: any): any => {
            for (const key of Object.keys(input)) {
                if ("name" === key || "body" === key || "rank" === key)
                    continue;
                delete input[key];
            }
        };
        if (Array.isArray(input)) $pp0(input);
    })(input),
);
