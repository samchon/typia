import { NamingConvention } from "../utils/NamingConvention";
import { RandomGenerator } from "../utils/RandomGenerator";

import { IValidation } from "../IValidation";
import { TypeGuardError } from "../TypeGuardError";
import { $HeadersReader } from "./$HeadersReader";
import { $ParameterReader } from "./$ParameterReader";
import { $ProtobufReader } from "./$ProtobufReader";
import { $ProtobufSizer } from "./$ProtobufSizer";
import { $ProtobufWriter } from "./$ProtobufWriter";
import { $QueryReader } from "./$QueryReader";
import { $any } from "./$any";
import { $convention } from "./$convention";
import { $every } from "./$every";
import { $from } from "./$from";
import { $guard } from "./$guard";
import { $is_between } from "./$is_between";
import { $join } from "./$join";
import { $number } from "./$number";
import { $report } from "./$report";
import { $rest } from "./$rest";
import { $is_bigint_string } from "./$stoll";
import { $string } from "./$string";
import { $strlen } from "./$strlen";
import { $tail } from "./$tail";

/**
 * @internal
 */
export namespace Namespace {
    export const is = () => ({
        is_between: $is_between,
        is_bigint_string: $is_bigint_string,
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
            ...is(),
            Reader: $ProtobufReader,
            throws: $throws(`protobuf.${method}`),
        });

        export const encode = (method: string) => ({
            ...is(),
            Sizer: $ProtobufSizer,
            Writer: $ProtobufWriter,
            strlen: $strlen,
            throws: $throws(method),
        });
    }

    export namespace reflect {
        export const metadata = () => ({
            from: $from,
        });
    }

    export namespace http {
        export const query = () => $QueryReader;
        export const headers = () => $HeadersReader;
        export const parameter = () => $ParameterReader;
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

    export namespace notations {
        export const camel = (method: string) => ({
            ...base(method),
            any: $convention(NamingConvention.camel),
        });
        export const pascal = (method: string) => ({
            ...base(method),
            any: $convention(NamingConvention.pascal),
        });
        export const snake = (method: string) => ({
            ...base(method),
            any: $convention(NamingConvention.snake),
        });

        const base = (method: string) => ({
            ...is(),
            throws: $throws(`notations.${method}`),
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
