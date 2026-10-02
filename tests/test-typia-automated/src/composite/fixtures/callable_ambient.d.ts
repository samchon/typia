declare module "ambient-callable-declarations" {
  export type AmbientCallLiteral = { (value: number): string };
  export type AmbientCallAlias = (value: number) => string;
  export interface AmbientCallInterface {
    (value: number): string;
  }
  export type AmbientConstructLiteral = {
    new (value: number): { value: number };
  };
  export type AmbientConstructAlias = new (value: number) => { value: number };
  export interface AmbientConstructInterface {
    new (value: number): { value: number };
  }
}
