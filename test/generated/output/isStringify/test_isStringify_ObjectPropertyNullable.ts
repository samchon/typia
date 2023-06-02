import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { ObjectPropertyNullable } from "../../../structures/ObjectPropertyNullable";

export const test_isStringify_ObjectPropertyNullable = _test_isStringify(
    "ObjectPropertyNullable",
    ObjectPropertyNullable.generate,
    (input) =>
        ((
            input: [
                Array<ObjectPropertyNullable.IPointer<boolean>>,
                Array<ObjectPropertyNullable.IPointer<number>>,
                Array<ObjectPropertyNullable.IPointer<string>>,
                Array<
                    ObjectPropertyNullable.IPointer<ObjectPropertyNullable.IMember>
                >,
            ],
        ): string | null => {
            const is: any = (
                input: any,
            ): input is [
                Array<ObjectPropertyNullable.IPointer<boolean>>,
                Array<ObjectPropertyNullable.IPointer<number>>,
                Array<ObjectPropertyNullable.IPointer<string>>,
                Array<
                    ObjectPropertyNullable.IPointer<ObjectPropertyNullable.IMember>
                >,
            ] => {
                const $io0: any = (input: any): boolean =>
                    null === input.value || "boolean" === typeof input.value;
                const $io1: any = (input: any): boolean =>
                    null === input.value ||
                    ("number" === typeof input.value &&
                        Number.isFinite(input.value));
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
            const stringify: any = (
                input: [
                    Array<ObjectPropertyNullable.IPointer<boolean>>,
                    Array<ObjectPropertyNullable.IPointer<number>>,
                    Array<ObjectPropertyNullable.IPointer<string>>,
                    Array<
                        ObjectPropertyNullable.IPointer<ObjectPropertyNullable.IMember>
                    >,
                ],
            ): string => {
                const $io4: any = (input: any): boolean =>
                    "string" === typeof input.id &&
                    (null === input.name || "string" === typeof input.name) &&
                    (undefined === input.grade ||
                        "number" === typeof input.grade) &&
                    (null === input.serial ||
                        undefined === input.serial ||
                        "number" === typeof input.serial) &&
                    (null === input.activated ||
                        "boolean" === typeof input.activated);
                const $number: any = (typia.isStringify as any).number;
                const $string: any = (typia.isStringify as any).string;
                const $so0: any = (input: any): any =>
                    `{"value":${null !== input.value ? input.value : "null"}}`;
                const $so1: any = (input: any): any =>
                    `{"value":${
                        null !== input.value ? $number(input.value) : "null"
                    }}`;
                const $so2: any = (input: any): any =>
                    `{"value":${
                        null !== input.value ? $string(input.value) : "null"
                    }}`;
                const $so3: any = (input: any): any =>
                    `{"value":${
                        null !== input.value ? $so4(input.value) : "null"
                    }}`;
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
                    `[${input[3]
                        .map((elem: any) => $so3(elem))
                        .join(",")}]`)()}]`;
            };
            return is(input) ? stringify(input) : null;
        })(input),
    ObjectPropertyNullable.SPOILERS,
);
