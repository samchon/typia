//================================================================
/**
 * @packageDocumentation
 * @module std
 */
//================================================================
/**
 * Test whether the code is running on NodeJS.
 *
 * @return Whether NodeJS or not.
 */
export function is_node(): boolean {
  if (is_node_ === null)
    is_node_ = typeof global === "object" && is_node_process(global);
  return is_node_;
}

/**
 * @internal
 */
function is_node_process(m: typeof global | null): boolean {
  return (
    m !== null &&
    typeof m.process === "object" &&
    m.process !== null &&
    typeof m.process.versions === "object" &&
    m.process.versions !== null &&
    typeof m.process.versions.node !== "undefined"
  );
}

/**
 * @internal
 */
let is_node_: boolean | null = null;
