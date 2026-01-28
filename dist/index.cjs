'use strict';

const vue = require('vue');

function getLifeCycleTarget(target) {
  return target || vue.getCurrentInstance();
}
function tryOnBeforeUnmount(fn, target) {
  const instance = getLifeCycleTarget(target);
  if (instance)
    vue.onBeforeUnmount(fn, target);
}

exports.tryOnBeforeUnmount = tryOnBeforeUnmount;
