import { Atomic } from "../typings/Atomic";

import { TypeGuardError } from "../TypeGuardError";
import { IJsonApplication } from "./IJsonApplication";
import { IJsonComponents } from "./IJsonComponents";
import { IJsonSchema } from "./IJsonSchema";

export class JsonTypeChecker {
    public constructor(public readonly application: IJsonApplication) {}

    /* -----------------------------------------------------------
        GETTERS
    ----------------------------------------------------------- */
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

            throw new TypeGuardError({
                method: "JsonTypeChecker.getObject",
                path: "$input",
                expected:
                    "(string | IJsonSchema.IReference | IJsonSchema.IRecursiveReference)",
                value: param,
            });
        })();
        const must: boolean = typeof param === "object";

        const found: IJsonComponents.IObject | undefined =
            this.application.components.schemas[
                key.indexOf(prefix) === 0 ? key.substr(prefix.length + 1) : key
            ];
        if (found === undefined && must === true)
            throw new Error(
                `Error no JsonTypeChecker.getObject(): faild to find the matched object by "${key}".`,
            );
        return found;
    }

    /* -----------------------------------------------------------
        SPECIALIZERS
    ----------------------------------------------------------- */
    public isOneOf(schema: IJsonSchema): schema is IJsonSchema.IOneOf;
    public isOneOf(schema: IJsonSchema.IOneOf): boolean {
        return Array.isArray(schema.oneOf);
    }

    public isNotUnknown(schema: IJsonSchema): schema is IJsonSchema.NotUnknown;
    public isNotUnknown(schema: IJsonSchema.IUnkown): boolean {
        return Object.keys(schema).length !== 0;
    }

    public isAtomic(
        schema: IJsonSchema,
    ): schema is IJsonSchema.IAtomic<Atomic.Literal>;
    public isAtomic<TypeLiteral extends Atomic.Literal>(
        typeLiteral: TypeLiteral,
        schema: IJsonSchema,
    ): schema is IJsonSchema.IAtomic<TypeLiteral>;
    public isAtomic(...args: any[]): boolean {
        const literal: string | undefined = args[args.length - 2];
        const schema: IJsonSchema.IEnumeration<any> = args[args.length - 1];

        return (
            (literal !== undefined
                ? literal === schema.type
                : typeof schema.type === "string") && schema.enum === undefined
        );
    }

    public isEnumeration(
        schema: IJsonSchema,
    ): schema is IJsonSchema.IEnumeration<Atomic.Literal>;
    public isEnumeration<TypeLiteral extends Atomic.Literal>(
        typeLiteral: TypeLiteral,
        schema: IJsonSchema,
    ): schema is IJsonSchema.IEnumeration<TypeLiteral>;
    public isEnumeration(...args: any[]): boolean {
        const literal: string | undefined = args[args.length - 2];
        const schema: IJsonSchema.IEnumeration<any> = args[args.length - 1];

        return (
            (literal !== undefined
                ? literal === schema.type
                : typeof schema.type === "string") && schema.enum !== undefined
        );
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

    /* -----------------------------------------------------------
        PREDICATORS
    ----------------------------------------------------------- */
    public intersects(x: IJsonSchema, y: IJsonSchema): boolean {
        // WHEN ANY TYPE
        if (!this.isNotUnknown(x) || !this.isNotUnknown(y)) return true;

        // ITERATE UNION TYPES
        if (this.isOneOf(x)) return x.oneOf.some((x) => this.intersects(x, y));
        else if (this.isOneOf(y))
            return y.oneOf.some((y) => this.intersects(x, y));

        // OBJECT TYPE
        if (
            (this.isReference(x) || this.isRecursiveReference(x)) !==
            (this.isRecursiveReference(y) || this.isRecursiveReference(y))
        )
            return false;
        else if (
            this.isReference(x) ||
            this.isRecursiveReference(x) ||
            this.isReference(y) ||
            this.isRecursiveReference(y)
        )
            return this._Intersects_of_objects(
                this.getObject(x as any)!,
                this.getObject(y as any)!,
            );
        else if (x.nullable === true && y.nullable === true) return true;
        else if (x.type !== y.type) return false;

        // ARRAY OR TUPLE TYPE
        if (this.isArray(x) !== this.isArray(y)) return false;
        else if (this.isArray(x) && this.isArray(y))
            return this.intersects(x.items, y.items);
        else if (this.isTuple(x) !== this.isTuple(y)) return false;
        else if (this.isTuple(x) && this.isTuple(y))
            return x.items.some((a) =>
                y.items.some((b) => this.intersects(a, b)),
            );

        // ATOMIC OR LITERAL TYPE
        if (!this.isEnumeration(x) || !this.isEnumeration(y)) return true;
        return x.enum.some((a) => y.enum.some((b) => a === b));
    }

    private _Intersects_of_objects(
        x: IJsonComponents.IObject,
        y: IJsonComponents.IObject,
    ): boolean {
        if (x.nullable === true && true === y.nullable) return true;
        return Object.keys(x).some((xk) =>
            Object.keys(y).some((yk) => xk === yk),
        );
    }
}
