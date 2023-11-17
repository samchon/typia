export interface IJsDocTagInfo {
  name: string;
  text?: IJsDocTagInfo.IText[];
}
export namespace IJsDocTagInfo {
  export interface IText {
    text: string;
    kind: string;
  }
}
