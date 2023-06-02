import typia from "../../../../src";
import { _test_isPrune } from "../../../internal/_test_isPrune";
import { TagLength } from "../../../structures/TagLength";

export const test_createIsPrune_TagLength = _test_isPrune(
    "TagLength",
    TagLength.generate,
    (input: any): input is TagLength => {
        const is: any = (input: any): input is TagLength => {
            const $io0: any = (input: any): boolean =>
                "string" === typeof input.fixed &&
                5 === input.fixed.length &&
                "string" === typeof input.minimum &&
                3 <= input.minimum.length &&
                "string" === typeof input.maximum &&
                7 >= input.maximum.length &&
                "string" === typeof input.minimum_and_maximum &&
                3 <= input.minimum_and_maximum.length &&
                7 >= input.minimum_and_maximum.length;
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io0(elem),
                )
            );
        };
        const prune: any = (input: TagLength): void => {
            const $po0: any = (input: any): any => {
                for (const key: any of Object.keys(input)) {
                    if (
                        "fixed" === key ||
                        "minimum" === key ||
                        "maximum" === key ||
                        "minimum_and_maximum" === key
                    )
                        continue;
                    delete input[key];
                }
            };
            if (Array.isArray(input))
                (() =>
                    input.forEach((elem: any) => {
                        if ("object" === typeof elem && null !== elem)
                            $po0(elem);
                    }))();
        };
        if (!is(input)) return false;
        prune(input);
        return true;
    },
    TagLength.SPOILERS,
);
