import typia from "../../../../src";
import { _test_prune } from "../../../internal/_test_prune";
import { TupleRestObject } from "../../../structures/TupleRestObject";

export const test_prune_TupleRestObject = _test_prune(
    "TupleRestObject",
    TupleRestObject.generate,
    (input) =>
        ((input: [boolean, number, ...TupleRestObject.IObject[]]): void => {
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
        })(input),
);
