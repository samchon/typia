import typia from "../../../../src";
import { _test_prune } from "../../../internal/_test_prune";
import { ObjectPropertyNullable } from "../../../structures/ObjectPropertyNullable";

export const test_createPrune_ObjectPropertyNullable = _test_prune(
    "ObjectPropertyNullable",
    ObjectPropertyNullable.generate,
    (input: ObjectPropertyNullable): void => {
        const $io0: any = (input: any): boolean =>
            null === input.value || "boolean" === typeof input.value;
        const $io1: any = (input: any): boolean =>
            null === input.value || "number" === typeof input.value;
        const $io2: any = (input: any): boolean =>
            null === input.value || "string" === typeof input.value;
        const $io3: any = (input: any): boolean =>
            null === input.value ||
            ("object" === typeof input.value &&
                null !== input.value &&
                $io4(input.value));
        const $io4: any = (input: any): boolean =>
            "string" === typeof input.id &&
            (null === input.name || "string" === typeof input.name) &&
            (undefined === input.grade || "number" === typeof input.grade) &&
            (null === input.serial ||
                undefined === input.serial ||
                "number" === typeof input.serial) &&
            (null === input.activated || "boolean" === typeof input.activated);
        const $po0: any = (input: any): any => {
            for (const key: any of Object.keys(input)) {
                if ("value" === key) continue;
                delete input[key];
            }
        };
        const $po1: any = (input: any): any => {
            for (const key: any of Object.keys(input)) {
                if ("value" === key) continue;
                delete input[key];
            }
        };
        const $po2: any = (input: any): any => {
            for (const key: any of Object.keys(input)) {
                if ("value" === key) continue;
                delete input[key];
            }
        };
        const $po3: any = (input: any): any => {
            if ("object" === typeof input.value && null !== input.value)
                $po4(input.value);
            for (const key: any of Object.keys(input)) {
                if ("value" === key) continue;
                delete input[key];
            }
        };
        const $po4: any = (input: any): any => {
            for (const key: any of Object.keys(input)) {
                if (
                    "id" === key ||
                    "name" === key ||
                    "grade" === key ||
                    "serial" === key ||
                    "activated" === key
                )
                    continue;
                delete input[key];
            }
        };
        if (
            Array.isArray(input) &&
            input.length === 4 &&
            Array.isArray(input[0]) &&
            input[0].every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $io0(elem),
            ) &&
            Array.isArray(input[1]) &&
            input[1].every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $io1(elem),
            ) &&
            Array.isArray(input[2]) &&
            input[2].every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $io2(elem),
            ) &&
            Array.isArray(input[3]) &&
            input[3].every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $io3(elem),
            )
        ) {
            if (Array.isArray(input[0]))
                (() =>
                    input[0].forEach((elem: any) => {
                        if ("object" === typeof elem && null !== elem)
                            $po0(elem);
                    }))();
            if (Array.isArray(input[1]))
                (() =>
                    input[1].forEach((elem: any) => {
                        if ("object" === typeof elem && null !== elem)
                            $po1(elem);
                    }))();
            if (Array.isArray(input[2]))
                (() =>
                    input[2].forEach((elem: any) => {
                        if ("object" === typeof elem && null !== elem)
                            $po2(elem);
                    }))();
            if (Array.isArray(input[3]))
                (() =>
                    input[3].forEach((elem: any) => {
                        if ("object" === typeof elem && null !== elem)
                            $po3(elem);
                    }))();
        }
    },
);
