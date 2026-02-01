//================================================================

/**
 * @packageDocumentation
 * @module std.internal
 */
//================================================================
import { Comparator } from "../functional/Comparator";
import { Color } from "./Color";
import { XTreeNode } from "./XTreeNode";

/**
 * Red-Black Tree
 *
 * @reference https://en.wikipedia.org/w/index.php?title=Red%E2%80%93black_tree
 * @inventor Rudolf Bayer
 * @author Jeongho Nam - https://github.com/samchon
 */
export abstract class XTree<T> {
  protected root_: XTreeNode<T> | null;

  private comp_: Comparator<T>;
  private equal_: Comparator<T>;

  /* ---------------------------------------------------------
        CONSTRUCTOR
    --------------------------------------------------------- */
  protected constructor(comp: Comparator<T>) {
    this.root_ = null;

    this.comp_ = comp;
    this.equal_ = function (x: T, y: T): boolean {
      return !comp(x, y) && !comp(y, x);
    };
  }

  public clear(): void {
    this.root_ = null;
  }

  /* =========================================================
        ACCESSORS
            - GETTERS
            - COMPARISON
    ============================================================
        GETTERS
    --------------------------------------------------------- */
  public root(): XTreeNode<T> | null {
    return this.root_;
  }

  public get(val: T): XTreeNode<T> | null {
    const ret = this.nearest(val);
    if (ret === null || !this.equal_(val, ret.value)) return null;
    else return ret;
  }

  public nearest(val: T): XTreeNode<T> | null {
    // NEED NOT TO ITERATE
    if (this.root_ === null) return null;

    //----
    // ITERATE
    //----
    let ret: XTreeNode<T> | null = this.root_;

    while (true) {
      // UNTIL MEET THE MATCHED VALUE OR FINAL BRANCH
      let my_node: XTreeNode<T> | null = null;

      // COMPARE
      if (this.comp_(val, ret.value)) my_node = ret.left;
      else if (this.comp_(ret.value, val)) my_node = ret.right;
      else return ret; // MATCHED VALUE

      // FINAL BRANCH? OR KEEP GOING
      if (my_node !== null) ret = my_node;
      else break;
    }
    return ret; // DIFFERENT NODE
  }

  private _Fetch_maximum(node: XTreeNode<T>): XTreeNode<T> {
    while (node.right !== null) node = node.right;

    return node;
  }

  /* =========================================================
        ELEMENTS I/O
            - INSERT
            - ERASE
            - COLOR
            - ROTATION
    ============================================================
        INSERT
    --------------------------------------------------------- */
  public insert(val: T): void {
    const parent = this.nearest(val);
    const node = new XTreeNode<T>(val, Color.RED);

    if (parent === null) this.root_ = node;
    else {
      node.parent = parent;

      if (this.comp_(node.value, parent.value)) parent.left = node;
      else parent.right = node;
    }

    this._Insert_case1(node);
  }

  private _Insert_case1(n: XTreeNode<T>): void {
    if (n.parent === null) n.color = Color.BLACK;
    else this._Insert_case2(n);
  }

  private _Insert_case2(n: XTreeNode<T>): void {
    if (this._Fetch_color(n.parent) === Color.BLACK) return;
    else this._Insert_case3(n);
  }

  private _Insert_case3(n: XTreeNode<T>): void {
    if (this._Fetch_color(n.uncle) === Color.RED) {
      n.parent!.color = Color.BLACK;
      n.uncle!.color = Color.BLACK;
      n.grand!.color = Color.RED;

      this._Insert_case1(n.grand!);
    } else this._Insert_case4(n);
  }

  private _Insert_case4(n: XTreeNode<T>): void {
    if (n === n.parent!.right && n.parent === n.grand!.left) {
      this._Rotate_left(n.parent!);
      n = n.left!;
    } else if (n === n.parent!.left && n.parent === n.grand!.right) {
      this._Rotate_right(n.parent!);
      n = n.right!;
    }

    this._Insert_case5(n);
  }

  private _Insert_case5(n: XTreeNode<T>): void {
    n.parent!.color = Color.BLACK;
    n.grand!.color = Color.RED;

    if (n === n.parent!.left && n.parent === n.grand!.left)
      this._Rotate_right(n.grand!);
    else this._Rotate_left(n.grand!);
  }

  /* ---------------------------------------------------------
        ERASE
    --------------------------------------------------------- */
  public erase(val: T): void {
    let node: XTreeNode<T> | null = this.get(val);
    if (node === null) return; // UNABLE TO FIND THE MATCHED NODE

    if (node.left !== null && node.right !== null) {
      const pred: XTreeNode<T> = this._Fetch_maximum(node.left);

      node.value = pred.value;
      node = pred;
    }

    const child = node.right === null ? node.left : node.right;
    if (this._Fetch_color(node) === Color.BLACK) {
      node.color = this._Fetch_color(child);
      this._Erase_case1(node);
    }
    this._Replace_node(node, child);

    if (this._Fetch_color(this.root_) === Color.RED)
      this.root_!.color = Color.BLACK;
  }

  private _Erase_case1(n: XTreeNode<T>): void {
    if (n.parent === null) return;
    else this._Erase_case2(n);
  }

  private _Erase_case2(n: XTreeNode<T>): void {
    if (this._Fetch_color(n.sibling) === Color.RED) {
      n.parent!.color = Color.RED;
      n.sibling!.color = Color.BLACK;

      if (n === n.parent!.left) this._Rotate_left(n.parent!);
      else this._Rotate_right(n.parent!);
    }

    this._Erase_case3(n);
  }

  private _Erase_case3(n: XTreeNode<T>): void {
    if (
      this._Fetch_color(n.parent) === Color.BLACK &&
      this._Fetch_color(n.sibling) === Color.BLACK &&
      this._Fetch_color(n.sibling!.left) === Color.BLACK &&
      this._Fetch_color(n.sibling!.right) === Color.BLACK
    ) {
      n.sibling!.color = Color.RED;
      this._Erase_case1(n.parent!);
    } else this._Erase_case4(n);
  }

  private _Erase_case4(N: XTreeNode<T>): void {
    if (
      this._Fetch_color(N.parent) === Color.RED &&
      N.sibling !== null &&
      this._Fetch_color(N.sibling) === Color.BLACK &&
      this._Fetch_color(N.sibling.left) === Color.BLACK &&
      this._Fetch_color(N.sibling.right) === Color.BLACK
    ) {
      N.sibling.color = Color.RED;
      N.parent!.color = Color.BLACK;
    } else this._Erase_case5(N);
  }

  private _Erase_case5(n: XTreeNode<T>): void {
    if (
      n === n.parent!.left &&
      n.sibling !== null &&
      this._Fetch_color(n.sibling) === Color.BLACK &&
      this._Fetch_color(n.sibling.left) === Color.RED &&
      this._Fetch_color(n.sibling.right) === Color.BLACK
    ) {
      n.sibling.color = Color.RED;
      n.sibling.left!.color = Color.BLACK;

      this._Rotate_right(n.sibling);
    } else if (
      n === n.parent!.right &&
      n.sibling !== null &&
      this._Fetch_color(n.sibling) === Color.BLACK &&
      this._Fetch_color(n.sibling.left) === Color.BLACK &&
      this._Fetch_color(n.sibling.right) === Color.RED
    ) {
      n.sibling.color = Color.RED;
      n.sibling.right!.color = Color.BLACK;

      this._Rotate_left(n.sibling);
    }
    this._Erase_case6(n);
  }

  private _Erase_case6(n: XTreeNode<T>): void {
    n.sibling!.color = this._Fetch_color(n.parent);
    n.parent!.color = Color.BLACK;

    if (n === n.parent!.left) {
      n.sibling!.right!.color = Color.BLACK;
      this._Rotate_left(n.parent!);
    } else {
      n.sibling!.left!.color = Color.BLACK;
      this._Rotate_right(n.parent!);
    }
  }

  /* ---------------------------------------------------------
        ROTATION
    --------------------------------------------------------- */
  private _Rotate_left(node: XTreeNode<T>): void {
    const right = node.right;
    this._Replace_node(node, right);

    node.right = right!.left;
    if (right!.left !== null) right!.left!.parent = node;

    right!.left = node;
    node.parent = right;
  }

  private _Rotate_right(node: XTreeNode<T>): void {
    const left = node.left;
    this._Replace_node(node, left);

    node.left = left!.right;
    if (left!.right !== null) left!.right!.parent = node;

    left!.right = node;
    node.parent = left;
  }

  private _Replace_node(
    oldNode: XTreeNode<T>,
    newNode: XTreeNode<T> | null,
  ): void {
    if (oldNode.parent === null) this.root_ = newNode;
    else {
      if (oldNode === oldNode.parent.left) oldNode.parent.left = newNode;
      else oldNode.parent.right = newNode;
    }

    if (newNode !== null) newNode.parent = oldNode.parent;
  }

  /* ---------------------------------------------------------
        COLOR
    --------------------------------------------------------- */
  private _Fetch_color(node: XTreeNode<T> | null): Color {
    if (node === null) return Color.BLACK;
    else return node.color;
  }
}
