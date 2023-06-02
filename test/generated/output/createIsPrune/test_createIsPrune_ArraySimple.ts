import typia from "../../../../src";
import { _test_isPrune } from "../../../internal/_test_isPrune";
import { ArraySimple } from "../../../structures/ArraySimple";

export const test_createIsPrune_ArraySimple = _test_isPrune(
    "ArraySimple",
    ArraySimple.generate,
    (input: any): input is ArraySimple => {
        const is: any = (input: any): input is ArraySimple => {
            const $io0: any = (input: any): boolean =>
                "string" === typeof input.name &&
                "string" === typeof input.email &&
                Array.isArray(input.hobbies) &&
                input.hobbies.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io1(elem),
                );
            const $io1: any = (input: any): boolean =>
                "string" === typeof input.name &&
                "string" === typeof input.body &&
                "number" === typeof input.rank &&
                Number.isFinite(input.rank);
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io0(elem),
                )
            );
        };
        const prune: any = (input: ArraySimple): void => {
            const $io1: any = (input: any): boolean =>
                "string" === typeof input.name &&
                "string" === typeof input.body &&
                "number" === typeof input.rank;
            const $po0: any = (input: any): any => {
                if (Array.isArray(input.hobbies))
                    (() =>
                        input.hobbies.forEach((elem: any) => {
                            if ("object" === typeof elem && null !== elem)
                                $po1(elem);
                        }))();
                for (const key: any of Object.keys(input)) {
                    if ("name" === key || "email" === key || "hobbies" === key)
                        continue;
                    delete input[key];
                }
            };
            const $po1: any = (input: any): any => {
                for (const key: any of Object.keys(input)) {
                    if ("name" === key || "body" === key || "rank" === key)
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
    ArraySimple.SPOILERS,
);
