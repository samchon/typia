import { IMetadataTypeTag } from "../../schemas/metadata/IMetadataTypeTag";
import { MetadataAtomic } from "../../schemas/metadata/MetadataAtomic";

import { IJsonSchema } from "../../module";
import { application_default } from "./application_default";

type Schema = IJsonSchema.INumber | IJsonSchema.IInteger;

/**
 * @internal
 */
export const application_number =
    (atomic: MetadataAtomic) =>
    (attribute: IJsonSchema.IAttribute): Array<Schema> => {
        // BASE CONFIGURATION
        const base: Schema = {
            ...attribute,
            type: "number",
        };
        const out = (schema: Schema) => {
            schema.default = application_default(attribute)((str) => {
                const value: number = Number(str);
                const conditions: boolean[] = [!Number.isNaN(value)];
                if (schema.minimum !== undefined)
                    if (schema.exclusiveMinimum === true)
                        conditions.push(value > schema.minimum);
                    else conditions.push(value >= schema.minimum);
                if (schema.maximum !== undefined)
                    if (schema.exclusiveMaximum === true)
                        conditions.push(value < schema.maximum);
                    else conditions.push(value <= schema.maximum);
                if (schema.multipleOf !== undefined)
                    conditions.push(value % schema.multipleOf === 0);
                return conditions.every((cond) => cond);
            })((str) => Number(str));
            return schema;
        };
        if (atomic.tags.length === 0) return [out(base)];

        // CONSIDER TYPE TAGS
        const union: Schema[] = atomic.tags.map(
            (row) => application_number_tags({ ...base })(row)!,
        );
        const map: Map<string, Schema> = new Map(
            union.map((u) => [JSON.stringify(u), u]),
        );
        return [...map.values()].map((s) => out(s));
    };

const application_number_tags =
    (base: Schema) =>
    (row: IMetadataTypeTag[]): Schema => {
        for (const tag of row
            .slice()
            .sort((a, b) => a.kind.localeCompare(b.kind))) {
            if (
                tag.kind === "type" &&
                (tag.value === "int32" ||
                    tag.value === "uint32" ||
                    tag.value === "int64" ||
                    tag.value === "uint64")
            )
                base.type = "integer";
            else if (tag.kind === "minimum" && typeof tag.value === "number")
                base.minimum = tag.value;
            else if (tag.kind === "maximum" && typeof tag.value === "number")
                base.maximum = tag.value;
            else if (
                tag.kind === "exclusiveMinimum" &&
                typeof tag.value === "number"
            ) {
                base.minimum = tag.value;
                base.exclusiveMinimum = true;
            } else if (
                tag.kind === "exclusiveMaximum" &&
                typeof tag.value === "number"
            ) {
                base.maximum = tag.value;
                base.exclusiveMaximum = true;
            } else if (
                tag.kind === "multipleOf" &&
                typeof tag.value === "number"
            )
                base.multipleOf = tag.value;
        }
        base["x-typia-typeTags"] = row;
        return base;
    };
