import { IMetadataTypeTag } from "../schemas/metadata/IMetadataTypeTag";
import { Metadata } from "../schemas/metadata/Metadata";
import { MetadataObject } from "../schemas/metadata/MetadataObject";
import { MetadataProperty } from "../schemas/metadata/MetadataProperty";

export namespace MetadataTypeTagFactory {
    export const analyze =
        (type: "bigint" | "number" | "string" | "array") =>
        (objects: MetadataObject[]): IMetadataTypeTag[] => {
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
                    throw error(null)("must be optional object");

                // CHECK LIST OF PROPERTIES
                const tag: MetadataObject = top.value.objects[0]!;
                const statics: string[] = tag.properties
                    .map((p) => p.key.getSoleLiteral()!)
                    .filter((str) => str !== null);
                if (FIELDS.some((f) => !statics.includes(f)))
                    throw error(null)(
                        `must have four properties - ${FIELDS.map(
                            (str) => `'${str}'`,
                        ).join(", ")}`,
                    );

                tag.properties.forEach((p) => {
                    const key: string | null = p.key.getSoleLiteral();
                    if (key === null) return;
                    else if (FIELDS.includes(key) === false) return;
                    validate_property(key, p.value);
                });
                return true;
            });
            if (filtered.length === 0) return [];

            //----
            // CONSTRUCT TYPE TAGS
            //----
            // CREATE 1ST
            const tagList: ITypeTag[] = filtered.map(create_metadata_type_tag);
            const output: IMetadataTypeTag[] = tagList.map((tag) => ({
                target: tag.target,
                name: tag.name,
                kind: tag.kind,
                value: tag.value,
                validate: tag.validate[type]!,
                exclusive: tag.exclusive,
            }));
            validate(type)(output);
            return output;
        };

    export const validate =
        (type: "bigint" | "number" | "string" | "array") =>
        (tagList: IMetadataTypeTag[]) => {
            for (const tag of tagList)
                if (tag.target.includes(type))
                    error(null)(`target must constains ${type} type - ${tag}`);

            tagList.forEach((tag, i) => {
                if (tag.exclusive === false) return;
                else if (tag.exclusive === true) {
                    const some: boolean = tagList.some(
                        (opposite, j) => i !== j && opposite.kind === tag.kind,
                    );
                    if (some === true)
                        throw error(null)(
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
                        throw error(null)(
                            `kind '${tag.kind}' can't be used with '${some.name}'`,
                        );
                }
            });
        };

    const validate_property = (key: string, value: Metadata) => {
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
            throw error(key)(
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
            throw error(key)("must be a string literal type");
        else if (
            // VALUE
            key === "value" &&
            (value.size() > 1 ||
                (value.size() !== 0 &&
                    (value.constants.length !== 1 ||
                        value.constants[0]!.values.length !== 1)))
        )
            throw error(key)(
                "must be a constant literal type or undefined value",
            );
        else if (key === "exclusive") get_exclusive(key)(value);
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
            if (single === true) return;

            // RECORD<TARGET, STRING>
            const target: string[] | undefined = value.objects[0]?.properties
                .map((p) => p.key.getSoleLiteral()!)
                .filter((str) => str !== null) as string[] | undefined;
            if (target === undefined)
                throw error("target")(
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
                throw error(key)(
                    `must be a string literal type or Record<Target, string> type.`,
                );
        }
    };

    const create_metadata_type_tag = (obj: MetadataObject): ITypeTag => {
        const find = (key: string): MetadataProperty | undefined =>
            obj.properties[0]?.value.objects[0]?.properties.find(
                (p) => p.key.getSoleLiteral() === key,
            );

        const target = find("target")!.value.constants[0]!
            .values[0] as ITypeTag["target"];
        const kind: string = find("kind")!.value.constants[0]!
            .values[0] as string;
        const value: boolean | bigint | number | string | undefined =
            find("value")?.value.constants[0]?.values[0];
        const exclusive: string[] | boolean | undefined = get_exclusive(
            "exclusive",
        )(find("exclusive")?.value);
        const validate: Record<string, string> = (() => {
            const validate = find("validate")!.value;
            if (validate.constants.length)
                return {
                    [target]: validate.constants[0]!.values[0] as string,
                };
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
        (key: string) =>
        (value: Metadata | undefined): boolean | string[] => {
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
            throw error(key)(
                "must a boolean literal type or a tuple of string literal types.",
            );
        };
}

interface ITypeTag {
    name: string;
    target: "bigint" | "number" | "string" | "array";
    kind: string;
    value?: boolean | bigint | number | string;
    validate: Record<string, string>;
    exclusive: boolean | string[];
}

const FIELDS = ["target", "kind", "value", "validate"];

const error = (property: string | null) => (msg: string) =>
    new Error(
        `Error on typia.MetadataFactory.analyze(): the property '${
            property === null ? `["typia.tag"]` : `["typia.tag.${property}"]`
        }' ${msg}.`,
    );
