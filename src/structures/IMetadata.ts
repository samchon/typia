export interface IMetadata {
    jsons: Map<string, IMetadata>;
    constants: Set<string | number | boolean>;
    atomics: Set<string>;
    arraies: Map<string, IMetadata | null>;
    tuples: Map<string, Array<IMetadata | null>>;
    objects: Map<string, IMetadata.IObject>;
    nullable: boolean;
    required: boolean;
    description?: string;
}
export namespace IMetadata {
    export interface IObject {
        $id: string;
        recursive: boolean;
        properties: Record<string, IMetadata | null>;
        nullable: boolean;
        description?: string;
    }
    export type IStorage = Record<string, IMetadata.IObject>;

    /**
     * @internal
     */
    export function create(): IMetadata {
        return {
            jsons: new Map(),
            constants: new Set(),
            atomics: new Set(),
            arraies: new Map(),
            tuples: new Map(),
            objects: new Map(),
            nullable: false,
            required: true,
        };
    }

    /**
     * @internal
     */
    export function empty(meta: IMetadata): boolean {
        return (
            meta.constants.size === 0 &&
            meta.arraies.size === 0 &&
            meta.atomics.size === 0 &&
            meta.objects.size === 0 &&
            meta.tuples.size === 0
        );
    }

    export function merge(
        x: IMetadata | null,
        y: IMetadata | null,
    ): IMetadata | null {
        if (x === null || y === null) return null;

        return {
            jsons: new Map([...x.jsons, ...y.jsons]),
            constants: new Set([...x.constants, ...y.constants]),
            atomics: new Set([...x.atomics, ...y.atomics]),
            arraies: new Map([...x.arraies, ...y.arraies]),
            tuples: new Map([...x.tuples, ...y.tuples]),
            objects: new Map([...x.objects, ...y.objects]),
            nullable: x.nullable || y.nullable,
            required: x.required && y.required,
        };
    }
}
