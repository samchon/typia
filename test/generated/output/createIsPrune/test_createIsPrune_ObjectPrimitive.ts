import typia from "../../../../src";
import { _test_isPrune } from "../../../internal/_test_isPrune";
import { ObjectPrimitive } from "../../../structures/ObjectPrimitive";

export const test_createIsPrune_ObjectPrimitive = _test_isPrune(
    "ObjectPrimitive",
    ObjectPrimitive.generate,
    (input: any): input is ObjectPrimitive => {
        const is: any = (input: any): input is ObjectPrimitive => {
            const $io0: any = (input: any): boolean =>
                "string" === typeof input.id &&
                ("md" === input.extension ||
                    "html" === input.extension ||
                    "txt" === input.extension) &&
                "string" === typeof input.title &&
                "string" === typeof input.body &&
                Array.isArray(input.files) &&
                input.files.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io1(elem),
                ) &&
                "boolean" === typeof input.secret &&
                "string" === typeof input.created_at;
            const $io1: any = (input: any): boolean =>
                "string" === typeof input.id &&
                "string" === typeof input.name &&
                "string" === typeof input.extension &&
                "string" === typeof input.url &&
                "string" === typeof input.created_at;
            return "object" === typeof input && null !== input && $io0(input);
        };
        const prune: any = (input: ObjectPrimitive): void => {
            const $io1: any = (input: any): boolean =>
                "string" === typeof input.id &&
                "string" === typeof input.name &&
                "string" === typeof input.extension &&
                "string" === typeof input.url &&
                "string" === typeof input.created_at;
            const $po0: any = (input: any): any => {
                if (Array.isArray(input.files))
                    (() =>
                        input.files.forEach((elem: any) => {
                            if ("object" === typeof elem && null !== elem)
                                $po1(elem);
                        }))();
                for (const key: any of Object.keys(input)) {
                    if (
                        "id" === key ||
                        "extension" === key ||
                        "title" === key ||
                        "body" === key ||
                        "files" === key ||
                        "secret" === key ||
                        "created_at" === key
                    )
                        continue;
                    delete input[key];
                }
            };
            const $po1: any = (input: any): any => {
                for (const key: any of Object.keys(input)) {
                    if (
                        "id" === key ||
                        "name" === key ||
                        "extension" === key ||
                        "url" === key ||
                        "created_at" === key
                    )
                        continue;
                    delete input[key];
                }
            };
            if ("object" === typeof input && null !== input) $po0(input);
        };
        if (!is(input)) return false;
        prune(input);
        return true;
    },
    ObjectPrimitive.SPOILERS,
);
