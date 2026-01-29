import type { ComponentInternalInstance } from 'vue'
// Inlined from @vueuse/shared/utils
type Fn = () => void

import { onBeforeUnmount } from 'vue'
import type { ComponentInternalInstance } from 'vue'
import { getCurrentInstance } from 'vue'

function getLifeCycleTarget(target?: ComponentInternalInstance | null) {
  return target || getCurrentInstance()
}


/**
 * Call onBeforeUnmount() if it's inside a component lifecycle, if not, do nothing
 *
 * @param fn
 * @param target
 */
export function tryOnBeforeUnmount(fn: Fn, target?: ComponentInternalInstance | null) {
  const instance = getLifeCycleTarget(target)
  if (instance)
    onBeforeUnmount(fn, target)
}
