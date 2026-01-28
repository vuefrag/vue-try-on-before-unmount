import { onBeforeUnmount, getCurrentInstance } from 'vue';

function getLifeCycleTarget(target) {
  return target || getCurrentInstance();
}
function tryOnBeforeUnmount(fn, target) {
  const instance = getLifeCycleTarget(target);
  if (instance)
    onBeforeUnmount(fn, target);
}

export { tryOnBeforeUnmount };
