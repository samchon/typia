import typia from "../../../../src";
import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { TagType } from "../../../structures/TagType";

export const test_misc_prune_TagType = _test_misc_prune<TagType>(TagType)(
    (input) =>
        ((input: TagType): void => {
            const $io1 = (input: any): boolean =>
                "number" === typeof input.int &&
                parseInt(input.int) === input.int &&
                "number" === typeof input.uint &&
                parseInt(input.uint) === input.uint &&
                0 <= input.uint;
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
                    if ("int" === key || "uint" === key) continue;
                    delete input[key];
                }
            };
            if ("object" === typeof input && null !== input) $po0(input);
        })(input),
);
