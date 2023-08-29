import ts from "typescript";

import { Metadata } from "../schemas/metadata/Metadata";
import { MetadataAlias } from "../schemas/metadata/MetadataAlias";
import { MetadataArrayType } from "../schemas/metadata/MetadataArrayType";
import { MetadataObject } from "../schemas/metadata/MetadataObject";
import { MetadataTupleType } from "../schemas/metadata/MetadataTupleType";
import { explore_metadata } from "./internal/metadata/explore_metadata";
import { iterate_metadata_collection } from "./internal/metadata/iterate_metadata_collection";
import { iterate_metadata_sort } from "./internal/metadata/iterate_metadata_sort";

import { ValidationPipe } from "../typings/ValidationPipe";

import { MetadataCollection } from "./MetadataCollection";

export namespace MetadataFactory {
    export type Validator = (meta: Metadata, explore: IExplore) => string[];

    export interface IOptions {
        escape: boolean;
        constant: boolean;
        absorb: boolean;
        validate?: Validator;
        onError?: (node: ts.Node | undefined, message: string) => void;
    }

    export interface IExplore {
        top: boolean;
        object: MetadataObject | null;
        property: string | object | null;
        nested: null | MetadataAlias | MetadataArrayType | MetadataTupleType;
        escaped: boolean;
        aliased: boolean;
    }

    export interface IError {
        name: string;
        explore: IExplore;
        messages: string[];
    }

    export const analyze =
        (checker: ts.TypeChecker) =>
        (options: IOptions) =>
        (collection: MetadataCollection) =>
        (type: ts.Type | null): ValidationPipe<Metadata, IError> => {
            const errors: IError[] = [];
            const meta: Metadata = explore_metadata(checker)(options)(
                collection,
            )(errors)(type, {
                top: true,
                object: null,
                property: null,
                nested: null,
                escaped: false,
                aliased: false,
            });
            iterate_metadata_collection(errors)(collection);
            iterate_metadata_sort(collection)(meta);

            if (options.validate)
                errors.push(...validate(options)(options.validate)(meta));
            return errors.length
                ? {
                      success: false,
                      errors,
                  }
                : {
                      success: true,
                      data: meta,
                  };
        };

    /**
     * @internal
     */
    export const soleLiteral = (value: string): Metadata => {
        const meta: Metadata = Metadata.initialize();
        meta.constants.push({
            values: [value],
            type: "string",
        });
        return meta;
    };

    const validate =
        (options: IOptions) =>
        (functor: Validator) =>
        (meta: Metadata): IError[] => {
            const visitor: IValidationVisitor = {
                functor,
                errors: [],
                objects: new Set(),
                arrays: new Set(),
                tuples: new Set(),
                aliases: new Set(),
            };
            validateMeta(options)(visitor)(meta, {
                object: null,
                property: null,
                nested: null,
                top: true,
                aliased: false,
                escaped: false,
            });
            return visitor.errors;
        };

    const validateMeta =
        (options: IOptions) =>
        (visitor: IValidationVisitor) =>
        (meta: Metadata, explore: IExplore) => {
            const result: Set<string> = new Set(visitor.functor(meta, explore));
            if (result.size)
                visitor.errors.push({
                    name: meta.getName(),
                    explore: { ...explore },
                    messages: [...result],
                });

            for (const alias of meta.aliases)
                validateAlias(options)(visitor)(alias, explore);
            for (const array of meta.arrays)
                validateArray(options)(visitor)(array.type, explore);
            for (const tuple of meta.tuples)
                validateTuple(options)(visitor)(tuple.type, explore);
            for (const obj of meta.objects)
                validateObject(options)(visitor)(obj);
            for (const set of meta.sets)
                validateMeta(options)(visitor)(set, explore);
            for (const map of meta.maps) {
                validateMeta(options)(visitor)(map.key, explore);
                validateMeta(options)(visitor)(map.value, explore);
            }

            if (options.escape === true && meta.escaped !== null)
                validateMeta(options)(visitor)(meta.escaped.returns, {
                    ...explore,
                    escaped: true,
                });
        };

    const validateAlias =
        (options: IOptions) =>
        (visitor: IValidationVisitor) =>
        (alias: MetadataAlias, explore: IExplore) => {
            if (visitor.aliases.has(alias)) return;
            visitor.aliases.add(alias);

            validateMeta(options)(visitor)(alias.value, {
                ...explore,
                nested: alias,
                aliased: true,
            });
        };

    const validateArray =
        (options: IOptions) =>
        (visitor: IValidationVisitor) =>
        (array: MetadataArrayType, explore: IExplore) => {
            if (visitor.arrays.has(array)) return;
            visitor.arrays.add(array);

            validateMeta(options)(visitor)(array.value, {
                ...explore,
                nested: array,
                top: false,
            });
        };

    const validateTuple =
        (options: IOptions) =>
        (visitor: IValidationVisitor) =>
        (tuple: MetadataTupleType, explore: IExplore) => {
            if (visitor.tuples.has(tuple)) return;
            visitor.tuples.add(tuple);

            for (const elem of tuple.elements)
                validateMeta(options)(visitor)(elem, {
                    ...explore,
                    nested: tuple,
                    top: false,
                });
        };

    const validateObject =
        (options: IOptions) =>
        (visitor: IValidationVisitor) =>
        (object: MetadataObject) => {
            if (visitor.objects.has(object)) return;
            visitor.objects.add(object);

            for (const property of object.properties)
                validateMeta(options)(visitor)(property.value, {
                    object,
                    property: property.key.isSoleLiteral()
                        ? property.key.getSoleLiteral()!
                        : {},
                    nested: null,
                    top: false,
                    aliased: false,
                    escaped: false,
                });
        };

    interface IValidationVisitor {
        functor: Validator;
        errors: IError[];
        objects: Set<MetadataObject>;
        arrays: Set<MetadataArrayType>;
        tuples: Set<MetadataTupleType>;
        aliases: Set<MetadataAlias>;
    }
}
