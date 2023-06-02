import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { ObjectOptional } from "../../../structures/ObjectOptional";

export const test_isStringify_ObjectOptional = _test_isStringify(
    "ObjectOptional",
    ObjectOptional.generate,
    (input) =>
        ((input: ObjectOptional): string | null => {
            const is: any = (input: any): input is ObjectOptional => {
                const $io0: any = (input: any): boolean =>
                    (undefined === input.id || "string" === typeof input.id) &&
                    (undefined === input.name ||
                        "string" === typeof input.name) &&
                    (undefined === input.email ||
                        "string" === typeof input.email) &&
                    (undefined === input.sequence ||
                        ("number" === typeof input.sequence &&
                            Number.isFinite(input.sequence)));
                return (
                    "object" === typeof input &&
                    null !== input &&
                    false === Array.isArray(input) &&
                    $io0(input)
                );
            };
            const stringify: any = (input: ObjectOptional): string => {
                const $string: any = (typia.isStringify as any).string;
                const $number: any = (typia.isStringify as any).number;
                const $tail: any = (typia.isStringify as any).tail;
                const $so0: any = (input: any): any =>
                    `{${$tail(
                        `${
                            undefined === input.id
                                ? ""
                                : `"id":${
                                      undefined !== input.id
                                          ? $string(input.id)
                                          : undefined
                                  },`
                        }${
                            undefined === input.name
                                ? ""
                                : `"name":${
                                      undefined !== input.name
                                          ? $string(input.name)
                                          : undefined
                                  },`
                        }${
                            undefined === input.email
                                ? ""
                                : `"email":${
                                      undefined !== input.email
                                          ? $string(input.email)
                                          : undefined
                                  },`
                        }${
                            undefined === input.sequence
                                ? ""
                                : `"sequence":${
                                      undefined !== input.sequence
                                          ? $number(input.sequence)
                                          : undefined
                                  }`
                        }`,
                    )}}`;
                return $so0(input);
            };
            return is(input) ? stringify(input) : null;
        })(input),
    ObjectOptional.SPOILERS,
);
