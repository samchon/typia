//================================================================

/**
 * @packageDocumentation
 * @module std.internal
 */
//================================================================
import { Color } from "./Color";

/**
 * Node of {@link XTree}
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export class XTreeNode<T> {
  public parent: XTreeNode<T> | null;
  public left: XTreeNode<T> | null;
  public right: XTreeNode<T> | null;

  public value: T;
  public color: Color;

  /* ---------------------------------------------------------
        CONSTRUCTORS
    --------------------------------------------------------- */
  public constructor(value: T, color: Color) {
    this.value = value;
    this.color = color;

    this.parent = null;
    this.left = null;
    this.right = null;
  }

  public get grand(): XTreeNode<T> | null {
    return this.parent!.parent;
  }

  public get sibling(): XTreeNode<T> | null {
    if (this === this.parent!.left) return this.parent!.right;
    else return this.parent!.left;
  }

  public get uncle(): XTreeNode<T> | null {
    return this.parent!.sibling;
  }
}
