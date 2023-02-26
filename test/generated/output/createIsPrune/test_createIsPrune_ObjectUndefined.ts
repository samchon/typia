import typia from "../../../../src";
import { ObjectUndefined } from "../../../structures/ObjectUndefined";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_createIsPrune_ObjectUndefined = _test_isPrune(
    "ObjectUndefined",
    ObjectUndefined.generate,
    (input: any): input is ObjectUndefined => {
        const is = (input: any): input is ObjectUndefined => {
            const $io0 = (input: any): boolean =>
                "string" === typeof input.name &&
                (undefined === input.professor ||
                    "string" === typeof input.professor ||
                    ("number" === typeof input.professor &&
                        Number.isFinite(input.professor))) &&
                (undefined === input.classroom ||
                    ("object" === typeof input.classroom &&
                        null !== input.classroom &&
                        $io1(input.classroom))) &&
                (undefined === input.grade ||
                    ("number" === typeof input.grade &&
                        Number.isFinite(input.grade))) &&
                null !== input.nothing &&
                undefined === input.nothing &&
                true &&
                null !== input.never &&
                undefined === input.never;
            const $io1 = (input: any): boolean =>
                "string" === typeof input.id && "string" === typeof input.name;
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io0(elem),
                )
            );
        };
        const prune = (input: ObjectUndefined): void => {
            const $io1 = (input: any): boolean =>
                "string" === typeof input.id && "string" === typeof input.name;
            const $po0 = (input: any): any => {
                if (
                    "object" === typeof input.classroom &&
                    null !== input.classroom
                )
                    $po1(input.classroom);
                for (const key of Object.keys(input)) {
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
            const $po1 = (input: any): any => {
                for (const key of Object.keys(input)) {
                    if ("id" === key || "name" === key) continue;
                    delete input[key];
                }
            };
            if (Array.isArray(input))
                input.forEach((elem: any) => {
                    if ("object" === typeof elem && null !== elem) $po0(elem);
                });
        };
        if (!is(input)) return false;
        prune(input);
        return true;
    },
    ObjectUndefined.SPOILERS,
);
