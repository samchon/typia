import ts from "typescript";

import { Metadata } from "../../../schemas/metadata/Metadata";
import { MetadataConstant } from "../../../schemas/metadata/MetadataConstant";

import { ArrayUtil } from "../../../utils/ArrayUtil";

import { MetadataFactory } from "../../MetadataFactory";

export const iterate_metadata_constant =
    (checker: ts.TypeChecker) =>
    (options: MetadataFactory.IOptions) =>
    (meta: Metadata, type: ts.Type): boolean => {
        if (!options.constant) return false;

        const filter = (flag: ts.TypeFlags) => (type.getFlags() & flag) !== 0;
        if (type.isLiteral()) {
            const value: string | number | bigint =
                typeof type.value === "object"
                    ? BigInt(
                          `${type.value.negative ? "-" : ""}${
                              type.value.base10Value
                          }`,
                      )
                    : type.value;
            const constant: MetadataConstant = ArrayUtil.take(
                meta.constants,
                (elem) => elem.type === typeof value,
                () => ({
                    type: typeof value as "number",
                    values: [],
                }),
            );
            ArrayUtil.add(
                constant.values as Array<any>,
                value,
                (a, b) => a === b,
            );
            return true;
        } else if (filter(ts.TypeFlags.BooleanLiteral)) {
            const value: boolean = checker.typeToString(type) === "true";
            const constant: MetadataConstant = ArrayUtil.take(
                meta.constants,
                (elem) => elem.type === "boolean",
                () => ({
                    type: "boolean",
                    values: [],
                }),
            );
            ArrayUtil.add(
                constant.values as boolean[],
                value,
                (a, b) => a === b,
            );
            return true;
        }
        return false;
    };
