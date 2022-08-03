/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["exports","ojs/ojvcomponent","preact","ojs/ojtranslation"],function(e,r,a,t){"use strict";var s=function(e,r,a,t){var s,o=arguments.length,n=o<3?r:null===t?t=Object.getOwnPropertyDescriptor(r,a):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,r,a,t);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(n=(o<3?s(n):o>3?s(r,a,n):s(r,a))||n);return o>3&&n&&Object.defineProperty(r,a,n),n};e.ProgressBar=class extends a.Component{render(e){return-1===e.value?this._renderIndeterminateBar(e):this._renderDeterminateBar(e)}_renderDeterminateBar(e){let t=e.max,s=e.value;t<0&&(t=0),s<0&&(s=0);const o=0===t?0:s>t?1:s/t;return a.h(r.Root,{class:"oj-progress-bar",role:"progressbar","aria-valuemin":"0","aria-valuemax":String(t),"aria-valuenow":String(s)},a.h("div",{class:"oj-progress-bar-track"},a.h("div",{class:"oj-progress-bar-value",style:{width:100*o+"%"}})))}_renderIndeterminateBar(e){return a.h(r.Root,{class:"oj-progress-bar",role:"progressbar","aria-valuetext":t.getTranslatedString("oj-ojProgressbar.ariaIndeterminateProgressText")},a.h("div",{class:"oj-progress-bar-track"},a.h("div",{class:"oj-progress-bar-value oj-progress-bar-indeterminate"})))}},e.ProgressBar.defaultProps={max:100,value:0},e.ProgressBar.metadata={properties:{max:{type:"number"},value:{type:"number"}}},e.ProgressBar=s([r.customElement("oj-progress-bar")],e.ProgressBar),Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=ojprogress-bar.js.map