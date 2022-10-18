import { IJsonSchema } from "../../module";
import { application_default } from "./application_default";

/**
 * @internal
 */
export const application_number = (
    nullable: boolean,
    attribute: IJsonSchema.IAttribute,
): IJsonSchema.INumber => {
    const output: IJsonSchema.INumber = {
        type: "number",
        nullable,
        ...attribute,
    };
    for (const tag of attribute["x-tson-metaTags"] || []) {
        // CHECK TYPE
        if (
            tag.kind === "type" &&
            (tag.value === "int" || tag.value === "uint")
        )
            output.type = "integer";
        // RANGE TAG
        else if (tag.kind === "minimum") output.minimum = tag.value;
        else if (tag.kind === "maximum") output.maximum = tag.value;
        else if (tag.kind === "range") {
            if (tag.minimum !== undefined)
                if (tag.minimum.include === true)
                    output.minimum = tag.minimum.value;
                else output.exclusiveMinimum = tag.minimum.value;
            if (tag.maximum !== undefined)
                if (tag.maximum.include === true)
                    output.maximum = tag.maximum.value;
                else output.exclusiveMaximum = tag.maximum.value;
        }
    }

    // WHEN UNSIGNED INT
    if (
        output.type === "integer" &&
        (attribute["x-tson-metaTags"] || []).find(
            (tag) => tag.kind === "type" && tag.value === "uint",
        )
    )
        if (output.minimum === undefined || output.minimum < 0)
            output.minimum = 0;
        else if (
            output.exclusiveMinimum === undefined ||
            output.exclusiveMinimum < 0
        ) {
            delete output.exclusiveMinimum;
            output.maximum = 0;
        }

    // DEFAULT CONFIGURATION
    output.default = application_default(attribute)((str) => {
        const value: number = Number(str);
        const conditions: boolean[] = [!Number.isNaN(value)];
        if (output.minimum !== undefined)
            conditions.push(value >= output.minimum);
        if (output.maximum !== undefined)
            conditions.push(value <= output.maximum);
        if (output.exclusiveMinimum !== undefined)
            conditions.push(value > output.exclusiveMinimum);
        if (output.exclusiveMaximum !== undefined)
            conditions.push(value < output.exclusiveMaximum);
        return conditions.every((cond) => cond);
    })((str) => Number(str));

    // RETURNS
    return output;
};
