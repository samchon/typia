import typia from "../../../../src";
import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { ObjectPropertyNullable } from "../../../structures/ObjectPropertyNullable";

export const test_json_isStringify_ObjectPropertyNullable =
    _test_json_isStringify("ObjectPropertyNullable")<ObjectPropertyNullable>(
        ObjectPropertyNullable,
    )((input) =>
        ((input: ObjectPropertyNullable): string | null => {
            const is = (input: any): input is ObjectPropertyNullable => {
                const $io0 = (input: any): boolean =>
                    null === input.value || "boolean" === typeof input.value;
                const $io1 = (input: any): boolean =>
                    null === input.value ||
                    ("number" === typeof input.value &&
                        Number.isFinite(input.value));
                const $io2 = (input: any): boolean =>
                    null === input.value || "string" === typeof input.value;
                const $io3 = (input: any): boolean =>
                    null === input.value ||
                    ("object" === typeof input.value &&
                        null !== input.value &&
                        $io4(input.value));
                const $io4 = (input: any): boolean =>
                    "string" === typeof input.id &&
                    (null === input.name || "string" === typeof input.name) &&
                    (undefined === input.grade ||
                        ("number" === typeof input.grade &&
                            Number.isFinite(input.grade))) &&
                    (null === input.serial ||
                        undefined === input.serial ||
                        ("number" === typeof input.serial &&
                            Number.isFinite(input.serial))) &&
                    (null === input.activated ||
                        "boolean" === typeof input.activated);
                return (
                    Array.isArray(input) &&
                    input.length === 4 &&
                    Array.isArray(input[0]) &&
                    input[0].every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io0(elem),
                    ) &&
                    Array.isArray(input[1]) &&
                    input[1].every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io1(elem),
                    ) &&
                    Array.isArray(input[2]) &&
                    input[2].every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io2(elem),
                    ) &&
                    Array.isArray(input[3]) &&
                    input[3].every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io3(elem),
                    )
                );
            };
            const stringify = (input: ObjectPropertyNullable): string => {
                const $io4 = (input: any): boolean =>
                    "string" === typeof input.id &&
                    (null === input.name || "string" === typeof input.name) &&
                    (undefined === input.grade ||
                        "number" === typeof input.grade) &&
                    (null === input.serial ||
                        undefined === input.serial ||
                        "number" === typeof input.serial) &&
                    (null === input.activated ||
                        "boolean" === typeof input.activated);
                const $number = (typia.json.isStringify as any).number;
                const $string = (typia.json.isStringify as any).string;
                const $so0 = (input: any): any =>
                    `{"value":${null !== input.value ? input.value : "null"}}`;
                const $so1 = (input: any): any =>
                    `{"value":${
                        null !== input.value ? $number(input.value) : "null"
                    }}`;
                const $so2 = (input: any): any =>
                    `{"value":${
                        null !== input.value ? $string(input.value) : "null"
                    }}`;
                const $so3 = (input: any): any =>
                    `{"value":${
                        null !== input.value ? $so4(input.value) : "null"
                    }}`;
                const $so4 = (input: any): any =>
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
                return `[${`[${input[0]
                    .map((elem: any) => $so0(elem))
                    .join(",")}]`},${`[${input[1]
                    .map((elem: any) => $so1(elem))
                    .join(",")}]`},${`[${input[2]
                    .map((elem: any) => $so2(elem))
                    .join(",")}]`},${`[${input[3]
                    .map((elem: any) => $so3(elem))
                    .join(",")}]`}]`;
            };
            return is(input) ? stringify(input) : null;
        })(input),
    );
