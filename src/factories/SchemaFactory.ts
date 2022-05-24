import { IJsonComponents } from "../structures/IJsonComponents";
import { IJsonSchema } from "../structures/IJsonSchema";
import { IJsonApplication } from "../structures/IJsonApplication";
import { IMetadata } from "../structures/IMetadata";

export namespace SchemaFactory
{
    export const JSON_PREFIX = "components#/schemas";
    export const SWAGGER_PREFIX = "#/components/schemas";

    export function application
        (
            app: IMetadata.IApplication | null,
            prefix: string = SWAGGER_PREFIX
        ): IJsonApplication
    {
        return {
            schema: {
                // $id: "$main",
                ...schema(app?.metadata || null, prefix)
            }, 
            components: components(app?.storage || null, prefix)
        };
    }

    /* -----------------------------------------------------------
        SCHEMA
    ----------------------------------------------------------- */
    export function schema
        (
            meta: IMetadata | null,
            prefix: string = SWAGGER_PREFIX
        ): IJsonSchema
    {
        if (meta === null)
            return {};

        const oneOf: IJsonSchema[] = [];
        for (const type of meta.atomics)
            oneOf.push(generate_atomic(type as "boolean", meta.nullable, meta.description));
        for (const [address, {recursive}] of meta.objects.entries())
        {
            const generator = recursive 
                ? generate_recursive_pointer 
                : generate_pointer;
            oneOf.push(generator(`${prefix}/${address}`, meta.description));
        }
        for (const schema of meta.arraies.values())
            oneOf.push(generate_array(prefix, schema, meta.nullable, meta.description));

        if (oneOf.length === 0)
            return {};
        else if (oneOf.length === 1)
            return oneOf[0]!;
        else
            return { oneOf };
    }

    function generate_atomic
        (
            type: "boolean"|"number"|"bigint"|"string", 
            nullable: boolean,
            description: string | undefined
        )
    {
        return {
            type,
            nullable,
            description
        };
    }

    function generate_pointer
        (
            $ref: string, 
            description: string | undefined
        ): IJsonSchema.IPointer
    {
        return {
            $ref,
            description
        };
    }

    function generate_recursive_pointer
        (
            $recursiveRef: string, 
            description: string | undefined
        ): IJsonSchema.IRecursivePointer
    {
        return {
            $recursiveRef,
            description
        };
    }

    function generate_array
        (
            prefix: string,
            metadata: IMetadata | null, 
            nullable: boolean,
            description: string | undefined
        ): IJsonSchema.IArray
    {
        return {
            type: "array",
            items: schema(metadata, prefix),
            nullable,
            description
        };
    }

    /* -----------------------------------------------------------
        COMPONENTS
    ----------------------------------------------------------- */
    export function components
        (
            storage: IMetadata.IStorage | null,
            prefix: string = SWAGGER_PREFIX
        ): IJsonComponents
    {
        const schemas: Record<string, any> = {};
        for (const [key, value] of Object.entries(storage || []))
            schemas[key] = generate_object(prefix, value);

        return { schemas };
    }

    function generate_object(prefix: string, obj: IMetadata.IObject): IJsonComponents.IObject
    {
        const properties: Record<string, any> = {};
        const required: string[] = [];

        for (const [key, value] of Object.entries(obj.properties || []))
        {
            properties[key] = schema(value, prefix);
            if (value?.required === true)
                required.push(key);
        }
        return {
            $id: obj.$id,
            $recursiveAnchor: obj.recursive || undefined,
            type: "object",
            properties,
            nullable: obj.nullable,
            required,
            description: obj.description
        };
    }
}