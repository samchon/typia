import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { ObjectPropertyNullable } from "../../../structures/ObjectPropertyNullable";

export const test_createStringify_ObjectPropertyNullable = _test_stringify(
    "ObjectPropertyNullable",
    ObjectPropertyNullable.generate,
    (input: ObjectPropertyNullable): string => {
        const $io4: any = (input: any): boolean =>
            "string" === typeof input.id &&
            (null === input.name || "string" === typeof input.name) &&
            (undefined === input.grade || "number" === typeof input.grade) &&
            (null === input.serial ||
                undefined === input.serial ||
                "number" === typeof input.serial) &&
            (null === input.activated || "boolean" === typeof input.activated);
        const $number: any = (typia.createStringify as any).number;
        const $string: any = (typia.createStringify as any).string;
        const $so0: any = (input: any): any =>
            `{"value":${null !== input.value ? input.value : "null"}}`;
        const $so1: any = (input: any): any =>
            `{"value":${null !== input.value ? $number(input.value) : "null"}}`;
        const $so2: any = (input: any): any =>
            `{"value":${null !== input.value ? $string(input.value) : "null"}}`;
        const $so3: any = (input: any): any =>
            `{"value":${null !== input.value ? $so4(input.value) : "null"}}`;
        const $so4: any = (input: any): any =>
            `{${
                undefined === input.grade
                    ? ""
                    : `"grade":${
                          undefined !== input.grade
                              ? $number(input.grade)
                              : undefined
                      },`
            }${
                undefined === input.serial
                    ? ""
                    : `"serial":${
                          undefined !== input.serial
                              ? null !== input.serial
                                  ? $number(input.serial)
                                  : "null"
                              : undefined
                      },`
            }"id":${$string(input.id)},"name":${
                null !== input.name ? $string(input.name) : "null"
            },"activated":${
                null !== input.activated ? input.activated : "null"
            }}`;
        return `[${(() =>
            `[${input[0]
                .map((elem: any) => $so0(elem))
                .join(",")}]`)()},${(() =>
            `[${input[1]
                .map((elem: any) => $so1(elem))
                .join(",")}]`)()},${(() =>
            `[${input[2]
                .map((elem: any) => $so2(elem))
                .join(",")}]`)()},${(() =>
            `[${input[3].map((elem: any) => $so3(elem)).join(",")}]`)()}]`;
    },
);
