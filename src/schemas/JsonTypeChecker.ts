import { TypeGuardError } from "../TypeGuardError";

import { Atomic } from "../typings/Atomic";
import { IJsonApplication } from "./IJsonApplication";
import { IJsonComponents } from "./IJsonComponents";
import { IJsonSchema } from "./IJsonSchema";

export class JsonTypeChecker {
    public constructor(public readonly application: IJsonApplication) {}

    public getObject(key: string): IJsonComponents.IObject | undefined;
    public getObject(schema: IJsonSchema.IReference): IJsonComponents.IObject;
    public getObject(
        schema: IJsonSchema.IRecursiveReference,
    ): IJsonComponents.IObject;

    public getObject(param: any) {
        const prefix: string = this.application.prefix;
        const key: string = (() => {
            if (typeof param === "string") return param;
            else if (this.isReference(param)) return param.$ref;
            else if (this.isRecursiveReference(param))
                return param.$recursiveRef;

            throw new TypeGuardError(
                "JsonTypeChecker.getObject",
                "$input",
                param,
            );
        })();
        const must: boolean = typeof param === "object";

        const found: IJsonComponents.IObject | undefined =
            this.application.components.schemas[`${prefix}/${key}`];
        if (found === undefined && must === true)
            throw new Error(
                `Error no JsonTypeChecker.getObject(): faild to find the matched object by "${key}".`,
            );
        return found;
    }

    public isOneOf(schema: IJsonSchema): schema is IJsonSchema.IOneOf;
    public isOneOf(schema: IJsonSchema.IOneOf): boolean {
        return Array.isArray(schema.oneOf);
    }

    public isUnknown(schema: IJsonSchema): schema is IJsonSchema.IUnkown;
    public isUnknown(schema: IJsonSchema.IUnkown): boolean {
        return Object.keys(schema).length === 0;
    }

    public isAtomic<TypeLiteral extends Atomic.Literal>(
        typeLiteral: TypeLiteral,
        schema: IJsonSchema,
    ): schema is IJsonSchema.IAtomic<TypeLiteral>;
    public isAtomic<TypeLiteral extends Atomic.Literal>(
        typeLiteral: TypeLiteral,
        schema: IJsonSchema.IEnumeration<TypeLiteral>,
    ): boolean {
        return schema.type === typeLiteral && schema.enum === undefined;
    }

    public isEnumeration<TypeLiteral extends Atomic.Literal>(
        typeLiteral: TypeLiteral,
        schema: IJsonSchema,
    ): schema is IJsonSchema.IEnumeration<TypeLiteral>;
    public isEnumeration<TypeLiteral extends Atomic.Literal>(
        typeLiteral: TypeLiteral,
        schema: IJsonSchema.IEnumeration<TypeLiteral>,
    ): boolean {
        return schema.type === typeLiteral && schema.enum !== undefined;
    }

    public isArray(schema: IJsonSchema): schema is IJsonSchema.IArray;
    public isArray(schema: IJsonSchema.IArray): boolean {
        return typeof schema.items === "object" && !Array.isArray(schema.items);
    }

    public isTuple(schema: IJsonSchema): schema is IJsonSchema.ITuple;
    public isTuple(schema: IJsonSchema.ITuple): boolean {
        return Array.isArray(schema.items);
    }

    public isReference(schema: IJsonSchema): schema is IJsonSchema.IReference;
    public isReference(schema: IJsonSchema.IReference): boolean {
        return schema.$ref !== undefined;
    }

    public isRecursiveReference(
        schema: IJsonSchema,
    ): schema is IJsonSchema.IRecursiveReference;
    public isRecursiveReference(
        schema: IJsonSchema.IRecursiveReference,
    ): schema is IJsonSchema.IRecursiveReference {
        return schema.$recursiveRef !== undefined;
    }
}
