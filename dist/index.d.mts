import { ComponentInternalInstance } from 'vue';

type Fn = () => void;
/**
 * Call onBeforeUnmount() if it's inside a component lifecycle, if not, do nothing
 *
 * @param fn
 * @param target
 */
declare function tryOnBeforeUnmount(fn: Fn, target?: ComponentInternalInstance | null): void;

export { tryOnBeforeUnmount };
