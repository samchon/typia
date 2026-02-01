//================================================================

/**
 * @packageDocumentation
 * @module std.internal
 */
//================================================================
import { is_node } from "../utility/node";

/**
 * @internal
 */
export interface IGlobal {
  __s_iUID: number;
  __s_pTerminate_handler?: () => void;
}

/**
 * @internal
 */
export function _Get_root(): IGlobal {
  if (__s_pRoot === null) {
    __s_pRoot = (is_node() ? global : self) as any;
    if (__s_pRoot!.__s_iUID === undefined) __s_pRoot!.__s_iUID = 0;
  }
  return __s_pRoot!;
}

/**
 * @internal
 */
let __s_pRoot: IGlobal | null = null;
