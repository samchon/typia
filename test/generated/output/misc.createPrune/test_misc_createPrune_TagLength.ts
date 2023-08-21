import typia from "../../../../src";
import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { TagLength } from "../../../structures/TagLength";

export const test_misc_prune_TagLength = _test_misc_prune(
    "TagLength",
)<TagLength>(TagLength)((input: TagLength): void => {
    const $io1 = (input: any): boolean =>
        "string" === typeof input.fixed &&
        5 === input.fixed.length &&
        "string" === typeof input.minimum &&
        3 <= input.minimum.length &&
        "string" === typeof input.maximum &&
        7 >= input.maximum.length &&
        "string" === typeof input.minimum_and_maximum &&
        3 <= input.minimum_and_maximum.length &&
        7 >= input.minimum_and_maximum.length &&
        "string" === typeof input.equal &&
        10 <= input.equal.length &&
        19 >= input.equal.length;
    const $pp0 = (input: any) =>
        input.forEach((elem: any) => {
            if ("object" === typeof elem && null !== elem) $po1(elem);
        });
    const $po0 = (input: any): any => {
        if (Array.isArray(input.value)) $pp0(input.value);
        for (const key of Object.keys(input)) {
            if ("value" === key) continue;
            delete input[key];
        }
    };
    const $po1 = (input: any): any => {
        for (const key of Object.keys(input)) {
            if (
                "fixed" === key ||
                "minimum" === key ||
                "maximum" === key ||
                "minimum_and_maximum" === key ||
                "equal" === key
            )
                continue;
            delete input[key];
        }
    };
    if ("object" === typeof input && null !== input) $po0(input);
});
