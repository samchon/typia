import typia from "../../../../src";
import { _test_isPrune } from "../../../internal/_test_isPrune";
import { TupleRestObject } from "../../../structures/TupleRestObject";

export const test_isPrune_TupleRestObject = _test_isPrune(
    "TupleRestObject",
    TupleRestObject.generate,
    (input) =>
        ((
            input: any,
        ): input is [boolean, number, ...TupleRestObject.IObject[]] => {
            const is: any = (
                input: any,
            ): input is [boolean, number, ...TupleRestObject.IObject[]] => {
                const $io0: any = (input: any): boolean =>
                    "string" === typeof input.value;
                return (
                    Array.isArray(input) &&
                    "boolean" === typeof input[0] &&
                    "number" === typeof input[1] &&
                    Number.isFinite(input[1]) &&
                    Array.isArray(input.slice(2)) &&
                    input
                        .slice(2)
                        .every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io0(elem),
                        )
                );
            };
            const prune: any = (
                input: [boolean, number, ...TupleRestObject.IObject[]],
            ): void => {
                const $io0: any = (input: any): boolean =>
                    "string" === typeof input.value;
                const $po0: any = (input: any): any => {
                    for (const key: any of Object.keys(input)) {
                        if ("value" === key) continue;
                        delete input[key];
                    }
                };
                if (
                    Array.isArray(input) &&
                    "boolean" === typeof input[0] &&
                    "number" === typeof input[1] &&
                    Array.isArray(input.slice(2)) &&
                    input
                        .slice(2)
                        .every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io0(elem),
                        )
                ) {
                    if (Array.isArray(input.slice(2)))
                        (() =>
                            input.slice(2).forEach((elem: any) => {
                                if ("object" === typeof elem && null !== elem)
                                    $po0(elem);
                            }))();
                }
            };
            if (!is(input)) return false;
            prune(input);
            return true;
        })(input),
    TupleRestObject.SPOILERS,
);
