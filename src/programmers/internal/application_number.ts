import { IJsonSchema } from "../../module";
import { application_default } from "./application_default";

/**
 * @internal
 */
export const application_number = (
    nullable: boolean,
    attribute: IJsonSchema.IAttribute,
): IJsonSchema.INumber | IJsonSchema.IInteger => {
    const output: IJsonSchema.INumber | IJsonSchema.IInteger = {
        type: "number" as "number" | "integer",
        nullable,
        ...attribute,
    };
    for (const tag of attribute["x-typia-metaTags"] || []) {
        // CHECK TYPE
        if (
            tag.kind === "type" &&
            (tag.value === "int" || tag.value === "uint")
        )
            output.type = "integer";
        // RANGE TAG
        else if (tag.kind === "minimum") output.minimum = tag.value;
        else if (tag.kind === "maximum") output.maximum = tag.value;
        else if (tag.kind === "exclusiveMinimum") {
            output.minimum = tag.value;
            output.exclusiveMinimum = true;
        } else if (tag.kind === "exclusiveMaximum") {
            output.maximum = tag.value;
            output.exclusiveMaximum = true;
        }
        // MULTIPLE-OF
        else if (tag.kind === "multipleOf") output.multipleOf = tag.value;
    }

    // WHEN UNSIGNED INT
    if (
        output.type === "integer" &&
        (attribute["x-typia-metaTags"] || []).find(
            (tag) => tag.kind === "type" && tag.value === "uint",
        )
    )
        if (
            output.minimum === undefined ||
            (output.exclusiveMaximum !== true && output.minimum < 0)
        )
            output.minimum = 0;
        else if (output.exclusiveMinimum === true && output.minimum < -1) {
            output.maximum = 0;
            delete output.exclusiveMinimum;
        }

    // DEFAULT CONFIGURATION
    output.default = application_default(attribute)((str) => {
        const value: number = Number(str);
        const conditions: boolean[] = [!Number.isNaN(value)];
        if (output.minimum !== undefined)
            if (output.exclusiveMinimum === true)
                conditions.push(value > output.minimum);
            else conditions.push(value >= output.minimum);
        if (output.maximum !== undefined)
            if (output.exclusiveMaximum === true)
                conditions.push(value < output.maximum);
            else conditions.push(value <= output.maximum);
        if (output.multipleOf !== undefined)
            conditions.push(value % output.multipleOf === 0);
        return conditions.every((cond) => cond);
    })((str) => Number(str));

    // RETURNS
    return output;
};
