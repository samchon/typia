import { MapUtil } from "../utils/MapUtil";

export interface IMetadata {
    jsons: Map<string, IMetadata | null>;
    constants: Map<string, Set<string | number | boolean | bigint>>;
    atomics: Set<string>;
    arraies: Map<string, IMetadata | null>;
    tuples: Map<string, Array<IMetadata | null>>;
    objects: Map<string, [IMetadata.IObject, boolean]>;
    nullable: boolean;
    required: boolean;
    description?: string;
}
export namespace IMetadata {
    export interface IObject {
        $id: string;
        recursive: boolean;
        properties: Record<string, IMetadata | null>;
        description?: string;
    }
    export type IStorage = Record<string, IMetadata.IObject>;

    /**
     * @internal
     */
    export function create(): IMetadata {
        return {
            jsons: new Map(),
            constants: new Map(),
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
    export function size(meta: IMetadata): number {
        return (
            meta.jsons.size +
            meta.constants.size +
            meta.atomics.size +
            meta.arraies.size +
            meta.tuples.size +
            meta.objects.size
        );
    }

    /**
     * @internal
     */
    export function empty(meta: IMetadata): boolean {
        return size(meta) === 0;
    }

    /**
     * @internal
     */
    export function merge(
        x: IMetadata | null,
        y: IMetadata | null,
    ): IMetadata | null {
        if (x === null || y === null) return null;

        // MERGE CONSTANTS
        const constants: Map<
            string,
            Set<string | number | boolean | bigint>
        > = new Map();
        for (const [type, set] of x.constants)
            constants.set(type, new Set([...set]));
        for (const [type, set] of y.constants) {
            const target = MapUtil.take(constants, type, () => new Set());
            for (const elem of set) target.add(elem);
        }

        return {
            constants,
            jsons: new Map([...x.jsons, ...y.jsons]),
            atomics: new Set([...x.atomics, ...y.atomics]),
            arraies: new Map([...x.arraies, ...y.arraies]),
            tuples: new Map([...x.tuples, ...y.tuples]),
            objects: new Map([...x.objects, ...y.objects]),
            nullable: x.nullable || y.nullable,
            required: x.required && y.required,
        };
    }
}
