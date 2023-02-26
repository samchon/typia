import typia from "../../../../src";
import { ArraySimple } from "../../../structures/ArraySimple";
import { _test_prune } from "../internal/_test_prune";

export const test_prune_ArraySimple = _test_prune(
    "ArraySimple",
    ArraySimple.generate,
    (input) =>
        ((input: ArraySimple): void => {
            const $io1 = (input: any): boolean =>
                "string" === typeof input.name &&
                "string" === typeof input.body &&
                "number" === typeof input.rank;
            const $po0 = (input: any): any => {
                if (Array.isArray(input.hobbies))
                    input.hobbies.forEach((elem: any) => {
                        if ("object" === typeof elem && null !== elem)
                            $po1(elem);
                    });
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
            if (Array.isArray(input))
                input.forEach((elem: any) => {
                    if ("object" === typeof elem && null !== elem) $po0(elem);
                });
        })(input),
);
