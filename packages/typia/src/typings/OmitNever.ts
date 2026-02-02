import { SpecialFields } from "./SpecialFields";

export type OmitNever<T extends object> = Omit<T, SpecialFields<T, never>>;
