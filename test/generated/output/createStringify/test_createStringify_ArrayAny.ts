import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { ArrayAny } from "../../../structures/ArrayAny";

export const test_createStringify_ArrayAny = _test_stringify(
    "ArrayAny",
    ArrayAny.generate,
    (input: ArrayAny): string => {
        const $so0 = (input: any): any =>
            `{${
                undefined === input.undefindable1
                    ? ""
                    : `"undefindable1":${
                          undefined !== input.undefindable1
                              ? JSON.stringify(input.undefindable1)
                              : undefined
                      },`
            }${
                undefined === input.undefindable2
                    ? ""
                    : `"undefindable2":${
                          undefined !== input.undefindable2
                              ? JSON.stringify(input.undefindable2)
                              : undefined
                      },`
            }${
                undefined === input.both1
                    ? ""
                    : `"both1":${
                          undefined !== input.both1
                              ? null !== input.both1
                                  ? JSON.stringify(input.both1)
                                  : "null"
                              : undefined
                      },`
            }${
                undefined === input.both2
                    ? ""
                    : `"both2":${
                          undefined !== input.both2
                              ? null !== input.both2
                                  ? JSON.stringify(input.both2)
                                  : "null"
                              : undefined
                      },`
            }${
                undefined === input.both3
                    ? ""
                    : `"both3":${
                          undefined !== input.both3
                              ? null !== input.both3
                                  ? JSON.stringify(input.both3)
                                  : "null"
                              : undefined
                      },`
            }"anys":${JSON.stringify(input.anys)},"nullables1":${
                null !== input.nullables1
                    ? JSON.stringify(input.nullables1)
                    : "null"
            },"nullables2":${
                null !== input.nullables2
                    ? JSON.stringify(input.nullables2)
                    : "null"
            },"union":${JSON.stringify(input.union)}}`;
        return $so0(input);
    },
);
