import { RandomGenerator } from "../utils/RandomGenerator";

import { IValidation } from "../IValidation";
import { TypeGuardError } from "../TypeGuardError";
import { $ProtobufReader } from "./$ProtobufReader";
import { $ProtobufSizer } from "./$ProtobufSizer";
import { $ProtobufWriter } from "./$ProtobufWriter";
import { $any } from "./$any";
import { $every } from "./$every";
import { $guard } from "./$guard";
import { $is_between } from "./$is_between";
import { $join } from "./$join";
import { $number } from "./$number";
import { $report } from "./$report";
import { $rest } from "./$rest";
import { $string } from "./$string";
import { $strlen } from "./$strlen";
import { $tail } from "./$tail";

/**
 * @internal
 */
export namespace Namespace {
    export const is = () => ({
        is_between: $is_between,
    });

    export const assert = (method: string) => ({
        ...is(),
        join: $join,
        every: $every,
        guard: $guard(`typia.${method}`),
        predicate: (
            matched: boolean,
            exceptionable: boolean,
            closure: () => Omit<TypeGuardError.IProps, "method">,
        ): boolean => {
            if (matched === false && exceptionable === true)
                throw new TypeGuardError({
                    ...closure(),
                    method: `typia.${method}`,
                });
            return matched;
        },
    });

    export const validate = () => ({
        ...is(),
        join: $join,
        report: $report,
        predicate:
            (res: IValidation) =>
            (
                matched: boolean,
                exceptionable: boolean,
                closure: () => IValidation.IError,
            ) => {
                // CHECK FAILURE
                if (matched === false && exceptionable === true)
                    (() => {
                        res.success &&= false;
                        const errorList = (res as IValidation.IFailure).errors;

                        // TRACE ERROR
                        const error = closure();
                        if (errorList.length) {
                            const last = errorList[errorList.length - 1]!.path;
                            if (
                                last.length >= error.path.length &&
                                last.substring(0, error.path.length) ===
                                    error.path
                            )
                                return;
                        }
                        errorList.push(error);
                        return;
                    })();
                return matched;
            },
    });

    export namespace json {
        export const stringify = (method: string) => ({
            ...is(),
            number: $number,
            string: $string,
            tail: $tail,
            rest: $rest,
            throws: $throws(`json.${method}`),
        });
    }

    export namespace protobuf {
        export const decode = (method: string) => ({
            Reader: $ProtobufReader,
            throws: $throws(`protobuf.${method}`),
        });

        export const encode = (method: string) => ({
            Sizer: $ProtobufSizer,
            Writer: $ProtobufWriter,
            strlen: $strlen,
            throws: $throws(method),
        });
    }

    export namespace misc {
        export const clone = (method: string) => ({
            ...is(),
            throws: $throws(`misc.${method}`),
            any: $any,
        });

        export const prune = (method: string) => ({
            ...is(),
            throws: $throws(`misc.${method}`),
        });
    }

    export const random = () => ({
        generator: RandomGenerator,
        pick: RandomGenerator.pick,
    });

    const $throws =
        (method: string) =>
        (props: Pick<TypeGuardError.IProps, "expected" | "value">) => {
            throw new TypeGuardError({
                ...props,
                method: `typia.${method}`,
            });
        };
}
