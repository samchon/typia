import ts from "typescript";
import { hash } from "tstl/functional/hash";

export class TypeEntry {
    public constructor(
        public readonly type: ts.Type,
        public readonly nullable: boolean,
        public readonly required: boolean,
    ) {}

    public equals(obj: TypeEntry): boolean {
        return (
            this.type === obj.type &&
            this.nullable === obj.nullable &&
            this.required === obj.required
        );
    }

    public hashCode(): number {
        return hash(this.type, this.nullable, this.required);
    }
}
