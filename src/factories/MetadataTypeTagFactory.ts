import { IMetadataTypeTag } from "../schemas/metadata/IMetadataTypeTag";
import { Metadata } from "../schemas/metadata/Metadata";
import { MetadataObject } from "../schemas/metadata/MetadataObject";
import { MetadataProperty } from "../schemas/metadata/MetadataProperty";

import { MetadataFactory } from "./MetadataFactory";

export namespace MetadataTypeTagFactory {
    export const analyze =
        (errors: MetadataFactory.IError[]) =>
        (type: "bigint" | "number" | "string" | "array") =>
        (
            objects: MetadataObject[],
            explore: MetadataFactory.IExplore,
        ): IMetadataTypeTag[] => {
            const messages: string[] = [];
            const report =
                (property: string | null) =>
                (msg: string): false => {
                    messages.push(
                        `the property ${
                            property === null
                                ? `["typia.tag"]`
                                : `["typia.tag.${property}"]`
                        } ${msg}.`,
                    );
                    return false;
                };

            //----
            // VALIDATION PROCESS
            //----
            const filtered: MetadataObject[] = objects.filter((obj) => {
                // ONLY ONE PROPERTY
                if (obj.properties.length !== 1) return false;

                // THE TAG.TYPE PROPERTY MUST BE
                const top: MetadataProperty = obj.properties[0]!;
                if (
                    top.key.getSoleLiteral() !== "typia.tag" ||
                    top.value.size() !== 1 ||
                    top.value.objects.length !== 1
                )
                    return false;
                else if (top.value.optional === false)
                    return report(null)("must be optional object");

                // CHECK LIST OF PROPERTIES
                const tag: MetadataObject = top.value.objects[0]!;
                const statics: string[] = tag.properties
                    .map((p) => p.key.getSoleLiteral()!)
                    .filter((str) => str !== null);
                if (FIELDS.some((f) => !statics.includes(f)))
                    return report(null)(
                        `must have four properties - ${FIELDS.map(
                            (str) => `'${str}'`,
                        ).join(", ")}`,
                    );

                const each: boolean[] = tag.properties.map((p) => {
                    const key: string | null = p.key.getSoleLiteral();
                    if (key === null) return true;
                    else if (FIELDS.includes(key) === false) return true;
                    return validate_property(report)(key, p.value);
                });
                return each.every((v) => v === true);
            });
            if (filtered.length === 0) return [];

            //----
            // CONSTRUCT TYPE TAGS
            //----
            // CREATE 1ST
            const tagList: Array<ITypeTag | null> = filtered.map(
                create_metadata_type_tag(report),
            );

            const output: IMetadataTypeTag[] = [];
            for (const tag of tagList)
                if (tag !== null)
                    output.push({
                        target: tag.target.some((str) => str === type)
                            ? type
                            : null!,
                        name: tag.name,
                        kind: tag.kind,
                        value: tag.value,
                        validate: tag.validate[type]!,
                        exclusive: tag.exclusive,
                    });
            validate(report)(type)(output);

            if (messages.length > 0) {
                errors.push({
                    name: [type, ...objects.map((o) => o.name)].join(" & "),
                    explore,
                    messages,
                });
                return [];
            }
            return output;
        };

    export const validate =
        (report: (property: string | null) => (msg: string) => false) =>
        (type: "bigint" | "number" | "string" | "array") =>
        (tagList: IMetadataTypeTag[]): boolean => {
            let success: boolean = true;
            for (const tag of tagList)
                if (tag.target !== type) {
                    success &&= report(null)(
                        `target must constains ${type} type`,
                    );
                }

            tagList.forEach((tag, i) => {
                if (tag.exclusive === false) return;
                else if (tag.exclusive === true) {
                    const some: boolean = tagList.some(
                        (opposite, j) => i !== j && opposite.kind === tag.kind,
                    );
                    if (some === true)
                        success &&= report(null)(
                            `kind '${tag.kind}' can't be duplicated`,
                        );
                } else if (Array.isArray(tag.exclusive)) {
                    const some: IMetadataTypeTag | undefined = tagList.find(
                        (opposite, j) =>
                            i !== j &&
                            opposite.kind === tag.kind &&
                            (tag.exclusive as string[]).includes(opposite.name),
                    );
                    if (some !== undefined)
                        success ??= report(null)(
                            `kind '${tag.kind}' can't be used with '${some.name}'`,
                        );
                }
            });
            return success;
        };

    const validate_property =
        (report: (property: string | null) => (msg: string) => false) =>
        (key: string, value: Metadata): boolean => {
            if (
                // TARGET
                key === "target" &&
                (value.constants.length !== 1 ||
                    value.constants[0]!.values.length !== value.size() ||
                    value.constants[0]!.values.some(
                        (v) =>
                            v !== "bigint" &&
                            v !== "number" &&
                            v !== "string" &&
                            v !== "array",
                    ))
            )
                return report(key)(
                    `must be one of 'bigint', 'number', 'string', 'array'`,
                );
            else if (
                // KIND
                key === "kind" &&
                (value.size() !== 1 ||
                    value.constants.length !== 1 ||
                    value.constants[0]!.type !== "string" ||
                    value.constants[0]!.values.length !== 1)
            )
                return report(key)("must be a string literal type");
            else if (
                // VALUE
                key === "value" &&
                (value.size() > 1 ||
                    (value.size() !== 0 &&
                        (value.constants.length !== 1 ||
                            value.constants[0]!.values.length !== 1)))
            )
                return report(key)(
                    "must be a constant literal type or undefined value",
                );
            else if (key === "exclusive")
                return get_exclusive(report)(key)(value) !== null;
            else if (key === "validate") {
                //----
                // VALIDATE
                //----
                // STRING CASE
                const single: boolean =
                    value.size() === 1 &&
                    value.constants.length === 1 &&
                    value.constants[0]!.type === "string" &&
                    value.constants[0]!.values.length === 1;
                if (single === true) return true;

                // RECORD<TARGET, STRING>
                const target: string[] | undefined =
                    value.objects[0]?.properties
                        .map((p) => p.key.getSoleLiteral()!)
                        .filter((str) => str !== null) as string[] | undefined;
                if (target === undefined)
                    return report("target")(
                        `must be one of 'bigint', 'number', 'string', 'array'`,
                    );
                const variadic: boolean =
                    value.size() === 1 &&
                    value.objects.length === 1 &&
                    value.objects[0]!.properties.every(
                        (vp) =>
                            vp.value.size() === 1 &&
                            vp.value.isRequired() &&
                            vp.value.nullable === false &&
                            vp.value.constants.length === 1 &&
                            vp.value.constants[0]!.type === "string" &&
                            vp.value.constants[0]!.values.length === 1 &&
                            target.includes(vp.key.getSoleLiteral()!),
                    );
                if (variadic === false)
                    return report(key)(
                        `must be a string literal type or Record<Target, string> type.`,
                    );
            }
            return true;
        };

    const create_metadata_type_tag =
        (report: (property: string | null) => (msg: string) => false) =>
        (obj: MetadataObject): ITypeTag | null => {
            const find = (key: string): MetadataProperty | undefined =>
                obj.properties[0]?.value.objects[0]?.properties.find(
                    (p) => p.key.getSoleLiteral() === key,
                );

            const target = find("target")!.value.constants[0]!
                .values as ITypeTag["target"];
            const kind: string = find("kind")!.value.constants[0]!
                .values[0] as string;
            const value: boolean | bigint | number | string | undefined =
                find("value")?.value.constants[0]?.values[0];
            const exclusive: string[] | boolean | null = get_exclusive(report)(
                "exclusive",
            )(find("exclusive")?.value);
            if (exclusive === null) return null;

            const validate: Record<string, string> = (() => {
                const validate = find("validate")!.value;
                if (validate.constants.length)
                    return Object.fromEntries(
                        target.map((t) => [
                            t,
                            validate.constants[0]!.values[0] as string,
                        ]),
                    );
                return Object.fromEntries(
                    validate.objects[0]!.properties.map((p) => [
                        p.key.getSoleLiteral()!,
                        p.value.constants[0]!.values[0]! as string,
                    ]),
                );
            })();

            return {
                name: obj.name,
                target,
                kind,
                value,
                validate,
                exclusive: exclusive ?? false,
            };
        };

    const get_exclusive =
        (report: (property: string | null) => (msg: string) => false) =>
        (key: string) =>
        (value: Metadata | undefined): boolean | string[] | null => {
            if (value === undefined) return false;
            else if (
                value.size() === 1 &&
                value.constants.length === 1 &&
                value.constants[0]!.type === "boolean" &&
                value.constants[0]!.values.length === 1
            )
                return value.constants[0]!.values[0]! as boolean;
            else if (
                value.size() === 1 &&
                value.tuples.length === 1 &&
                value.tuples[0]!.type.elements.every(
                    (elem) =>
                        elem.size() === 1 &&
                        elem.constants.length === 1 &&
                        elem.constants[0]!.type === "string" &&
                        elem.constants[0]!.values.length === 1,
                )
            )
                return value.tuples[0]!.type.elements.map(
                    (elem) => elem.constants[0]!.values[0]! as string,
                );
            report(key)(
                "must a boolean literal type or a tuple of string literal types.",
            );
            return null;
        };
}

interface ITypeTag {
    name: string;
    target: Array<"bigint" | "number" | "string" | "array">;
    kind: string;
    value?: boolean | bigint | number | string;
    validate: Record<string, string>;
    exclusive: boolean | string[];
}

const FIELDS = ["target", "kind", "value", "validate"];
