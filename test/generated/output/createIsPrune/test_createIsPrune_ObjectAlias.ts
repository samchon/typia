import typia from "../../../../src";
import { _test_isPrune } from "../../../internal/_test_isPrune";
import { ObjectAlias } from "../../../structures/ObjectAlias";

export const test_createIsPrune_ObjectAlias = _test_isPrune(
    "ObjectAlias",
    ObjectAlias.generate,
    (input: any): input is ObjectAlias => {
        const is: any = (input: any): input is ObjectAlias => {
            const $io0: any = (input: any): boolean =>
                (null === input.id || "string" === typeof input.id) &&
                "string" === typeof input.email &&
                "string" === typeof input.name &&
                (null === input.sex ||
                    1 === input.sex ||
                    2 === input.sex ||
                    "male" === input.sex ||
                    "female" === input.sex) &&
                (null === input.age ||
                    ("number" === typeof input.age &&
                        Number.isFinite(input.age))) &&
                (null === input.dead || "boolean" === typeof input.dead);
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io0(elem),
                )
            );
        };
        const prune: any = (input: ObjectAlias): void => {
            const $po0: any = (input: any): any => {
                for (const key: any of Object.keys(input)) {
                    if (
                        "id" === key ||
                        "email" === key ||
                        "name" === key ||
                        "sex" === key ||
                        "age" === key ||
                        "dead" === key
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
    ObjectAlias.SPOILERS,
);
