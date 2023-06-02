import typia from "../../../../src";
import { _test_prune } from "../../../internal/_test_prune";
import { ObjectUndefined } from "../../../structures/ObjectUndefined";

export const test_prune_ObjectUndefined = _test_prune(
    "ObjectUndefined",
    ObjectUndefined.generate,
    (input) =>
        ((input: Array<ObjectUndefined.ILecture>): void => {
            const $io1: any = (input: any): boolean =>
                "string" === typeof input.id && "string" === typeof input.name;
            const $po0: any = (input: any): any => {
                if (
                    "object" === typeof input.classroom &&
                    null !== input.classroom
                )
                    $po1(input.classroom);
                for (const key: any of Object.keys(input)) {
                    if (
                        "name" === key ||
                        "professor" === key ||
                        "classroom" === key ||
                        "grade" === key ||
                        "nothing" === key ||
                        "unknown" === key ||
                        "never" === key
                    )
                        continue;
                    delete input[key];
                }
            };
            const $po1: any = (input: any): any => {
                for (const key: any of Object.keys(input)) {
                    if ("id" === key || "name" === key) continue;
                    delete input[key];
                }
            };
            if (Array.isArray(input))
                (() =>
                    input.forEach((elem: any) => {
                        if ("object" === typeof elem && null !== elem)
                            $po0(elem);
                    }))();
        })(input),
);
