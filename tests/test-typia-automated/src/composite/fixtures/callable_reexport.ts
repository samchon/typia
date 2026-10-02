export type ReexportedCallLiteral = { (value: number): string };
export type ReexportedCallAlias = (value: number) => string;
export interface ReexportedCallInterface {
  (value: number): string;
}
export type ReexportedConstructLiteral = {
  new (value: number): { value: number };
};
export type ReexportedConstructAlias = new (value: number) => { value: number };
export interface ReexportedConstructInterface {
  new (value: number): { value: number };
}
