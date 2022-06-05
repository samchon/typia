import { IJsonApplication } from "../structures/IJsonApplication";
import { IJsonComponents } from "../structures/IJsonComponents";
import { IJsonSchema } from "../structures/IJsonSchema";
import { IMetadata } from "../structures/IMetadata";

export namespace SchemaFactory {
    export const JSON_PREFIX = "components#/schemas";
    export const SWAGGER_PREFIX = "#/components/schemas";

    export function application(
        app: IMetadata.IApplication | null,
        prefix: string = SWAGGER_PREFIX,
        forAjv: boolean = false,
    ): IJsonApplication {
        return {
            schema: generate_schema(app?.metadata || null, prefix, forAjv),
            components: components(app?.storage || null, prefix, forAjv),
        };
    }

    /* -----------------------------------------------------------
        SCHEMA
    ----------------------------------------------------------- */
    export function schema(
        meta: IMetadata | null,
        prefix: string = SWAGGER_PREFIX,
        forAjv: boolean = false,
    ): IJsonSchema {
        return generate_schema(meta, prefix, forAjv);
    }

    function generate_schema(
        meta: IMetadata | null,
        prefix: string,
        forAjv: boolean,
    ): IJsonSchema {
        if (meta === null) return {};
        else if (
            meta.nullable === true &&
            meta.arraies.size === 0 &&
            meta.atomics.size === 0 &&
            meta.objects.size === 0 &&
            meta.tuples.size === 0
        )
            return { type: "null" };

        const oneOf: IJsonSchema[] = [];
        for (const type of meta.atomics)
            oneOf.push(
                generate_atomic(
                    type as "boolean",
                    meta.nullable,
                    meta.description,
                ),
            );
        for (const [address, { recursive }] of meta.objects.entries()) {
            const generator =
                forAjv && recursive
                    ? generate_recursive_pointer
                    : generate_pointer;
            oneOf.push(generator(`${prefix}/${address}`, meta.description));
        }
        for (const schema of meta.arraies.values())
            oneOf.push(
                generate_array(
                    prefix,
                    forAjv,
                    schema,
                    meta.nullable,
                    meta.description,
                ),
            );
        for (const items of meta.tuples.values())
            oneOf.push(
                generate_tuple(
                    prefix,
                    forAjv,
                    items,
                    meta.nullable,
                    meta.description,
                ),
            );

        if (oneOf.length === 0) return {};
        else if (oneOf.length === 1) return oneOf[0]!;
        else return { oneOf };
    }

    function generate_atomic(
        type: "boolean" | "number" | "bigint" | "string",
        nullable: boolean,
        description: string | undefined,
    ) {
        return {
            type,
            nullable,
            description,
        };
    }

    function generate_pointer(
        $ref: string,
        description: string | undefined,
    ): IJsonSchema.IPointer {
        return {
            $ref,
            description,
        };
    }

    function generate_recursive_pointer(
        $recursiveRef: string,
        description: string | undefined,
    ): IJsonSchema.IRecursivePointer {
        return {
            $recursiveRef,
            description,
        };
    }

    function generate_array(
        prefix: string,
        forAjv: boolean,
        metadata: IMetadata | null,
        nullable: boolean,
        description: string | undefined,
    ): IJsonSchema.IArray {
        return {
            type: "array",
            items: generate_schema(metadata, prefix, forAjv),
            nullable,
            description,
        };
    }

    function generate_tuple(
        prefix: string,
        forAjv: boolean,
        items: Array<IMetadata | null>,
        nullable: boolean,
        description: string | undefined,
    ): IJsonSchema.ITuple {
        return {
            type: "array",
            items: items.map((schema) =>
                generate_schema(schema, prefix, forAjv),
            ),
            nullable,
            description,
        };
    }

    /* -----------------------------------------------------------
        COMPONENTS
    ----------------------------------------------------------- */
    export function components(
        storage: IMetadata.IStorage | null,
        prefix: string = SWAGGER_PREFIX,
        forAjv: boolean = false,
    ): IJsonComponents {
        return generate_components(storage, prefix, forAjv);
    }

    function generate_components(
        storage: IMetadata.IStorage | null,
        prefix: string,
        forAjv: boolean,
    ): IJsonComponents {
        const schemas: Record<string, any> = {};
        for (const [key, value] of Object.entries(storage || []))
            schemas[key] = generate_object(prefix, forAjv, value);

        return { schemas };
    }

    function generate_object(
        prefix: string,
        forAjv: boolean,
        obj: IMetadata.IObject,
    ): IJsonComponents.IObject {
        const properties: Record<string, any> = {};
        const required: string[] = [];

        for (const [key, value] of Object.entries(obj.properties || [])) {
            properties[key] = generate_schema(value, prefix, forAjv);
            if (value?.required === true) required.push(key);
        }

        return {
            $id: forAjv ? obj.$id : undefined,
            $recursiveAnchor: (forAjv && obj.recursive) || undefined,
            type: "object",
            properties,
            nullable: obj.nullable,
            required: required.length ? required : undefined,
            description: obj.description,
        };
    }
}
