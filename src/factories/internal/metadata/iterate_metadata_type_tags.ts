import { IMetadataTypeTag } from "../../../schemas/metadata/IMetadataTypeTag";
import { MetadataObject } from "../../../schemas/metadata/MetadataObject";
import { MetadataProperty } from "../../../schemas/metadata/MetadataProperty";

export const iterate_metadata_type_tags =
    (type: "bigint" | "number" | "string" | "array") =>
    (objects: MetadataObject[]): IMetadataTypeTag[] => {
        const filtered: MetadataObject[] = objects.filter((obj) => {
            //----
            // VALIDATION PROCESS
            //----
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

            for (const p of tag.properties) {
                const key: string | null = p.key.getSoleLiteral();
                if (key === null) continue;
                else if (FIELDS.includes(key) === false) continue;
                else if (
                    // TARGET
                    key === "target" &&
                    (p.value.constants.length !== 1 ||
                        p.value.constants[0]!.values.length !==
                            p.value.size() ||
                        p.value.constants[0]!.values.some(
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
                    (p.value.size() !== 1 ||
                        p.value.constants.length !== 1 ||
                        p.value.constants[0]!.type !== "string" ||
                        p.value.constants[0]!.values.length !== 1)
                )
                    throw error(key)("must be a string literal type");
                else if (
                    // VALUE
                    key === "value" &&
                    (p.value.size() !== 1 ||
                        p.value.constants.length !== 1 ||
                        p.value.constants[0]!.values.length !== 1)
                )
                    throw error(key)("must be a constant literal type");
                else if (key === "validate") {
                    //----
                    // VALIDATE
                    //----
                    // STRING CASE
                    const single: boolean =
                        p.value.size() === 1 &&
                        p.value.constants.length === 1 &&
                        p.value.constants[0]!.type === "string" &&
                        p.value.constants[0]!.values.length === 1;
                    if (single === true) continue;

                    // RECORD<TARGET, STRING>
                    const target: string[] | undefined =
                        p.value.objects[0]?.properties.find(
                            (p) => p.key.getSoleLiteral()! === "target",
                        )?.value?.constants?.[0]?.values as
                            | string[]
                            | undefined;
                    if (target === undefined)
                        throw error("target")(
                            `must be one of 'bigint', 'number', 'string', 'array'`,
                        );
                    const variadic: boolean =
                        p.value.size() === 1 &&
                        p.value.objects.length === 1 &&
                        p.value.objects[0]!.properties.every(
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
            }
            return true;
        });

        const tagList: ITypeTag[] = filtered.map((obj) => {
            const find = (key: string): MetadataProperty =>
                obj.properties[0]!.value.objects[0]!.properties.find(
                    (p) => p.key.getSoleLiteral() === key,
                )!;

            const target = find("target").value.constants[0]!
                .values as ITypeTag["target"];
            const kind: string = find("kind").value.constants[0]!
                .values[0] as string;
            const value: boolean | bigint | number | string =
                find("value").value.constants[0]!.values[0]!;
            const validate: Record<string, string> = (() => {
                const validate = find("validate").value;
                if (validate.constants.length)
                    return {
                        [target[0]!]: validate.constants[0]!
                            .values[0] as string,
                    };
                return Object.fromEntries(
                    validate.objects[0]!.properties.map((p) => [
                        p.key.getSoleLiteral()!,
                        p.value.constants[0]!.values[0]! as string,
                    ]),
                );
            })();

            return { name: obj.name, target, kind, value, validate };
        });
        if (filtered.length === 0) return [];

        for (const tag of tagList)
            if (tag.target.includes(type))
                error(null)(
                    `target must constains ${type} type - ${JSON.stringify(
                        tag,
                    )}`,
                );

        return tagList.map((tag) => ({
            name: tag.name,
            kind: tag.kind,
            value: tag.value,
            validate: tag.validate[type]!,
        }));
    };

interface ITypeTag {
    name: string;
    target: Array<"bigint" | "number" | "string" | "array">;
    kind: string;
    value: boolean | bigint | number | string;
    validate: Record<string, string>;
}

const FIELDS = ["target", "kind", "value", "validate"];

const error = (property: string | null) => (msg: string) =>
    new Error(
        `Error on typia.MetadataFactory.analyze(): the property '${
            property === null ? `["typia.tag"]` : `["typia.tag.${property}"]`
        }' ${msg}.`,
    );
