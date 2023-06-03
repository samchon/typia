import typia from "../../../../src";
import { _test_isPrune } from "../../../internal/_test_isPrune";
import { ObjectAlias } from "../../../structures/ObjectAlias";

export const test_isPrune_ObjectAlias = _test_isPrune(
    "ObjectAlias",
    ObjectAlias.generate,
    (input) =>
        ((input: any): input is Array<ObjectAlias.IMember> => {
            const is = (input: any): input is Array<ObjectAlias.IMember> => {
                const $io0 = (input: any): boolean =>
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
                            "object" === typeof elem &&
                            null !== elem &&
                            $io0(elem),
                    )
                );
            };
            const prune = (input: Array<ObjectAlias.IMember>): void => {
                const $pp0 = (input: any) =>
                    input.forEach((elem: any) => {
                        if ("object" === typeof elem && null !== elem)
                            $po0(elem);
                    });
                const $po0 = (input: any): any => {
                    for (const key of Object.keys(input)) {
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
                if (Array.isArray(input)) $pp0(input);
            };
            if (!is(input)) return false;
            prune(input);
            return true;
        })(input),
    ObjectAlias.SPOILERS,
);
