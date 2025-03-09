function w1(e, t) {
   for (var n = 0; n < t.length; n++) {
      const r = t[n];
      if (typeof r != "string" && !Array.isArray(r)) {
         for (const i in r)
            if (i !== "default" && !(i in e)) {
               const o = Object.getOwnPropertyDescriptor(r, i);
               o && Object.defineProperty(e, i, o.get ? o : {
                  enumerable: !0,
                  get: () => r[i]
               })
            }
      }
   }
   return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
   }))
}(function() {
   const t = document.createElement("link").relList;
   if (t && t.supports && t.supports("modulepreload")) return;
   for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
   new MutationObserver(i => {
      for (const o of i)
         if (o.type === "childList")
            for (const s of o.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
   }).observe(document, {
      childList: !0,
      subtree: !0
   });

   function n(i) {
      const o = {};
      return i.integrity && (o.integrity = i.integrity), i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? o.credentials = "include" : i.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o
   }

   function r(i) {
      if (i.ep) return;
      i.ep = !0;
      const o = n(i);
      fetch(i.href, o)
   }
})();

function tm(e) {
   return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var nm = {
      exports: {}
   },
   Us = {},
   rm = {
      exports: {}
   },
   I = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vi = Symbol.for("react.element"),
   x1 = Symbol.for("react.portal"),
   S1 = Symbol.for("react.fragment"),
   E1 = Symbol.for("react.strict_mode"),
   C1 = Symbol.for("react.profiler"),
   P1 = Symbol.for("react.provider"),
   T1 = Symbol.for("react.context"),
   R1 = Symbol.for("react.forward_ref"),
   k1 = Symbol.for("react.suspense"),
   b1 = Symbol.for("react.memo"),
   A1 = Symbol.for("react.lazy"),
   Bf = Symbol.iterator;

function N1(e) {
   return e === null || typeof e != "object" ? null : (e = Bf && e[Bf] || e["@@iterator"], typeof e == "function" ? e : null)
}
var im = {
      isMounted: function() {
         return !1
      },
      enqueueForceUpdate: function() {},
      enqueueReplaceState: function() {},
      enqueueSetState: function() {}
   },
   om = Object.assign,
   sm = {};

function kr(e, t, n) {
   this.props = e, this.context = t, this.refs = sm, this.updater = n || im
}
kr.prototype.isReactComponent = {};
kr.prototype.setState = function(e, t) {
   if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
   this.updater.enqueueSetState(this, e, t, "setState")
};
kr.prototype.forceUpdate = function(e) {
   this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function am() {}
am.prototype = kr.prototype;

function Uu(e, t, n) {
   this.props = e, this.context = t, this.refs = sm, this.updater = n || im
}
var $u = Uu.prototype = new am;
$u.constructor = Uu;
om($u, kr.prototype);
$u.isPureReactComponent = !0;
var zf = Array.isArray,
   lm = Object.prototype.hasOwnProperty,
   Wu = {
      current: null
   },
   um = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
   };

function cm(e, t, n) {
   var r, i = {},
      o = null,
      s = null;
   if (t != null)
      for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (o = "" + t.key), t) lm.call(t, r) && !um.hasOwnProperty(r) && (i[r] = t[r]);
   var a = arguments.length - 2;
   if (a === 1) i.children = n;
   else if (1 < a) {
      for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
      i.children = l
   }
   if (e && e.defaultProps)
      for (r in a = e.defaultProps, a) i[r] === void 0 && (i[r] = a[r]);
   return {
      $$typeof: Vi,
      type: e,
      key: o,
      ref: s,
      props: i,
      _owner: Wu.current
   }
}

function L1(e, t) {
   return {
      $$typeof: Vi,
      type: e.type,
      key: t,
      ref: e.ref,
      props: e.props,
      _owner: e._owner
   }
}

function Hu(e) {
   return typeof e == "object" && e !== null && e.$$typeof === Vi
}

function D1(e) {
   var t = {
      "=": "=0",
      ":": "=2"
   };
   return "$" + e.replace(/[=:]/g, function(n) {
      return t[n]
   })
}
var Uf = /\/+/g;

function Ea(e, t) {
   return typeof e == "object" && e !== null && e.key != null ? D1("" + e.key) : t.toString(36)
}

function Lo(e, t, n, r, i) {
   var o = typeof e;
   (o === "undefined" || o === "boolean") && (e = null);
   var s = !1;
   if (e === null) s = !0;
   else switch (o) {
      case "string":
      case "number":
         s = !0;
         break;
      case "object":
         switch (e.$$typeof) {
            case Vi:
            case x1:
               s = !0
         }
   }
   if (s) return s = e, i = i(s), e = r === "" ? "." + Ea(s, 0) : r, zf(i) ? (n = "", e != null && (n = e.replace(Uf, "$&/") + "/"), Lo(i, t, n, "", function(u) {
      return u
   })) : i != null && (Hu(i) && (i = L1(i, n + (!i.key || s && s.key === i.key ? "" : ("" + i.key).replace(Uf, "$&/") + "/") + e)), t.push(i)), 1;
   if (s = 0, r = r === "" ? "." : r + ":", zf(e))
      for (var a = 0; a < e.length; a++) {
         o = e[a];
         var l = r + Ea(o, a);
         s += Lo(o, t, n, l, i)
      } else if (l = N1(e), typeof l == "function")
         for (e = l.call(e), a = 0; !(o = e.next()).done;) o = o.value, l = r + Ea(o, a++), s += Lo(o, t, n, l, i);
      else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
   return s
}

function no(e, t, n) {
   if (e == null) return e;
   var r = [],
      i = 0;
   return Lo(e, r, "", "", function(o) {
      return t.call(n, o, i++)
   }), r
}

function O1(e) {
   if (e._status === -1) {
      var t = e._result;
      t = t(), t.then(function(n) {
         (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
      }, function(n) {
         (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
      }), e._status === -1 && (e._status = 0, e._result = t)
   }
   if (e._status === 1) return e._result.default;
   throw e._result
}
var Re = {
      current: null
   },
   Do = {
      transition: null
   },
   M1 = {
      ReactCurrentDispatcher: Re,
      ReactCurrentBatchConfig: Do,
      ReactCurrentOwner: Wu
   };
I.Children = {
   map: no,
   forEach: function(e, t, n) {
      no(e, function() {
         t.apply(this, arguments)
      }, n)
   },
   count: function(e) {
      var t = 0;
      return no(e, function() {
         t++
      }), t
   },
   toArray: function(e) {
      return no(e, function(t) {
         return t
      }) || []
   },
   only: function(e) {
      if (!Hu(e)) throw Error("React.Children.only expected to receive a single React element child.");
      return e
   }
};
I.Component = kr;
I.Fragment = S1;
I.Profiler = C1;
I.PureComponent = Uu;
I.StrictMode = E1;
I.Suspense = k1;
I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = M1;
I.cloneElement = function(e, t, n) {
   if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
   var r = om({}, e.props),
      i = e.key,
      o = e.ref,
      s = e._owner;
   if (t != null) {
      if (t.ref !== void 0 && (o = t.ref, s = Wu.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var a = e.type.defaultProps;
      for (l in t) lm.call(t, l) && !um.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l])
   }
   var l = arguments.length - 2;
   if (l === 1) r.children = n;
   else if (1 < l) {
      a = Array(l);
      for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
      r.children = a
   }
   return {
      $$typeof: Vi,
      type: e.type,
      key: i,
      ref: o,
      props: r,
      _owner: s
   }
};
I.createContext = function(e) {
   return e = {
      $$typeof: T1,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null
   }, e.Provider = {
      $$typeof: P1,
      _context: e
   }, e.Consumer = e
};
I.createElement = cm;
I.createFactory = function(e) {
   var t = cm.bind(null, e);
   return t.type = e, t
};
I.createRef = function() {
   return {
      current: null
   }
};
I.forwardRef = function(e) {
   return {
      $$typeof: R1,
      render: e
   }
};
I.isValidElement = Hu;
I.lazy = function(e) {
   return {
      $$typeof: A1,
      _payload: {
         _status: -1,
         _result: e
      },
      _init: O1
   }
};
I.memo = function(e, t) {
   return {
      $$typeof: b1,
      type: e,
      compare: t === void 0 ? null : t
   }
};
I.startTransition = function(e) {
   var t = Do.transition;
   Do.transition = {};
   try {
      e()
   } finally {
      Do.transition = t
   }
};
I.unstable_act = function() {
   throw Error("act(...) is not supported in production builds of React.")
};
I.useCallback = function(e, t) {
   return Re.current.useCallback(e, t)
};
I.useContext = function(e) {
   return Re.current.useContext(e)
};
I.useDebugValue = function() {};
I.useDeferredValue = function(e) {
   return Re.current.useDeferredValue(e)
};
I.useEffect = function(e, t) {
   return Re.current.useEffect(e, t)
};
I.useId = function() {
   return Re.current.useId()
};
I.useImperativeHandle = function(e, t, n) {
   return Re.current.useImperativeHandle(e, t, n)
};
I.useInsertionEffect = function(e, t) {
   return Re.current.useInsertionEffect(e, t)
};
I.useLayoutEffect = function(e, t) {
   return Re.current.useLayoutEffect(e, t)
};
I.useMemo = function(e, t) {
   return Re.current.useMemo(e, t)
};
I.useReducer = function(e, t, n) {
   return Re.current.useReducer(e, t, n)
};
I.useRef = function(e) {
   return Re.current.useRef(e)
};
I.useState = function(e) {
   return Re.current.useState(e)
};
I.useSyncExternalStore = function(e, t, n) {
   return Re.current.useSyncExternalStore(e, t, n)
};
I.useTransition = function() {
   return Re.current.useTransition()
};
I.version = "18.2.0";
rm.exports = I;
var h = rm.exports;
const At = tm(h),
   j1 = w1({
      __proto__: null,
      default: At
   }, [h]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _1 = h,
   F1 = Symbol.for("react.element"),
   I1 = Symbol.for("react.fragment"),
   V1 = Object.prototype.hasOwnProperty,
   B1 = _1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
   z1 = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
   };

function fm(e, t, n) {
   var r, i = {},
      o = null,
      s = null;
   n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (s = t.ref);
   for (r in t) V1.call(t, r) && !z1.hasOwnProperty(r) && (i[r] = t[r]);
   if (e && e.defaultProps)
      for (r in t = e.defaultProps, t) i[r] === void 0 && (i[r] = t[r]);
   return {
      $$typeof: F1,
      type: e,
      key: o,
      ref: s,
      props: i,
      _owner: B1.current
   }
}
Us.Fragment = I1;
Us.jsx = fm;
Us.jsxs = fm;
nm.exports = Us;
var x = nm.exports,
   El = {},
   dm = {
      exports: {}
   },
   ze = {},
   hm = {
      exports: {}
   },
   pm = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
   function t(A, M) {
      var j = A.length;
      A.push(M);
      e: for (; 0 < j;) {
         var G = j - 1 >>> 1,
            ie = A[G];
         if (0 < i(ie, M)) A[G] = M, A[j] = ie, j = G;
         else break e
      }
   }

   function n(A) {
      return A.length === 0 ? null : A[0]
   }

   function r(A) {
      if (A.length === 0) return null;
      var M = A[0],
         j = A.pop();
      if (j !== M) {
         A[0] = j;
         e: for (var G = 0, ie = A.length, eo = ie >>> 1; G < eo;) {
            var vn = 2 * (G + 1) - 1,
               Sa = A[vn],
               wn = vn + 1,
               to = A[wn];
            if (0 > i(Sa, j)) wn < ie && 0 > i(to, Sa) ? (A[G] = to, A[wn] = j, G = wn) : (A[G] = Sa, A[vn] = j, G = vn);
            else if (wn < ie && 0 > i(to, j)) A[G] = to, A[wn] = j, G = wn;
            else break e
         }
      }
      return M
   }

   function i(A, M) {
      var j = A.sortIndex - M.sortIndex;
      return j !== 0 ? j : A.id - M.id
   }
   if (typeof performance == "object" && typeof performance.now == "function") {
      var o = performance;
      e.unstable_now = function() {
         return o.now()
      }
   } else {
      var s = Date,
         a = s.now();
      e.unstable_now = function() {
         return s.now() - a
      }
   }
   var l = [],
      u = [],
      c = 1,
      f = null,
      d = 3,
      g = !1,
      w = !1,
      v = !1,
      S = typeof setTimeout == "function" ? setTimeout : null,
      p = typeof clearTimeout == "function" ? clearTimeout : null,
      m = typeof setImmediate < "u" ? setImmediate : null;
   typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

   function y(A) {
      for (var M = n(u); M !== null;) {
         if (M.callback === null) r(u);
         else if (M.startTime <= A) r(u), M.sortIndex = M.expirationTime, t(l, M);
         else break;
         M = n(u)
      }
   }

   function E(A) {
      if (v = !1, y(A), !w)
         if (n(l) !== null) w = !0, yn(C);
         else {
            var M = n(u);
            M !== null && O(E, M.startTime - A)
         }
   }

   function C(A, M) {
      w = !1, v && (v = !1, p(k), k = -1), g = !0;
      var j = d;
      try {
         for (y(M), f = n(l); f !== null && (!(f.expirationTime > M) || A && !z());) {
            var G = f.callback;
            if (typeof G == "function") {
               f.callback = null, d = f.priorityLevel;
               var ie = G(f.expirationTime <= M);
               M = e.unstable_now(), typeof ie == "function" ? f.callback = ie : f === n(l) && r(l), y(M)
            } else r(l);
            f = n(l)
         }
         if (f !== null) var eo = !0;
         else {
            var vn = n(u);
            vn !== null && O(E, vn.startTime - M), eo = !1
         }
         return eo
      } finally {
         f = null, d = j, g = !1
      }
   }
   var T = !1,
      R = null,
      k = -1,
      N = 5,
      L = -1;

   function z() {
      return !(e.unstable_now() - L < N)
   }

   function Je() {
      if (R !== null) {
         var A = e.unstable_now();
         L = A;
         var M = !0;
         try {
            M = R(!0, A)
         } finally {
            M ? Pt() : (T = !1, R = null)
         }
      } else T = !1
   }
   var Pt;
   if (typeof m == "function") Pt = function() {
      m(Je)
   };
   else if (typeof MessageChannel < "u") {
      var gn = new MessageChannel,
         Ji = gn.port2;
      gn.port1.onmessage = Je, Pt = function() {
         Ji.postMessage(null)
      }
   } else Pt = function() {
      S(Je, 0)
   };

   function yn(A) {
      R = A, T || (T = !0, Pt())
   }

   function O(A, M) {
      k = S(function() {
         A(e.unstable_now())
      }, M)
   }
   e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(A) {
      A.callback = null
   }, e.unstable_continueExecution = function() {
      w || g || (w = !0, yn(C))
   }, e.unstable_forceFrameRate = function(A) {
      0 > A || 125 < A ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : N = 0 < A ? Math.floor(1e3 / A) : 5
   }, e.unstable_getCurrentPriorityLevel = function() {
      return d
   }, e.unstable_getFirstCallbackNode = function() {
      return n(l)
   }, e.unstable_next = function(A) {
      switch (d) {
         case 1:
         case 2:
         case 3:
            var M = 3;
            break;
         default:
            M = d
      }
      var j = d;
      d = M;
      try {
         return A()
      } finally {
         d = j
      }
   }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(A, M) {
      switch (A) {
         case 1:
         case 2:
         case 3:
         case 4:
         case 5:
            break;
         default:
            A = 3
      }
      var j = d;
      d = A;
      try {
         return M()
      } finally {
         d = j
      }
   }, e.unstable_scheduleCallback = function(A, M, j) {
      var G = e.unstable_now();
      switch (typeof j == "object" && j !== null ? (j = j.delay, j = typeof j == "number" && 0 < j ? G + j : G) : j = G, A) {
         case 1:
            var ie = -1;
            break;
         case 2:
            ie = 250;
            break;
         case 5:
            ie = 1073741823;
            break;
         case 4:
            ie = 1e4;
            break;
         default:
            ie = 5e3
      }
      return ie = j + ie, A = {
         id: c++,
         callback: M,
         priorityLevel: A,
         startTime: j,
         expirationTime: ie,
         sortIndex: -1
      }, j > G ? (A.sortIndex = j, t(u, A), n(l) === null && A === n(u) && (v ? (p(k), k = -1) : v = !0, O(E, j - G))) : (A.sortIndex = ie, t(l, A), w || g || (w = !0, yn(C))), A
   }, e.unstable_shouldYield = z, e.unstable_wrapCallback = function(A) {
      var M = d;
      return function() {
         var j = d;
         d = M;
         try {
            return A.apply(this, arguments)
         } finally {
            d = j
         }
      }
   }
})(pm);
hm.exports = pm;
var U1 = hm.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mm = h,
   Be = U1;

function b(e) {
   for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
   return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var gm = new Set,
   di = {};

function Vn(e, t) {
   gr(e, t), gr(e + "Capture", t)
}

function gr(e, t) {
   for (di[e] = t, e = 0; e < t.length; e++) gm.add(t[e])
}
var Mt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
   Cl = Object.prototype.hasOwnProperty,
   $1 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
   $f = {},
   Wf = {};

function W1(e) {
   return Cl.call(Wf, e) ? !0 : Cl.call($f, e) ? !1 : $1.test(e) ? Wf[e] = !0 : ($f[e] = !0, !1)
}

function H1(e, t, n, r) {
   if (n !== null && n.type === 0) return !1;
   switch (typeof t) {
      case "function":
      case "symbol":
         return !0;
      case "boolean":
         return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
         return !1
   }
}

function K1(e, t, n, r) {
   if (t === null || typeof t > "u" || H1(e, t, n, r)) return !0;
   if (r) return !1;
   if (n !== null) switch (n.type) {
      case 3:
         return !t;
      case 4:
         return t === !1;
      case 5:
         return isNaN(t);
      case 6:
         return isNaN(t) || 1 > t
   }
   return !1
}

function ke(e, t, n, r, i, o, s) {
   this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = s
}
var pe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
   pe[e] = new ke(e, 0, !1, e, null, !1, !1)
});
[
   ["acceptCharset", "accept-charset"],
   ["className", "class"],
   ["htmlFor", "for"],
   ["httpEquiv", "http-equiv"]
].forEach(function(e) {
   var t = e[0];
   pe[t] = new ke(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
   pe[e] = new ke(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
   pe[e] = new ke(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
   pe[e] = new ke(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
   pe[e] = new ke(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function(e) {
   pe[e] = new ke(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
   pe[e] = new ke(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function(e) {
   pe[e] = new ke(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var Ku = /[\-:]([a-z])/g;

function Gu(e) {
   return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
   var t = e.replace(Ku, Gu);
   pe[t] = new ke(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
   var t = e.replace(Ku, Gu);
   pe[t] = new ke(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
   var t = e.replace(Ku, Gu);
   pe[t] = new ke(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
   pe[e] = new ke(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
pe.xlinkHref = new ke("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
   pe[e] = new ke(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function Xu(e, t, n, r) {
   var i = pe.hasOwnProperty(t) ? pe[t] : null;
   (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (K1(t, n, i, r) && (n = null), r || i === null ? W1(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Vt = mm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
   ro = Symbol.for("react.element"),
   Kn = Symbol.for("react.portal"),
   Gn = Symbol.for("react.fragment"),
   Yu = Symbol.for("react.strict_mode"),
   Pl = Symbol.for("react.profiler"),
   ym = Symbol.for("react.provider"),
   vm = Symbol.for("react.context"),
   Qu = Symbol.for("react.forward_ref"),
   Tl = Symbol.for("react.suspense"),
   Rl = Symbol.for("react.suspense_list"),
   qu = Symbol.for("react.memo"),
   Wt = Symbol.for("react.lazy"),
   wm = Symbol.for("react.offscreen"),
   Hf = Symbol.iterator;

function _r(e) {
   return e === null || typeof e != "object" ? null : (e = Hf && e[Hf] || e["@@iterator"], typeof e == "function" ? e : null)
}
var J = Object.assign,
   Ca;

function Gr(e) {
   if (Ca === void 0) try {
      throw Error()
   } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ca = t && t[1] || ""
   }
   return `
` + Ca + e
}
var Pa = !1;

function Ta(e, t) {
   if (!e || Pa) return "";
   Pa = !0;
   var n = Error.prepareStackTrace;
   Error.prepareStackTrace = void 0;
   try {
      if (t)
         if (t = function() {
               throw Error()
            }, Object.defineProperty(t.prototype, "props", {
               set: function() {
                  throw Error()
               }
            }), typeof Reflect == "object" && Reflect.construct) {
            try {
               Reflect.construct(t, [])
            } catch (u) {
               var r = u
            }
            Reflect.construct(e, [], t)
         } else {
            try {
               t.call()
            } catch (u) {
               r = u
            }
            e.call(t.prototype)
         }
      else {
         try {
            throw Error()
         } catch (u) {
            r = u
         }
         e()
      }
   } catch (u) {
      if (u && r && typeof u.stack == "string") {
         for (var i = u.stack.split(`
`), o = r.stack.split(`
`), s = i.length - 1, a = o.length - 1; 1 <= s && 0 <= a && i[s] !== o[a];) a--;
         for (; 1 <= s && 0 <= a; s--, a--)
            if (i[s] !== o[a]) {
               if (s !== 1 || a !== 1)
                  do
                     if (s--, a--, 0 > a || i[s] !== o[a]) {
                        var l = `
` + i[s].replace(" at new ", " at ");
                        return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l
                     } while (1 <= s && 0 <= a);
               break
            }
      }
   } finally {
      Pa = !1, Error.prepareStackTrace = n
   }
   return (e = e ? e.displayName || e.name : "") ? Gr(e) : ""
}

function G1(e) {
   switch (e.tag) {
      case 5:
         return Gr(e.type);
      case 16:
         return Gr("Lazy");
      case 13:
         return Gr("Suspense");
      case 19:
         return Gr("SuspenseList");
      case 0:
      case 2:
      case 15:
         return e = Ta(e.type, !1), e;
      case 11:
         return e = Ta(e.type.render, !1), e;
      case 1:
         return e = Ta(e.type, !0), e;
      default:
         return ""
   }
}

function kl(e) {
   if (e == null) return null;
   if (typeof e == "function") return e.displayName || e.name || null;
   if (typeof e == "string") return e;
   switch (e) {
      case Gn:
         return "Fragment";
      case Kn:
         return "Portal";
      case Pl:
         return "Profiler";
      case Yu:
         return "StrictMode";
      case Tl:
         return "Suspense";
      case Rl:
         return "SuspenseList"
   }
   if (typeof e == "object") switch (e.$$typeof) {
      case vm:
         return (e.displayName || "Context") + ".Consumer";
      case ym:
         return (e._context.displayName || "Context") + ".Provider";
      case Qu:
         var t = e.render;
         return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case qu:
         return t = e.displayName || null, t !== null ? t : kl(e.type) || "Memo";
      case Wt:
         t = e._payload, e = e._init;
         try {
            return kl(e(t))
         } catch {}
   }
   return null
}

function X1(e) {
   var t = e.type;
   switch (e.tag) {
      case 24:
         return "Cache";
      case 9:
         return (t.displayName || "Context") + ".Consumer";
      case 10:
         return (t._context.displayName || "Context") + ".Provider";
      case 18:
         return "DehydratedFragment";
      case 11:
         return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
      case 7:
         return "Fragment";
      case 5:
         return t;
      case 4:
         return "Portal";
      case 3:
         return "Root";
      case 6:
         return "Text";
      case 16:
         return kl(t);
      case 8:
         return t === Yu ? "StrictMode" : "Mode";
      case 22:
         return "Offscreen";
      case 12:
         return "Profiler";
      case 21:
         return "Scope";
      case 13:
         return "Suspense";
      case 19:
         return "SuspenseList";
      case 25:
         return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
         if (typeof t == "function") return t.displayName || t.name || null;
         if (typeof t == "string") return t
   }
   return null
}

function on(e) {
   switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
         return e;
      case "object":
         return e;
      default:
         return ""
   }
}

function xm(e) {
   var t = e.type;
   return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function Y1(e) {
   var t = xm(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];
   if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var i = n.get,
         o = n.set;
      return Object.defineProperty(e, t, {
         configurable: !0,
         get: function() {
            return i.call(this)
         },
         set: function(s) {
            r = "" + s, o.call(this, s)
         }
      }), Object.defineProperty(e, t, {
         enumerable: n.enumerable
      }), {
         getValue: function() {
            return r
         },
         setValue: function(s) {
            r = "" + s
         },
         stopTracking: function() {
            e._valueTracker = null, delete e[t]
         }
      }
   }
}

function io(e) {
   e._valueTracker || (e._valueTracker = Y1(e))
}

function Sm(e) {
   if (!e) return !1;
   var t = e._valueTracker;
   if (!t) return !0;
   var n = t.getValue(),
      r = "";
   return e && (r = xm(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function ts(e) {
   if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
   try {
      return e.activeElement || e.body
   } catch {
      return e.body
   }
}

function bl(e, t) {
   var n = t.checked;
   return J({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked
   })
}

function Kf(e, t) {
   var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
   n = on(t.value != null ? t.value : n), e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
   }
}

function Em(e, t) {
   t = t.checked, t != null && Xu(e, "checked", t, !1)
}

function Al(e, t) {
   Em(e, t);
   var n = on(t.value),
      r = t.type;
   if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
   else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return
   }
   t.hasOwnProperty("value") ? Nl(e, t.type, n) : t.hasOwnProperty("defaultValue") && Nl(e, t.type, on(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function Gf(e, t, n) {
   if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
   }
   n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function Nl(e, t, n) {
   (t !== "number" || ts(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Xr = Array.isArray;

function ur(e, t, n, r) {
   if (e = e.options, t) {
      t = {};
      for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
      for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0)
   } else {
      for (n = "" + on(n), t = null, i = 0; i < e.length; i++) {
         if (e[i].value === n) {
            e[i].selected = !0, r && (e[i].defaultSelected = !0);
            return
         }
         t !== null || e[i].disabled || (t = e[i])
      }
      t !== null && (t.selected = !0)
   }
}

function Ll(e, t) {
   if (t.dangerouslySetInnerHTML != null) throw Error(b(91));
   return J({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue
   })
}

function Xf(e, t) {
   var n = t.value;
   if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
         if (t != null) throw Error(b(92));
         if (Xr(n)) {
            if (1 < n.length) throw Error(b(93));
            n = n[0]
         }
         t = n
      }
      t == null && (t = ""), n = t
   }
   e._wrapperState = {
      initialValue: on(n)
   }
}

function Cm(e, t) {
   var n = on(t.value),
      r = on(t.defaultValue);
   n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function Yf(e) {
   var t = e.textContent;
   t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function Pm(e) {
   switch (e) {
      case "svg":
         return "http://www.w3.org/2000/svg";
      case "math":
         return "http://www.w3.org/1998/Math/MathML";
      default:
         return "http://www.w3.org/1999/xhtml"
   }
}

function Dl(e, t) {
   return e == null || e === "http://www.w3.org/1999/xhtml" ? Pm(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var oo, Tm = function(e) {
   return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
      MSApp.execUnsafeLocalFunction(function() {
         return e(t, n, r, i)
      })
   } : e
}(function(e, t) {
   if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
   else {
      for (oo = oo || document.createElement("div"), oo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = oo.firstChild; e.firstChild;) e.removeChild(e.firstChild);
      for (; t.firstChild;) e.appendChild(t.firstChild)
   }
});

function hi(e, t) {
   if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
         n.nodeValue = t;
         return
      }
   }
   e.textContent = t
}
var Jr = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
   },
   Q1 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Jr).forEach(function(e) {
   Q1.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), Jr[t] = Jr[e]
   })
});

function Rm(e, t, n) {
   return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Jr.hasOwnProperty(e) && Jr[e] ? ("" + t).trim() : t + "px"
}

function km(e, t) {
   e = e.style;
   for (var n in t)
      if (t.hasOwnProperty(n)) {
         var r = n.indexOf("--") === 0,
            i = Rm(n, t[n], r);
         n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i
      }
}
var q1 = J({
   menuitem: !0
}, {
   area: !0,
   base: !0,
   br: !0,
   col: !0,
   embed: !0,
   hr: !0,
   img: !0,
   input: !0,
   keygen: !0,
   link: !0,
   meta: !0,
   param: !0,
   source: !0,
   track: !0,
   wbr: !0
});

function Ol(e, t) {
   if (t) {
      if (q1[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(b(137, e));
      if (t.dangerouslySetInnerHTML != null) {
         if (t.children != null) throw Error(b(60));
         if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(b(61))
      }
      if (t.style != null && typeof t.style != "object") throw Error(b(62))
   }
}

function Ml(e, t) {
   if (e.indexOf("-") === -1) return typeof t.is == "string";
   switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
         return !1;
      default:
         return !0
   }
}
var jl = null;

function Zu(e) {
   return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var _l = null,
   cr = null,
   fr = null;

function Qf(e) {
   if (e = Ui(e)) {
      if (typeof _l != "function") throw Error(b(280));
      var t = e.stateNode;
      t && (t = Gs(t), _l(e.stateNode, e.type, t))
   }
}

function bm(e) {
   cr ? fr ? fr.push(e) : fr = [e] : cr = e
}

function Am() {
   if (cr) {
      var e = cr,
         t = fr;
      if (fr = cr = null, Qf(e), t)
         for (e = 0; e < t.length; e++) Qf(t[e])
   }
}

function Nm(e, t) {
   return e(t)
}

function Lm() {}
var Ra = !1;

function Dm(e, t, n) {
   if (Ra) return e(t, n);
   Ra = !0;
   try {
      return Nm(e, t, n)
   } finally {
      Ra = !1, (cr !== null || fr !== null) && (Lm(), Am())
   }
}

function pi(e, t) {
   var n = e.stateNode;
   if (n === null) return null;
   var r = Gs(n);
   if (r === null) return null;
   n = r[t];
   e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
         (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
         break e;
      default:
         e = !1
   }
   if (e) return null;
   if (n && typeof n != "function") throw Error(b(231, t, typeof n));
   return n
}
var Fl = !1;
if (Mt) try {
   var Fr = {};
   Object.defineProperty(Fr, "passive", {
      get: function() {
         Fl = !0
      }
   }), window.addEventListener("test", Fr, Fr), window.removeEventListener("test", Fr, Fr)
} catch {
   Fl = !1
}

function Z1(e, t, n, r, i, o, s, a, l) {
   var u = Array.prototype.slice.call(arguments, 3);
   try {
      t.apply(n, u)
   } catch (c) {
      this.onError(c)
   }
}
var ei = !1,
   ns = null,
   rs = !1,
   Il = null,
   J1 = {
      onError: function(e) {
         ei = !0, ns = e
      }
   };

function ew(e, t, n, r, i, o, s, a, l) {
   ei = !1, ns = null, Z1.apply(J1, arguments)
}

function tw(e, t, n, r, i, o, s, a, l) {
   if (ew.apply(this, arguments), ei) {
      if (ei) {
         var u = ns;
         ei = !1, ns = null
      } else throw Error(b(198));
      rs || (rs = !0, Il = u)
   }
}

function Bn(e) {
   var t = e,
      n = e;
   if (e.alternate)
      for (; t.return;) t = t.return;
   else {
      e = t;
      do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
   }
   return t.tag === 3 ? n : null
}

function Om(e) {
   if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
   }
   return null
}

function qf(e) {
   if (Bn(e) !== e) throw Error(b(188))
}

function nw(e) {
   var t = e.alternate;
   if (!t) {
      if (t = Bn(e), t === null) throw Error(b(188));
      return t !== e ? null : e
   }
   for (var n = e, r = t;;) {
      var i = n.return;
      if (i === null) break;
      var o = i.alternate;
      if (o === null) {
         if (r = i.return, r !== null) {
            n = r;
            continue
         }
         break
      }
      if (i.child === o.child) {
         for (o = i.child; o;) {
            if (o === n) return qf(i), e;
            if (o === r) return qf(i), t;
            o = o.sibling
         }
         throw Error(b(188))
      }
      if (n.return !== r.return) n = i, r = o;
      else {
         for (var s = !1, a = i.child; a;) {
            if (a === n) {
               s = !0, n = i, r = o;
               break
            }
            if (a === r) {
               s = !0, r = i, n = o;
               break
            }
            a = a.sibling
         }
         if (!s) {
            for (a = o.child; a;) {
               if (a === n) {
                  s = !0, n = o, r = i;
                  break
               }
               if (a === r) {
                  s = !0, r = o, n = i;
                  break
               }
               a = a.sibling
            }
            if (!s) throw Error(b(189))
         }
      }
      if (n.alternate !== r) throw Error(b(190))
   }
   if (n.tag !== 3) throw Error(b(188));
   return n.stateNode.current === n ? e : t
}

function Mm(e) {
   return e = nw(e), e !== null ? jm(e) : null
}

function jm(e) {
   if (e.tag === 5 || e.tag === 6) return e;
   for (e = e.child; e !== null;) {
      var t = jm(e);
      if (t !== null) return t;
      e = e.sibling
   }
   return null
}
var _m = Be.unstable_scheduleCallback,
   Zf = Be.unstable_cancelCallback,
   rw = Be.unstable_shouldYield,
   iw = Be.unstable_requestPaint,
   re = Be.unstable_now,
   ow = Be.unstable_getCurrentPriorityLevel,
   Ju = Be.unstable_ImmediatePriority,
   Fm = Be.unstable_UserBlockingPriority,
   is = Be.unstable_NormalPriority,
   sw = Be.unstable_LowPriority,
   Im = Be.unstable_IdlePriority,
   $s = null,
   gt = null;

function aw(e) {
   if (gt && typeof gt.onCommitFiberRoot == "function") try {
      gt.onCommitFiberRoot($s, e, void 0, (e.current.flags & 128) === 128)
   } catch {}
}
var ot = Math.clz32 ? Math.clz32 : cw,
   lw = Math.log,
   uw = Math.LN2;

function cw(e) {
   return e >>>= 0, e === 0 ? 32 : 31 - (lw(e) / uw | 0) | 0
}
var so = 64,
   ao = 4194304;

function Yr(e) {
   switch (e & -e) {
      case 1:
         return 1;
      case 2:
         return 2;
      case 4:
         return 4;
      case 8:
         return 8;
      case 16:
         return 16;
      case 32:
         return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
         return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
         return e & 130023424;
      case 134217728:
         return 134217728;
      case 268435456:
         return 268435456;
      case 536870912:
         return 536870912;
      case 1073741824:
         return 1073741824;
      default:
         return e
   }
}

function os(e, t) {
   var n = e.pendingLanes;
   if (n === 0) return 0;
   var r = 0,
      i = e.suspendedLanes,
      o = e.pingedLanes,
      s = n & 268435455;
   if (s !== 0) {
      var a = s & ~i;
      a !== 0 ? r = Yr(a) : (o &= s, o !== 0 && (r = Yr(o)))
   } else s = n & ~i, s !== 0 ? r = Yr(s) : o !== 0 && (r = Yr(o));
   if (r === 0) return 0;
   if (t !== 0 && t !== r && !(t & i) && (i = r & -r, o = t & -t, i >= o || i === 16 && (o & 4194240) !== 0)) return t;
   if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
      for (e = e.entanglements, t &= r; 0 < t;) n = 31 - ot(t), i = 1 << n, r |= e[n], t &= ~i;
   return r
}

function fw(e, t) {
   switch (e) {
      case 1:
      case 2:
      case 4:
         return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
         return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
         return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
         return -1;
      default:
         return -1
   }
}

function dw(e, t) {
   for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o;) {
      var s = 31 - ot(o),
         a = 1 << s,
         l = i[s];
      l === -1 ? (!(a & n) || a & r) && (i[s] = fw(a, t)) : l <= t && (e.expiredLanes |= a), o &= ~a
   }
}

function Vl(e) {
   return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function Vm() {
   var e = so;
   return so <<= 1, !(so & 4194240) && (so = 64), e
}

function ka(e) {
   for (var t = [], n = 0; 31 > n; n++) t.push(e);
   return t
}

function Bi(e, t, n) {
   e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - ot(t), e[t] = n
}

function hw(e, t) {
   var n = e.pendingLanes & ~t;
   e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
   var r = e.eventTimes;
   for (e = e.expirationTimes; 0 < n;) {
      var i = 31 - ot(n),
         o = 1 << i;
      t[i] = 0, r[i] = -1, e[i] = -1, n &= ~o
   }
}

function ec(e, t) {
   var n = e.entangledLanes |= t;
   for (e = e.entanglements; n;) {
      var r = 31 - ot(n),
         i = 1 << r;
      i & t | e[r] & t && (e[r] |= t), n &= ~i
   }
}
var U = 0;

function Bm(e) {
   return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var zm, tc, Um, $m, Wm, Bl = !1,
   lo = [],
   Qt = null,
   qt = null,
   Zt = null,
   mi = new Map,
   gi = new Map,
   Kt = [],
   pw = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function Jf(e, t) {
   switch (e) {
      case "focusin":
      case "focusout":
         Qt = null;
         break;
      case "dragenter":
      case "dragleave":
         qt = null;
         break;
      case "mouseover":
      case "mouseout":
         Zt = null;
         break;
      case "pointerover":
      case "pointerout":
         mi.delete(t.pointerId);
         break;
      case "gotpointercapture":
      case "lostpointercapture":
         gi.delete(t.pointerId)
   }
}

function Ir(e, t, n, r, i, o) {
   return e === null || e.nativeEvent !== o ? (e = {
      blockedOn: t,
      domEventName: n,
      eventSystemFlags: r,
      nativeEvent: o,
      targetContainers: [i]
   }, t !== null && (t = Ui(t), t !== null && tc(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e)
}

function mw(e, t, n, r, i) {
   switch (t) {
      case "focusin":
         return Qt = Ir(Qt, e, t, n, r, i), !0;
      case "dragenter":
         return qt = Ir(qt, e, t, n, r, i), !0;
      case "mouseover":
         return Zt = Ir(Zt, e, t, n, r, i), !0;
      case "pointerover":
         var o = i.pointerId;
         return mi.set(o, Ir(mi.get(o) || null, e, t, n, r, i)), !0;
      case "gotpointercapture":
         return o = i.pointerId, gi.set(o, Ir(gi.get(o) || null, e, t, n, r, i)), !0
   }
   return !1
}

function Hm(e) {
   var t = Pn(e.target);
   if (t !== null) {
      var n = Bn(t);
      if (n !== null) {
         if (t = n.tag, t === 13) {
            if (t = Om(n), t !== null) {
               e.blockedOn = t, Wm(e.priority, function() {
                  Um(n)
               });
               return
            }
         } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
            e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
            return
         }
      }
   }
   e.blockedOn = null
}

function Oo(e) {
   if (e.blockedOn !== null) return !1;
   for (var t = e.targetContainers; 0 < t.length;) {
      var n = zl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
         n = e.nativeEvent;
         var r = new n.constructor(n.type, n);
         jl = r, n.target.dispatchEvent(r), jl = null
      } else return t = Ui(n), t !== null && tc(t), e.blockedOn = n, !1;
      t.shift()
   }
   return !0
}

function ed(e, t, n) {
   Oo(e) && n.delete(t)
}

function gw() {
   Bl = !1, Qt !== null && Oo(Qt) && (Qt = null), qt !== null && Oo(qt) && (qt = null), Zt !== null && Oo(Zt) && (Zt = null), mi.forEach(ed), gi.forEach(ed)
}

function Vr(e, t) {
   e.blockedOn === t && (e.blockedOn = null, Bl || (Bl = !0, Be.unstable_scheduleCallback(Be.unstable_NormalPriority, gw)))
}

function yi(e) {
   function t(i) {
      return Vr(i, e)
   }
   if (0 < lo.length) {
      Vr(lo[0], e);
      for (var n = 1; n < lo.length; n++) {
         var r = lo[n];
         r.blockedOn === e && (r.blockedOn = null)
      }
   }
   for (Qt !== null && Vr(Qt, e), qt !== null && Vr(qt, e), Zt !== null && Vr(Zt, e), mi.forEach(t), gi.forEach(t), n = 0; n < Kt.length; n++) r = Kt[n], r.blockedOn === e && (r.blockedOn = null);
   for (; 0 < Kt.length && (n = Kt[0], n.blockedOn === null);) Hm(n), n.blockedOn === null && Kt.shift()
}
var dr = Vt.ReactCurrentBatchConfig,
   ss = !0;

function yw(e, t, n, r) {
   var i = U,
      o = dr.transition;
   dr.transition = null;
   try {
      U = 1, nc(e, t, n, r)
   } finally {
      U = i, dr.transition = o
   }
}

function vw(e, t, n, r) {
   var i = U,
      o = dr.transition;
   dr.transition = null;
   try {
      U = 4, nc(e, t, n, r)
   } finally {
      U = i, dr.transition = o
   }
}

function nc(e, t, n, r) {
   if (ss) {
      var i = zl(e, t, n, r);
      if (i === null) Fa(e, t, r, as, n), Jf(e, r);
      else if (mw(i, e, t, n, r)) r.stopPropagation();
      else if (Jf(e, r), t & 4 && -1 < pw.indexOf(e)) {
         for (; i !== null;) {
            var o = Ui(i);
            if (o !== null && zm(o), o = zl(e, t, n, r), o === null && Fa(e, t, r, as, n), o === i) break;
            i = o
         }
         i !== null && r.stopPropagation()
      } else Fa(e, t, r, null, n)
   }
}
var as = null;

function zl(e, t, n, r) {
   if (as = null, e = Zu(r), e = Pn(e), e !== null)
      if (t = Bn(e), t === null) e = null;
      else if (n = t.tag, n === 13) {
      if (e = Om(t), e !== null) return e;
      e = null
   } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null
   } else t !== e && (e = null);
   return as = e, null
}

function Km(e) {
   switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
         return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
         return 4;
      case "message":
         switch (ow()) {
            case Ju:
               return 1;
            case Fm:
               return 4;
            case is:
            case sw:
               return 16;
            case Im:
               return 536870912;
            default:
               return 16
         }
      default:
         return 16
   }
}
var Xt = null,
   rc = null,
   Mo = null;

function Gm() {
   if (Mo) return Mo;
   var e, t = rc,
      n = t.length,
      r, i = "value" in Xt ? Xt.value : Xt.textContent,
      o = i.length;
   for (e = 0; e < n && t[e] === i[e]; e++);
   var s = n - e;
   for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
   return Mo = i.slice(e, 1 < r ? 1 - r : void 0)
}

function jo(e) {
   var t = e.keyCode;
   return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function uo() {
   return !0
}

function td() {
   return !1
}

function Ue(e) {
   function t(n, r, i, o, s) {
      this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = o, this.target = s, this.currentTarget = null;
      for (var a in e) e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(o) : o[a]);
      return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? uo : td, this.isPropagationStopped = td, this
   }
   return J(t.prototype, {
      preventDefault: function() {
         this.defaultPrevented = !0;
         var n = this.nativeEvent;
         n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = uo)
      },
      stopPropagation: function() {
         var n = this.nativeEvent;
         n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = uo)
      },
      persist: function() {},
      isPersistent: uo
   }), t
}
var br = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
         return e.timeStamp || Date.now()
      },
      defaultPrevented: 0,
      isTrusted: 0
   },
   ic = Ue(br),
   zi = J({}, br, {
      view: 0,
      detail: 0
   }),
   ww = Ue(zi),
   ba, Aa, Br, Ws = J({}, zi, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: oc,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
         return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
      },
      movementX: function(e) {
         return "movementX" in e ? e.movementX : (e !== Br && (Br && e.type === "mousemove" ? (ba = e.screenX - Br.screenX, Aa = e.screenY - Br.screenY) : Aa = ba = 0, Br = e), ba)
      },
      movementY: function(e) {
         return "movementY" in e ? e.movementY : Aa
      }
   }),
   nd = Ue(Ws),
   xw = J({}, Ws, {
      dataTransfer: 0
   }),
   Sw = Ue(xw),
   Ew = J({}, zi, {
      relatedTarget: 0
   }),
   Na = Ue(Ew),
   Cw = J({}, br, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
   }),
   Pw = Ue(Cw),
   Tw = J({}, br, {
      clipboardData: function(e) {
         return "clipboardData" in e ? e.clipboardData : window.clipboardData
      }
   }),
   Rw = Ue(Tw),
   kw = J({}, br, {
      data: 0
   }),
   rd = Ue(kw),
   bw = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
   },
   Aw = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
   },
   Nw = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
   };

function Lw(e) {
   var t = this.nativeEvent;
   return t.getModifierState ? t.getModifierState(e) : (e = Nw[e]) ? !!t[e] : !1
}

function oc() {
   return Lw
}
var Dw = J({}, zi, {
      key: function(e) {
         if (e.key) {
            var t = bw[e.key] || e.key;
            if (t !== "Unidentified") return t
         }
         return e.type === "keypress" ? (e = jo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Aw[e.keyCode] || "Unidentified" : ""
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: oc,
      charCode: function(e) {
         return e.type === "keypress" ? jo(e) : 0
      },
      keyCode: function(e) {
         return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
      },
      which: function(e) {
         return e.type === "keypress" ? jo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
      }
   }),
   Ow = Ue(Dw),
   Mw = J({}, Ws, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
   }),
   id = Ue(Mw),
   jw = J({}, zi, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: oc
   }),
   _w = Ue(jw),
   Fw = J({}, br, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
   }),
   Iw = Ue(Fw),
   Vw = J({}, Ws, {
      deltaX: function(e) {
         return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
      },
      deltaY: function(e) {
         return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
      },
      deltaZ: 0,
      deltaMode: 0
   }),
   Bw = Ue(Vw),
   zw = [9, 13, 27, 32],
   sc = Mt && "CompositionEvent" in window,
   ti = null;
Mt && "documentMode" in document && (ti = document.documentMode);
var Uw = Mt && "TextEvent" in window && !ti,
   Xm = Mt && (!sc || ti && 8 < ti && 11 >= ti),
   od = String.fromCharCode(32),
   sd = !1;

function Ym(e, t) {
   switch (e) {
      case "keyup":
         return zw.indexOf(t.keyCode) !== -1;
      case "keydown":
         return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
         return !0;
      default:
         return !1
   }
}

function Qm(e) {
   return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var Xn = !1;

function $w(e, t) {
   switch (e) {
      case "compositionend":
         return Qm(t);
      case "keypress":
         return t.which !== 32 ? null : (sd = !0, od);
      case "textInput":
         return e = t.data, e === od && sd ? null : e;
      default:
         return null
   }
}

function Ww(e, t) {
   if (Xn) return e === "compositionend" || !sc && Ym(e, t) ? (e = Gm(), Mo = rc = Xt = null, Xn = !1, e) : null;
   switch (e) {
      case "paste":
         return null;
      case "keypress":
         if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length) return t.char;
            if (t.which) return String.fromCharCode(t.which)
         }
         return null;
      case "compositionend":
         return Xm && t.locale !== "ko" ? null : t.data;
      default:
         return null
   }
}
var Hw = {
   color: !0,
   date: !0,
   datetime: !0,
   "datetime-local": !0,
   email: !0,
   month: !0,
   number: !0,
   password: !0,
   range: !0,
   search: !0,
   tel: !0,
   text: !0,
   time: !0,
   url: !0,
   week: !0
};

function ad(e) {
   var t = e && e.nodeName && e.nodeName.toLowerCase();
   return t === "input" ? !!Hw[e.type] : t === "textarea"
}

function qm(e, t, n, r) {
   bm(r), t = ls(t, "onChange"), 0 < t.length && (n = new ic("onChange", "change", null, n, r), e.push({
      event: n,
      listeners: t
   }))
}
var ni = null,
   vi = null;

function Kw(e) {
   l0(e, 0)
}

function Hs(e) {
   var t = qn(e);
   if (Sm(t)) return e
}

function Gw(e, t) {
   if (e === "change") return t
}
var Zm = !1;
if (Mt) {
   var La;
   if (Mt) {
      var Da = "oninput" in document;
      if (!Da) {
         var ld = document.createElement("div");
         ld.setAttribute("oninput", "return;"), Da = typeof ld.oninput == "function"
      }
      La = Da
   } else La = !1;
   Zm = La && (!document.documentMode || 9 < document.documentMode)
}

function ud() {
   ni && (ni.detachEvent("onpropertychange", Jm), vi = ni = null)
}

function Jm(e) {
   if (e.propertyName === "value" && Hs(vi)) {
      var t = [];
      qm(t, vi, e, Zu(e)), Dm(Kw, t)
   }
}

function Xw(e, t, n) {
   e === "focusin" ? (ud(), ni = t, vi = n, ni.attachEvent("onpropertychange", Jm)) : e === "focusout" && ud()
}

function Yw(e) {
   if (e === "selectionchange" || e === "keyup" || e === "keydown") return Hs(vi)
}

function Qw(e, t) {
   if (e === "click") return Hs(t)
}

function qw(e, t) {
   if (e === "input" || e === "change") return Hs(t)
}

function Zw(e, t) {
   return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var lt = typeof Object.is == "function" ? Object.is : Zw;

function wi(e, t) {
   if (lt(e, t)) return !0;
   if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
   var n = Object.keys(e),
      r = Object.keys(t);
   if (n.length !== r.length) return !1;
   for (r = 0; r < n.length; r++) {
      var i = n[r];
      if (!Cl.call(t, i) || !lt(e[i], t[i])) return !1
   }
   return !0
}

function cd(e) {
   for (; e && e.firstChild;) e = e.firstChild;
   return e
}

function fd(e, t) {
   var n = cd(e);
   e = 0;
   for (var r; n;) {
      if (n.nodeType === 3) {
         if (r = e + n.textContent.length, e <= t && r >= t) return {
            node: n,
            offset: t - e
         };
         e = r
      }
      e: {
         for (; n;) {
            if (n.nextSibling) {
               n = n.nextSibling;
               break e
            }
            n = n.parentNode
         }
         n = void 0
      }
      n = cd(n)
   }
}

function e0(e, t) {
   return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? e0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function t0() {
   for (var e = window, t = ts(); t instanceof e.HTMLIFrameElement;) {
      try {
         var n = typeof t.contentWindow.location.href == "string"
      } catch {
         n = !1
      }
      if (n) e = t.contentWindow;
      else break;
      t = ts(e.document)
   }
   return t
}

function ac(e) {
   var t = e && e.nodeName && e.nodeName.toLowerCase();
   return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function Jw(e) {
   var t = t0(),
      n = e.focusedElem,
      r = e.selectionRange;
   if (t !== n && n && n.ownerDocument && e0(n.ownerDocument.documentElement, n)) {
      if (r !== null && ac(n)) {
         if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
         else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
            e = e.getSelection();
            var i = n.textContent.length,
               o = Math.min(r.start, i);
            r = r.end === void 0 ? o : Math.min(r.end, i), !e.extend && o > r && (i = r, r = o, o = i), i = fd(n, o);
            var s = fd(n, r);
            i && s && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)))
         }
      }
      for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
         element: e,
         left: e.scrollLeft,
         top: e.scrollTop
      });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
   }
}
var ex = Mt && "documentMode" in document && 11 >= document.documentMode,
   Yn = null,
   Ul = null,
   ri = null,
   $l = !1;

function dd(e, t, n) {
   var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
   $l || Yn == null || Yn !== ts(r) || (r = Yn, "selectionStart" in r && ac(r) ? r = {
      start: r.selectionStart,
      end: r.selectionEnd
   } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
      anchorNode: r.anchorNode,
      anchorOffset: r.anchorOffset,
      focusNode: r.focusNode,
      focusOffset: r.focusOffset
   }), ri && wi(ri, r) || (ri = r, r = ls(Ul, "onSelect"), 0 < r.length && (t = new ic("onSelect", "select", null, t, n), e.push({
      event: t,
      listeners: r
   }), t.target = Yn)))
}

function co(e, t) {
   var n = {};
   return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}
var Qn = {
      animationend: co("Animation", "AnimationEnd"),
      animationiteration: co("Animation", "AnimationIteration"),
      animationstart: co("Animation", "AnimationStart"),
      transitionend: co("Transition", "TransitionEnd")
   },
   Oa = {},
   n0 = {};
Mt && (n0 = document.createElement("div").style, "AnimationEvent" in window || (delete Qn.animationend.animation, delete Qn.animationiteration.animation, delete Qn.animationstart.animation), "TransitionEvent" in window || delete Qn.transitionend.transition);

function Ks(e) {
   if (Oa[e]) return Oa[e];
   if (!Qn[e]) return e;
   var t = Qn[e],
      n;
   for (n in t)
      if (t.hasOwnProperty(n) && n in n0) return Oa[e] = t[n];
   return e
}
var r0 = Ks("animationend"),
   i0 = Ks("animationiteration"),
   o0 = Ks("animationstart"),
   s0 = Ks("transitionend"),
   a0 = new Map,
   hd = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function cn(e, t) {
   a0.set(e, t), Vn(t, [e])
}
for (var Ma = 0; Ma < hd.length; Ma++) {
   var ja = hd[Ma],
      tx = ja.toLowerCase(),
      nx = ja[0].toUpperCase() + ja.slice(1);
   cn(tx, "on" + nx)
}
cn(r0, "onAnimationEnd");
cn(i0, "onAnimationIteration");
cn(o0, "onAnimationStart");
cn("dblclick", "onDoubleClick");
cn("focusin", "onFocus");
cn("focusout", "onBlur");
cn(s0, "onTransitionEnd");
gr("onMouseEnter", ["mouseout", "mouseover"]);
gr("onMouseLeave", ["mouseout", "mouseover"]);
gr("onPointerEnter", ["pointerout", "pointerover"]);
gr("onPointerLeave", ["pointerout", "pointerover"]);
Vn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Vn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Vn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Vn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Vn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Vn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Qr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
   rx = new Set("cancel close invalid load scroll toggle".split(" ").concat(Qr));

function pd(e, t, n) {
   var r = e.type || "unknown-event";
   e.currentTarget = n, tw(r, t, void 0, e), e.currentTarget = null
}

function l0(e, t) {
   t = (t & 4) !== 0;
   for (var n = 0; n < e.length; n++) {
      var r = e[n],
         i = r.event;
      r = r.listeners;
      e: {
         var o = void 0;
         if (t)
            for (var s = r.length - 1; 0 <= s; s--) {
               var a = r[s],
                  l = a.instance,
                  u = a.currentTarget;
               if (a = a.listener, l !== o && i.isPropagationStopped()) break e;
               pd(i, a, u), o = l
            } else
               for (s = 0; s < r.length; s++) {
                  if (a = r[s], l = a.instance, u = a.currentTarget, a = a.listener, l !== o && i.isPropagationStopped()) break e;
                  pd(i, a, u), o = l
               }
      }
   }
   if (rs) throw e = Il, rs = !1, Il = null, e
}

function H(e, t) {
   var n = t[Xl];
   n === void 0 && (n = t[Xl] = new Set);
   var r = e + "__bubble";
   n.has(r) || (u0(t, e, 2, !1), n.add(r))
}

function _a(e, t, n) {
   var r = 0;
   t && (r |= 4), u0(n, e, r, t)
}
var fo = "_reactListening" + Math.random().toString(36).slice(2);

function xi(e) {
   if (!e[fo]) {
      e[fo] = !0, gm.forEach(function(n) {
         n !== "selectionchange" && (rx.has(n) || _a(n, !1, e), _a(n, !0, e))
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[fo] || (t[fo] = !0, _a("selectionchange", !1, t))
   }
}

function u0(e, t, n, r) {
   switch (Km(t)) {
      case 1:
         var i = yw;
         break;
      case 4:
         i = vw;
         break;
      default:
         i = nc
   }
   n = i.bind(null, t, n, e), i = void 0, !Fl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, {
      capture: !0,
      passive: i
   }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
      passive: i
   }) : e.addEventListener(t, n, !1)
}

function Fa(e, t, n, r, i) {
   var o = r;
   if (!(t & 1) && !(t & 2) && r !== null) e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
         var a = r.stateNode.containerInfo;
         if (a === i || a.nodeType === 8 && a.parentNode === i) break;
         if (s === 4)
            for (s = r.return; s !== null;) {
               var l = s.tag;
               if ((l === 3 || l === 4) && (l = s.stateNode.containerInfo, l === i || l.nodeType === 8 && l.parentNode === i)) return;
               s = s.return
            }
         for (; a !== null;) {
            if (s = Pn(a), s === null) return;
            if (l = s.tag, l === 5 || l === 6) {
               r = o = s;
               continue e
            }
            a = a.parentNode
         }
      }
      r = r.return
   }
   Dm(function() {
      var u = o,
         c = Zu(n),
         f = [];
      e: {
         var d = a0.get(e);
         if (d !== void 0) {
            var g = ic,
               w = e;
            switch (e) {
               case "keypress":
                  if (jo(n) === 0) break e;
               case "keydown":
               case "keyup":
                  g = Ow;
                  break;
               case "focusin":
                  w = "focus", g = Na;
                  break;
               case "focusout":
                  w = "blur", g = Na;
                  break;
               case "beforeblur":
               case "afterblur":
                  g = Na;
                  break;
               case "click":
                  if (n.button === 2) break e;
               case "auxclick":
               case "dblclick":
               case "mousedown":
               case "mousemove":
               case "mouseup":
               case "mouseout":
               case "mouseover":
               case "contextmenu":
                  g = nd;
                  break;
               case "drag":
               case "dragend":
               case "dragenter":
               case "dragexit":
               case "dragleave":
               case "dragover":
               case "dragstart":
               case "drop":
                  g = Sw;
                  break;
               case "touchcancel":
               case "touchend":
               case "touchmove":
               case "touchstart":
                  g = _w;
                  break;
               case r0:
               case i0:
               case o0:
                  g = Pw;
                  break;
               case s0:
                  g = Iw;
                  break;
               case "scroll":
                  g = ww;
                  break;
               case "wheel":
                  g = Bw;
                  break;
               case "copy":
               case "cut":
               case "paste":
                  g = Rw;
                  break;
               case "gotpointercapture":
               case "lostpointercapture":
               case "pointercancel":
               case "pointerdown":
               case "pointermove":
               case "pointerout":
               case "pointerover":
               case "pointerup":
                  g = id
            }
            var v = (t & 4) !== 0,
               S = !v && e === "scroll",
               p = v ? d !== null ? d + "Capture" : null : d;
            v = [];
            for (var m = u, y; m !== null;) {
               y = m;
               var E = y.stateNode;
               if (y.tag === 5 && E !== null && (y = E, p !== null && (E = pi(m, p), E != null && v.push(Si(m, E, y)))), S) break;
               m = m.return
            }
            0 < v.length && (d = new g(d, w, null, n, c), f.push({
               event: d,
               listeners: v
            }))
         }
      }
      if (!(t & 7)) {
         e: {
            if (d = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", d && n !== jl && (w = n.relatedTarget || n.fromElement) && (Pn(w) || w[jt])) break e;
            if ((g || d) && (d = c.window === c ? c : (d = c.ownerDocument) ? d.defaultView || d.parentWindow : window, g ? (w = n.relatedTarget || n.toElement, g = u, w = w ? Pn(w) : null, w !== null && (S = Bn(w), w !== S || w.tag !== 5 && w.tag !== 6) && (w = null)) : (g = null, w = u), g !== w)) {
               if (v = nd, E = "onMouseLeave", p = "onMouseEnter", m = "mouse", (e === "pointerout" || e === "pointerover") && (v = id, E = "onPointerLeave", p = "onPointerEnter", m = "pointer"), S = g == null ? d : qn(g), y = w == null ? d : qn(w), d = new v(E, m + "leave", g, n, c), d.target = S, d.relatedTarget = y, E = null, Pn(c) === u && (v = new v(p, m + "enter", w, n, c), v.target = y, v.relatedTarget = S, E = v), S = E, g && w) t: {
                  for (v = g, p = w, m = 0, y = v; y; y = Un(y)) m++;
                  for (y = 0, E = p; E; E = Un(E)) y++;
                  for (; 0 < m - y;) v = Un(v),
                  m--;
                  for (; 0 < y - m;) p = Un(p),
                  y--;
                  for (; m--;) {
                     if (v === p || p !== null && v === p.alternate) break t;
                     v = Un(v), p = Un(p)
                  }
                  v = null
               }
               else v = null;
               g !== null && md(f, d, g, v, !1), w !== null && S !== null && md(f, S, w, v, !0)
            }
         }
         e: {
            if (d = u ? qn(u) : window, g = d.nodeName && d.nodeName.toLowerCase(), g === "select" || g === "input" && d.type === "file") var C = Gw;
            else if (ad(d))
               if (Zm) C = qw;
               else {
                  C = Yw;
                  var T = Xw
               }
            else(g = d.nodeName) && g.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (C = Qw);
            if (C && (C = C(e, u))) {
               qm(f, C, n, c);
               break e
            }
            T && T(e, d, u),
            e === "focusout" && (T = d._wrapperState) && T.controlled && d.type === "number" && Nl(d, "number", d.value)
         }
         switch (T = u ? qn(u) : window, e) {
            case "focusin":
               (ad(T) || T.contentEditable === "true") && (Yn = T, Ul = u, ri = null);
               break;
            case "focusout":
               ri = Ul = Yn = null;
               break;
            case "mousedown":
               $l = !0;
               break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
               $l = !1, dd(f, n, c);
               break;
            case "selectionchange":
               if (ex) break;
            case "keydown":
            case "keyup":
               dd(f, n, c)
         }
         var R;
         if (sc) e: {
            switch (e) {
               case "compositionstart":
                  var k = "onCompositionStart";
                  break e;
               case "compositionend":
                  k = "onCompositionEnd";
                  break e;
               case "compositionupdate":
                  k = "onCompositionUpdate";
                  break e
            }
            k = void 0
         }
         else Xn ? Ym(e, n) && (k = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (k = "onCompositionStart");k && (Xm && n.locale !== "ko" && (Xn || k !== "onCompositionStart" ? k === "onCompositionEnd" && Xn && (R = Gm()) : (Xt = c, rc = "value" in Xt ? Xt.value : Xt.textContent, Xn = !0)), T = ls(u, k), 0 < T.length && (k = new rd(k, e, null, n, c), f.push({
            event: k,
            listeners: T
         }), R ? k.data = R : (R = Qm(n), R !== null && (k.data = R)))),
         (R = Uw ? $w(e, n) : Ww(e, n)) && (u = ls(u, "onBeforeInput"), 0 < u.length && (c = new rd("onBeforeInput", "beforeinput", null, n, c), f.push({
            event: c,
            listeners: u
         }), c.data = R))
      }
      l0(f, t)
   })
}

function Si(e, t, n) {
   return {
      instance: e,
      listener: t,
      currentTarget: n
   }
}

function ls(e, t) {
   for (var n = t + "Capture", r = []; e !== null;) {
      var i = e,
         o = i.stateNode;
      i.tag === 5 && o !== null && (i = o, o = pi(e, n), o != null && r.unshift(Si(e, o, i)), o = pi(e, t), o != null && r.push(Si(e, o, i))), e = e.return
   }
   return r
}

function Un(e) {
   if (e === null) return null;
   do e = e.return; while (e && e.tag !== 5);
   return e || null
}

function md(e, t, n, r, i) {
   for (var o = t._reactName, s = []; n !== null && n !== r;) {
      var a = n,
         l = a.alternate,
         u = a.stateNode;
      if (l !== null && l === r) break;
      a.tag === 5 && u !== null && (a = u, i ? (l = pi(n, o), l != null && s.unshift(Si(n, l, a))) : i || (l = pi(n, o), l != null && s.push(Si(n, l, a)))), n = n.return
   }
   s.length !== 0 && e.push({
      event: t,
      listeners: s
   })
}
var ix = /\r\n?/g,
   ox = /\u0000|\uFFFD/g;

function gd(e) {
   return (typeof e == "string" ? e : "" + e).replace(ix, `
`).replace(ox, "")
}

function ho(e, t, n) {
   if (t = gd(t), gd(e) !== t && n) throw Error(b(425))
}

function us() {}
var Wl = null,
   Hl = null;

function Kl(e, t) {
   return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Gl = typeof setTimeout == "function" ? setTimeout : void 0,
   sx = typeof clearTimeout == "function" ? clearTimeout : void 0,
   yd = typeof Promise == "function" ? Promise : void 0,
   ax = typeof queueMicrotask == "function" ? queueMicrotask : typeof yd < "u" ? function(e) {
      return yd.resolve(null).then(e).catch(lx)
   } : Gl;

function lx(e) {
   setTimeout(function() {
      throw e
   })
}

function Ia(e, t) {
   var n = t,
      r = 0;
   do {
      var i = n.nextSibling;
      if (e.removeChild(n), i && i.nodeType === 8)
         if (n = i.data, n === "/$") {
            if (r === 0) {
               e.removeChild(i), yi(t);
               return
            }
            r--
         } else n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = i
   } while (n);
   yi(t)
}

function Jt(e) {
   for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
         if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
         if (t === "/$") return null
      }
   }
   return e
}

function vd(e) {
   e = e.previousSibling;
   for (var t = 0; e;) {
      if (e.nodeType === 8) {
         var n = e.data;
         if (n === "$" || n === "$!" || n === "$?") {
            if (t === 0) return e;
            t--
         } else n === "/$" && t++
      }
      e = e.previousSibling
   }
   return null
}
var Ar = Math.random().toString(36).slice(2),
   pt = "__reactFiber$" + Ar,
   Ei = "__reactProps$" + Ar,
   jt = "__reactContainer$" + Ar,
   Xl = "__reactEvents$" + Ar,
   ux = "__reactListeners$" + Ar,
   cx = "__reactHandles$" + Ar;

function Pn(e) {
   var t = e[pt];
   if (t) return t;
   for (var n = e.parentNode; n;) {
      if (t = n[jt] || n[pt]) {
         if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
            for (e = vd(e); e !== null;) {
               if (n = e[pt]) return n;
               e = vd(e)
            }
         return t
      }
      e = n, n = e.parentNode
   }
   return null
}

function Ui(e) {
   return e = e[pt] || e[jt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function qn(e) {
   if (e.tag === 5 || e.tag === 6) return e.stateNode;
   throw Error(b(33))
}

function Gs(e) {
   return e[Ei] || null
}
var Yl = [],
   Zn = -1;

function fn(e) {
   return {
      current: e
   }
}

function K(e) {
   0 > Zn || (e.current = Yl[Zn], Yl[Zn] = null, Zn--)
}

function $(e, t) {
   Zn++, Yl[Zn] = e.current, e.current = t
}
var sn = {},
   Se = fn(sn),
   Le = fn(!1),
   Dn = sn;

function yr(e, t) {
   var n = e.type.contextTypes;
   if (!n) return sn;
   var r = e.stateNode;
   if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
   var i = {},
      o;
   for (o in n) i[o] = t[o];
   return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i
}

function De(e) {
   return e = e.childContextTypes, e != null
}

function cs() {
   K(Le), K(Se)
}

function wd(e, t, n) {
   if (Se.current !== sn) throw Error(b(168));
   $(Se, t), $(Le, n)
}

function c0(e, t, n) {
   var r = e.stateNode;
   if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
   r = r.getChildContext();
   for (var i in r)
      if (!(i in t)) throw Error(b(108, X1(e) || "Unknown", i));
   return J({}, n, r)
}

function fs(e) {
   return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || sn, Dn = Se.current, $(Se, e), $(Le, Le.current), !0
}

function xd(e, t, n) {
   var r = e.stateNode;
   if (!r) throw Error(b(169));
   n ? (e = c0(e, t, Dn), r.__reactInternalMemoizedMergedChildContext = e, K(Le), K(Se), $(Se, e)) : K(Le), $(Le, n)
}
var Rt = null,
   Xs = !1,
   Va = !1;

function f0(e) {
   Rt === null ? Rt = [e] : Rt.push(e)
}

function fx(e) {
   Xs = !0, f0(e)
}

function dn() {
   if (!Va && Rt !== null) {
      Va = !0;
      var e = 0,
         t = U;
      try {
         var n = Rt;
         for (U = 1; e < n.length; e++) {
            var r = n[e];
            do r = r(!0); while (r !== null)
         }
         Rt = null, Xs = !1
      } catch (i) {
         throw Rt !== null && (Rt = Rt.slice(e + 1)), _m(Ju, dn), i
      } finally {
         U = t, Va = !1
      }
   }
   return null
}
var Jn = [],
   er = 0,
   ds = null,
   hs = 0,
   Ke = [],
   Ge = 0,
   On = null,
   kt = 1,
   bt = "";

function Sn(e, t) {
   Jn[er++] = hs, Jn[er++] = ds, ds = e, hs = t
}

function d0(e, t, n) {
   Ke[Ge++] = kt, Ke[Ge++] = bt, Ke[Ge++] = On, On = e;
   var r = kt;
   e = bt;
   var i = 32 - ot(r) - 1;
   r &= ~(1 << i), n += 1;
   var o = 32 - ot(t) + i;
   if (30 < o) {
      var s = i - i % 5;
      o = (r & (1 << s) - 1).toString(32), r >>= s, i -= s, kt = 1 << 32 - ot(t) + i | n << i | r, bt = o + e
   } else kt = 1 << o | n << i | r, bt = e
}

function lc(e) {
   e.return !== null && (Sn(e, 1), d0(e, 1, 0))
}

function uc(e) {
   for (; e === ds;) ds = Jn[--er], Jn[er] = null, hs = Jn[--er], Jn[er] = null;
   for (; e === On;) On = Ke[--Ge], Ke[Ge] = null, bt = Ke[--Ge], Ke[Ge] = null, kt = Ke[--Ge], Ke[Ge] = null
}
var Fe = null,
   _e = null,
   X = !1,
   it = null;

function h0(e, t) {
   var n = Xe(5, null, null, 0);
   n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function Sd(e, t) {
   switch (e.tag) {
      case 5:
         var n = e.type;
         return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Fe = e, _e = Jt(t.firstChild), !0) : !1;
      case 6:
         return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Fe = e, _e = null, !0) : !1;
      case 13:
         return t = t.nodeType !== 8 ? null : t, t !== null ? (n = On !== null ? {
            id: kt,
            overflow: bt
         } : null, e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
         }, n = Xe(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Fe = e, _e = null, !0) : !1;
      default:
         return !1
   }
}

function Ql(e) {
   return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function ql(e) {
   if (X) {
      var t = _e;
      if (t) {
         var n = t;
         if (!Sd(e, t)) {
            if (Ql(e)) throw Error(b(418));
            t = Jt(n.nextSibling);
            var r = Fe;
            t && Sd(e, t) ? h0(r, n) : (e.flags = e.flags & -4097 | 2, X = !1, Fe = e)
         }
      } else {
         if (Ql(e)) throw Error(b(418));
         e.flags = e.flags & -4097 | 2, X = !1, Fe = e
      }
   }
}

function Ed(e) {
   for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
   Fe = e
}

function po(e) {
   if (e !== Fe) return !1;
   if (!X) return Ed(e), X = !0, !1;
   var t;
   if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Kl(e.type, e.memoizedProps)), t && (t = _e)) {
      if (Ql(e)) throw p0(), Error(b(418));
      for (; t;) h0(e, t), t = Jt(t.nextSibling)
   }
   if (Ed(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(b(317));
      e: {
         for (e = e.nextSibling, t = 0; e;) {
            if (e.nodeType === 8) {
               var n = e.data;
               if (n === "/$") {
                  if (t === 0) {
                     _e = Jt(e.nextSibling);
                     break e
                  }
                  t--
               } else n !== "$" && n !== "$!" && n !== "$?" || t++
            }
            e = e.nextSibling
         }
         _e = null
      }
   } else _e = Fe ? Jt(e.stateNode.nextSibling) : null;
   return !0
}

function p0() {
   for (var e = _e; e;) e = Jt(e.nextSibling)
}

function vr() {
   _e = Fe = null, X = !1
}

function cc(e) {
   it === null ? it = [e] : it.push(e)
}
var dx = Vt.ReactCurrentBatchConfig;

function nt(e, t) {
   if (e && e.defaultProps) {
      t = J({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t
   }
   return t
}
var ps = fn(null),
   ms = null,
   tr = null,
   fc = null;

function dc() {
   fc = tr = ms = null
}

function hc(e) {
   var t = ps.current;
   K(ps), e._currentValue = t
}

function Zl(e, t, n) {
   for (; e !== null;) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return
   }
}

function hr(e, t) {
   ms = e, fc = tr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ne = !0), e.firstContext = null)
}

function Qe(e) {
   var t = e._currentValue;
   if (fc !== e)
      if (e = {
            context: e,
            memoizedValue: t,
            next: null
         }, tr === null) {
         if (ms === null) throw Error(b(308));
         tr = e, ms.dependencies = {
            lanes: 0,
            firstContext: e
         }
      } else tr = tr.next = e;
   return t
}
var Tn = null;

function pc(e) {
   Tn === null ? Tn = [e] : Tn.push(e)
}

function m0(e, t, n, r) {
   var i = t.interleaved;
   return i === null ? (n.next = n, pc(t)) : (n.next = i.next, i.next = n), t.interleaved = n, _t(e, r)
}

function _t(e, t) {
   e.lanes |= t;
   var n = e.alternate;
   for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
   return n.tag === 3 ? n.stateNode : null
}
var Ht = !1;

function mc(e) {
   e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: {
         pending: null,
         interleaved: null,
         lanes: 0
      },
      effects: null
   }
}

function g0(e, t) {
   e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      effects: e.effects
   })
}

function Nt(e, t) {
   return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null
   }
}

function en(e, t, n) {
   var r = e.updateQueue;
   if (r === null) return null;
   if (r = r.shared, B & 2) {
      var i = r.pending;
      return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, _t(e, n)
   }
   return i = r.interleaved, i === null ? (t.next = t, pc(r)) : (t.next = i.next, i.next = t), r.interleaved = t, _t(e, n)
}

function _o(e, t, n) {
   if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, ec(e, n)
   }
}

function Cd(e, t) {
   var n = e.updateQueue,
      r = e.alternate;
   if (r !== null && (r = r.updateQueue, n === r)) {
      var i = null,
         o = null;
      if (n = n.firstBaseUpdate, n !== null) {
         do {
            var s = {
               eventTime: n.eventTime,
               lane: n.lane,
               tag: n.tag,
               payload: n.payload,
               callback: n.callback,
               next: null
            };
            o === null ? i = o = s : o = o.next = s, n = n.next
         } while (n !== null);
         o === null ? i = o = t : o = o.next = t
      } else i = o = t;
      n = {
         baseState: r.baseState,
         firstBaseUpdate: i,
         lastBaseUpdate: o,
         shared: r.shared,
         effects: r.effects
      }, e.updateQueue = n;
      return
   }
   e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function gs(e, t, n, r) {
   var i = e.updateQueue;
   Ht = !1;
   var o = i.firstBaseUpdate,
      s = i.lastBaseUpdate,
      a = i.shared.pending;
   if (a !== null) {
      i.shared.pending = null;
      var l = a,
         u = l.next;
      l.next = null, s === null ? o = u : s.next = u, s = l;
      var c = e.alternate;
      c !== null && (c = c.updateQueue, a = c.lastBaseUpdate, a !== s && (a === null ? c.firstBaseUpdate = u : a.next = u, c.lastBaseUpdate = l))
   }
   if (o !== null) {
      var f = i.baseState;
      s = 0, c = u = l = null, a = o;
      do {
         var d = a.lane,
            g = a.eventTime;
         if ((r & d) === d) {
            c !== null && (c = c.next = {
               eventTime: g,
               lane: 0,
               tag: a.tag,
               payload: a.payload,
               callback: a.callback,
               next: null
            });
            e: {
               var w = e,
                  v = a;
               switch (d = t, g = n, v.tag) {
                  case 1:
                     if (w = v.payload, typeof w == "function") {
                        f = w.call(g, f, d);
                        break e
                     }
                     f = w;
                     break e;
                  case 3:
                     w.flags = w.flags & -65537 | 128;
                  case 0:
                     if (w = v.payload, d = typeof w == "function" ? w.call(g, f, d) : w, d == null) break e;
                     f = J({}, f, d);
                     break e;
                  case 2:
                     Ht = !0
               }
            }
            a.callback !== null && a.lane !== 0 && (e.flags |= 64, d = i.effects, d === null ? i.effects = [a] : d.push(a))
         } else g = {
            eventTime: g,
            lane: d,
            tag: a.tag,
            payload: a.payload,
            callback: a.callback,
            next: null
         }, c === null ? (u = c = g, l = f) : c = c.next = g, s |= d;
         if (a = a.next, a === null) {
            if (a = i.shared.pending, a === null) break;
            d = a, a = d.next, d.next = null, i.lastBaseUpdate = d, i.shared.pending = null
         }
      } while (1);
      if (c === null && (l = f), i.baseState = l, i.firstBaseUpdate = u, i.lastBaseUpdate = c, t = i.shared.interleaved, t !== null) {
         i = t;
         do s |= i.lane, i = i.next; while (i !== t)
      } else o === null && (i.shared.lanes = 0);
      jn |= s, e.lanes = s, e.memoizedState = f
   }
}

function Pd(e, t, n) {
   if (e = t.effects, t.effects = null, e !== null)
      for (t = 0; t < e.length; t++) {
         var r = e[t],
            i = r.callback;
         if (i !== null) {
            if (r.callback = null, r = n, typeof i != "function") throw Error(b(191, i));
            i.call(r)
         }
      }
}
var y0 = new mm.Component().refs;

function Jl(e, t, n, r) {
   t = e.memoizedState, n = n(r, t), n = n == null ? t : J({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Ys = {
   isMounted: function(e) {
      return (e = e._reactInternals) ? Bn(e) === e : !1
   },
   enqueueSetState: function(e, t, n) {
      e = e._reactInternals;
      var r = Pe(),
         i = nn(e),
         o = Nt(r, i);
      o.payload = t, n != null && (o.callback = n), t = en(e, o, i), t !== null && (st(t, e, i, r), _o(t, e, i))
   },
   enqueueReplaceState: function(e, t, n) {
      e = e._reactInternals;
      var r = Pe(),
         i = nn(e),
         o = Nt(r, i);
      o.tag = 1, o.payload = t, n != null && (o.callback = n), t = en(e, o, i), t !== null && (st(t, e, i, r), _o(t, e, i))
   },
   enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var n = Pe(),
         r = nn(e),
         i = Nt(n, r);
      i.tag = 2, t != null && (i.callback = t), t = en(e, i, r), t !== null && (st(t, e, r, n), _o(t, e, r))
   }
};

function Td(e, t, n, r, i, o, s) {
   return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, s) : t.prototype && t.prototype.isPureReactComponent ? !wi(n, r) || !wi(i, o) : !0
}

function v0(e, t, n) {
   var r = !1,
      i = sn,
      o = t.contextType;
   return typeof o == "object" && o !== null ? o = Qe(o) : (i = De(t) ? Dn : Se.current, r = t.contextTypes, o = (r = r != null) ? yr(e, i) : sn), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ys, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = o), t
}

function Rd(e, t, n, r) {
   e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ys.enqueueReplaceState(t, t.state, null)
}

function eu(e, t, n, r) {
   var i = e.stateNode;
   i.props = n, i.state = e.memoizedState, i.refs = y0, mc(e);
   var o = t.contextType;
   typeof o == "object" && o !== null ? i.context = Qe(o) : (o = De(t) ? Dn : Se.current, i.context = yr(e, o)), i.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Jl(e, t, o, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && Ys.enqueueReplaceState(i, i.state, null), gs(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308)
}

function zr(e, t, n) {
   if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
         if (n = n._owner, n) {
            if (n.tag !== 1) throw Error(b(309));
            var r = n.stateNode
         }
         if (!r) throw Error(b(147, e));
         var i = r,
            o = "" + e;
         return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(s) {
            var a = i.refs;
            a === y0 && (a = i.refs = {}), s === null ? delete a[o] : a[o] = s
         }, t._stringRef = o, t)
      }
      if (typeof e != "string") throw Error(b(284));
      if (!n._owner) throw Error(b(290, e))
   }
   return e
}

function mo(e, t) {
   throw e = Object.prototype.toString.call(t), Error(b(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function kd(e) {
   var t = e._init;
   return t(e._payload)
}

function w0(e) {
   function t(p, m) {
      if (e) {
         var y = p.deletions;
         y === null ? (p.deletions = [m], p.flags |= 16) : y.push(m)
      }
   }

   function n(p, m) {
      if (!e) return null;
      for (; m !== null;) t(p, m), m = m.sibling;
      return null
   }

   function r(p, m) {
      for (p = new Map; m !== null;) m.key !== null ? p.set(m.key, m) : p.set(m.index, m), m = m.sibling;
      return p
   }

   function i(p, m) {
      return p = rn(p, m), p.index = 0, p.sibling = null, p
   }

   function o(p, m, y) {
      return p.index = y, e ? (y = p.alternate, y !== null ? (y = y.index, y < m ? (p.flags |= 2, m) : y) : (p.flags |= 2, m)) : (p.flags |= 1048576, m)
   }

   function s(p) {
      return e && p.alternate === null && (p.flags |= 2), p
   }

   function a(p, m, y, E) {
      return m === null || m.tag !== 6 ? (m = Ka(y, p.mode, E), m.return = p, m) : (m = i(m, y), m.return = p, m)
   }

   function l(p, m, y, E) {
      var C = y.type;
      return C === Gn ? c(p, m, y.props.children, E, y.key) : m !== null && (m.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Wt && kd(C) === m.type) ? (E = i(m, y.props), E.ref = zr(p, m, y), E.return = p, E) : (E = Uo(y.type, y.key, y.props, null, p.mode, E), E.ref = zr(p, m, y), E.return = p, E)
   }

   function u(p, m, y, E) {
      return m === null || m.tag !== 4 || m.stateNode.containerInfo !== y.containerInfo || m.stateNode.implementation !== y.implementation ? (m = Ga(y, p.mode, E), m.return = p, m) : (m = i(m, y.children || []), m.return = p, m)
   }

   function c(p, m, y, E, C) {
      return m === null || m.tag !== 7 ? (m = Nn(y, p.mode, E, C), m.return = p, m) : (m = i(m, y), m.return = p, m)
   }

   function f(p, m, y) {
      if (typeof m == "string" && m !== "" || typeof m == "number") return m = Ka("" + m, p.mode, y), m.return = p, m;
      if (typeof m == "object" && m !== null) {
         switch (m.$$typeof) {
            case ro:
               return y = Uo(m.type, m.key, m.props, null, p.mode, y), y.ref = zr(p, null, m), y.return = p, y;
            case Kn:
               return m = Ga(m, p.mode, y), m.return = p, m;
            case Wt:
               var E = m._init;
               return f(p, E(m._payload), y)
         }
         if (Xr(m) || _r(m)) return m = Nn(m, p.mode, y, null), m.return = p, m;
         mo(p, m)
      }
      return null
   }

   function d(p, m, y, E) {
      var C = m !== null ? m.key : null;
      if (typeof y == "string" && y !== "" || typeof y == "number") return C !== null ? null : a(p, m, "" + y, E);
      if (typeof y == "object" && y !== null) {
         switch (y.$$typeof) {
            case ro:
               return y.key === C ? l(p, m, y, E) : null;
            case Kn:
               return y.key === C ? u(p, m, y, E) : null;
            case Wt:
               return C = y._init, d(p, m, C(y._payload), E)
         }
         if (Xr(y) || _r(y)) return C !== null ? null : c(p, m, y, E, null);
         mo(p, y)
      }
      return null
   }

   function g(p, m, y, E, C) {
      if (typeof E == "string" && E !== "" || typeof E == "number") return p = p.get(y) || null, a(m, p, "" + E, C);
      if (typeof E == "object" && E !== null) {
         switch (E.$$typeof) {
            case ro:
               return p = p.get(E.key === null ? y : E.key) || null, l(m, p, E, C);
            case Kn:
               return p = p.get(E.key === null ? y : E.key) || null, u(m, p, E, C);
            case Wt:
               var T = E._init;
               return g(p, m, y, T(E._payload), C)
         }
         if (Xr(E) || _r(E)) return p = p.get(y) || null, c(m, p, E, C, null);
         mo(m, E)
      }
      return null
   }

   function w(p, m, y, E) {
      for (var C = null, T = null, R = m, k = m = 0, N = null; R !== null && k < y.length; k++) {
         R.index > k ? (N = R, R = null) : N = R.sibling;
         var L = d(p, R, y[k], E);
         if (L === null) {
            R === null && (R = N);
            break
         }
         e && R && L.alternate === null && t(p, R), m = o(L, m, k), T === null ? C = L : T.sibling = L, T = L, R = N
      }
      if (k === y.length) return n(p, R), X && Sn(p, k), C;
      if (R === null) {
         for (; k < y.length; k++) R = f(p, y[k], E), R !== null && (m = o(R, m, k), T === null ? C = R : T.sibling = R, T = R);
         return X && Sn(p, k), C
      }
      for (R = r(p, R); k < y.length; k++) N = g(R, p, k, y[k], E), N !== null && (e && N.alternate !== null && R.delete(N.key === null ? k : N.key), m = o(N, m, k), T === null ? C = N : T.sibling = N, T = N);
      return e && R.forEach(function(z) {
         return t(p, z)
      }), X && Sn(p, k), C
   }

   function v(p, m, y, E) {
      var C = _r(y);
      if (typeof C != "function") throw Error(b(150));
      if (y = C.call(y), y == null) throw Error(b(151));
      for (var T = C = null, R = m, k = m = 0, N = null, L = y.next(); R !== null && !L.done; k++, L = y.next()) {
         R.index > k ? (N = R, R = null) : N = R.sibling;
         var z = d(p, R, L.value, E);
         if (z === null) {
            R === null && (R = N);
            break
         }
         e && R && z.alternate === null && t(p, R), m = o(z, m, k), T === null ? C = z : T.sibling = z, T = z, R = N
      }
      if (L.done) return n(p, R), X && Sn(p, k), C;
      if (R === null) {
         for (; !L.done; k++, L = y.next()) L = f(p, L.value, E), L !== null && (m = o(L, m, k), T === null ? C = L : T.sibling = L, T = L);
         return X && Sn(p, k), C
      }
      for (R = r(p, R); !L.done; k++, L = y.next()) L = g(R, p, k, L.value, E), L !== null && (e && L.alternate !== null && R.delete(L.key === null ? k : L.key), m = o(L, m, k), T === null ? C = L : T.sibling = L, T = L);
      return e && R.forEach(function(Je) {
         return t(p, Je)
      }), X && Sn(p, k), C
   }

   function S(p, m, y, E) {
      if (typeof y == "object" && y !== null && y.type === Gn && y.key === null && (y = y.props.children), typeof y == "object" && y !== null) {
         switch (y.$$typeof) {
            case ro:
               e: {
                  for (var C = y.key, T = m; T !== null;) {
                     if (T.key === C) {
                        if (C = y.type, C === Gn) {
                           if (T.tag === 7) {
                              n(p, T.sibling), m = i(T, y.props.children), m.return = p, p = m;
                              break e
                           }
                        } else if (T.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Wt && kd(C) === T.type) {
                           n(p, T.sibling), m = i(T, y.props), m.ref = zr(p, T, y), m.return = p, p = m;
                           break e
                        }
                        n(p, T);
                        break
                     } else t(p, T);
                     T = T.sibling
                  }
                  y.type === Gn ? (m = Nn(y.props.children, p.mode, E, y.key), m.return = p, p = m) : (E = Uo(y.type, y.key, y.props, null, p.mode, E), E.ref = zr(p, m, y), E.return = p, p = E)
               }
               return s(p);
            case Kn:
               e: {
                  for (T = y.key; m !== null;) {
                     if (m.key === T)
                        if (m.tag === 4 && m.stateNode.containerInfo === y.containerInfo && m.stateNode.implementation === y.implementation) {
                           n(p, m.sibling), m = i(m, y.children || []), m.return = p, p = m;
                           break e
                        } else {
                           n(p, m);
                           break
                        }
                     else t(p, m);
                     m = m.sibling
                  }
                  m = Ga(y, p.mode, E),
                  m.return = p,
                  p = m
               }
               return s(p);
            case Wt:
               return T = y._init, S(p, m, T(y._payload), E)
         }
         if (Xr(y)) return w(p, m, y, E);
         if (_r(y)) return v(p, m, y, E);
         mo(p, y)
      }
      return typeof y == "string" && y !== "" || typeof y == "number" ? (y = "" + y, m !== null && m.tag === 6 ? (n(p, m.sibling), m = i(m, y), m.return = p, p = m) : (n(p, m), m = Ka(y, p.mode, E), m.return = p, p = m), s(p)) : n(p, m)
   }
   return S
}
var wr = w0(!0),
   x0 = w0(!1),
   $i = {},
   yt = fn($i),
   Ci = fn($i),
   Pi = fn($i);

function Rn(e) {
   if (e === $i) throw Error(b(174));
   return e
}

function gc(e, t) {
   switch ($(Pi, t), $(Ci, e), $(yt, $i), e = t.nodeType, e) {
      case 9:
      case 11:
         t = (t = t.documentElement) ? t.namespaceURI : Dl(null, "");
         break;
      default:
         e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Dl(t, e)
   }
   K(yt), $(yt, t)
}

function xr() {
   K(yt), K(Ci), K(Pi)
}

function S0(e) {
   Rn(Pi.current);
   var t = Rn(yt.current),
      n = Dl(t, e.type);
   t !== n && ($(Ci, e), $(yt, n))
}

function yc(e) {
   Ci.current === e && (K(yt), K(Ci))
}
var Y = fn(0);

function ys(e) {
   for (var t = e; t !== null;) {
      if (t.tag === 13) {
         var n = t.memoizedState;
         if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
         if (t.flags & 128) return t
      } else if (t.child !== null) {
         t.child.return = t, t = t.child;
         continue
      }
      if (t === e) break;
      for (; t.sibling === null;) {
         if (t.return === null || t.return === e) return null;
         t = t.return
      }
      t.sibling.return = t.return, t = t.sibling
   }
   return null
}
var Ba = [];

function vc() {
   for (var e = 0; e < Ba.length; e++) Ba[e]._workInProgressVersionPrimary = null;
   Ba.length = 0
}
var Fo = Vt.ReactCurrentDispatcher,
   za = Vt.ReactCurrentBatchConfig,
   Mn = 0,
   q = null,
   ae = null,
   ue = null,
   vs = !1,
   ii = !1,
   Ti = 0,
   hx = 0;

function me() {
   throw Error(b(321))
}

function wc(e, t) {
   if (t === null) return !1;
   for (var n = 0; n < t.length && n < e.length; n++)
      if (!lt(e[n], t[n])) return !1;
   return !0
}

function xc(e, t, n, r, i, o) {
   if (Mn = o, q = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Fo.current = e === null || e.memoizedState === null ? yx : vx, e = n(r, i), ii) {
      o = 0;
      do {
         if (ii = !1, Ti = 0, 25 <= o) throw Error(b(301));
         o += 1, ue = ae = null, t.updateQueue = null, Fo.current = wx, e = n(r, i)
      } while (ii)
   }
   if (Fo.current = ws, t = ae !== null && ae.next !== null, Mn = 0, ue = ae = q = null, vs = !1, t) throw Error(b(300));
   return e
}

function Sc() {
   var e = Ti !== 0;
   return Ti = 0, e
}

function ht() {
   var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
   };
   return ue === null ? q.memoizedState = ue = e : ue = ue.next = e, ue
}

function qe() {
   if (ae === null) {
      var e = q.alternate;
      e = e !== null ? e.memoizedState : null
   } else e = ae.next;
   var t = ue === null ? q.memoizedState : ue.next;
   if (t !== null) ue = t, ae = e;
   else {
      if (e === null) throw Error(b(310));
      ae = e, e = {
         memoizedState: ae.memoizedState,
         baseState: ae.baseState,
         baseQueue: ae.baseQueue,
         queue: ae.queue,
         next: null
      }, ue === null ? q.memoizedState = ue = e : ue = ue.next = e
   }
   return ue
}

function Ri(e, t) {
   return typeof t == "function" ? t(e) : t
}

function Ua(e) {
   var t = qe(),
      n = t.queue;
   if (n === null) throw Error(b(311));
   n.lastRenderedReducer = e;
   var r = ae,
      i = r.baseQueue,
      o = n.pending;
   if (o !== null) {
      if (i !== null) {
         var s = i.next;
         i.next = o.next, o.next = s
      }
      r.baseQueue = i = o, n.pending = null
   }
   if (i !== null) {
      o = i.next, r = r.baseState;
      var a = s = null,
         l = null,
         u = o;
      do {
         var c = u.lane;
         if ((Mn & c) === c) l !== null && (l = l.next = {
            lane: 0,
            action: u.action,
            hasEagerState: u.hasEagerState,
            eagerState: u.eagerState,
            next: null
         }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
         else {
            var f = {
               lane: c,
               action: u.action,
               hasEagerState: u.hasEagerState,
               eagerState: u.eagerState,
               next: null
            };
            l === null ? (a = l = f, s = r) : l = l.next = f, q.lanes |= c, jn |= c
         }
         u = u.next
      } while (u !== null && u !== o);
      l === null ? s = r : l.next = a, lt(r, t.memoizedState) || (Ne = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = l, n.lastRenderedState = r
   }
   if (e = n.interleaved, e !== null) {
      i = e;
      do o = i.lane, q.lanes |= o, jn |= o, i = i.next; while (i !== e)
   } else i === null && (n.lanes = 0);
   return [t.memoizedState, n.dispatch]
}

function $a(e) {
   var t = qe(),
      n = t.queue;
   if (n === null) throw Error(b(311));
   n.lastRenderedReducer = e;
   var r = n.dispatch,
      i = n.pending,
      o = t.memoizedState;
   if (i !== null) {
      n.pending = null;
      var s = i = i.next;
      do o = e(o, s.action), s = s.next; while (s !== i);
      lt(o, t.memoizedState) || (Ne = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o
   }
   return [o, r]
}

function E0() {}

function C0(e, t) {
   var n = q,
      r = qe(),
      i = t(),
      o = !lt(r.memoizedState, i);
   if (o && (r.memoizedState = i, Ne = !0), r = r.queue, Ec(R0.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || ue !== null && ue.memoizedState.tag & 1) {
      if (n.flags |= 2048, ki(9, T0.bind(null, n, r, i, t), void 0, null), ce === null) throw Error(b(349));
      Mn & 30 || P0(n, t, i)
   }
   return i
}

function P0(e, t, n) {
   e.flags |= 16384, e = {
      getSnapshot: t,
      value: n
   }, t = q.updateQueue, t === null ? (t = {
      lastEffect: null,
      stores: null
   }, q.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function T0(e, t, n, r) {
   t.value = n, t.getSnapshot = r, k0(t) && b0(e)
}

function R0(e, t, n) {
   return n(function() {
      k0(t) && b0(e)
   })
}

function k0(e) {
   var t = e.getSnapshot;
   e = e.value;
   try {
      var n = t();
      return !lt(e, n)
   } catch {
      return !0
   }
}

function b0(e) {
   var t = _t(e, 1);
   t !== null && st(t, e, 1, -1)
}

function bd(e) {
   var t = ht();
   return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ri,
      lastRenderedState: e
   }, t.queue = e, e = e.dispatch = gx.bind(null, q, e), [t.memoizedState, e]
}

function ki(e, t, n, r) {
   return e = {
      tag: e,
      create: t,
      destroy: n,
      deps: r,
      next: null
   }, t = q.updateQueue, t === null ? (t = {
      lastEffect: null,
      stores: null
   }, q.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function A0() {
   return qe().memoizedState
}

function Io(e, t, n, r) {
   var i = ht();
   q.flags |= e, i.memoizedState = ki(1 | t, n, void 0, r === void 0 ? null : r)
}

function Qs(e, t, n, r) {
   var i = qe();
   r = r === void 0 ? null : r;
   var o = void 0;
   if (ae !== null) {
      var s = ae.memoizedState;
      if (o = s.destroy, r !== null && wc(r, s.deps)) {
         i.memoizedState = ki(t, n, o, r);
         return
      }
   }
   q.flags |= e, i.memoizedState = ki(1 | t, n, o, r)
}

function Ad(e, t) {
   return Io(8390656, 8, e, t)
}

function Ec(e, t) {
   return Qs(2048, 8, e, t)
}

function N0(e, t) {
   return Qs(4, 2, e, t)
}

function L0(e, t) {
   return Qs(4, 4, e, t)
}

function D0(e, t) {
   if (typeof t == "function") return e = e(), t(e),
      function() {
         t(null)
      };
   if (t != null) return e = e(), t.current = e,
      function() {
         t.current = null
      }
}

function O0(e, t, n) {
   return n = n != null ? n.concat([e]) : null, Qs(4, 4, D0.bind(null, t, e), n)
}

function Cc() {}

function M0(e, t) {
   var n = qe();
   t = t === void 0 ? null : t;
   var r = n.memoizedState;
   return r !== null && t !== null && wc(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function j0(e, t) {
   var n = qe();
   t = t === void 0 ? null : t;
   var r = n.memoizedState;
   return r !== null && t !== null && wc(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function _0(e, t, n) {
   return Mn & 21 ? (lt(n, t) || (n = Vm(), q.lanes |= n, jn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ne = !0), e.memoizedState = n)
}

function px(e, t) {
   var n = U;
   U = n !== 0 && 4 > n ? n : 4, e(!0);
   var r = za.transition;
   za.transition = {};
   try {
      e(!1), t()
   } finally {
      U = n, za.transition = r
   }
}

function F0() {
   return qe().memoizedState
}

function mx(e, t, n) {
   var r = nn(e);
   if (n = {
         lane: r,
         action: n,
         hasEagerState: !1,
         eagerState: null,
         next: null
      }, I0(e)) V0(t, n);
   else if (n = m0(e, t, n, r), n !== null) {
      var i = Pe();
      st(n, e, r, i), B0(n, t, r)
   }
}

function gx(e, t, n) {
   var r = nn(e),
      i = {
         lane: r,
         action: n,
         hasEagerState: !1,
         eagerState: null,
         next: null
      };
   if (I0(e)) V0(t, i);
   else {
      var o = e.alternate;
      if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
         var s = t.lastRenderedState,
            a = o(s, n);
         if (i.hasEagerState = !0, i.eagerState = a, lt(a, s)) {
            var l = t.interleaved;
            l === null ? (i.next = i, pc(t)) : (i.next = l.next, l.next = i), t.interleaved = i;
            return
         }
      } catch {} finally {}
      n = m0(e, t, i, r), n !== null && (i = Pe(), st(n, e, r, i), B0(n, t, r))
   }
}

function I0(e) {
   var t = e.alternate;
   return e === q || t !== null && t === q
}

function V0(e, t) {
   ii = vs = !0;
   var n = e.pending;
   n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function B0(e, t, n) {
   if (n & 4194240) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, ec(e, n)
   }
}
var ws = {
      readContext: Qe,
      useCallback: me,
      useContext: me,
      useEffect: me,
      useImperativeHandle: me,
      useInsertionEffect: me,
      useLayoutEffect: me,
      useMemo: me,
      useReducer: me,
      useRef: me,
      useState: me,
      useDebugValue: me,
      useDeferredValue: me,
      useTransition: me,
      useMutableSource: me,
      useSyncExternalStore: me,
      useId: me,
      unstable_isNewReconciler: !1
   },
   yx = {
      readContext: Qe,
      useCallback: function(e, t) {
         return ht().memoizedState = [e, t === void 0 ? null : t], e
      },
      useContext: Qe,
      useEffect: Ad,
      useImperativeHandle: function(e, t, n) {
         return n = n != null ? n.concat([e]) : null, Io(4194308, 4, D0.bind(null, t, e), n)
      },
      useLayoutEffect: function(e, t) {
         return Io(4194308, 4, e, t)
      },
      useInsertionEffect: function(e, t) {
         return Io(4, 2, e, t)
      },
      useMemo: function(e, t) {
         var n = ht();
         return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
      },
      useReducer: function(e, t, n) {
         var r = ht();
         return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
         }, r.queue = e, e = e.dispatch = mx.bind(null, q, e), [r.memoizedState, e]
      },
      useRef: function(e) {
         var t = ht();
         return e = {
            current: e
         }, t.memoizedState = e
      },
      useState: bd,
      useDebugValue: Cc,
      useDeferredValue: function(e) {
         return ht().memoizedState = e
      },
      useTransition: function() {
         var e = bd(!1),
            t = e[0];
         return e = px.bind(null, e[1]), ht().memoizedState = e, [t, e]
      },
      useMutableSource: function() {},
      useSyncExternalStore: function(e, t, n) {
         var r = q,
            i = ht();
         if (X) {
            if (n === void 0) throw Error(b(407));
            n = n()
         } else {
            if (n = t(), ce === null) throw Error(b(349));
            Mn & 30 || P0(r, t, n)
         }
         i.memoizedState = n;
         var o = {
            value: n,
            getSnapshot: t
         };
         return i.queue = o, Ad(R0.bind(null, r, o, e), [e]), r.flags |= 2048, ki(9, T0.bind(null, r, o, n, t), void 0, null), n
      },
      useId: function() {
         var e = ht(),
            t = ce.identifierPrefix;
         if (X) {
            var n = bt,
               r = kt;
            n = (r & ~(1 << 32 - ot(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Ti++, 0 < n && (t += "H" + n.toString(32)), t += ":"
         } else n = hx++, t = ":" + t + "r" + n.toString(32) + ":";
         return e.memoizedState = t
      },
      unstable_isNewReconciler: !1
   },
   vx = {
      readContext: Qe,
      useCallback: M0,
      useContext: Qe,
      useEffect: Ec,
      useImperativeHandle: O0,
      useInsertionEffect: N0,
      useLayoutEffect: L0,
      useMemo: j0,
      useReducer: Ua,
      useRef: A0,
      useState: function() {
         return Ua(Ri)
      },
      useDebugValue: Cc,
      useDeferredValue: function(e) {
         var t = qe();
         return _0(t, ae.memoizedState, e)
      },
      useTransition: function() {
         var e = Ua(Ri)[0],
            t = qe().memoizedState;
         return [e, t]
      },
      useMutableSource: E0,
      useSyncExternalStore: C0,
      useId: F0,
      unstable_isNewReconciler: !1
   },
   wx = {
      readContext: Qe,
      useCallback: M0,
      useContext: Qe,
      useEffect: Ec,
      useImperativeHandle: O0,
      useInsertionEffect: N0,
      useLayoutEffect: L0,
      useMemo: j0,
      useReducer: $a,
      useRef: A0,
      useState: function() {
         return $a(Ri)
      },
      useDebugValue: Cc,
      useDeferredValue: function(e) {
         var t = qe();
         return ae === null ? t.memoizedState = e : _0(t, ae.memoizedState, e)
      },
      useTransition: function() {
         var e = $a(Ri)[0],
            t = qe().memoizedState;
         return [e, t]
      },
      useMutableSource: E0,
      useSyncExternalStore: C0,
      useId: F0,
      unstable_isNewReconciler: !1
   };

function Sr(e, t) {
   try {
      var n = "",
         r = t;
      do n += G1(r), r = r.return; while (r);
      var i = n
   } catch (o) {
      i = `
Error generating stack: ` + o.message + `
` + o.stack
   }
   return {
      value: e,
      source: t,
      stack: i,
      digest: null
   }
}

function Wa(e, t, n) {
   return {
      value: e,
      source: null,
      stack: n ?? null,
      digest: t ?? null
   }
}

function tu(e, t) {
   try {
      console.error(t.value)
   } catch (n) {
      setTimeout(function() {
         throw n
      })
   }
}
var xx = typeof WeakMap == "function" ? WeakMap : Map;

function z0(e, t, n) {
   n = Nt(-1, n), n.tag = 3, n.payload = {
      element: null
   };
   var r = t.value;
   return n.callback = function() {
      Ss || (Ss = !0, fu = r), tu(e, t)
   }, n
}

function U0(e, t, n) {
   n = Nt(-1, n), n.tag = 3;
   var r = e.type.getDerivedStateFromError;
   if (typeof r == "function") {
      var i = t.value;
      n.payload = function() {
         return r(i)
      }, n.callback = function() {
         tu(e, t)
      }
   }
   var o = e.stateNode;
   return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
      tu(e, t), typeof r != "function" && (tn === null ? tn = new Set([this]) : tn.add(this));
      var s = t.stack;
      this.componentDidCatch(t.value, {
         componentStack: s !== null ? s : ""
      })
   }), n
}

function Nd(e, t, n) {
   var r = e.pingCache;
   if (r === null) {
      r = e.pingCache = new xx;
      var i = new Set;
      r.set(t, i)
   } else i = r.get(t), i === void 0 && (i = new Set, r.set(t, i));
   i.has(n) || (i.add(n), e = Mx.bind(null, e, t, n), t.then(e, e))
}

function Ld(e) {
   do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return
   } while (e !== null);
   return null
}

function Dd(e, t, n, r, i) {
   return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Nt(-1, 1), t.tag = 2, en(n, t, 1))), n.lanes |= 1), e)
}
var Sx = Vt.ReactCurrentOwner,
   Ne = !1;

function Ee(e, t, n, r) {
   t.child = e === null ? x0(t, null, n, r) : wr(t, e.child, n, r)
}

function Od(e, t, n, r, i) {
   n = n.render;
   var o = t.ref;
   return hr(t, i), r = xc(e, t, n, r, o, i), n = Sc(), e !== null && !Ne ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Ft(e, t, i)) : (X && n && lc(t), t.flags |= 1, Ee(e, t, r, i), t.child)
}

function Md(e, t, n, r, i) {
   if (e === null) {
      var o = n.type;
      return typeof o == "function" && !Lc(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, $0(e, t, o, r, i)) : (e = Uo(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e)
   }
   if (o = e.child, !(e.lanes & i)) {
      var s = o.memoizedProps;
      if (n = n.compare, n = n !== null ? n : wi, n(s, r) && e.ref === t.ref) return Ft(e, t, i)
   }
   return t.flags |= 1, e = rn(o, r), e.ref = t.ref, e.return = t, t.child = e
}

function $0(e, t, n, r, i) {
   if (e !== null) {
      var o = e.memoizedProps;
      if (wi(o, r) && e.ref === t.ref)
         if (Ne = !1, t.pendingProps = r = o, (e.lanes & i) !== 0) e.flags & 131072 && (Ne = !0);
         else return t.lanes = e.lanes, Ft(e, t, i)
   }
   return nu(e, t, n, r, i)
}

function W0(e, t, n) {
   var r = t.pendingProps,
      i = r.children,
      o = e !== null ? e.memoizedState : null;
   if (r.mode === "hidden")
      if (!(t.mode & 1)) t.memoizedState = {
         baseLanes: 0,
         cachePool: null,
         transitions: null
      }, $(rr, je), je |= n;
      else {
         if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null
         }, t.updateQueue = null, $(rr, je), je |= e, null;
         t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
         }, r = o !== null ? o.baseLanes : n, $(rr, je), je |= r
      }
   else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, $(rr, je), je |= r;
   return Ee(e, t, i, n), t.child
}

function H0(e, t) {
   var n = t.ref;
   (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function nu(e, t, n, r, i) {
   var o = De(n) ? Dn : Se.current;
   return o = yr(t, o), hr(t, i), n = xc(e, t, n, r, o, i), r = Sc(), e !== null && !Ne ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Ft(e, t, i)) : (X && r && lc(t), t.flags |= 1, Ee(e, t, n, i), t.child)
}

function jd(e, t, n, r, i) {
   if (De(n)) {
      var o = !0;
      fs(t)
   } else o = !1;
   if (hr(t, i), t.stateNode === null) Vo(e, t), v0(t, n, r), eu(t, n, r, i), r = !0;
   else if (e === null) {
      var s = t.stateNode,
         a = t.memoizedProps;
      s.props = a;
      var l = s.context,
         u = n.contextType;
      typeof u == "object" && u !== null ? u = Qe(u) : (u = De(n) ? Dn : Se.current, u = yr(t, u));
      var c = n.getDerivedStateFromProps,
         f = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      f || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== r || l !== u) && Rd(t, s, r, u), Ht = !1;
      var d = t.memoizedState;
      s.state = d, gs(t, r, s, i), l = t.memoizedState, a !== r || d !== l || Le.current || Ht ? (typeof c == "function" && (Jl(t, n, c, r), l = t.memoizedState), (a = Ht || Td(t, n, a, r, d, l, u)) ? (f || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), s.props = r, s.state = l, s.context = u, r = a) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
   } else {
      s = t.stateNode, g0(e, t), a = t.memoizedProps, u = t.type === t.elementType ? a : nt(t.type, a), s.props = u, f = t.pendingProps, d = s.context, l = n.contextType, typeof l == "object" && l !== null ? l = Qe(l) : (l = De(n) ? Dn : Se.current, l = yr(t, l));
      var g = n.getDerivedStateFromProps;
      (c = typeof g == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== f || d !== l) && Rd(t, s, r, l), Ht = !1, d = t.memoizedState, s.state = d, gs(t, r, s, i);
      var w = t.memoizedState;
      a !== f || d !== w || Le.current || Ht ? (typeof g == "function" && (Jl(t, n, g, r), w = t.memoizedState), (u = Ht || Td(t, n, u, r, d, w, l) || !1) ? (c || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, w, l), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, w, l)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = w), s.props = r, s.state = w, s.context = l, r = u) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), r = !1)
   }
   return ru(e, t, n, r, o, i)
}

function ru(e, t, n, r, i, o) {
   H0(e, t);
   var s = (t.flags & 128) !== 0;
   if (!r && !s) return i && xd(t, n, !1), Ft(e, t, o);
   r = t.stateNode, Sx.current = t;
   var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
   return t.flags |= 1, e !== null && s ? (t.child = wr(t, e.child, null, o), t.child = wr(t, null, a, o)) : Ee(e, t, a, o), t.memoizedState = r.state, i && xd(t, n, !0), t.child
}

function K0(e) {
   var t = e.stateNode;
   t.pendingContext ? wd(e, t.pendingContext, t.pendingContext !== t.context) : t.context && wd(e, t.context, !1), gc(e, t.containerInfo)
}

function _d(e, t, n, r, i) {
   return vr(), cc(i), t.flags |= 256, Ee(e, t, n, r), t.child
}
var iu = {
   dehydrated: null,
   treeContext: null,
   retryLane: 0
};

function ou(e) {
   return {
      baseLanes: e,
      cachePool: null,
      transitions: null
   }
}

function G0(e, t, n) {
   var r = t.pendingProps,
      i = Y.current,
      o = !1,
      s = (t.flags & 128) !== 0,
      a;
   if ((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), a ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), $(Y, i & 1), e === null) return ql(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, s = {
      mode: "hidden",
      children: s
   }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = s) : o = Js(s, r, 0, null), e = Nn(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = ou(n), t.memoizedState = iu, e) : Pc(t, s));
   if (i = e.memoizedState, i !== null && (a = i.dehydrated, a !== null)) return Ex(e, t, s, r, a, i, n);
   if (o) {
      o = r.fallback, s = t.mode, i = e.child, a = i.sibling;
      var l = {
         mode: "hidden",
         children: r.children
      };
      return !(s & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = rn(i, l), r.subtreeFlags = i.subtreeFlags & 14680064), a !== null ? o = rn(a, o) : (o = Nn(o, s, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, s = e.child.memoizedState, s = s === null ? ou(n) : {
         baseLanes: s.baseLanes | n,
         cachePool: null,
         transitions: s.transitions
      }, o.memoizedState = s, o.childLanes = e.childLanes & ~n, t.memoizedState = iu, r
   }
   return o = e.child, e = o.sibling, r = rn(o, {
      mode: "visible",
      children: r.children
   }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function Pc(e, t) {
   return t = Js({
      mode: "visible",
      children: t
   }, e.mode, 0, null), t.return = e, e.child = t
}

function go(e, t, n, r) {
   return r !== null && cc(r), wr(t, e.child, null, n), e = Pc(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function Ex(e, t, n, r, i, o, s) {
   if (n) return t.flags & 256 ? (t.flags &= -257, r = Wa(Error(b(422))), go(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, i = t.mode, r = Js({
      mode: "visible",
      children: r.children
   }, i, 0, null), o = Nn(o, i, s, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && wr(t, e.child, null, s), t.child.memoizedState = ou(s), t.memoizedState = iu, o);
   if (!(t.mode & 1)) return go(e, t, s, null);
   if (i.data === "$!") {
      if (r = i.nextSibling && i.nextSibling.dataset, r) var a = r.dgst;
      return r = a, o = Error(b(419)), r = Wa(o, r, void 0), go(e, t, s, r)
   }
   if (a = (s & e.childLanes) !== 0, Ne || a) {
      if (r = ce, r !== null) {
         switch (s & -s) {
            case 4:
               i = 2;
               break;
            case 16:
               i = 8;
               break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
               i = 32;
               break;
            case 536870912:
               i = 268435456;
               break;
            default:
               i = 0
         }
         i = i & (r.suspendedLanes | s) ? 0 : i, i !== 0 && i !== o.retryLane && (o.retryLane = i, _t(e, i), st(r, e, i, -1))
      }
      return Nc(), r = Wa(Error(b(421))), go(e, t, s, r)
   }
   return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = jx.bind(null, e), i._reactRetry = t, null) : (e = o.treeContext, _e = Jt(i.nextSibling), Fe = t, X = !0, it = null, e !== null && (Ke[Ge++] = kt, Ke[Ge++] = bt, Ke[Ge++] = On, kt = e.id, bt = e.overflow, On = t), t = Pc(t, r.children), t.flags |= 4096, t)
}

function Fd(e, t, n) {
   e.lanes |= t;
   var r = e.alternate;
   r !== null && (r.lanes |= t), Zl(e.return, t, n)
}

function Ha(e, t, n, r, i) {
   var o = e.memoizedState;
   o === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: r,
      tail: n,
      tailMode: i
   } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i)
}

function X0(e, t, n) {
   var r = t.pendingProps,
      i = r.revealOrder,
      o = r.tail;
   if (Ee(e, t, r.children, n), r = Y.current, r & 2) r = r & 1 | 2, t.flags |= 128;
   else {
      if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
         if (e.tag === 13) e.memoizedState !== null && Fd(e, n, t);
         else if (e.tag === 19) Fd(e, n, t);
         else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue
         }
         if (e === t) break e;
         for (; e.sibling === null;) {
            if (e.return === null || e.return === t) break e;
            e = e.return
         }
         e.sibling.return = e.return, e = e.sibling
      }
      r &= 1
   }
   if ($(Y, r), !(t.mode & 1)) t.memoizedState = null;
   else switch (i) {
      case "forwards":
         for (n = t.child, i = null; n !== null;) e = n.alternate, e !== null && ys(e) === null && (i = n), n = n.sibling;
         n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), Ha(t, !1, i, n, o);
         break;
      case "backwards":
         for (n = null, i = t.child, t.child = null; i !== null;) {
            if (e = i.alternate, e !== null && ys(e) === null) {
               t.child = i;
               break
            }
            e = i.sibling, i.sibling = n, n = i, i = e
         }
         Ha(t, !0, n, null, o);
         break;
      case "together":
         Ha(t, !1, null, null, void 0);
         break;
      default:
         t.memoizedState = null
   }
   return t.child
}

function Vo(e, t) {
   !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function Ft(e, t, n) {
   if (e !== null && (t.dependencies = e.dependencies), jn |= t.lanes, !(n & t.childLanes)) return null;
   if (e !== null && t.child !== e.child) throw Error(b(153));
   if (t.child !== null) {
      for (e = t.child, n = rn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = rn(e, e.pendingProps), n.return = t;
      n.sibling = null
   }
   return t.child
}

function Cx(e, t, n) {
   switch (t.tag) {
      case 3:
         K0(t), vr();
         break;
      case 5:
         S0(t);
         break;
      case 1:
         De(t.type) && fs(t);
         break;
      case 4:
         gc(t, t.stateNode.containerInfo);
         break;
      case 10:
         var r = t.type._context,
            i = t.memoizedProps.value;
         $(ps, r._currentValue), r._currentValue = i;
         break;
      case 13:
         if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? ($(Y, Y.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? G0(e, t, n) : ($(Y, Y.current & 1), e = Ft(e, t, n), e !== null ? e.sibling : null);
         $(Y, Y.current & 1);
         break;
      case 19:
         if (r = (n & t.childLanes) !== 0, e.flags & 128) {
            if (r) return X0(e, t, n);
            t.flags |= 128
         }
         if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), $(Y, Y.current), r) break;
         return null;
      case 22:
      case 23:
         return t.lanes = 0, W0(e, t, n)
   }
   return Ft(e, t, n)
}
var Y0, su, Q0, q0;
Y0 = function(e, t) {
   for (var n = t.child; n !== null;) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
         n.child.return = n, n = n.child;
         continue
      }
      if (n === t) break;
      for (; n.sibling === null;) {
         if (n.return === null || n.return === t) return;
         n = n.return
      }
      n.sibling.return = n.return, n = n.sibling
   }
};
su = function() {};
Q0 = function(e, t, n, r) {
   var i = e.memoizedProps;
   if (i !== r) {
      e = t.stateNode, Rn(yt.current);
      var o = null;
      switch (n) {
         case "input":
            i = bl(e, i), r = bl(e, r), o = [];
            break;
         case "select":
            i = J({}, i, {
               value: void 0
            }), r = J({}, r, {
               value: void 0
            }), o = [];
            break;
         case "textarea":
            i = Ll(e, i), r = Ll(e, r), o = [];
            break;
         default:
            typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = us)
      }
      Ol(n, r);
      var s;
      n = null;
      for (u in i)
         if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
            if (u === "style") {
               var a = i[u];
               for (s in a) a.hasOwnProperty(s) && (n || (n = {}), n[s] = "")
            } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (di.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
      for (u in r) {
         var l = r[u];
         if (a = i != null ? i[u] : void 0, r.hasOwnProperty(u) && l !== a && (l != null || a != null))
            if (u === "style")
               if (a) {
                  for (s in a) !a.hasOwnProperty(s) || l && l.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
                  for (s in l) l.hasOwnProperty(s) && a[s] !== l[s] && (n || (n = {}), n[s] = l[s])
               } else n || (o || (o = []), o.push(u, n)), n = l;
         else u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, a = a ? a.__html : void 0, l != null && a !== l && (o = o || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (o = o || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (di.hasOwnProperty(u) ? (l != null && u === "onScroll" && H("scroll", e), o || a === l || (o = [])) : (o = o || []).push(u, l))
      }
      n && (o = o || []).push("style", n);
      var u = o;
      (t.updateQueue = u) && (t.flags |= 4)
   }
};
q0 = function(e, t, n, r) {
   n !== r && (t.flags |= 4)
};

function Ur(e, t) {
   if (!X) switch (e.tailMode) {
      case "hidden":
         t = e.tail;
         for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
         n === null ? e.tail = null : n.sibling = null;
         break;
      case "collapsed":
         n = e.tail;
         for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
         r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
   }
}

function ge(e) {
   var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
   if (t)
      for (var i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
   else
      for (i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
   return e.subtreeFlags |= r, e.childLanes = n, t
}

function Px(e, t, n) {
   var r = t.pendingProps;
   switch (uc(t), t.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
         return ge(t), null;
      case 1:
         return De(t.type) && cs(), ge(t), null;
      case 3:
         return r = t.stateNode, xr(), K(Le), K(Se), vc(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (po(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, it !== null && (pu(it), it = null))), su(e, t), ge(t), null;
      case 5:
         yc(t);
         var i = Rn(Pi.current);
         if (n = t.type, e !== null && t.stateNode != null) Q0(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
         else {
            if (!r) {
               if (t.stateNode === null) throw Error(b(166));
               return ge(t), null
            }
            if (e = Rn(yt.current), po(t)) {
               r = t.stateNode, n = t.type;
               var o = t.memoizedProps;
               switch (r[pt] = t, r[Ei] = o, e = (t.mode & 1) !== 0, n) {
                  case "dialog":
                     H("cancel", r), H("close", r);
                     break;
                  case "iframe":
                  case "object":
                  case "embed":
                     H("load", r);
                     break;
                  case "video":
                  case "audio":
                     for (i = 0; i < Qr.length; i++) H(Qr[i], r);
                     break;
                  case "source":
                     H("error", r);
                     break;
                  case "img":
                  case "image":
                  case "link":
                     H("error", r), H("load", r);
                     break;
                  case "details":
                     H("toggle", r);
                     break;
                  case "input":
                     Kf(r, o), H("invalid", r);
                     break;
                  case "select":
                     r._wrapperState = {
                        wasMultiple: !!o.multiple
                     }, H("invalid", r);
                     break;
                  case "textarea":
                     Xf(r, o), H("invalid", r)
               }
               Ol(n, o), i = null;
               for (var s in o)
                  if (o.hasOwnProperty(s)) {
                     var a = o[s];
                     s === "children" ? typeof a == "string" ? r.textContent !== a && (o.suppressHydrationWarning !== !0 && ho(r.textContent, a, e), i = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (o.suppressHydrationWarning !== !0 && ho(r.textContent, a, e), i = ["children", "" + a]) : di.hasOwnProperty(s) && a != null && s === "onScroll" && H("scroll", r)
                  } switch (n) {
                  case "input":
                     io(r), Gf(r, o, !0);
                     break;
                  case "textarea":
                     io(r), Yf(r);
                     break;
                  case "select":
                  case "option":
                     break;
                  default:
                     typeof o.onClick == "function" && (r.onclick = us)
               }
               r = i, t.updateQueue = r, r !== null && (t.flags |= 4)
            } else {
               s = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Pm(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, {
                  is: r.is
               }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[pt] = t, e[Ei] = r, Y0(e, t, !1, !1), t.stateNode = e;
               e: {
                  switch (s = Ml(n, r), n) {
                     case "dialog":
                        H("cancel", e), H("close", e), i = r;
                        break;
                     case "iframe":
                     case "object":
                     case "embed":
                        H("load", e), i = r;
                        break;
                     case "video":
                     case "audio":
                        for (i = 0; i < Qr.length; i++) H(Qr[i], e);
                        i = r;
                        break;
                     case "source":
                        H("error", e), i = r;
                        break;
                     case "img":
                     case "image":
                     case "link":
                        H("error", e), H("load", e), i = r;
                        break;
                     case "details":
                        H("toggle", e), i = r;
                        break;
                     case "input":
                        Kf(e, r), i = bl(e, r), H("invalid", e);
                        break;
                     case "option":
                        i = r;
                        break;
                     case "select":
                        e._wrapperState = {
                           wasMultiple: !!r.multiple
                        }, i = J({}, r, {
                           value: void 0
                        }), H("invalid", e);
                        break;
                     case "textarea":
                        Xf(e, r), i = Ll(e, r), H("invalid", e);
                        break;
                     default:
                        i = r
                  }
                  Ol(n, i),
                  a = i;
                  for (o in a)
                     if (a.hasOwnProperty(o)) {
                        var l = a[o];
                        o === "style" ? km(e, l) : o === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && Tm(e, l)) : o === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && hi(e, l) : typeof l == "number" && hi(e, "" + l) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (di.hasOwnProperty(o) ? l != null && o === "onScroll" && H("scroll", e) : l != null && Xu(e, o, l, s))
                     } switch (n) {
                     case "input":
                        io(e), Gf(e, r, !1);
                        break;
                     case "textarea":
                        io(e), Yf(e);
                        break;
                     case "option":
                        r.value != null && e.setAttribute("value", "" + on(r.value));
                        break;
                     case "select":
                        e.multiple = !!r.multiple, o = r.value, o != null ? ur(e, !!r.multiple, o, !1) : r.defaultValue != null && ur(e, !!r.multiple, r.defaultValue, !0);
                        break;
                     default:
                        typeof i.onClick == "function" && (e.onclick = us)
                  }
                  switch (n) {
                     case "button":
                     case "input":
                     case "select":
                     case "textarea":
                        r = !!r.autoFocus;
                        break e;
                     case "img":
                        r = !0;
                        break e;
                     default:
                        r = !1
                  }
               }
               r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
         }
         return ge(t), null;
      case 6:
         if (e && t.stateNode != null) q0(e, t, e.memoizedProps, r);
         else {
            if (typeof r != "string" && t.stateNode === null) throw Error(b(166));
            if (n = Rn(Pi.current), Rn(yt.current), po(t)) {
               if (r = t.stateNode, n = t.memoizedProps, r[pt] = t, (o = r.nodeValue !== n) && (e = Fe, e !== null)) switch (e.tag) {
                  case 3:
                     ho(r.nodeValue, n, (e.mode & 1) !== 0);
                     break;
                  case 5:
                     e.memoizedProps.suppressHydrationWarning !== !0 && ho(r.nodeValue, n, (e.mode & 1) !== 0)
               }
               o && (t.flags |= 4)
            } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[pt] = t, t.stateNode = r
         }
         return ge(t), null;
      case 13:
         if (K(Y), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (X && _e !== null && t.mode & 1 && !(t.flags & 128)) p0(), vr(), t.flags |= 98560, o = !1;
            else if (o = po(t), r !== null && r.dehydrated !== null) {
               if (e === null) {
                  if (!o) throw Error(b(318));
                  if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(b(317));
                  o[pt] = t
               } else vr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
               ge(t), o = !1
            } else it !== null && (pu(it), it = null), o = !0;
            if (!o) return t.flags & 65536 ? t : null
         }
         return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || Y.current & 1 ? le === 0 && (le = 3) : Nc())), t.updateQueue !== null && (t.flags |= 4), ge(t), null);
      case 4:
         return xr(), su(e, t), e === null && xi(t.stateNode.containerInfo), ge(t), null;
      case 10:
         return hc(t.type._context), ge(t), null;
      case 17:
         return De(t.type) && cs(), ge(t), null;
      case 19:
         if (K(Y), o = t.memoizedState, o === null) return ge(t), null;
         if (r = (t.flags & 128) !== 0, s = o.rendering, s === null)
            if (r) Ur(o, !1);
            else {
               if (le !== 0 || e !== null && e.flags & 128)
                  for (e = t.child; e !== null;) {
                     if (s = ys(e), s !== null) {
                        for (t.flags |= 128, Ur(o, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) o = n, e = r, o.flags &= 14680066, s = o.alternate, s === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = s.childLanes, o.lanes = s.lanes, o.child = s.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = s.memoizedProps, o.memoizedState = s.memoizedState, o.updateQueue = s.updateQueue, o.type = s.type, e = s.dependencies, o.dependencies = e === null ? null : {
                           lanes: e.lanes,
                           firstContext: e.firstContext
                        }), n = n.sibling;
                        return $(Y, Y.current & 1 | 2), t.child
                     }
                     e = e.sibling
                  }
               o.tail !== null && re() > Er && (t.flags |= 128, r = !0, Ur(o, !1), t.lanes = 4194304)
            }
         else {
            if (!r)
               if (e = ys(s), e !== null) {
                  if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Ur(o, !0), o.tail === null && o.tailMode === "hidden" && !s.alternate && !X) return ge(t), null
               } else 2 * re() - o.renderingStartTime > Er && n !== 1073741824 && (t.flags |= 128, r = !0, Ur(o, !1), t.lanes = 4194304);
            o.isBackwards ? (s.sibling = t.child, t.child = s) : (n = o.last, n !== null ? n.sibling = s : t.child = s, o.last = s)
         }
         return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = re(), t.sibling = null, n = Y.current, $(Y, r ? n & 1 | 2 : n & 1), t) : (ge(t), null);
      case 22:
      case 23:
         return Ac(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? je & 1073741824 && (ge(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ge(t), null;
      case 24:
         return null;
      case 25:
         return null
   }
   throw Error(b(156, t.tag))
}

function Tx(e, t) {
   switch (uc(t), t.tag) {
      case 1:
         return De(t.type) && cs(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
         return xr(), K(Le), K(Se), vc(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
         return yc(t), null;
      case 13:
         if (K(Y), e = t.memoizedState, e !== null && e.dehydrated !== null) {
            if (t.alternate === null) throw Error(b(340));
            vr()
         }
         return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
         return K(Y), null;
      case 4:
         return xr(), null;
      case 10:
         return hc(t.type._context), null;
      case 22:
      case 23:
         return Ac(), null;
      case 24:
         return null;
      default:
         return null
   }
}
var yo = !1,
   ve = !1,
   Rx = typeof WeakSet == "function" ? WeakSet : Set,
   D = null;

function nr(e, t) {
   var n = e.ref;
   if (n !== null)
      if (typeof n == "function") try {
         n(null)
      } catch (r) {
         te(e, t, r)
      } else n.current = null
}

function au(e, t, n) {
   try {
      n()
   } catch (r) {
      te(e, t, r)
   }
}
var Id = !1;

function kx(e, t) {
   if (Wl = ss, e = t0(), ac(e)) {
      if ("selectionStart" in e) var n = {
         start: e.selectionStart,
         end: e.selectionEnd
      };
      else e: {
         n = (n = e.ownerDocument) && n.defaultView || window;
         var r = n.getSelection && n.getSelection();
         if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var i = r.anchorOffset,
               o = r.focusNode;
            r = r.focusOffset;
            try {
               n.nodeType, o.nodeType
            } catch {
               n = null;
               break e
            }
            var s = 0,
               a = -1,
               l = -1,
               u = 0,
               c = 0,
               f = e,
               d = null;
            t: for (;;) {
               for (var g; f !== n || i !== 0 && f.nodeType !== 3 || (a = s + i), f !== o || r !== 0 && f.nodeType !== 3 || (l = s + r), f.nodeType === 3 && (s += f.nodeValue.length), (g = f.firstChild) !== null;) d = f, f = g;
               for (;;) {
                  if (f === e) break t;
                  if (d === n && ++u === i && (a = s), d === o && ++c === r && (l = s), (g = f.nextSibling) !== null) break;
                  f = d, d = f.parentNode
               }
               f = g
            }
            n = a === -1 || l === -1 ? null : {
               start: a,
               end: l
            }
         } else n = null
      }
      n = n || {
         start: 0,
         end: 0
      }
   } else n = null;
   for (Hl = {
         focusedElem: e,
         selectionRange: n
      }, ss = !1, D = t; D !== null;)
      if (t = D, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, D = e;
      else
         for (; D !== null;) {
            t = D;
            try {
               var w = t.alternate;
               if (t.flags & 1024) switch (t.tag) {
                  case 0:
                  case 11:
                  case 15:
                     break;
                  case 1:
                     if (w !== null) {
                        var v = w.memoizedProps,
                           S = w.memoizedState,
                           p = t.stateNode,
                           m = p.getSnapshotBeforeUpdate(t.elementType === t.type ? v : nt(t.type, v), S);
                        p.__reactInternalSnapshotBeforeUpdate = m
                     }
                     break;
                  case 3:
                     var y = t.stateNode.containerInfo;
                     y.nodeType === 1 ? y.textContent = "" : y.nodeType === 9 && y.documentElement && y.removeChild(y.documentElement);
                     break;
                  case 5:
                  case 6:
                  case 4:
                  case 17:
                     break;
                  default:
                     throw Error(b(163))
               }
            } catch (E) {
               te(t, t.return, E)
            }
            if (e = t.sibling, e !== null) {
               e.return = t.return, D = e;
               break
            }
            D = t.return
         }
   return w = Id, Id = !1, w
}

function oi(e, t, n) {
   var r = t.updateQueue;
   if (r = r !== null ? r.lastEffect : null, r !== null) {
      var i = r = r.next;
      do {
         if ((i.tag & e) === e) {
            var o = i.destroy;
            i.destroy = void 0, o !== void 0 && au(t, n, o)
         }
         i = i.next
      } while (i !== r)
   }
}

function qs(e, t) {
   if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
      var n = t = t.next;
      do {
         if ((n.tag & e) === e) {
            var r = n.create;
            n.destroy = r()
         }
         n = n.next
      } while (n !== t)
   }
}

function lu(e) {
   var t = e.ref;
   if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
         case 5:
            e = n;
            break;
         default:
            e = n
      }
      typeof t == "function" ? t(e) : t.current = e
   }
}

function Z0(e) {
   var t = e.alternate;
   t !== null && (e.alternate = null, Z0(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[pt], delete t[Ei], delete t[Xl], delete t[ux], delete t[cx])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function J0(e) {
   return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function Vd(e) {
   e: for (;;) {
      for (; e.sibling === null;) {
         if (e.return === null || J0(e.return)) return null;
         e = e.return
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
         if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
         e.child.return = e, e = e.child
      }
      if (!(e.flags & 2)) return e.stateNode
   }
}

function uu(e, t, n) {
   var r = e.tag;
   if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = us));
   else if (r !== 4 && (e = e.child, e !== null))
      for (uu(e, t, n), e = e.sibling; e !== null;) uu(e, t, n), e = e.sibling
}

function cu(e, t, n) {
   var r = e.tag;
   if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
   else if (r !== 4 && (e = e.child, e !== null))
      for (cu(e, t, n), e = e.sibling; e !== null;) cu(e, t, n), e = e.sibling
}
var fe = null,
   rt = !1;

function zt(e, t, n) {
   for (n = n.child; n !== null;) eg(e, t, n), n = n.sibling
}

function eg(e, t, n) {
   if (gt && typeof gt.onCommitFiberUnmount == "function") try {
      gt.onCommitFiberUnmount($s, n)
   } catch {}
   switch (n.tag) {
      case 5:
         ve || nr(n, t);
      case 6:
         var r = fe,
            i = rt;
         fe = null, zt(e, t, n), fe = r, rt = i, fe !== null && (rt ? (e = fe, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : fe.removeChild(n.stateNode));
         break;
      case 18:
         fe !== null && (rt ? (e = fe, n = n.stateNode, e.nodeType === 8 ? Ia(e.parentNode, n) : e.nodeType === 1 && Ia(e, n), yi(e)) : Ia(fe, n.stateNode));
         break;
      case 4:
         r = fe, i = rt, fe = n.stateNode.containerInfo, rt = !0, zt(e, t, n), fe = r, rt = i;
         break;
      case 0:
      case 11:
      case 14:
      case 15:
         if (!ve && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
            i = r = r.next;
            do {
               var o = i,
                  s = o.destroy;
               o = o.tag, s !== void 0 && (o & 2 || o & 4) && au(n, t, s), i = i.next
            } while (i !== r)
         }
         zt(e, t, n);
         break;
      case 1:
         if (!ve && (nr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
            r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
         } catch (a) {
            te(n, t, a)
         }
         zt(e, t, n);
         break;
      case 21:
         zt(e, t, n);
         break;
      case 22:
         n.mode & 1 ? (ve = (r = ve) || n.memoizedState !== null, zt(e, t, n), ve = r) : zt(e, t, n);
         break;
      default:
         zt(e, t, n)
   }
}

function Bd(e) {
   var t = e.updateQueue;
   if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Rx), t.forEach(function(r) {
         var i = _x.bind(null, e, r);
         n.has(r) || (n.add(r), r.then(i, i))
      })
   }
}

function et(e, t) {
   var n = t.deletions;
   if (n !== null)
      for (var r = 0; r < n.length; r++) {
         var i = n[r];
         try {
            var o = e,
               s = t,
               a = s;
            e: for (; a !== null;) {
               switch (a.tag) {
                  case 5:
                     fe = a.stateNode, rt = !1;
                     break e;
                  case 3:
                     fe = a.stateNode.containerInfo, rt = !0;
                     break e;
                  case 4:
                     fe = a.stateNode.containerInfo, rt = !0;
                     break e
               }
               a = a.return
            }
            if (fe === null) throw Error(b(160));
            eg(o, s, i), fe = null, rt = !1;
            var l = i.alternate;
            l !== null && (l.return = null), i.return = null
         } catch (u) {
            te(i, t, u)
         }
      }
   if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null;) tg(t, e), t = t.sibling
}

function tg(e, t) {
   var n = e.alternate,
      r = e.flags;
   switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
         if (et(t, e), ft(e), r & 4) {
            try {
               oi(3, e, e.return), qs(3, e)
            } catch (v) {
               te(e, e.return, v)
            }
            try {
               oi(5, e, e.return)
            } catch (v) {
               te(e, e.return, v)
            }
         }
         break;
      case 1:
         et(t, e), ft(e), r & 512 && n !== null && nr(n, n.return);
         break;
      case 5:
         if (et(t, e), ft(e), r & 512 && n !== null && nr(n, n.return), e.flags & 32) {
            var i = e.stateNode;
            try {
               hi(i, "")
            } catch (v) {
               te(e, e.return, v)
            }
         }
         if (r & 4 && (i = e.stateNode, i != null)) {
            var o = e.memoizedProps,
               s = n !== null ? n.memoizedProps : o,
               a = e.type,
               l = e.updateQueue;
            if (e.updateQueue = null, l !== null) try {
               a === "input" && o.type === "radio" && o.name != null && Em(i, o), Ml(a, s);
               var u = Ml(a, o);
               for (s = 0; s < l.length; s += 2) {
                  var c = l[s],
                     f = l[s + 1];
                  c === "style" ? km(i, f) : c === "dangerouslySetInnerHTML" ? Tm(i, f) : c === "children" ? hi(i, f) : Xu(i, c, f, u)
               }
               switch (a) {
                  case "input":
                     Al(i, o);
                     break;
                  case "textarea":
                     Cm(i, o);
                     break;
                  case "select":
                     var d = i._wrapperState.wasMultiple;
                     i._wrapperState.wasMultiple = !!o.multiple;
                     var g = o.value;
                     g != null ? ur(i, !!o.multiple, g, !1) : d !== !!o.multiple && (o.defaultValue != null ? ur(i, !!o.multiple, o.defaultValue, !0) : ur(i, !!o.multiple, o.multiple ? [] : "", !1))
               }
               i[Ei] = o
            } catch (v) {
               te(e, e.return, v)
            }
         }
         break;
      case 6:
         if (et(t, e), ft(e), r & 4) {
            if (e.stateNode === null) throw Error(b(162));
            i = e.stateNode, o = e.memoizedProps;
            try {
               i.nodeValue = o
            } catch (v) {
               te(e, e.return, v)
            }
         }
         break;
      case 3:
         if (et(t, e), ft(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
            yi(t.containerInfo)
         } catch (v) {
            te(e, e.return, v)
         }
         break;
      case 4:
         et(t, e), ft(e);
         break;
      case 13:
         et(t, e), ft(e), i = e.child, i.flags & 8192 && (o = i.memoizedState !== null, i.stateNode.isHidden = o, !o || i.alternate !== null && i.alternate.memoizedState !== null || (kc = re())), r & 4 && Bd(e);
         break;
      case 22:
         if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (ve = (u = ve) || c, et(t, e), ve = u) : et(t, e), ft(e), r & 8192) {
            if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1)
               for (D = e, c = e.child; c !== null;) {
                  for (f = D = c; D !== null;) {
                     switch (d = D, g = d.child, d.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                           oi(4, d, d.return);
                           break;
                        case 1:
                           nr(d, d.return);
                           var w = d.stateNode;
                           if (typeof w.componentWillUnmount == "function") {
                              r = d, n = d.return;
                              try {
                                 t = r, w.props = t.memoizedProps, w.state = t.memoizedState, w.componentWillUnmount()
                              } catch (v) {
                                 te(r, n, v)
                              }
                           }
                           break;
                        case 5:
                           nr(d, d.return);
                           break;
                        case 22:
                           if (d.memoizedState !== null) {
                              Ud(f);
                              continue
                           }
                     }
                     g !== null ? (g.return = d, D = g) : Ud(f)
                  }
                  c = c.sibling
               }
            e: for (c = null, f = e;;) {
               if (f.tag === 5) {
                  if (c === null) {
                     c = f;
                     try {
                        i = f.stateNode, u ? (o = i.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (a = f.stateNode, l = f.memoizedProps.style, s = l != null && l.hasOwnProperty("display") ? l.display : null, a.style.display = Rm("display", s))
                     } catch (v) {
                        te(e, e.return, v)
                     }
                  }
               } else if (f.tag === 6) {
                  if (c === null) try {
                     f.stateNode.nodeValue = u ? "" : f.memoizedProps
                  } catch (v) {
                     te(e, e.return, v)
                  }
               } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
                  f.child.return = f, f = f.child;
                  continue
               }
               if (f === e) break e;
               for (; f.sibling === null;) {
                  if (f.return === null || f.return === e) break e;
                  c === f && (c = null), f = f.return
               }
               c === f && (c = null), f.sibling.return = f.return, f = f.sibling
            }
         }
         break;
      case 19:
         et(t, e), ft(e), r & 4 && Bd(e);
         break;
      case 21:
         break;
      default:
         et(t, e), ft(e)
   }
}

function ft(e) {
   var t = e.flags;
   if (t & 2) {
      try {
         e: {
            for (var n = e.return; n !== null;) {
               if (J0(n)) {
                  var r = n;
                  break e
               }
               n = n.return
            }
            throw Error(b(160))
         }
         switch (r.tag) {
            case 5:
               var i = r.stateNode;
               r.flags & 32 && (hi(i, ""), r.flags &= -33);
               var o = Vd(e);
               cu(e, o, i);
               break;
            case 3:
            case 4:
               var s = r.stateNode.containerInfo,
                  a = Vd(e);
               uu(e, a, s);
               break;
            default:
               throw Error(b(161))
         }
      }
      catch (l) {
         te(e, e.return, l)
      }
      e.flags &= -3
   }
   t & 4096 && (e.flags &= -4097)
}

function bx(e, t, n) {
   D = e, ng(e)
}

function ng(e, t, n) {
   for (var r = (e.mode & 1) !== 0; D !== null;) {
      var i = D,
         o = i.child;
      if (i.tag === 22 && r) {
         var s = i.memoizedState !== null || yo;
         if (!s) {
            var a = i.alternate,
               l = a !== null && a.memoizedState !== null || ve;
            a = yo;
            var u = ve;
            if (yo = s, (ve = l) && !u)
               for (D = i; D !== null;) s = D, l = s.child, s.tag === 22 && s.memoizedState !== null ? $d(i) : l !== null ? (l.return = s, D = l) : $d(i);
            for (; o !== null;) D = o, ng(o), o = o.sibling;
            D = i, yo = a, ve = u
         }
         zd(e)
      } else i.subtreeFlags & 8772 && o !== null ? (o.return = i, D = o) : zd(e)
   }
}

function zd(e) {
   for (; D !== null;) {
      var t = D;
      if (t.flags & 8772) {
         var n = t.alternate;
         try {
            if (t.flags & 8772) switch (t.tag) {
               case 0:
               case 11:
               case 15:
                  ve || qs(5, t);
                  break;
               case 1:
                  var r = t.stateNode;
                  if (t.flags & 4 && !ve)
                     if (n === null) r.componentDidMount();
                     else {
                        var i = t.elementType === t.type ? n.memoizedProps : nt(t.type, n.memoizedProps);
                        r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                     } var o = t.updateQueue;
                  o !== null && Pd(t, o, r);
                  break;
               case 3:
                  var s = t.updateQueue;
                  if (s !== null) {
                     if (n = null, t.child !== null) switch (t.child.tag) {
                        case 5:
                           n = t.child.stateNode;
                           break;
                        case 1:
                           n = t.child.stateNode
                     }
                     Pd(t, s, n)
                  }
                  break;
               case 5:
                  var a = t.stateNode;
                  if (n === null && t.flags & 4) {
                     n = a;
                     var l = t.memoizedProps;
                     switch (t.type) {
                        case "button":
                        case "input":
                        case "select":
                        case "textarea":
                           l.autoFocus && n.focus();
                           break;
                        case "img":
                           l.src && (n.src = l.src)
                     }
                  }
                  break;
               case 6:
                  break;
               case 4:
                  break;
               case 12:
                  break;
               case 13:
                  if (t.memoizedState === null) {
                     var u = t.alternate;
                     if (u !== null) {
                        var c = u.memoizedState;
                        if (c !== null) {
                           var f = c.dehydrated;
                           f !== null && yi(f)
                        }
                     }
                  }
                  break;
               case 19:
               case 17:
               case 21:
               case 22:
               case 23:
               case 25:
                  break;
               default:
                  throw Error(b(163))
            }
            ve || t.flags & 512 && lu(t)
         } catch (d) {
            te(t, t.return, d)
         }
      }
      if (t === e) {
         D = null;
         break
      }
      if (n = t.sibling, n !== null) {
         n.return = t.return, D = n;
         break
      }
      D = t.return
   }
}

function Ud(e) {
   for (; D !== null;) {
      var t = D;
      if (t === e) {
         D = null;
         break
      }
      var n = t.sibling;
      if (n !== null) {
         n.return = t.return, D = n;
         break
      }
      D = t.return
   }
}

function $d(e) {
   for (; D !== null;) {
      var t = D;
      try {
         switch (t.tag) {
            case 0:
            case 11:
            case 15:
               var n = t.return;
               try {
                  qs(4, t)
               } catch (l) {
                  te(t, n, l)
               }
               break;
            case 1:
               var r = t.stateNode;
               if (typeof r.componentDidMount == "function") {
                  var i = t.return;
                  try {
                     r.componentDidMount()
                  } catch (l) {
                     te(t, i, l)
                  }
               }
               var o = t.return;
               try {
                  lu(t)
               } catch (l) {
                  te(t, o, l)
               }
               break;
            case 5:
               var s = t.return;
               try {
                  lu(t)
               } catch (l) {
                  te(t, s, l)
               }
         }
      } catch (l) {
         te(t, t.return, l)
      }
      if (t === e) {
         D = null;
         break
      }
      var a = t.sibling;
      if (a !== null) {
         a.return = t.return, D = a;
         break
      }
      D = t.return
   }
}
var Ax = Math.ceil,
   xs = Vt.ReactCurrentDispatcher,
   Tc = Vt.ReactCurrentOwner,
   Ye = Vt.ReactCurrentBatchConfig,
   B = 0,
   ce = null,
   oe = null,
   he = 0,
   je = 0,
   rr = fn(0),
   le = 0,
   bi = null,
   jn = 0,
   Zs = 0,
   Rc = 0,
   si = null,
   be = null,
   kc = 0,
   Er = 1 / 0,
   Tt = null,
   Ss = !1,
   fu = null,
   tn = null,
   vo = !1,
   Yt = null,
   Es = 0,
   ai = 0,
   du = null,
   Bo = -1,
   zo = 0;

function Pe() {
   return B & 6 ? re() : Bo !== -1 ? Bo : Bo = re()
}

function nn(e) {
   return e.mode & 1 ? B & 2 && he !== 0 ? he & -he : dx.transition !== null ? (zo === 0 && (zo = Vm()), zo) : (e = U, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Km(e.type)), e) : 1
}

function st(e, t, n, r) {
   if (50 < ai) throw ai = 0, du = null, Error(b(185));
   Bi(e, n, r), (!(B & 2) || e !== ce) && (e === ce && (!(B & 2) && (Zs |= n), le === 4 && Gt(e, he)), Oe(e, r), n === 1 && B === 0 && !(t.mode & 1) && (Er = re() + 500, Xs && dn()))
}

function Oe(e, t) {
   var n = e.callbackNode;
   dw(e, t);
   var r = os(e, e === ce ? he : 0);
   if (r === 0) n !== null && Zf(n), e.callbackNode = null, e.callbackPriority = 0;
   else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && Zf(n), t === 1) e.tag === 0 ? fx(Wd.bind(null, e)) : f0(Wd.bind(null, e)), ax(function() {
         !(B & 6) && dn()
      }), n = null;
      else {
         switch (Bm(r)) {
            case 1:
               n = Ju;
               break;
            case 4:
               n = Fm;
               break;
            case 16:
               n = is;
               break;
            case 536870912:
               n = Im;
               break;
            default:
               n = is
         }
         n = cg(n, rg.bind(null, e))
      }
      e.callbackPriority = t, e.callbackNode = n
   }
}

function rg(e, t) {
   if (Bo = -1, zo = 0, B & 6) throw Error(b(327));
   var n = e.callbackNode;
   if (pr() && e.callbackNode !== n) return null;
   var r = os(e, e === ce ? he : 0);
   if (r === 0) return null;
   if (r & 30 || r & e.expiredLanes || t) t = Cs(e, r);
   else {
      t = r;
      var i = B;
      B |= 2;
      var o = og();
      (ce !== e || he !== t) && (Tt = null, Er = re() + 500, An(e, t));
      do try {
         Dx();
         break
      } catch (a) {
         ig(e, a)
      }
      while (1);
      dc(), xs.current = o, B = i, oe !== null ? t = 0 : (ce = null, he = 0, t = le)
   }
   if (t !== 0) {
      if (t === 2 && (i = Vl(e), i !== 0 && (r = i, t = hu(e, i))), t === 1) throw n = bi, An(e, 0), Gt(e, r), Oe(e, re()), n;
      if (t === 6) Gt(e, r);
      else {
         if (i = e.current.alternate, !(r & 30) && !Nx(i) && (t = Cs(e, r), t === 2 && (o = Vl(e), o !== 0 && (r = o, t = hu(e, o))), t === 1)) throw n = bi, An(e, 0), Gt(e, r), Oe(e, re()), n;
         switch (e.finishedWork = i, e.finishedLanes = r, t) {
            case 0:
            case 1:
               throw Error(b(345));
            case 2:
               En(e, be, Tt);
               break;
            case 3:
               if (Gt(e, r), (r & 130023424) === r && (t = kc + 500 - re(), 10 < t)) {
                  if (os(e, 0) !== 0) break;
                  if (i = e.suspendedLanes, (i & r) !== r) {
                     Pe(), e.pingedLanes |= e.suspendedLanes & i;
                     break
                  }
                  e.timeoutHandle = Gl(En.bind(null, e, be, Tt), t);
                  break
               }
               En(e, be, Tt);
               break;
            case 4:
               if (Gt(e, r), (r & 4194240) === r) break;
               for (t = e.eventTimes, i = -1; 0 < r;) {
                  var s = 31 - ot(r);
                  o = 1 << s, s = t[s], s > i && (i = s), r &= ~o
               }
               if (r = i, r = re() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Ax(r / 1960)) - r, 10 < r) {
                  e.timeoutHandle = Gl(En.bind(null, e, be, Tt), r);
                  break
               }
               En(e, be, Tt);
               break;
            case 5:
               En(e, be, Tt);
               break;
            default:
               throw Error(b(329))
         }
      }
   }
   return Oe(e, re()), e.callbackNode === n ? rg.bind(null, e) : null
}

function hu(e, t) {
   var n = si;
   return e.current.memoizedState.isDehydrated && (An(e, t).flags |= 256), e = Cs(e, t), e !== 2 && (t = be, be = n, t !== null && pu(t)), e
}

function pu(e) {
   be === null ? be = e : be.push.apply(be, e)
}

function Nx(e) {
   for (var t = e;;) {
      if (t.flags & 16384) {
         var n = t.updateQueue;
         if (n !== null && (n = n.stores, n !== null))
            for (var r = 0; r < n.length; r++) {
               var i = n[r],
                  o = i.getSnapshot;
               i = i.value;
               try {
                  if (!lt(o(), i)) return !1
               } catch {
                  return !1
               }
            }
      }
      if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
      else {
         if (t === e) break;
         for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return !0;
            t = t.return
         }
         t.sibling.return = t.return, t = t.sibling
      }
   }
   return !0
}

function Gt(e, t) {
   for (t &= ~Rc, t &= ~Zs, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
      var n = 31 - ot(t),
         r = 1 << n;
      e[n] = -1, t &= ~r
   }
}

function Wd(e) {
   if (B & 6) throw Error(b(327));
   pr();
   var t = os(e, 0);
   if (!(t & 1)) return Oe(e, re()), null;
   var n = Cs(e, t);
   if (e.tag !== 0 && n === 2) {
      var r = Vl(e);
      r !== 0 && (t = r, n = hu(e, r))
   }
   if (n === 1) throw n = bi, An(e, 0), Gt(e, t), Oe(e, re()), n;
   if (n === 6) throw Error(b(345));
   return e.finishedWork = e.current.alternate, e.finishedLanes = t, En(e, be, Tt), Oe(e, re()), null
}

function bc(e, t) {
   var n = B;
   B |= 1;
   try {
      return e(t)
   } finally {
      B = n, B === 0 && (Er = re() + 500, Xs && dn())
   }
}

function _n(e) {
   Yt !== null && Yt.tag === 0 && !(B & 6) && pr();
   var t = B;
   B |= 1;
   var n = Ye.transition,
      r = U;
   try {
      if (Ye.transition = null, U = 1, e) return e()
   } finally {
      U = r, Ye.transition = n, B = t, !(B & 6) && dn()
   }
}

function Ac() {
   je = rr.current, K(rr)
}

function An(e, t) {
   e.finishedWork = null, e.finishedLanes = 0;
   var n = e.timeoutHandle;
   if (n !== -1 && (e.timeoutHandle = -1, sx(n)), oe !== null)
      for (n = oe.return; n !== null;) {
         var r = n;
         switch (uc(r), r.tag) {
            case 1:
               r = r.type.childContextTypes, r != null && cs();
               break;
            case 3:
               xr(), K(Le), K(Se), vc();
               break;
            case 5:
               yc(r);
               break;
            case 4:
               xr();
               break;
            case 13:
               K(Y);
               break;
            case 19:
               K(Y);
               break;
            case 10:
               hc(r.type._context);
               break;
            case 22:
            case 23:
               Ac()
         }
         n = n.return
      }
   if (ce = e, oe = e = rn(e.current, null), he = je = t, le = 0, bi = null, Rc = Zs = jn = 0, be = si = null, Tn !== null) {
      for (t = 0; t < Tn.length; t++)
         if (n = Tn[t], r = n.interleaved, r !== null) {
            n.interleaved = null;
            var i = r.next,
               o = n.pending;
            if (o !== null) {
               var s = o.next;
               o.next = i, r.next = s
            }
            n.pending = r
         } Tn = null
   }
   return e
}

function ig(e, t) {
   do {
      var n = oe;
      try {
         if (dc(), Fo.current = ws, vs) {
            for (var r = q.memoizedState; r !== null;) {
               var i = r.queue;
               i !== null && (i.pending = null), r = r.next
            }
            vs = !1
         }
         if (Mn = 0, ue = ae = q = null, ii = !1, Ti = 0, Tc.current = null, n === null || n.return === null) {
            le = 1, bi = t, oe = null;
            break
         }
         e: {
            var o = e,
               s = n.return,
               a = n,
               l = t;
            if (t = he, a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
               var u = l,
                  c = a,
                  f = c.tag;
               if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                  var d = c.alternate;
                  d ? (c.updateQueue = d.updateQueue, c.memoizedState = d.memoizedState, c.lanes = d.lanes) : (c.updateQueue = null, c.memoizedState = null)
               }
               var g = Ld(s);
               if (g !== null) {
                  g.flags &= -257, Dd(g, s, a, o, t), g.mode & 1 && Nd(o, u, t), t = g, l = u;
                  var w = t.updateQueue;
                  if (w === null) {
                     var v = new Set;
                     v.add(l), t.updateQueue = v
                  } else w.add(l);
                  break e
               } else {
                  if (!(t & 1)) {
                     Nd(o, u, t), Nc();
                     break e
                  }
                  l = Error(b(426))
               }
            } else if (X && a.mode & 1) {
               var S = Ld(s);
               if (S !== null) {
                  !(S.flags & 65536) && (S.flags |= 256), Dd(S, s, a, o, t), cc(Sr(l, a));
                  break e
               }
            }
            o = l = Sr(l, a),
            le !== 4 && (le = 2),
            si === null ? si = [o] : si.push(o),
            o = s;do {
               switch (o.tag) {
                  case 3:
                     o.flags |= 65536, t &= -t, o.lanes |= t;
                     var p = z0(o, l, t);
                     Cd(o, p);
                     break e;
                  case 1:
                     a = l;
                     var m = o.type,
                        y = o.stateNode;
                     if (!(o.flags & 128) && (typeof m.getDerivedStateFromError == "function" || y !== null && typeof y.componentDidCatch == "function" && (tn === null || !tn.has(y)))) {
                        o.flags |= 65536, t &= -t, o.lanes |= t;
                        var E = U0(o, a, t);
                        Cd(o, E);
                        break e
                     }
               }
               o = o.return
            } while (o !== null)
         }
         ag(n)
      } catch (C) {
         t = C, oe === n && n !== null && (oe = n = n.return);
         continue
      }
      break
   } while (1)
}

function og() {
   var e = xs.current;
   return xs.current = ws, e === null ? ws : e
}

function Nc() {
   (le === 0 || le === 3 || le === 2) && (le = 4), ce === null || !(jn & 268435455) && !(Zs & 268435455) || Gt(ce, he)
}

function Cs(e, t) {
   var n = B;
   B |= 2;
   var r = og();
   (ce !== e || he !== t) && (Tt = null, An(e, t));
   do try {
      Lx();
      break
   } catch (i) {
      ig(e, i)
   }
   while (1);
   if (dc(), B = n, xs.current = r, oe !== null) throw Error(b(261));
   return ce = null, he = 0, le
}

function Lx() {
   for (; oe !== null;) sg(oe)
}

function Dx() {
   for (; oe !== null && !rw();) sg(oe)
}

function sg(e) {
   var t = ug(e.alternate, e, je);
   e.memoizedProps = e.pendingProps, t === null ? ag(e) : oe = t, Tc.current = null
}

function ag(e) {
   var t = e;
   do {
      var n = t.alternate;
      if (e = t.return, t.flags & 32768) {
         if (n = Tx(n, t), n !== null) {
            n.flags &= 32767, oe = n;
            return
         }
         if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
         else {
            le = 6, oe = null;
            return
         }
      } else if (n = Px(n, t, je), n !== null) {
         oe = n;
         return
      }
      if (t = t.sibling, t !== null) {
         oe = t;
         return
      }
      oe = t = e
   } while (t !== null);
   le === 0 && (le = 5)
}

function En(e, t, n) {
   var r = U,
      i = Ye.transition;
   try {
      Ye.transition = null, U = 1, Ox(e, t, n, r)
   } finally {
      Ye.transition = i, U = r
   }
   return null
}

function Ox(e, t, n, r) {
   do pr(); while (Yt !== null);
   if (B & 6) throw Error(b(327));
   n = e.finishedWork;
   var i = e.finishedLanes;
   if (n === null) return null;
   if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(b(177));
   e.callbackNode = null, e.callbackPriority = 0;
   var o = n.lanes | n.childLanes;
   if (hw(e, o), e === ce && (oe = ce = null, he = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || vo || (vo = !0, cg(is, function() {
         return pr(), null
      })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
      o = Ye.transition, Ye.transition = null;
      var s = U;
      U = 1;
      var a = B;
      B |= 4, Tc.current = null, kx(e, n), tg(n, e), Jw(Hl), ss = !!Wl, Hl = Wl = null, e.current = n, bx(n), iw(), B = a, U = s, Ye.transition = o
   } else e.current = n;
   if (vo && (vo = !1, Yt = e, Es = i), o = e.pendingLanes, o === 0 && (tn = null), aw(n.stateNode), Oe(e, re()), t !== null)
      for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, {
         componentStack: i.stack,
         digest: i.digest
      });
   if (Ss) throw Ss = !1, e = fu, fu = null, e;
   return Es & 1 && e.tag !== 0 && pr(), o = e.pendingLanes, o & 1 ? e === du ? ai++ : (ai = 0, du = e) : ai = 0, dn(), null
}

function pr() {
   if (Yt !== null) {
      var e = Bm(Es),
         t = Ye.transition,
         n = U;
      try {
         if (Ye.transition = null, U = 16 > e ? 16 : e, Yt === null) var r = !1;
         else {
            if (e = Yt, Yt = null, Es = 0, B & 6) throw Error(b(331));
            var i = B;
            for (B |= 4, D = e.current; D !== null;) {
               var o = D,
                  s = o.child;
               if (D.flags & 16) {
                  var a = o.deletions;
                  if (a !== null) {
                     for (var l = 0; l < a.length; l++) {
                        var u = a[l];
                        for (D = u; D !== null;) {
                           var c = D;
                           switch (c.tag) {
                              case 0:
                              case 11:
                              case 15:
                                 oi(8, c, o)
                           }
                           var f = c.child;
                           if (f !== null) f.return = c, D = f;
                           else
                              for (; D !== null;) {
                                 c = D;
                                 var d = c.sibling,
                                    g = c.return;
                                 if (Z0(c), c === u) {
                                    D = null;
                                    break
                                 }
                                 if (d !== null) {
                                    d.return = g, D = d;
                                    break
                                 }
                                 D = g
                              }
                        }
                     }
                     var w = o.alternate;
                     if (w !== null) {
                        var v = w.child;
                        if (v !== null) {
                           w.child = null;
                           do {
                              var S = v.sibling;
                              v.sibling = null, v = S
                           } while (v !== null)
                        }
                     }
                     D = o
                  }
               }
               if (o.subtreeFlags & 2064 && s !== null) s.return = o, D = s;
               else e: for (; D !== null;) {
                  if (o = D, o.flags & 2048) switch (o.tag) {
                     case 0:
                     case 11:
                     case 15:
                        oi(9, o, o.return)
                  }
                  var p = o.sibling;
                  if (p !== null) {
                     p.return = o.return, D = p;
                     break e
                  }
                  D = o.return
               }
            }
            var m = e.current;
            for (D = m; D !== null;) {
               s = D;
               var y = s.child;
               if (s.subtreeFlags & 2064 && y !== null) y.return = s, D = y;
               else e: for (s = m; D !== null;) {
                  if (a = D, a.flags & 2048) try {
                     switch (a.tag) {
                        case 0:
                        case 11:
                        case 15:
                           qs(9, a)
                     }
                  } catch (C) {
                     te(a, a.return, C)
                  }
                  if (a === s) {
                     D = null;
                     break e
                  }
                  var E = a.sibling;
                  if (E !== null) {
                     E.return = a.return, D = E;
                     break e
                  }
                  D = a.return
               }
            }
            if (B = i, dn(), gt && typeof gt.onPostCommitFiberRoot == "function") try {
               gt.onPostCommitFiberRoot($s, e)
            } catch {}
            r = !0
         }
         return r
      } finally {
         U = n, Ye.transition = t
      }
   }
   return !1
}

function Hd(e, t, n) {
   t = Sr(n, t), t = z0(e, t, 1), e = en(e, t, 1), t = Pe(), e !== null && (Bi(e, 1, t), Oe(e, t))
}

function te(e, t, n) {
   if (e.tag === 3) Hd(e, e, n);
   else
      for (; t !== null;) {
         if (t.tag === 3) {
            Hd(t, e, n);
            break
         } else if (t.tag === 1) {
            var r = t.stateNode;
            if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (tn === null || !tn.has(r))) {
               e = Sr(n, e), e = U0(t, e, 1), t = en(t, e, 1), e = Pe(), t !== null && (Bi(t, 1, e), Oe(t, e));
               break
            }
         }
         t = t.return
      }
}

function Mx(e, t, n) {
   var r = e.pingCache;
   r !== null && r.delete(t), t = Pe(), e.pingedLanes |= e.suspendedLanes & n, ce === e && (he & n) === n && (le === 4 || le === 3 && (he & 130023424) === he && 500 > re() - kc ? An(e, 0) : Rc |= n), Oe(e, t)
}

function lg(e, t) {
   t === 0 && (e.mode & 1 ? (t = ao, ao <<= 1, !(ao & 130023424) && (ao = 4194304)) : t = 1);
   var n = Pe();
   e = _t(e, t), e !== null && (Bi(e, t, n), Oe(e, n))
}

function jx(e) {
   var t = e.memoizedState,
      n = 0;
   t !== null && (n = t.retryLane), lg(e, n)
}

function _x(e, t) {
   var n = 0;
   switch (e.tag) {
      case 13:
         var r = e.stateNode,
            i = e.memoizedState;
         i !== null && (n = i.retryLane);
         break;
      case 19:
         r = e.stateNode;
         break;
      default:
         throw Error(b(314))
   }
   r !== null && r.delete(t), lg(e, n)
}
var ug;
ug = function(e, t, n) {
   if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Le.current) Ne = !0;
      else {
         if (!(e.lanes & n) && !(t.flags & 128)) return Ne = !1, Cx(e, t, n);
         Ne = !!(e.flags & 131072)
      }
   else Ne = !1, X && t.flags & 1048576 && d0(t, hs, t.index);
   switch (t.lanes = 0, t.tag) {
      case 2:
         var r = t.type;
         Vo(e, t), e = t.pendingProps;
         var i = yr(t, Se.current);
         hr(t, n), i = xc(null, t, r, e, i, n);
         var o = Sc();
         return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, De(r) ? (o = !0, fs(t)) : o = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, mc(t), i.updater = Ys, t.stateNode = i, i._reactInternals = t, eu(t, r, e, n), t = ru(null, t, r, !0, o, n)) : (t.tag = 0, X && o && lc(t), Ee(null, t, i, n), t = t.child), t;
      case 16:
         r = t.elementType;
         e: {
            switch (Vo(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = Ix(r), e = nt(r, e), i) {
               case 0:
                  t = nu(null, t, r, e, n);
                  break e;
               case 1:
                  t = jd(null, t, r, e, n);
                  break e;
               case 11:
                  t = Od(null, t, r, e, n);
                  break e;
               case 14:
                  t = Md(null, t, r, nt(r.type, e), n);
                  break e
            }
            throw Error(b(306, r, ""))
         }
         return t;
      case 0:
         return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : nt(r, i), nu(e, t, r, i, n);
      case 1:
         return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : nt(r, i), jd(e, t, r, i, n);
      case 3:
         e: {
            if (K0(t), e === null) throw Error(b(387));r = t.pendingProps,
            o = t.memoizedState,
            i = o.element,
            g0(e, t),
            gs(t, r, null, n);
            var s = t.memoizedState;
            if (r = s.element, o.isDehydrated)
               if (o = {
                     element: r,
                     isDehydrated: !1,
                     cache: s.cache,
                     pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                     transitions: s.transitions
                  }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
                  i = Sr(Error(b(423)), t), t = _d(e, t, r, n, i);
                  break e
               } else if (r !== i) {
               i = Sr(Error(b(424)), t), t = _d(e, t, r, n, i);
               break e
            } else
               for (_e = Jt(t.stateNode.containerInfo.firstChild), Fe = t, X = !0, it = null, n = x0(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
            else {
               if (vr(), r === i) {
                  t = Ft(e, t, n);
                  break e
               }
               Ee(e, t, r, n)
            }
            t = t.child
         }
         return t;
      case 5:
         return S0(t), e === null && ql(t), r = t.type, i = t.pendingProps, o = e !== null ? e.memoizedProps : null, s = i.children, Kl(r, i) ? s = null : o !== null && Kl(r, o) && (t.flags |= 32), H0(e, t), Ee(e, t, s, n), t.child;
      case 6:
         return e === null && ql(t), null;
      case 13:
         return G0(e, t, n);
      case 4:
         return gc(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = wr(t, null, r, n) : Ee(e, t, r, n), t.child;
      case 11:
         return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : nt(r, i), Od(e, t, r, i, n);
      case 7:
         return Ee(e, t, t.pendingProps, n), t.child;
      case 8:
         return Ee(e, t, t.pendingProps.children, n), t.child;
      case 12:
         return Ee(e, t, t.pendingProps.children, n), t.child;
      case 10:
         e: {
            if (r = t.type._context, i = t.pendingProps, o = t.memoizedProps, s = i.value, $(ps, r._currentValue), r._currentValue = s, o !== null)
               if (lt(o.value, s)) {
                  if (o.children === i.children && !Le.current) {
                     t = Ft(e, t, n);
                     break e
                  }
               } else
                  for (o = t.child, o !== null && (o.return = t); o !== null;) {
                     var a = o.dependencies;
                     if (a !== null) {
                        s = o.child;
                        for (var l = a.firstContext; l !== null;) {
                           if (l.context === r) {
                              if (o.tag === 1) {
                                 l = Nt(-1, n & -n), l.tag = 2;
                                 var u = o.updateQueue;
                                 if (u !== null) {
                                    u = u.shared;
                                    var c = u.pending;
                                    c === null ? l.next = l : (l.next = c.next, c.next = l), u.pending = l
                                 }
                              }
                              o.lanes |= n, l = o.alternate, l !== null && (l.lanes |= n), Zl(o.return, n, t), a.lanes |= n;
                              break
                           }
                           l = l.next
                        }
                     } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
                     else if (o.tag === 18) {
                        if (s = o.return, s === null) throw Error(b(341));
                        s.lanes |= n, a = s.alternate, a !== null && (a.lanes |= n), Zl(s, n, t), s = o.sibling
                     } else s = o.child;
                     if (s !== null) s.return = o;
                     else
                        for (s = o; s !== null;) {
                           if (s === t) {
                              s = null;
                              break
                           }
                           if (o = s.sibling, o !== null) {
                              o.return = s.return, s = o;
                              break
                           }
                           s = s.return
                        }
                     o = s
                  }
            Ee(e, t, i.children, n),
            t = t.child
         }
         return t;
      case 9:
         return i = t.type, r = t.pendingProps.children, hr(t, n), i = Qe(i), r = r(i), t.flags |= 1, Ee(e, t, r, n), t.child;
      case 14:
         return r = t.type, i = nt(r, t.pendingProps), i = nt(r.type, i), Md(e, t, r, i, n);
      case 15:
         return $0(e, t, t.type, t.pendingProps, n);
      case 17:
         return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : nt(r, i), Vo(e, t), t.tag = 1, De(r) ? (e = !0, fs(t)) : e = !1, hr(t, n), v0(t, r, i), eu(t, r, i, n), ru(null, t, r, !0, e, n);
      case 19:
         return X0(e, t, n);
      case 22:
         return W0(e, t, n)
   }
   throw Error(b(156, t.tag))
};

function cg(e, t) {
   return _m(e, t)
}

function Fx(e, t, n, r) {
   this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function Xe(e, t, n, r) {
   return new Fx(e, t, n, r)
}

function Lc(e) {
   return e = e.prototype, !(!e || !e.isReactComponent)
}

function Ix(e) {
   if (typeof e == "function") return Lc(e) ? 1 : 0;
   if (e != null) {
      if (e = e.$$typeof, e === Qu) return 11;
      if (e === qu) return 14
   }
   return 2
}

function rn(e, t) {
   var n = e.alternate;
   return n === null ? (n = Xe(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
   }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function Uo(e, t, n, r, i, o) {
   var s = 2;
   if (r = e, typeof e == "function") Lc(e) && (s = 1);
   else if (typeof e == "string") s = 5;
   else e: switch (e) {
      case Gn:
         return Nn(n.children, i, o, t);
      case Yu:
         s = 8, i |= 8;
         break;
      case Pl:
         return e = Xe(12, n, t, i | 2), e.elementType = Pl, e.lanes = o, e;
      case Tl:
         return e = Xe(13, n, t, i), e.elementType = Tl, e.lanes = o, e;
      case Rl:
         return e = Xe(19, n, t, i), e.elementType = Rl, e.lanes = o, e;
      case wm:
         return Js(n, i, o, t);
      default:
         if (typeof e == "object" && e !== null) switch (e.$$typeof) {
            case ym:
               s = 10;
               break e;
            case vm:
               s = 9;
               break e;
            case Qu:
               s = 11;
               break e;
            case qu:
               s = 14;
               break e;
            case Wt:
               s = 16, r = null;
               break e
         }
         throw Error(b(130, e == null ? e : typeof e, ""))
   }
   return t = Xe(s, n, t, i), t.elementType = e, t.type = r, t.lanes = o, t
}

function Nn(e, t, n, r) {
   return e = Xe(7, e, r, t), e.lanes = n, e
}

function Js(e, t, n, r) {
   return e = Xe(22, e, r, t), e.elementType = wm, e.lanes = n, e.stateNode = {
      isHidden: !1
   }, e
}

function Ka(e, t, n) {
   return e = Xe(6, e, null, t), e.lanes = n, e
}

function Ga(e, t, n) {
   return t = Xe(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
   }, t
}

function Vx(e, t, n, r, i) {
   this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ka(0), this.expirationTimes = ka(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ka(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null
}

function Dc(e, t, n, r, i, o, s, a, l) {
   return e = new Vx(e, t, n, a, l), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = Xe(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null
   }, mc(o), e
}

function Bx(e, t, n) {
   var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
   return {
      $$typeof: Kn,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n
   }
}

function fg(e) {
   if (!e) return sn;
   e = e._reactInternals;
   e: {
      if (Bn(e) !== e || e.tag !== 1) throw Error(b(170));
      var t = e;do {
         switch (t.tag) {
            case 3:
               t = t.stateNode.context;
               break e;
            case 1:
               if (De(t.type)) {
                  t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                  break e
               }
         }
         t = t.return
      } while (t !== null);
      throw Error(b(171))
   }
   if (e.tag === 1) {
      var n = e.type;
      if (De(n)) return c0(e, n, t)
   }
   return t
}

function dg(e, t, n, r, i, o, s, a, l) {
   return e = Dc(n, r, !0, e, i, o, s, a, l), e.context = fg(null), n = e.current, r = Pe(), i = nn(n), o = Nt(r, i), o.callback = t ?? null, en(n, o, i), e.current.lanes = i, Bi(e, i, r), Oe(e, r), e
}

function ea(e, t, n, r) {
   var i = t.current,
      o = Pe(),
      s = nn(i);
   return n = fg(n), t.context === null ? t.context = n : t.pendingContext = n, t = Nt(o, s), t.payload = {
      element: e
   }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = en(i, t, s), e !== null && (st(e, i, s, o), _o(e, i, s)), s
}

function Ps(e) {
   if (e = e.current, !e.child) return null;
   switch (e.child.tag) {
      case 5:
         return e.child.stateNode;
      default:
         return e.child.stateNode
   }
}

function Kd(e, t) {
   if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t
   }
}

function Oc(e, t) {
   Kd(e, t), (e = e.alternate) && Kd(e, t)
}

function zx() {
   return null
}
var hg = typeof reportError == "function" ? reportError : function(e) {
   console.error(e)
};

function Mc(e) {
   this._internalRoot = e
}
ta.prototype.render = Mc.prototype.render = function(e) {
   var t = this._internalRoot;
   if (t === null) throw Error(b(409));
   ea(e, t, null, null)
};
ta.prototype.unmount = Mc.prototype.unmount = function() {
   var e = this._internalRoot;
   if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      _n(function() {
         ea(null, e, null, null)
      }), t[jt] = null
   }
};

function ta(e) {
   this._internalRoot = e
}
ta.prototype.unstable_scheduleHydration = function(e) {
   if (e) {
      var t = $m();
      e = {
         blockedOn: null,
         target: e,
         priority: t
      };
      for (var n = 0; n < Kt.length && t !== 0 && t < Kt[n].priority; n++);
      Kt.splice(n, 0, e), n === 0 && Hm(e)
   }
};

function jc(e) {
   return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function na(e) {
   return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function Gd() {}

function Ux(e, t, n, r, i) {
   if (i) {
      if (typeof r == "function") {
         var o = r;
         r = function() {
            var u = Ps(s);
            o.call(u)
         }
      }
      var s = dg(t, r, e, 0, null, !1, !1, "", Gd);
      return e._reactRootContainer = s, e[jt] = s.current, xi(e.nodeType === 8 ? e.parentNode : e), _n(), s
   }
   for (; i = e.lastChild;) e.removeChild(i);
   if (typeof r == "function") {
      var a = r;
      r = function() {
         var u = Ps(l);
         a.call(u)
      }
   }
   var l = Dc(e, 0, !1, null, null, !1, !1, "", Gd);
   return e._reactRootContainer = l, e[jt] = l.current, xi(e.nodeType === 8 ? e.parentNode : e), _n(function() {
      ea(t, l, n, r)
   }), l
}

function ra(e, t, n, r, i) {
   var o = n._reactRootContainer;
   if (o) {
      var s = o;
      if (typeof i == "function") {
         var a = i;
         i = function() {
            var l = Ps(s);
            a.call(l)
         }
      }
      ea(t, s, e, i)
   } else s = Ux(n, t, e, i, r);
   return Ps(s)
}
zm = function(e) {
   switch (e.tag) {
      case 3:
         var t = e.stateNode;
         if (t.current.memoizedState.isDehydrated) {
            var n = Yr(t.pendingLanes);
            n !== 0 && (ec(t, n | 1), Oe(t, re()), !(B & 6) && (Er = re() + 500, dn()))
         }
         break;
      case 13:
         _n(function() {
            var r = _t(e, 1);
            if (r !== null) {
               var i = Pe();
               st(r, e, 1, i)
            }
         }), Oc(e, 1)
   }
};
tc = function(e) {
   if (e.tag === 13) {
      var t = _t(e, 134217728);
      if (t !== null) {
         var n = Pe();
         st(t, e, 134217728, n)
      }
      Oc(e, 134217728)
   }
};
Um = function(e) {
   if (e.tag === 13) {
      var t = nn(e),
         n = _t(e, t);
      if (n !== null) {
         var r = Pe();
         st(n, e, t, r)
      }
      Oc(e, t)
   }
};
$m = function() {
   return U
};
Wm = function(e, t) {
   var n = U;
   try {
      return U = e, t()
   } finally {
      U = n
   }
};
_l = function(e, t, n) {
   switch (t) {
      case "input":
         if (Al(e, n), t = n.name, n.type === "radio" && t != null) {
            for (n = e; n.parentNode;) n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
               var r = n[t];
               if (r !== e && r.form === e.form) {
                  var i = Gs(r);
                  if (!i) throw Error(b(90));
                  Sm(r), Al(r, i)
               }
            }
         }
         break;
      case "textarea":
         Cm(e, n);
         break;
      case "select":
         t = n.value, t != null && ur(e, !!n.multiple, t, !1)
   }
};
Nm = bc;
Lm = _n;
var $x = {
      usingClientEntryPoint: !1,
      Events: [Ui, qn, Gs, bm, Am, bc]
   },
   $r = {
      findFiberByHostInstance: Pn,
      bundleType: 0,
      version: "18.2.0",
      rendererPackageName: "react-dom"
   },
   Wx = {
      bundleType: $r.bundleType,
      version: $r.version,
      rendererPackageName: $r.rendererPackageName,
      rendererConfig: $r.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: Vt.ReactCurrentDispatcher,
      findHostInstanceByFiber: function(e) {
         return e = Mm(e), e === null ? null : e.stateNode
      },
      findFiberByHostInstance: $r.findFiberByHostInstance || zx,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
   };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
   var wo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
   if (!wo.isDisabled && wo.supportsFiber) try {
      $s = wo.inject(Wx), gt = wo
   } catch {}
}
ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $x;
ze.createPortal = function(e, t) {
   var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
   if (!jc(t)) throw Error(b(200));
   return Bx(e, t, null, n)
};
ze.createRoot = function(e, t) {
   if (!jc(e)) throw Error(b(299));
   var n = !1,
      r = "",
      i = hg;
   return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = Dc(e, 1, !1, null, null, n, !1, r, i), e[jt] = t.current, xi(e.nodeType === 8 ? e.parentNode : e), new Mc(t)
};
ze.findDOMNode = function(e) {
   if (e == null) return null;
   if (e.nodeType === 1) return e;
   var t = e._reactInternals;
   if (t === void 0) throw typeof e.render == "function" ? Error(b(188)) : (e = Object.keys(e).join(","), Error(b(268, e)));
   return e = Mm(t), e = e === null ? null : e.stateNode, e
};
ze.flushSync = function(e) {
   return _n(e)
};
ze.hydrate = function(e, t, n) {
   if (!na(t)) throw Error(b(200));
   return ra(null, e, t, !0, n)
};
ze.hydrateRoot = function(e, t, n) {
   if (!jc(e)) throw Error(b(405));
   var r = n != null && n.hydratedSources || null,
      i = !1,
      o = "",
      s = hg;
   if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = dg(t, null, e, 1, n ?? null, i, !1, o, s), e[jt] = t.current, xi(e), r)
      for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
   return new ta(t)
};
ze.render = function(e, t, n) {
   if (!na(t)) throw Error(b(200));
   return ra(null, e, t, !1, n)
};
ze.unmountComponentAtNode = function(e) {
   if (!na(e)) throw Error(b(40));
   return e._reactRootContainer ? (_n(function() {
      ra(null, null, e, !1, function() {
         e._reactRootContainer = null, e[jt] = null
      })
   }), !0) : !1
};
ze.unstable_batchedUpdates = bc;
ze.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
   if (!na(n)) throw Error(b(200));
   if (e == null || e._reactInternals === void 0) throw Error(b(38));
   return ra(e, t, n, !1, r)
};
ze.version = "18.2.0-next-9e3b772b8-20220608";

function pg() {
   if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(pg)
   } catch (e) {
      console.error(e)
   }
}
pg(), dm.exports = ze;
var _c = dm.exports;
const Hx = tm(_c);
var Xd = _c;
El.createRoot = Xd.createRoot, El.hydrateRoot = Xd.hydrateRoot;
const Kx = "modulepreload",
   Gx = function(e) {
      return "/" + e
   },
   Yd = {},
   Xx = function(t, n, r) {
      if (!n || n.length === 0) return t();
      const i = document.getElementsByTagName("link");
      return Promise.all(n.map(o => {
         if (o = Gx(o), o in Yd) return;
         Yd[o] = !0;
         const s = o.endsWith(".css"),
            a = s ? '[rel="stylesheet"]' : "";
         if (!!r)
            for (let c = i.length - 1; c >= 0; c--) {
               const f = i[c];
               if (f.href === o && (!s || f.rel === "stylesheet")) return
            } else if (document.querySelector(`link[href="${o}"]${a}`)) return;
         const u = document.createElement("link");
         if (u.rel = s ? "stylesheet" : Kx, s || (u.as = "script", u.crossOrigin = ""), u.href = o, document.head.appendChild(u), s) return new Promise((c, f) => {
            u.addEventListener("load", c), u.addEventListener("error", () => f(new Error(`Unable to preload CSS for ${o}`)))
         })
      })).then(() => t()).catch(o => {
         const s = new Event("vite:preloadError", {
            cancelable: !0
         });
         if (s.payload = o, window.dispatchEvent(s), !s.defaultPrevented) throw o
      })
   };
var Fc = {};
Object.defineProperty(Fc, "__esModule", {
   value: !0
});
Fc.parse = tS;
Fc.serialize = nS;
const Yx = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
   Qx = /^[\u0021-\u003A\u003C-\u007E]*$/,
   qx = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
   Zx = /^[\u0020-\u003A\u003D-\u007E]*$/,
   Jx = Object.prototype.toString,
   eS = (() => {
      const e = function() {};
      return e.prototype = Object.create(null), e
   })();

function tS(e, t) {
   const n = new eS,
      r = e.length;
   if (r < 2) return n;
   const i = (t == null ? void 0 : t.decode) || rS;
   let o = 0;
   do {
      const s = e.indexOf("=", o);
      if (s === -1) break;
      const a = e.indexOf(";", o),
         l = a === -1 ? r : a;
      if (s > l) {
         o = e.lastIndexOf(";", s - 1) + 1;
         continue
      }
      const u = Qd(e, o, s),
         c = qd(e, s, u),
         f = e.slice(u, c);
      if (n[f] === void 0) {
         let d = Qd(e, s + 1, l),
            g = qd(e, l, d);
         const w = i(e.slice(d, g));
         n[f] = w
      }
      o = l + 1
   } while (o < r);
   return n
}

function Qd(e, t, n) {
   do {
      const r = e.charCodeAt(t);
      if (r !== 32 && r !== 9) return t
   } while (++t < n);
   return n
}

function qd(e, t, n) {
   for (; t > n;) {
      const r = e.charCodeAt(--t);
      if (r !== 32 && r !== 9) return t + 1
   }
   return n
}

function nS(e, t, n) {
   const r = (n == null ? void 0 : n.encode) || encodeURIComponent;
   if (!Yx.test(e)) throw new TypeError(`argument name is invalid: ${e}`);
   const i = r(t);
   if (!Qx.test(i)) throw new TypeError(`argument val is invalid: ${t}`);
   let o = e + "=" + i;
   if (!n) return o;
   if (n.maxAge !== void 0) {
      if (!Number.isInteger(n.maxAge)) throw new TypeError(`option maxAge is invalid: ${n.maxAge}`);
      o += "; Max-Age=" + n.maxAge
   }
   if (n.domain) {
      if (!qx.test(n.domain)) throw new TypeError(`option domain is invalid: ${n.domain}`);
      o += "; Domain=" + n.domain
   }
   if (n.path) {
      if (!Zx.test(n.path)) throw new TypeError(`option path is invalid: ${n.path}`);
      o += "; Path=" + n.path
   }
   if (n.expires) {
      if (!iS(n.expires) || !Number.isFinite(n.expires.valueOf())) throw new TypeError(`option expires is invalid: ${n.expires}`);
      o += "; Expires=" + n.expires.toUTCString()
   }
   if (n.httpOnly && (o += "; HttpOnly"), n.secure && (o += "; Secure"), n.partitioned && (o += "; Partitioned"), n.priority) switch (typeof n.priority == "string" ? n.priority.toLowerCase() : void 0) {
      case "low":
         o += "; Priority=Low";
         break;
      case "medium":
         o += "; Priority=Medium";
         break;
      case "high":
         o += "; Priority=High";
         break;
      default:
         throw new TypeError(`option priority is invalid: ${n.priority}`)
   }
   if (n.sameSite) switch (typeof n.sameSite == "string" ? n.sameSite.toLowerCase() : n.sameSite) {
      case !0:
      case "strict":
         o += "; SameSite=Strict";
         break;
      case "lax":
         o += "; SameSite=Lax";
         break;
      case "none":
         o += "; SameSite=None";
         break;
      default:
         throw new TypeError(`option sameSite is invalid: ${n.sameSite}`)
   }
   return o
}

function rS(e) {
   if (e.indexOf("%") === -1) return e;
   try {
      return decodeURIComponent(e)
   } catch {
      return e
   }
}

function iS(e) {
   return Jx.call(e) === "[object Date]"
}
var Zd = "popstate";

function oS(e = {}) {
   function t(r, i) {
      let {
         pathname: o,
         search: s,
         hash: a
      } = r.location;
      return mu("", {
         pathname: o,
         search: s,
         hash: a
      }, i.state && i.state.usr || null, i.state && i.state.key || "default")
   }

   function n(r, i) {
      return typeof i == "string" ? i : Ai(i)
   }
   return aS(t, n, null, e)
}

function Z(e, t) {
   if (e === !1 || e === null || typeof e > "u") throw new Error(t)
}

function xt(e, t) {
   if (!e) {
      typeof console < "u" && console.warn(t);
      try {
         throw new Error(t)
      } catch {}
   }
}

function sS() {
   return Math.random().toString(36).substring(2, 10)
}

function Jd(e, t) {
   return {
      usr: e.state,
      key: e.key,
      idx: t
   }
}

function mu(e, t, n = null, r) {
   return {
      pathname: typeof e == "string" ? e : e.pathname,
      search: "",
      hash: "",
      ...typeof t == "string" ? Nr(t) : t,
      state: n,
      key: t && t.key || r || sS()
   }
}

function Ai({
   pathname: e = "/",
   search: t = "",
   hash: n = ""
}) {
   return t && t !== "?" && (e += t.charAt(0) === "?" ? t : "?" + t), n && n !== "#" && (e += n.charAt(0) === "#" ? n : "#" + n), e
}

function Nr(e) {
   let t = {};
   if (e) {
      let n = e.indexOf("#");
      n >= 0 && (t.hash = e.substring(n), e = e.substring(0, n));
      let r = e.indexOf("?");
      r >= 0 && (t.search = e.substring(r), e = e.substring(0, r)), e && (t.pathname = e)
   }
   return t
}

function aS(e, t, n, r = {}) {
   let {
      window: i = document.defaultView,
      v5Compat: o = !1
   } = r, s = i.history, a = "POP", l = null, u = c();
   u == null && (u = 0, s.replaceState({
      ...s.state,
      idx: u
   }, ""));

   function c() {
      return (s.state || {
         idx: null
      }).idx
   }

   function f() {
      a = "POP";
      let S = c(),
         p = S == null ? null : S - u;
      u = S, l && l({
         action: a,
         location: v.location,
         delta: p
      })
   }

   function d(S, p) {
      a = "PUSH";
      let m = mu(v.location, S, p);
      n && n(m, S), u = c() + 1;
      let y = Jd(m, u),
         E = v.createHref(m);
      try {
         s.pushState(y, "", E)
      } catch (C) {
         if (C instanceof DOMException && C.name === "DataCloneError") throw C;
         i.location.assign(E)
      }
      o && l && l({
         action: a,
         location: v.location,
         delta: 1
      })
   }

   function g(S, p) {
      a = "REPLACE";
      let m = mu(v.location, S, p);
      n && n(m, S), u = c();
      let y = Jd(m, u),
         E = v.createHref(m);
      s.replaceState(y, "", E), o && l && l({
         action: a,
         location: v.location,
         delta: 0
      })
   }

   function w(S) {
      let p = i.location.origin !== "null" ? i.location.origin : i.location.href,
         m = typeof S == "string" ? S : Ai(S);
      return m = m.replace(/ $/, "%20"), Z(p, `No window.location.(origin|href) available to create URL for href: ${m}`), new URL(m, p)
   }
   let v = {
      get action() {
         return a
      },
      get location() {
         return e(i, s)
      },
      listen(S) {
         if (l) throw new Error("A history only accepts one active listener");
         return i.addEventListener(Zd, f), l = S, () => {
            i.removeEventListener(Zd, f), l = null
         }
      },
      createHref(S) {
         return t(i, S)
      },
      createURL: w,
      encodeLocation(S) {
         let p = w(S);
         return {
            pathname: p.pathname,
            search: p.search,
            hash: p.hash
         }
      },
      push: d,
      replace: g,
      go(S) {
         return s.go(S)
      }
   };
   return v
}

function mg(e, t, n = "/") {
   return lS(e, t, n, !1)
}

function lS(e, t, n, r) {
   let i = typeof t == "string" ? Nr(t) : t,
      o = an(i.pathname || "/", n);
   if (o == null) return null;
   let s = gg(e);
   uS(s);
   let a = null;
   for (let l = 0; a == null && l < s.length; ++l) {
      let u = xS(o);
      a = vS(s[l], u, r)
   }
   return a
}

function gg(e, t = [], n = [], r = "") {
   let i = (o, s, a) => {
      let l = {
         relativePath: a === void 0 ? o.path || "" : a,
         caseSensitive: o.caseSensitive === !0,
         childrenIndex: s,
         route: o
      };
      l.relativePath.startsWith("/") && (Z(l.relativePath.startsWith(r), `Absolute route path "${l.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`), l.relativePath = l.relativePath.slice(r.length));
      let u = Lt([r, l.relativePath]),
         c = n.concat(l);
      o.children && o.children.length > 0 && (Z(o.index !== !0, `Index routes must not have child routes. Please remove all child routes from route path "${u}".`), gg(o.children, t, c, u)), !(o.path == null && !o.index) && t.push({
         path: u,
         score: gS(u, o.index),
         routesMeta: c
      })
   };
   return e.forEach((o, s) => {
      var a;
      if (o.path === "" || !((a = o.path) != null && a.includes("?"))) i(o, s);
      else
         for (let l of yg(o.path)) i(o, s, l)
   }), t
}

function yg(e) {
   let t = e.split("/");
   if (t.length === 0) return [];
   let [n, ...r] = t, i = n.endsWith("?"), o = n.replace(/\?$/, "");
   if (r.length === 0) return i ? [o, ""] : [o];
   let s = yg(r.join("/")),
      a = [];
   return a.push(...s.map(l => l === "" ? o : [o, l].join("/"))), i && a.push(...s), a.map(l => e.startsWith("/") && l === "" ? "/" : l)
}

function uS(e) {
   e.sort((t, n) => t.score !== n.score ? n.score - t.score : yS(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
var cS = /^:[\w-]+$/,
   fS = 3,
   dS = 2,
   hS = 1,
   pS = 10,
   mS = -2,
   eh = e => e === "*";

function gS(e, t) {
   let n = e.split("/"),
      r = n.length;
   return n.some(eh) && (r += mS), t && (r += dS), n.filter(i => !eh(i)).reduce((i, o) => i + (cS.test(o) ? fS : o === "" ? hS : pS), r)
}

function yS(e, t) {
   return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i]) ? e[e.length - 1] - t[t.length - 1] : 0
}

function vS(e, t, n = !1) {
   let {
      routesMeta: r
   } = e, i = {}, o = "/", s = [];
   for (let a = 0; a < r.length; ++a) {
      let l = r[a],
         u = a === r.length - 1,
         c = o === "/" ? t : t.slice(o.length) || "/",
         f = Ts({
            path: l.relativePath,
            caseSensitive: l.caseSensitive,
            end: u
         }, c),
         d = l.route;
      if (!f && u && n && !r[r.length - 1].route.index && (f = Ts({
            path: l.relativePath,
            caseSensitive: l.caseSensitive,
            end: !1
         }, c)), !f) return null;
      Object.assign(i, f.params), s.push({
         params: i,
         pathname: Lt([o, f.pathname]),
         pathnameBase: PS(Lt([o, f.pathnameBase])),
         route: d
      }), f.pathnameBase !== "/" && (o = Lt([o, f.pathnameBase]))
   }
   return s
}

function Ts(e, t) {
   typeof e == "string" && (e = {
      path: e,
      caseSensitive: !1,
      end: !0
   });
   let [n, r] = wS(e.path, e.caseSensitive, e.end), i = t.match(n);
   if (!i) return null;
   let o = i[0],
      s = o.replace(/(.)\/+$/, "$1"),
      a = i.slice(1);
   return {
      params: r.reduce((u, {
         paramName: c,
         isOptional: f
      }, d) => {
         if (c === "*") {
            let w = a[d] || "";
            s = o.slice(0, o.length - w.length).replace(/(.)\/+$/, "$1")
         }
         const g = a[d];
         return f && !g ? u[c] = void 0 : u[c] = (g || "").replace(/%2F/g, "/"), u
      }, {}),
      pathname: o,
      pathnameBase: s,
      pattern: e
   }
}

function wS(e, t = !1, n = !0) {
   xt(e === "*" || !e.endsWith("*") || e.endsWith("/*"), `Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);
   let r = [],
      i = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (s, a, l) => (r.push({
         paramName: a,
         isOptional: l != null
      }), l ? "/?([^\\/]+)?" : "/([^\\/]+)"));
   return e.endsWith("*") ? (r.push({
      paramName: "*"
   }), i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? i += "\\/*$" : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"), [new RegExp(i, t ? void 0 : "i"), r]
}

function xS(e) {
   try {
      return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
   } catch (t) {
      return xt(!1, `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`), e
   }
}

function an(e, t) {
   if (t === "/") return e;
   if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
   let n = t.endsWith("/") ? t.length - 1 : t.length,
      r = e.charAt(n);
   return r && r !== "/" ? null : e.slice(n) || "/"
}

function SS(e, t = "/") {
   let {
      pathname: n,
      search: r = "",
      hash: i = ""
   } = typeof e == "string" ? Nr(e) : e;
   return {
      pathname: n ? n.startsWith("/") ? n : ES(n, t) : t,
      search: TS(r),
      hash: RS(i)
   }
}

function ES(e, t) {
   let n = t.replace(/\/+$/, "").split("/");
   return e.split("/").forEach(i => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i)
   }), n.length > 1 ? n.join("/") : "/"
}

function Xa(e, t, n, r) {
   return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`
}

function CS(e) {
   return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0)
}

function vg(e) {
   let t = CS(e);
   return t.map((n, r) => r === t.length - 1 ? n.pathname : n.pathnameBase)
}

function wg(e, t, n, r = !1) {
   let i;
   typeof e == "string" ? i = Nr(e) : (i = {
      ...e
   }, Z(!i.pathname || !i.pathname.includes("?"), Xa("?", "pathname", "search", i)), Z(!i.pathname || !i.pathname.includes("#"), Xa("#", "pathname", "hash", i)), Z(!i.search || !i.search.includes("#"), Xa("#", "search", "hash", i)));
   let o = e === "" || i.pathname === "",
      s = o ? "/" : i.pathname,
      a;
   if (s == null) a = n;
   else {
      let f = t.length - 1;
      if (!r && s.startsWith("..")) {
         let d = s.split("/");
         for (; d[0] === "..";) d.shift(), f -= 1;
         i.pathname = d.join("/")
      }
      a = f >= 0 ? t[f] : "/"
   }
   let l = SS(i, a),
      u = s && s !== "/" && s.endsWith("/"),
      c = (o || s === ".") && n.endsWith("/");
   return !l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"), l
}
var Lt = e => e.join("/").replace(/\/\/+/g, "/"),
   PS = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
   TS = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e,
   RS = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;

function kS(e) {
   return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e
}
var xg = ["POST", "PUT", "PATCH", "DELETE"];
new Set(xg);
var bS = ["GET", ...xg];
new Set(bS);
var Lr = h.createContext(null);
Lr.displayName = "DataRouter";
var ia = h.createContext(null);
ia.displayName = "DataRouterState";
var Sg = h.createContext({
   isTransitioning: !1
});
Sg.displayName = "ViewTransition";
var AS = h.createContext(new Map);
AS.displayName = "Fetchers";
var NS = h.createContext(null);
NS.displayName = "Await";
var St = h.createContext(null);
St.displayName = "Navigation";
var Wi = h.createContext(null);
Wi.displayName = "Location";
var Bt = h.createContext({
   outlet: null,
   matches: [],
   isDataRoute: !1
});
Bt.displayName = "Route";
var Ic = h.createContext(null);
Ic.displayName = "RouteError";

function LS(e, {
   relative: t
} = {}) {
   Z(Hi(), "useHref() may be used only in the context of a <Router> component.");
   let {
      basename: n,
      navigator: r
   } = h.useContext(St), {
      hash: i,
      pathname: o,
      search: s
   } = Ki(e, {
      relative: t
   }), a = o;
   return n !== "/" && (a = o === "/" ? n : Lt([n, o])), r.createHref({
      pathname: a,
      search: s,
      hash: i
   })
}

function Hi() {
   return h.useContext(Wi) != null
}

function hn() {
   return Z(Hi(), "useLocation() may be used only in the context of a <Router> component."), h.useContext(Wi).location
}
var Eg = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";

function Cg(e) {
   h.useContext(St).static || h.useLayoutEffect(e)
}

function DS() {
   let {
      isDataRoute: e
   } = h.useContext(Bt);
   return e ? HS() : OS()
}

function OS() {
   Z(Hi(), "useNavigate() may be used only in the context of a <Router> component.");
   let e = h.useContext(Lr),
      {
         basename: t,
         navigator: n
      } = h.useContext(St),
      {
         matches: r
      } = h.useContext(Bt),
      {
         pathname: i
      } = hn(),
      o = JSON.stringify(vg(r)),
      s = h.useRef(!1);
   return Cg(() => {
      s.current = !0
   }), h.useCallback((l, u = {}) => {
      if (xt(s.current, Eg), !s.current) return;
      if (typeof l == "number") {
         n.go(l);
         return
      }
      let c = wg(l, JSON.parse(o), i, u.relative === "path");
      e == null && t !== "/" && (c.pathname = c.pathname === "/" ? t : Lt([t, c.pathname])), (u.replace ? n.replace : n.push)(c, u.state, u)
   }, [t, n, o, i, e])
}
h.createContext(null);

function Ki(e, {
   relative: t
} = {}) {
   let {
      matches: n
   } = h.useContext(Bt), {
      pathname: r
   } = hn(), i = JSON.stringify(vg(n));
   return h.useMemo(() => wg(e, JSON.parse(i), r, t === "path"), [e, i, r, t])
}

function MS(e, t) {
   return Pg(e, t)
}

function Pg(e, t, n, r) {
   var m;
   Z(Hi(), "useRoutes() may be used only in the context of a <Router> component.");
   let {
      navigator: i,
      static: o
   } = h.useContext(St), {
      matches: s
   } = h.useContext(Bt), a = s[s.length - 1], l = a ? a.params : {}, u = a ? a.pathname : "/", c = a ? a.pathnameBase : "/", f = a && a.route;
   {
      let y = f && f.path || "";
      Tg(u, !f || y.endsWith("*") || y.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${u}" (under <Route path="${y}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${y}"> to <Route path="${y==="/"?"*":`${y}/*`}">.`)
   }
   let d = hn(),
      g;
   if (t) {
      let y = typeof t == "string" ? Nr(t) : t;
      Z(c === "/" || ((m = y.pathname) == null ? void 0 : m.startsWith(c)), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${y.pathname}" was given in the \`location\` prop.`), g = y
   } else g = d;
   let w = g.pathname || "/",
      v = w;
   if (c !== "/") {
      let y = c.replace(/^\//, "").split("/");
      v = "/" + w.replace(/^\//, "").split("/").slice(y.length).join("/")
   }
   let S = !o && n && n.matches && n.matches.length > 0 ? n.matches : mg(e, {
      pathname: v
   });
   xt(f || S != null, `No routes matched location "${g.pathname}${g.search}${g.hash}" `), xt(S == null || S[S.length - 1].route.element !== void 0 || S[S.length - 1].route.Component !== void 0 || S[S.length - 1].route.lazy !== void 0, `Matched leaf route at location "${g.pathname}${g.search}${g.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
   let p = VS(S && S.map(y => Object.assign({}, y, {
      params: Object.assign({}, l, y.params),
      pathname: Lt([c, i.encodeLocation ? i.encodeLocation(y.pathname).pathname : y.pathname]),
      pathnameBase: y.pathnameBase === "/" ? c : Lt([c, i.encodeLocation ? i.encodeLocation(y.pathnameBase).pathname : y.pathnameBase])
   })), s, n, r);
   return t && p ? h.createElement(Wi.Provider, {
      value: {
         location: {
            pathname: "/",
            search: "",
            hash: "",
            state: null,
            key: "default",
            ...g
         },
         navigationType: "POP"
      }
   }, p) : p
}

function jS() {
   let e = WS(),
      t = kS(e) ? `${e.status} ${e.statusText}` : e instanceof Error ? e.message : JSON.stringify(e),
      n = e instanceof Error ? e.stack : null,
      r = "rgba(200,200,200, 0.5)",
      i = {
         padding: "0.5rem",
         backgroundColor: r
      },
      o = {
         padding: "2px 4px",
         backgroundColor: r
      },
      s = null;
   return console.error("Error handled by React Router default ErrorBoundary:", e), s = h.createElement(h.Fragment, null, h.createElement("p", null, "💿 Hey developer 👋"), h.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", h.createElement("code", {
      style: o
   }, "ErrorBoundary"), " or", " ", h.createElement("code", {
      style: o
   }, "errorElement"), " prop on your route.")), h.createElement(h.Fragment, null, h.createElement("h2", null, "Unexpected Application Error!"), h.createElement("h3", {
      style: {
         fontStyle: "italic"
      }
   }, t), n ? h.createElement("pre", {
      style: i
   }, n) : null, s)
}
var _S = h.createElement(jS, null),
   FS = class extends h.Component {
      constructor(e) {
         super(e), this.state = {
            location: e.location,
            revalidation: e.revalidation,
            error: e.error
         }
      }
      static getDerivedStateFromError(e) {
         return {
            error: e
         }
      }
      static getDerivedStateFromProps(e, t) {
         return t.location !== e.location || t.revalidation !== "idle" && e.revalidation === "idle" ? {
            error: e.error,
            location: e.location,
            revalidation: e.revalidation
         } : {
            error: e.error !== void 0 ? e.error : t.error,
            location: t.location,
            revalidation: e.revalidation || t.revalidation
         }
      }
      componentDidCatch(e, t) {
         console.error("React Router caught the following error during render", e, t)
      }
      render() {
         return this.state.error !== void 0 ? h.createElement(Bt.Provider, {
            value: this.props.routeContext
         }, h.createElement(Ic.Provider, {
            value: this.state.error,
            children: this.props.component
         })) : this.props.children
      }
   };

function IS({
   routeContext: e,
   match: t,
   children: n
}) {
   let r = h.useContext(Lr);
   return r && r.static && r.staticContext && (t.route.errorElement || t.route.ErrorBoundary) && (r.staticContext._deepestRenderedBoundaryId = t.route.id), h.createElement(Bt.Provider, {
      value: e
   }, n)
}

function VS(e, t = [], n = null, r = null) {
   if (e == null) {
      if (!n) return null;
      if (n.errors) e = n.matches;
      else if (t.length === 0 && !n.initialized && n.matches.length > 0) e = n.matches;
      else return null
   }
   let i = e,
      o = n == null ? void 0 : n.errors;
   if (o != null) {
      let l = i.findIndex(u => u.route.id && (o == null ? void 0 : o[u.route.id]) !== void 0);
      Z(l >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`), i = i.slice(0, Math.min(i.length, l + 1))
   }
   let s = !1,
      a = -1;
   if (n)
      for (let l = 0; l < i.length; l++) {
         let u = i[l];
         if ((u.route.HydrateFallback || u.route.hydrateFallbackElement) && (a = l), u.route.id) {
            let {
               loaderData: c,
               errors: f
            } = n, d = u.route.loader && !c.hasOwnProperty(u.route.id) && (!f || f[u.route.id] === void 0);
            if (u.route.lazy || d) {
               s = !0, a >= 0 ? i = i.slice(0, a + 1) : i = [i[0]];
               break
            }
         }
      }
   return i.reduceRight((l, u, c) => {
      let f, d = !1,
         g = null,
         w = null;
      n && (f = o && u.route.id ? o[u.route.id] : void 0, g = u.route.errorElement || _S, s && (a < 0 && c === 0 ? (Tg("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), d = !0, w = null) : a === c && (d = !0, w = u.route.hydrateFallbackElement || null)));
      let v = t.concat(i.slice(0, c + 1)),
         S = () => {
            let p;
            return f ? p = g : d ? p = w : u.route.Component ? p = h.createElement(u.route.Component, null) : u.route.element ? p = u.route.element : p = l, h.createElement(IS, {
               match: u,
               routeContext: {
                  outlet: l,
                  matches: v,
                  isDataRoute: n != null
               },
               children: p
            })
         };
      return n && (u.route.ErrorBoundary || u.route.errorElement || c === 0) ? h.createElement(FS, {
         location: n.location,
         revalidation: n.revalidation,
         component: g,
         error: f,
         children: S(),
         routeContext: {
            outlet: null,
            matches: v,
            isDataRoute: !0
         }
      }) : S()
   }, null)
}

function Vc(e) {
   return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}

function BS(e) {
   let t = h.useContext(Lr);
   return Z(t, Vc(e)), t
}

function zS(e) {
   let t = h.useContext(ia);
   return Z(t, Vc(e)), t
}

function US(e) {
   let t = h.useContext(Bt);
   return Z(t, Vc(e)), t
}

function Bc(e) {
   let t = US(e),
      n = t.matches[t.matches.length - 1];
   return Z(n.route.id, `${e} can only be used on routes that contain a unique "id"`), n.route.id
}

function $S() {
   return Bc("useRouteId")
}

function WS() {
   var r;
   let e = h.useContext(Ic),
      t = zS("useRouteError"),
      n = Bc("useRouteError");
   return e !== void 0 ? e : (r = t.errors) == null ? void 0 : r[n]
}

function HS() {
   let {
      router: e
   } = BS("useNavigate"), t = Bc("useNavigate"), n = h.useRef(!1);
   return Cg(() => {
      n.current = !0
   }), h.useCallback(async (i, o = {}) => {
      xt(n.current, Eg), n.current && (typeof i == "number" ? e.navigate(i) : await e.navigate(i, {
         fromRouteId: t,
         ...o
      }))
   }, [e, t])
}
var th = {};

function Tg(e, t, n) {
   !t && !th[e] && (th[e] = !0, xt(!1, n))
}
h.memo(KS);

function KS({
   routes: e,
   future: t,
   state: n
}) {
   return Pg(e, void 0, n, t)
}

function $o(e) {
   Z(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")
}

function GS({
   basename: e = "/",
   children: t = null,
   location: n,
   navigationType: r = "POP",
   navigator: i,
   static: o = !1
}) {
   Z(!Hi(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
   let s = e.replace(/^\/*/, "/"),
      a = h.useMemo(() => ({
         basename: s,
         navigator: i,
         static: o,
         future: {}
      }), [s, i, o]);
   typeof n == "string" && (n = Nr(n));
   let {
      pathname: l = "/",
      search: u = "",
      hash: c = "",
      state: f = null,
      key: d = "default"
   } = n, g = h.useMemo(() => {
      let w = an(l, s);
      return w == null ? null : {
         location: {
            pathname: w,
            search: u,
            hash: c,
            state: f,
            key: d
         },
         navigationType: r
      }
   }, [s, l, u, c, f, d, r]);
   return xt(g != null, `<Router basename="${s}"> is not able to match the URL "${l}${u}${c}" because it does not start with the basename, so the <Router> won't render anything.`), g == null ? null : h.createElement(St.Provider, {
      value: a
   }, h.createElement(Wi.Provider, {
      children: t,
      value: g
   }))
}

function XS({
   children: e,
   location: t
}) {
   return MS(gu(e), t)
}

function gu(e, t = []) {
   let n = [];
   return h.Children.forEach(e, (r, i) => {
      if (!h.isValidElement(r)) return;
      let o = [...t, i];
      if (r.type === h.Fragment) {
         n.push.apply(n, gu(r.props.children, o));
         return
      }
      Z(r.type === $o, `[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`), Z(!r.props.index || !r.props.children, "An index route cannot have child routes.");
      let s = {
         id: r.props.id || o.join("-"),
         caseSensitive: r.props.caseSensitive,
         element: r.props.element,
         Component: r.props.Component,
         index: r.props.index,
         path: r.props.path,
         loader: r.props.loader,
         action: r.props.action,
         hydrateFallbackElement: r.props.hydrateFallbackElement,
         HydrateFallback: r.props.HydrateFallback,
         errorElement: r.props.errorElement,
         ErrorBoundary: r.props.ErrorBoundary,
         hasErrorBoundary: r.props.hasErrorBoundary === !0 || r.props.ErrorBoundary != null || r.props.errorElement != null,
         shouldRevalidate: r.props.shouldRevalidate,
         handle: r.props.handle,
         lazy: r.props.lazy
      };
      r.props.children && (s.children = gu(r.props.children, o)), n.push(s)
   }), n
}
var Wo = "get",
   Ho = "application/x-www-form-urlencoded";

function oa(e) {
   return e != null && typeof e.tagName == "string"
}

function YS(e) {
   return oa(e) && e.tagName.toLowerCase() === "button"
}

function QS(e) {
   return oa(e) && e.tagName.toLowerCase() === "form"
}

function qS(e) {
   return oa(e) && e.tagName.toLowerCase() === "input"
}

function ZS(e) {
   return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}

function JS(e, t) {
   return e.button === 0 && (!t || t === "_self") && !ZS(e)
}
var xo = null;

function e2() {
   if (xo === null) try {
      new FormData(document.createElement("form"), 0), xo = !1
   } catch {
      xo = !0
   }
   return xo
}
var t2 = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);

function Ya(e) {
   return e != null && !t2.has(e) ? (xt(!1, `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ho}"`), null) : e
}

function n2(e, t) {
   let n, r, i, o, s;
   if (QS(e)) {
      let a = e.getAttribute("action");
      r = a ? an(a, t) : null, n = e.getAttribute("method") || Wo, i = Ya(e.getAttribute("enctype")) || Ho, o = new FormData(e)
   } else if (YS(e) || qS(e) && (e.type === "submit" || e.type === "image")) {
      let a = e.form;
      if (a == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
      let l = e.getAttribute("formaction") || a.getAttribute("action");
      if (r = l ? an(l, t) : null, n = e.getAttribute("formmethod") || a.getAttribute("method") || Wo, i = Ya(e.getAttribute("formenctype")) || Ya(a.getAttribute("enctype")) || Ho, o = new FormData(a, e), !e2()) {
         let {
            name: u,
            type: c,
            value: f
         } = e;
         if (c === "image") {
            let d = u ? `${u}.` : "";
            o.append(`${d}x`, "0"), o.append(`${d}y`, "0")
         } else u && o.append(u, f)
      }
   } else {
      if (oa(e)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
      n = Wo, r = null, i = Ho, s = e
   }
   return o && i === "text/plain" && (s = o, o = void 0), {
      action: r,
      method: n.toLowerCase(),
      encType: i,
      formData: o,
      body: s
   }
}

function zc(e, t) {
   if (e === !1 || e === null || typeof e > "u") throw new Error(t)
}
async function r2(e, t) {
   if (e.id in t) return t[e.id];
   try {
      let n = await Xx(() => import(e.module), __vite__mapDeps([]));
      return t[e.id] = n, n
   } catch (n) {
      return console.error(`Error loading route module \`${e.module}\`, reloading page...`), console.error(n), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {})
   }
}

function i2(e) {
   return e != null && typeof e.page == "string"
}

function o2(e) {
   return e == null ? !1 : e.href == null ? e.rel === "preload" && typeof e.imageSrcSet == "string" && typeof e.imageSizes == "string" : typeof e.rel == "string" && typeof e.href == "string"
}
async function s2(e, t, n) {
   let r = await Promise.all(e.map(async i => {
      let o = t.routes[i.route.id];
      if (o) {
         let s = await r2(o, n);
         return s.links ? s.links() : []
      }
      return []
   }));
   return c2(r.flat(1).filter(o2).filter(i => i.rel === "stylesheet" || i.rel === "preload").map(i => i.rel === "stylesheet" ? {
      ...i,
      rel: "prefetch",
      as: "style"
   } : {
      ...i,
      rel: "prefetch"
   }))
}

function nh(e, t, n, r, i, o) {
   let s = (l, u) => n[u] ? l.route.id !== n[u].route.id : !0,
      a = (l, u) => {
         var c;
         return n[u].pathname !== l.pathname || ((c = n[u].route.path) == null ? void 0 : c.endsWith("*")) && n[u].params["*"] !== l.params["*"]
      };
   return o === "assets" ? t.filter((l, u) => s(l, u) || a(l, u)) : o === "data" ? t.filter((l, u) => {
      var f;
      let c = r.routes[l.route.id];
      if (!c || !c.hasLoader) return !1;
      if (s(l, u) || a(l, u)) return !0;
      if (l.route.shouldRevalidate) {
         let d = l.route.shouldRevalidate({
            currentUrl: new URL(i.pathname + i.search + i.hash, window.origin),
            currentParams: ((f = n[0]) == null ? void 0 : f.params) || {},
            nextUrl: new URL(e, window.origin),
            nextParams: l.params,
            defaultShouldRevalidate: !0
         });
         if (typeof d == "boolean") return d
      }
      return !0
   }) : []
}

function a2(e, t) {
   return l2(e.map(n => {
      let r = t.routes[n.route.id];
      if (!r) return [];
      let i = [r.module];
      return r.imports && (i = i.concat(r.imports)), i
   }).flat(1))
}

function l2(e) {
   return [...new Set(e)]
}

function u2(e) {
   let t = {},
      n = Object.keys(e).sort();
   for (let r of n) t[r] = e[r];
   return t
}

function c2(e, t) {
   let n = new Set,
      r = new Set(t);
   return e.reduce((i, o) => {
      if (t && !i2(o) && o.as === "script" && o.href && r.has(o.href)) return i;
      let a = JSON.stringify(u2(o));
      return n.has(a) || (n.add(a), i.push({
         key: a,
         link: o
      })), i
   }, [])
}

function f2(e) {
   let t = typeof e == "string" ? new URL(e, typeof window > "u" ? "server://singlefetch/" : window.location.origin) : e;
   return t.pathname === "/" ? t.pathname = "_root.data" : t.pathname = `${t.pathname.replace(/\/$/,"")}.data`, t
}

function d2() {
   let e = h.useContext(Lr);
   return zc(e, "You must render this element inside a <DataRouterContext.Provider> element"), e
}

function h2() {
   let e = h.useContext(ia);
   return zc(e, "You must render this element inside a <DataRouterStateContext.Provider> element"), e
}
var Uc = h.createContext(void 0);
Uc.displayName = "FrameworkContext";

function Rg() {
   let e = h.useContext(Uc);
   return zc(e, "You must render this element inside a <HydratedRouter> element"), e
}

function p2(e, t) {
   let n = h.useContext(Uc),
      [r, i] = h.useState(!1),
      [o, s] = h.useState(!1),
      {
         onFocus: a,
         onBlur: l,
         onMouseEnter: u,
         onMouseLeave: c,
         onTouchStart: f
      } = t,
      d = h.useRef(null);
   h.useEffect(() => {
      if (e === "render" && s(!0), e === "viewport") {
         let v = p => {
               p.forEach(m => {
                  s(m.isIntersecting)
               })
            },
            S = new IntersectionObserver(v, {
               threshold: .5
            });
         return d.current && S.observe(d.current), () => {
            S.disconnect()
         }
      }
   }, [e]), h.useEffect(() => {
      if (r) {
         let v = setTimeout(() => {
            s(!0)
         }, 100);
         return () => {
            clearTimeout(v)
         }
      }
   }, [r]);
   let g = () => {
         i(!0)
      },
      w = () => {
         i(!1), s(!1)
      };
   return n ? e !== "intent" ? [o, d, {}] : [o, d, {
      onFocus: Wr(a, g),
      onBlur: Wr(l, w),
      onMouseEnter: Wr(u, g),
      onMouseLeave: Wr(c, w),
      onTouchStart: Wr(f, g)
   }] : [!1, d, {}]
}

function Wr(e, t) {
   return n => {
      e && e(n), n.defaultPrevented || t(n)
   }
}

function m2({
   page: e,
   ...t
}) {
   let {
      router: n
   } = d2(), r = h.useMemo(() => mg(n.routes, e, n.basename), [n.routes, e, n.basename]);
   return r ? h.createElement(y2, {
      page: e,
      matches: r,
      ...t
   }) : null
}

function g2(e) {
   let {
      manifest: t,
      routeModules: n
   } = Rg(), [r, i] = h.useState([]);
   return h.useEffect(() => {
      let o = !1;
      return s2(e, t, n).then(s => {
         o || i(s)
      }), () => {
         o = !0
      }
   }, [e, t, n]), r
}

function y2({
   page: e,
   matches: t,
   ...n
}) {
   let r = hn(),
      {
         manifest: i,
         routeModules: o
      } = Rg(),
      {
         loaderData: s,
         matches: a
      } = h2(),
      l = h.useMemo(() => nh(e, t, a, i, r, "data"), [e, t, a, i, r]),
      u = h.useMemo(() => nh(e, t, a, i, r, "assets"), [e, t, a, i, r]),
      c = h.useMemo(() => {
         if (e === r.pathname + r.search + r.hash) return [];
         let g = new Set,
            w = !1;
         if (t.forEach(S => {
               var m;
               let p = i.routes[S.route.id];
               !p || !p.hasLoader || (!l.some(y => y.route.id === S.route.id) && S.route.id in s && ((m = o[S.route.id]) != null && m.shouldRevalidate) || p.hasClientLoader ? w = !0 : g.add(S.route.id))
            }), g.size === 0) return [];
         let v = f2(e);
         return w && g.size > 0 && v.searchParams.set("_routes", t.filter(S => g.has(S.route.id)).map(S => S.route.id).join(",")), [v.pathname + v.search]
      }, [s, r, i, l, t, e, o]),
      f = h.useMemo(() => a2(u, i), [u, i]),
      d = g2(u);
   return h.createElement(h.Fragment, null, c.map(g => h.createElement("link", {
      key: g,
      rel: "prefetch",
      as: "fetch",
      href: g,
      ...n
   })), f.map(g => h.createElement("link", {
      key: g,
      rel: "modulepreload",
      href: g,
      ...n
   })), d.map(({
      key: g,
      link: w
   }) => h.createElement("link", {
      key: g,
      ...w
   })))
}

function v2(...e) {
   return t => {
      e.forEach(n => {
         typeof n == "function" ? n(t) : n != null && (n.current = t)
      })
   }
}
var kg = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
   kg && (window.__reactRouterVersion = "7.1.5")
} catch {}

function w2({
   basename: e,
   children: t,
   window: n
}) {
   let r = h.useRef();
   r.current == null && (r.current = oS({
      window: n,
      v5Compat: !0
   }));
   let i = r.current,
      [o, s] = h.useState({
         action: i.action,
         location: i.location
      }),
      a = h.useCallback(l => {
         h.startTransition(() => s(l))
      }, [s]);
   return h.useLayoutEffect(() => i.listen(a), [i, a]), h.createElement(GS, {
      basename: e,
      children: t,
      location: o.location,
      navigationType: o.action,
      navigator: i
   })
}
var bg = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
   Rs = h.forwardRef(function({
      onClick: t,
      discover: n = "render",
      prefetch: r = "none",
      relative: i,
      reloadDocument: o,
      replace: s,
      state: a,
      target: l,
      to: u,
      preventScrollReset: c,
      viewTransition: f,
      ...d
   }, g) {
      let {
         basename: w
      } = h.useContext(St), v = typeof u == "string" && bg.test(u), S, p = !1;
      if (typeof u == "string" && v && (S = u, kg)) try {
         let N = new URL(window.location.href),
            L = u.startsWith("//") ? new URL(N.protocol + u) : new URL(u),
            z = an(L.pathname, w);
         L.origin === N.origin && z != null ? u = z + L.search + L.hash : p = !0
      } catch {
         xt(!1, `<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)
      }
      let m = LS(u, {
            relative: i
         }),
         [y, E, C] = p2(r, d),
         T = C2(u, {
            replace: s,
            state: a,
            target: l,
            preventScrollReset: c,
            relative: i,
            viewTransition: f
         });

      function R(N) {
         t && t(N), N.defaultPrevented || T(N)
      }
      let k = h.createElement("a", {
         ...d,
         ...C,
         href: S || m,
         onClick: p || o ? t : R,
         ref: v2(g, E),
         target: l,
         "data-discover": !v && n === "render" ? "true" : void 0
      });
      return y && !v ? h.createElement(h.Fragment, null, k, h.createElement(m2, {
         page: m
      })) : k
   });
Rs.displayName = "Link";
var x2 = h.forwardRef(function({
   "aria-current": t = "page",
   caseSensitive: n = !1,
   className: r = "",
   end: i = !1,
   style: o,
   to: s,
   viewTransition: a,
   children: l,
   ...u
}, c) {
   let f = Ki(s, {
         relative: u.relative
      }),
      d = hn(),
      g = h.useContext(ia),
      {
         navigator: w,
         basename: v
      } = h.useContext(St),
      S = g != null && b2(f) && a === !0,
      p = w.encodeLocation ? w.encodeLocation(f).pathname : f.pathname,
      m = d.pathname,
      y = g && g.navigation && g.navigation.location ? g.navigation.location.pathname : null;
   n || (m = m.toLowerCase(), y = y ? y.toLowerCase() : null, p = p.toLowerCase()), y && v && (y = an(y, v) || y);
   const E = p !== "/" && p.endsWith("/") ? p.length - 1 : p.length;
   let C = m === p || !i && m.startsWith(p) && m.charAt(E) === "/",
      T = y != null && (y === p || !i && y.startsWith(p) && y.charAt(p.length) === "/"),
      R = {
         isActive: C,
         isPending: T,
         isTransitioning: S
      },
      k = C ? t : void 0,
      N;
   typeof r == "function" ? N = r(R) : N = [r, C ? "active" : null, T ? "pending" : null, S ? "transitioning" : null].filter(Boolean).join(" ");
   let L = typeof o == "function" ? o(R) : o;
   return h.createElement(Rs, {
      ...u,
      "aria-current": k,
      className: N,
      ref: c,
      style: L,
      to: s,
      viewTransition: a
   }, typeof l == "function" ? l(R) : l)
});
x2.displayName = "NavLink";
var S2 = h.forwardRef(({
   discover: e = "render",
   fetcherKey: t,
   navigate: n,
   reloadDocument: r,
   replace: i,
   state: o,
   method: s = Wo,
   action: a,
   onSubmit: l,
   relative: u,
   preventScrollReset: c,
   viewTransition: f,
   ...d
}, g) => {
   let w = R2(),
      v = k2(a, {
         relative: u
      }),
      S = s.toLowerCase() === "get" ? "get" : "post",
      p = typeof a == "string" && bg.test(a),
      m = y => {
         if (l && l(y), y.defaultPrevented) return;
         y.preventDefault();
         let E = y.nativeEvent.submitter,
            C = (E == null ? void 0 : E.getAttribute("formmethod")) || s;
         w(E || y.currentTarget, {
            fetcherKey: t,
            method: C,
            navigate: n,
            replace: i,
            state: o,
            relative: u,
            preventScrollReset: c,
            viewTransition: f
         })
      };
   return h.createElement("form", {
      ref: g,
      method: S,
      action: v,
      onSubmit: r ? l : m,
      ...d,
      "data-discover": !p && e === "render" ? "true" : void 0
   })
});
S2.displayName = "Form";

function E2(e) {
   return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}

function Ag(e) {
   let t = h.useContext(Lr);
   return Z(t, E2(e)), t
}

function C2(e, {
   target: t,
   replace: n,
   state: r,
   preventScrollReset: i,
   relative: o,
   viewTransition: s
} = {}) {
   let a = DS(),
      l = hn(),
      u = Ki(e, {
         relative: o
      });
   return h.useCallback(c => {
      if (JS(c, t)) {
         c.preventDefault();
         let f = n !== void 0 ? n : Ai(l) === Ai(u);
         a(e, {
            replace: f,
            state: r,
            preventScrollReset: i,
            relative: o,
            viewTransition: s
         })
      }
   }, [l, a, u, n, r, t, e, i, o, s])
}
var P2 = 0,
   T2 = () => `__${String(++P2)}__`;

function R2() {
   let {
      router: e
   } = Ag("useSubmit"), {
      basename: t
   } = h.useContext(St), n = $S();
   return h.useCallback(async (r, i = {}) => {
      let {
         action: o,
         method: s,
         encType: a,
         formData: l,
         body: u
      } = n2(r, t);
      if (i.navigate === !1) {
         let c = i.fetcherKey || T2();
         await e.fetch(c, n, i.action || o, {
            preventScrollReset: i.preventScrollReset,
            formData: l,
            body: u,
            formMethod: i.method || s,
            formEncType: i.encType || a,
            flushSync: i.flushSync
         })
      } else await e.navigate(i.action || o, {
         preventScrollReset: i.preventScrollReset,
         formData: l,
         body: u,
         formMethod: i.method || s,
         formEncType: i.encType || a,
         replace: i.replace,
         state: i.state,
         fromRouteId: n,
         flushSync: i.flushSync,
         viewTransition: i.viewTransition
      })
   }, [e, t, n])
}

function k2(e, {
   relative: t
} = {}) {
   let {
      basename: n
   } = h.useContext(St), r = h.useContext(Bt);
   Z(r, "useFormAction must be used inside a RouteContext");
   let [i] = r.matches.slice(-1), o = {
      ...Ki(e || ".", {
         relative: t
      })
   }, s = hn();
   if (e == null) {
      o.search = s.search;
      let a = new URLSearchParams(o.search),
         l = a.getAll("index");
      if (l.some(c => c === "")) {
         a.delete("index"), l.filter(f => f).forEach(f => a.append("index", f));
         let c = a.toString();
         o.search = c ? `?${c}` : ""
      }
   }
   return (!e || e === ".") && i.route.index && (o.search = o.search ? o.search.replace(/^\?/, "?index&") : "?index"), n !== "/" && (o.pathname = o.pathname === "/" ? n : Lt([n, o.pathname])), Ai(o)
}

function b2(e, t = {}) {
   let n = h.useContext(Sg);
   Z(n != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
   let {
      basename: r
   } = Ag("useViewTransitionState"), i = Ki(e, {
      relative: t.relative
   });
   if (!n.isTransitioning) return !1;
   let o = an(n.currentLocation.pathname, r) || n.currentLocation.pathname,
      s = an(n.nextLocation.pathname, r) || n.nextLocation.pathname;
   return Ts(i.pathname, s) != null || Ts(i.pathname, o) != null
}
new TextEncoder;
var Ng = {
      color: void 0,
      size: void 0,
      className: void 0,
      style: void 0,
      attr: void 0
   },
   rh = At.createContext && At.createContext(Ng),
   A2 = ["attr", "size", "title"];

function N2(e, t) {
   if (e == null) return {};
   var n = L2(e, t),
      r, i;
   if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      for (i = 0; i < o.length; i++) r = o[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
   }
   return n
}

function L2(e, t) {
   if (e == null) return {};
   var n = {};
   for (var r in e)
      if (Object.prototype.hasOwnProperty.call(e, r)) {
         if (t.indexOf(r) >= 0) continue;
         n[r] = e[r]
      } return n
}

function ks() {
   return ks = Object.assign ? Object.assign.bind() : function(e) {
      for (var t = 1; t < arguments.length; t++) {
         var n = arguments[t];
         for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
   }, ks.apply(this, arguments)
}

function ih(e, t) {
   var n = Object.keys(e);
   if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter(function(i) {
         return Object.getOwnPropertyDescriptor(e, i).enumerable
      })), n.push.apply(n, r)
   }
   return n
}

function bs(e) {
   for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t] != null ? arguments[t] : {};
      t % 2 ? ih(Object(n), !0).forEach(function(r) {
         D2(e, r, n[r])
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ih(Object(n)).forEach(function(r) {
         Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
      })
   }
   return e
}

function D2(e, t, n) {
   return t = O2(t), t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
   }) : e[t] = n, e
}

function O2(e) {
   var t = M2(e, "string");
   return typeof t == "symbol" ? t : t + ""
}

function M2(e, t) {
   if (typeof e != "object" || !e) return e;
   var n = e[Symbol.toPrimitive];
   if (n !== void 0) {
      var r = n.call(e, t || "default");
      if (typeof r != "object") return r;
      throw new TypeError("@@toPrimitive must return a primitive value.")
   }
   return (t === "string" ? String : Number)(e)
}

function Lg(e) {
   return e && e.map((t, n) => At.createElement(t.tag, bs({
      key: n
   }, t.attr), Lg(t.child)))
}

function Et(e) {
   return t => At.createElement(j2, ks({
      attr: bs({}, e.attr)
   }, t), Lg(e.child))
}

function j2(e) {
   var t = n => {
      var {
         attr: r,
         size: i,
         title: o
      } = e, s = N2(e, A2), a = i || n.size || "1em", l;
      return n.className && (l = n.className), e.className && (l = (l ? l + " " : "") + e.className), At.createElement("svg", ks({
         stroke: "currentColor",
         fill: "currentColor",
         strokeWidth: "0"
      }, n.attr, r, s, {
         className: l,
         style: bs(bs({
            color: e.color || n.color
         }, n.style), e.style),
         height: a,
         width: a,
         xmlns: "http://www.w3.org/2000/svg"
      }), o && At.createElement("title", null, o), e.children)
   };
   return rh !== void 0 ? At.createElement(rh.Consumer, null, n => t(n)) : t(Ng)
}

function _2(e) {
   return Et({
      tag: "svg",
      attr: {
         viewBox: "0 0 496 512"
      },
      child: [{
         tag: "path",
         attr: {
            d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
         },
         child: []
      }]
   })(e)
}

function F2(e) {
   return Et({
      tag: "svg",
      attr: {
         viewBox: "0 0 448 512"
      },
      child: [{
         tag: "path",
         attr: {
            d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
         },
         child: []
      }]
   })(e)
}

function $c(e) {
   return Et({
      tag: "svg",
      attr: {
         viewBox: "0 0 496 512"
      },
      child: [{
         tag: "path",
         attr: {
            d: "M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"
         },
         child: []
      }]
   })(e)
}

function I2(e) {
   return Et({
      tag: "svg",
      attr: {
         viewBox: "0 0 512 512"
      },
      child: [{
         tag: "path",
         attr: {
            d: "M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"
         },
         child: []
      }]
   })(e)
}

function V2(e) {
   return Et({
      tag: "svg",
      attr: {
         viewBox: "0 0 448 512"
      },
      child: [{
         tag: "path",
         attr: {
            d: "M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"
         },
         child: []
      }]
   })(e)
}

function B2(e) {
   return Et({
      tag: "svg",
      attr: {
         viewBox: "0 0 448 512"
      },
      child: [{
         tag: "path",
         attr: {
            d: "M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
         },
         child: []
      }]
   })(e)
}

function z2(e) {
   return Et({
      tag: "svg",
      attr: {
         viewBox: "0 0 512 512"
      },
      child: [{
         tag: "path",
         attr: {
            d: "M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
         },
         child: []
      }]
   })(e)
}

function U2(e) {
   return Et({
      tag: "svg",
      attr: {
         viewBox: "0 0 512 512"
      },
      child: [{
         tag: "path",
         attr: {
            d: "M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"
         },
         child: []
      }]
   })(e)
}

function $2(e) {
   return Et({
      tag: "svg",
      attr: {
         viewBox: "0 0 24 24",
         fill: "currentColor"
      },
      child: [{
         tag: "path",
         attr: {
            d: "M10.007 2.10377C8.60544 1.65006 7.08181 2.28116 6.41156 3.59306L5.60578 5.17023C5.51004 5.35763 5.35763 5.51004 5.17023 5.60578L3.59306 6.41156C2.28116 7.08181 1.65006 8.60544 2.10377 10.007L2.64923 11.692C2.71404 11.8922 2.71404 12.1078 2.64923 12.308L2.10377 13.993C1.65006 15.3946 2.28116 16.9182 3.59306 17.5885L5.17023 18.3942C5.35763 18.49 5.51004 18.6424 5.60578 18.8298L6.41156 20.407C7.08181 21.7189 8.60544 22.35 10.007 21.8963L11.692 21.3508C11.8922 21.286 12.1078 21.286 12.308 21.3508L13.993 21.8963C15.3946 22.35 16.9182 21.7189 17.5885 20.407L18.3942 18.8298C18.49 18.6424 18.6424 18.49 18.8298 18.3942L20.407 17.5885C21.7189 16.9182 22.35 15.3946 21.8963 13.993L21.3508 12.308C21.286 12.1078 21.286 11.8922 21.3508 11.692L21.8963 10.007C22.35 8.60544 21.7189 7.08181 20.407 6.41156L18.8298 5.60578C18.6424 5.51004 18.49 5.35763 18.3942 5.17023L17.5885 3.59306C16.9182 2.28116 15.3946 1.65006 13.993 2.10377L12.308 2.64923C12.1078 2.71403 11.8922 2.71404 11.692 2.64923L10.007 2.10377ZM6.75977 11.7573L8.17399 10.343L11.0024 13.1715L16.6593 7.51465L18.0735 8.92886L11.0024 15.9999L6.75977 11.7573Z"
         },
         child: []
      }]
   })(e)
}
const W2 = () => x.jsx("div", {
   className: "bg-white/10 dark:bg-white/5 backdrop-blur-lg p-6 rounded-lg border border-gray-200/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 shadow-lg",
   children: x.jsxs("div", {
      className: "text-center",
      children: [x.jsxs("div", {
         className: "inline-block relative",
         children: [x.jsx("img", {
            src: "/logo.jpg",
            alt: "Profile",
            className: "w-20 h-20 rounded-full border-2 border-white/20 bg-gray-600 transition-transform hover:scale-105",
            onError: e => {
               e.target.innerText = "NA"
            }
         }), x.jsx("div", {
            className: "absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full animate-pulse"
         })]
      }), x.jsxs("h1", {
         className: "text-lg font-bold mt-2",
         children: ["Tarisya Store. ", x.jsx($2, {
            className: "inline text-pink-500"
         })]
      }), x.jsx("p", {
         className: "text-blue-400 text-xs",
         children: "Strive To Be The Best."
      }), x.jsxs("div", {
         className: "flex justify-center gap-2 mt-3",
         children: [x.jsx("span", {
            className: "bg-white/5 px-3 py-1 rounded-full text-xs hover:bg-white/10 transition-all hover:scale-105 ring-1 ring-yellow-500",
            children: "📺 Watch"
         }), x.jsx("span", {
            className: "bg-white/5 px-3 py-1 rounded-full text-xs hover:bg-white/10 transition-all hover:scale-105 ring-1 ring-yellow-500",
            children: "🎮 Gaming"
         }), x.jsx("span", {
            className: "bg-white/5 px-3 py-1 rounded-full text-xs hover:bg-white/10 transition-all hover:scale-105 ring-1 ring-yellow-500",
            children: "💻 Editor"
         }), x.jsx("span", {
            className: "bg-white/5 px-3 py-1 rounded-full text-xs hover:bg-white/10 transition-all hover:scale-105 ring-1 ring-yellow-500",
            children: "🔊 Music"
         })]
      }),  x.jsxs("div", {
         className: "flex justify-center gap-4 mt-4 text-xl text-gray-400",
         children: [x.jsx("a", {
            href: "https://chat.whatsapp.com/GrAGOYUsYJsJOfVdHPF8yt",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "text-zinc-400 hover:text-zinc-100 transition-colors",
            children: x.jsx(_2, {
               className: "h-5 w-5 text-gray-600"
            })
         })]
      })]
   })
});

function H2(e) {
   return Et({
      tag: "svg",
      attr: {
         viewBox: "0 0 20 20",
         fill: "currentColor",
         "aria-hidden": "true"
      },
      child: [{
         tag: "path",
         attr: {
            fillRule: "evenodd",
            d: "M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",
            clipRule: "evenodd"
         },
         child: []
      }]
   })(e)
}
const Wc = h.createContext({});

function Hc(e) {
   const t = h.useRef(null);
   return t.current === null && (t.current = e()), t.current
}
const sa = h.createContext(null),
   Kc = h.createContext({
      transformPagePoint: e => e,
      isStatic: !1,
      reducedMotion: "never"
   });
class K2 extends h.Component {
   getSnapshotBeforeUpdate(t) {
      const n = this.props.childRef.current;
      if (n && t.isPresent && !this.props.isPresent) {
         const r = n.offsetParent,
            i = r instanceof HTMLElement && r.offsetWidth || 0,
            o = this.props.sizeRef.current;
         o.height = n.offsetHeight || 0, o.width = n.offsetWidth || 0, o.top = n.offsetTop, o.left = n.offsetLeft, o.right = i - o.width - o.left
      }
      return null
   }
   componentDidUpdate() {}
   render() {
      return this.props.children
   }
}

function G2({
   children: e,
   isPresent: t,
   anchorX: n
}) {
   const r = h.useId(),
      i = h.useRef(null),
      o = h.useRef({
         width: 0,
         height: 0,
         top: 0,
         left: 0,
         right: 0
      }),
      {
         nonce: s
      } = h.useContext(Kc);
   return h.useInsertionEffect(() => {
      const {
         width: a,
         height: l,
         top: u,
         left: c,
         right: f
      } = o.current;
      if (t || !i.current || !a || !l) return;
      const d = n === "left" ? `left: ${c}` : `right: ${f}`;
      i.current.dataset.motionPopId = r;
      const g = document.createElement("style");
      return s && (g.nonce = s), document.head.appendChild(g), g.sheet && g.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${l}px !important;
            ${d}px !important;
            top: ${u}px !important;
          }
        `), () => {
         document.head.removeChild(g)
      }
   }, [t]), x.jsx(K2, {
      isPresent: t,
      childRef: i,
      sizeRef: o,
      children: h.cloneElement(e, {
         ref: i
      })
   })
}
const X2 = ({
   children: e,
   initial: t,
   isPresent: n,
   onExitComplete: r,
   custom: i,
   presenceAffectsLayout: o,
   mode: s,
   anchorX: a
}) => {
   const l = Hc(Y2),
      u = h.useId(),
      c = h.useCallback(d => {
         l.set(d, !0);
         for (const g of l.values())
            if (!g) return;
         r && r()
      }, [l, r]),
      f = h.useMemo(() => ({
         id: u,
         initial: t,
         isPresent: n,
         custom: i,
         onExitComplete: c,
         register: d => (l.set(d, !1), () => l.delete(d))
      }), o ? [Math.random(), c] : [n, c]);
   return h.useMemo(() => {
      l.forEach((d, g) => l.set(g, !1))
   }, [n]), h.useEffect(() => {
      !n && !l.size && r && r()
   }, [n]), s === "popLayout" && (e = x.jsx(G2, {
      isPresent: n,
      anchorX: a,
      children: e
   })), x.jsx(sa.Provider, {
      value: f,
      children: e
   })
};

function Y2() {
   return new Map
}

function Dg(e = !0) {
   const t = h.useContext(sa);
   if (t === null) return [!0, null];
   const {
      isPresent: n,
      onExitComplete: r,
      register: i
   } = t, o = h.useId();
   h.useEffect(() => {
      e && i(o)
   }, [e]);
   const s = h.useCallback(() => e && r && r(o), [o, r, e]);
   return !n && r ? [!1, s] : [!0]
}
const So = e => e.key || "";

function oh(e) {
   const t = [];
   return h.Children.forEach(e, n => {
      h.isValidElement(n) && t.push(n)
   }), t
}
const Gc = typeof window < "u",
   Og = Gc ? h.useLayoutEffect : h.useEffect,
   As = ({
      children: e,
      custom: t,
      initial: n = !0,
      onExitComplete: r,
      presenceAffectsLayout: i = !0,
      mode: o = "sync",
      propagate: s = !1,
      anchorX: a = "left"
   }) => {
      const [l, u] = Dg(s), c = h.useMemo(() => oh(e), [e]), f = s && !l ? [] : c.map(So), d = h.useRef(!0), g = h.useRef(c), w = Hc(() => new Map), [v, S] = h.useState(c), [p, m] = h.useState(c);
      Og(() => {
         d.current = !1, g.current = c;
         for (let C = 0; C < p.length; C++) {
            const T = So(p[C]);
            f.includes(T) ? w.delete(T) : w.get(T) !== !0 && w.set(T, !1)
         }
      }, [p, f.length, f.join("-")]);
      const y = [];
      if (c !== v) {
         let C = [...c];
         for (let T = 0; T < p.length; T++) {
            const R = p[T],
               k = So(R);
            f.includes(k) || (C.splice(T, 0, R), y.push(R))
         }
         return o === "wait" && y.length && (C = y), m(oh(C)), S(c), null
      }
      const {
         forceRender: E
      } = h.useContext(Wc);
      return x.jsx(x.Fragment, {
         children: p.map(C => {
            const T = So(C),
               R = s && !l ? !1 : c === p || f.includes(T),
               k = () => {
                  if (w.has(T)) w.set(T, !0);
                  else return;
                  let N = !0;
                  w.forEach(L => {
                     L || (N = !1)
                  }), N && (E == null || E(), m(g.current), s && (u == null || u()), r && r())
               };
            return x.jsx(X2, {
               isPresent: R,
               initial: !d.current || n ? void 0 : !1,
               custom: t,
               presenceAffectsLayout: i,
               mode: o,
               onExitComplete: R ? void 0 : k,
               anchorX: a,
               children: C
            }, T)
         })
      })
   },
   Ie = e => e;
let Mg = Ie;

function Xc(e) {
   let t;
   return () => (t === void 0 && (t = e()), t)
}
const Cr = (e, t, n) => {
      const r = t - e;
      return r === 0 ? 1 : (n - e) / r
   },
   Dt = e => e * 1e3,
   Ot = e => e / 1e3,
   Q2 = {
      skipAnimations: !1,
      useManualTiming: !1
   },
   Eo = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"],
   sh = {
      value: null,
      addProjectionMetrics: null
   };

function q2(e, t) {
   let n = new Set,
      r = new Set,
      i = !1,
      o = !1;
   const s = new WeakSet;
   let a = {
         delta: 0,
         timestamp: 0,
         isProcessing: !1
      },
      l = 0;

   function u(f) {
      s.has(f) && (c.schedule(f), e()), l++, f(a)
   }
   const c = {
      schedule: (f, d = !1, g = !1) => {
         const v = g && i ? n : r;
         return d && s.add(f), v.has(f) || v.add(f), f
      },
      cancel: f => {
         r.delete(f), s.delete(f)
      },
      process: f => {
         if (a = f, i) {
            o = !0;
            return
         }
         i = !0, [n, r] = [r, n], n.forEach(u), t && sh.value && sh.value.frameloop[t].push(l), l = 0, n.clear(), i = !1, o && (o = !1, c.process(f))
      }
   };
   return c
}
const Z2 = 40;

function jg(e, t) {
   let n = !1,
      r = !0;
   const i = {
         delta: 0,
         timestamp: 0,
         isProcessing: !1
      },
      o = () => n = !0,
      s = Eo.reduce((p, m) => (p[m] = q2(o, t ? m : void 0), p), {}),
      {
         read: a,
         resolveKeyframes: l,
         update: u,
         preRender: c,
         render: f,
         postRender: d
      } = s,
      g = () => {
         const p = performance.now();
         n = !1, i.delta = r ? 1e3 / 60 : Math.max(Math.min(p - i.timestamp, Z2), 1), i.timestamp = p, i.isProcessing = !0, a.process(i), l.process(i), u.process(i), c.process(i), f.process(i), d.process(i), i.isProcessing = !1, n && t && (r = !1, e(g))
      },
      w = () => {
         n = !0, r = !0, i.isProcessing || e(g)
      };
   return {
      schedule: Eo.reduce((p, m) => {
         const y = s[m];
         return p[m] = (E, C = !1, T = !1) => (n || w(), y.schedule(E, C, T)), p
      }, {}),
      cancel: p => {
         for (let m = 0; m < Eo.length; m++) s[Eo[m]].cancel(p)
      },
      state: i,
      steps: s
   }
}
const {
   schedule: W,
   cancel: ln,
   state: de,
   steps: Qa
} = jg(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ie, !0), _g = h.createContext({
   strict: !1
}), ah = {
   animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
   exit: ["exit"],
   drag: ["drag", "dragControls"],
   focus: ["whileFocus"],
   hover: ["whileHover", "onHoverStart", "onHoverEnd"],
   tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
   pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
   inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
   layout: ["layout", "layoutId"]
}, Pr = {};
for (const e in ah) Pr[e] = {
   isEnabled: t => ah[e].some(n => !!t[n])
};

function J2(e) {
   for (const t in e) Pr[t] = {
      ...Pr[t],
      ...e[t]
   }
}
const eE = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);

function Ns(e) {
   return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || eE.has(e)
}
let Fg = e => !Ns(e);

function tE(e) {
   e && (Fg = t => t.startsWith("on") ? !Ns(t) : e(t))
}
try {
   tE(require("@emotion/is-prop-valid").default)
} catch {}

function nE(e, t, n) {
   const r = {};
   for (const i in e) i === "values" && typeof e.values == "object" || (Fg(i) || n === !0 && Ns(i) || !t && !Ns(i) || e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
   return r
}

function rE(e) {
   if (typeof Proxy > "u") return e;
   const t = new Map,
      n = (...r) => e(...r);
   return new Proxy(n, {
      get: (r, i) => i === "create" ? e : (t.has(i) || t.set(i, e(i)), t.get(i))
   })
}
const aa = h.createContext({});

function la(e) {
   return e !== null && typeof e == "object" && typeof e.start == "function"
}

function Ni(e) {
   return typeof e == "string" || Array.isArray(e)
}
const Yc = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
   Qc = ["initial", ...Yc];

function ua(e) {
   return la(e.animate) || Qc.some(t => Ni(e[t]))
}

function Ig(e) {
   return !!(ua(e) || e.variants)
}

function iE(e, t) {
   if (ua(e)) {
      const {
         initial: n,
         animate: r
      } = e;
      return {
         initial: n === !1 || Ni(n) ? n : void 0,
         animate: Ni(r) ? r : void 0
      }
   }
   return e.inherit !== !1 ? t : {}
}

function oE(e) {
   const {
      initial: t,
      animate: n
   } = iE(e, h.useContext(aa));
   return h.useMemo(() => ({
      initial: t,
      animate: n
   }), [lh(t), lh(n)])
}

function lh(e) {
   return Array.isArray(e) ? e.join(" ") : e
}
const sE = Symbol.for("motionComponentSymbol");

function ir(e) {
   return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}

function aE(e, t, n) {
   return h.useCallback(r => {
      r && e.onMount && e.onMount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : ir(n) && (n.current = r))
   }, [t])
}
const qc = e => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
   lE = "framerAppearId",
   Vg = "data-" + qc(lE),
   {
      schedule: Zc,
      cancel: lk
   } = jg(queueMicrotask, !1),
   Bg = h.createContext({});

function uE(e, t, n, r, i) {
   var o, s;
   const {
      visualElement: a
   } = h.useContext(aa), l = h.useContext(_g), u = h.useContext(sa), c = h.useContext(Kc).reducedMotion, f = h.useRef(null);
   r = r || l.renderer, !f.current && r && (f.current = r(e, {
      visualState: t,
      parent: a,
      props: n,
      presenceContext: u,
      blockInitialAnimation: u ? u.initial === !1 : !1,
      reducedMotionConfig: c
   }));
   const d = f.current,
      g = h.useContext(Bg);
   d && !d.projection && i && (d.type === "html" || d.type === "svg") && cE(f.current, n, i, g);
   const w = h.useRef(!1);
   h.useInsertionEffect(() => {
      d && w.current && d.update(n, u)
   });
   const v = n[Vg],
      S = h.useRef(!!v && !(!((o = window.MotionHandoffIsComplete) === null || o === void 0) && o.call(window, v)) && ((s = window.MotionHasOptimisedAnimation) === null || s === void 0 ? void 0 : s.call(window, v)));
   return Og(() => {
      d && (w.current = !0, window.MotionIsMounted = !0, d.updateFeatures(), Zc.render(d.render), S.current && d.animationState && d.animationState.animateChanges())
   }), h.useEffect(() => {
      d && (!S.current && d.animationState && d.animationState.animateChanges(), S.current && (queueMicrotask(() => {
         var p;
         (p = window.MotionHandoffMarkAsComplete) === null || p === void 0 || p.call(window, v)
      }), S.current = !1))
   }), d
}

function cE(e, t, n, r) {
   const {
      layoutId: i,
      layout: o,
      drag: s,
      dragConstraints: a,
      layoutScroll: l,
      layoutRoot: u
   } = t;
   e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : zg(e.parent)), e.projection.setOptions({
      layoutId: i,
      layout: o,
      alwaysMeasureLayout: !!s || a && ir(a),
      visualElement: e,
      animationType: typeof o == "string" ? o : "both",
      initialPromotionConfig: r,
      layoutScroll: l,
      layoutRoot: u
   })
}

function zg(e) {
   if (e) return e.options.allowProjection !== !1 ? e.projection : zg(e.parent)
}

function fE({
   preloadedFeatures: e,
   createVisualElement: t,
   useRender: n,
   useVisualState: r,
   Component: i
}) {
   var o, s;
   e && J2(e);

   function a(u, c) {
      let f;
      const d = {
            ...h.useContext(Kc),
            ...u,
            layoutId: dE(u)
         },
         {
            isStatic: g
         } = d,
         w = oE(u),
         v = r(u, g);
      if (!g && Gc) {
         hE();
         const S = pE(d);
         f = S.MeasureLayout, w.visualElement = uE(i, v, d, t, S.ProjectionNode)
      }
      return x.jsxs(aa.Provider, {
         value: w,
         children: [f && w.visualElement ? x.jsx(f, {
            visualElement: w.visualElement,
            ...d
         }) : null, n(i, u, aE(v, w.visualElement, c), v, g, w.visualElement)]
      })
   }
   a.displayName = `motion.${typeof i=="string"?i:`create(${(s=(o=i.displayName)!==null&&o!==void 0?o:i.name)!==null&&s!==void 0?s:""})`}`;
   const l = h.forwardRef(a);
   return l[sE] = i, l
}

function dE({
   layoutId: e
}) {
   const t = h.useContext(Wc).id;
   return t && e !== void 0 ? t + "-" + e : e
}

function hE(e, t) {
   h.useContext(_g).strict
}

function pE(e) {
   const {
      drag: t,
      layout: n
   } = Pr;
   if (!t && !n) return {};
   const r = {
      ...t,
      ...n
   };
   return {
      MeasureLayout: t != null && t.isEnabled(e) || n != null && n.isEnabled(e) ? r.MeasureLayout : void 0,
      ProjectionNode: r.ProjectionNode
   }
}
const Ug = e => t => typeof t == "string" && t.startsWith(e),
   Jc = Ug("--"),
   mE = Ug("var(--"),
   ef = e => mE(e) ? gE.test(e.split("/*")[0].trim()) : !1,
   gE = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
   Li = {};

function yE(e) {
   for (const t in e) Li[t] = e[t], Jc(t) && (Li[t].isCSSVariable = !0)
}
const Dr = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
   zn = new Set(Dr);

function $g(e, {
   layout: t,
   layoutId: n
}) {
   return zn.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!Li[e] || e === "opacity")
}
const xe = e => !!(e && e.getVelocity),
   Wg = (e, t) => t && typeof e == "number" ? t.transform(e) : e,
   It = (e, t, n) => n > t ? t : n < e ? e : n,
   Or = {
      test: e => typeof e == "number",
      parse: parseFloat,
      transform: e => e
   },
   Di = {
      ...Or,
      transform: e => It(0, 1, e)
   },
   Co = {
      ...Or,
      default: 1
   },
   Gi = e => ({
      test: t => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
      parse: parseFloat,
      transform: t => `${t}${e}`
   }),
   Ut = Gi("deg"),
   vt = Gi("%"),
   _ = Gi("px"),
   vE = Gi("vh"),
   wE = Gi("vw"),
   uh = {
      ...vt,
      parse: e => vt.parse(e) / 100,
      transform: e => vt.transform(e * 100)
   },
   xE = {
      borderWidth: _,
      borderTopWidth: _,
      borderRightWidth: _,
      borderBottomWidth: _,
      borderLeftWidth: _,
      borderRadius: _,
      radius: _,
      borderTopLeftRadius: _,
      borderTopRightRadius: _,
      borderBottomRightRadius: _,
      borderBottomLeftRadius: _,
      width: _,
      maxWidth: _,
      height: _,
      maxHeight: _,
      top: _,
      right: _,
      bottom: _,
      left: _,
      padding: _,
      paddingTop: _,
      paddingRight: _,
      paddingBottom: _,
      paddingLeft: _,
      margin: _,
      marginTop: _,
      marginRight: _,
      marginBottom: _,
      marginLeft: _,
      backgroundPositionX: _,
      backgroundPositionY: _
   },
   SE = {
      rotate: Ut,
      rotateX: Ut,
      rotateY: Ut,
      rotateZ: Ut,
      scale: Co,
      scaleX: Co,
      scaleY: Co,
      scaleZ: Co,
      skew: Ut,
      skewX: Ut,
      skewY: Ut,
      distance: _,
      translateX: _,
      translateY: _,
      translateZ: _,
      x: _,
      y: _,
      z: _,
      perspective: _,
      transformPerspective: _,
      opacity: Di,
      originX: uh,
      originY: uh,
      originZ: _
   },
   ch = {
      ...Or,
      transform: Math.round
   },
   tf = {
      ...xE,
      ...SE,
      zIndex: ch,
      size: _,
      fillOpacity: Di,
      strokeOpacity: Di,
      numOctaves: ch
   },
   EE = {
      x: "translateX",
      y: "translateY",
      z: "translateZ",
      transformPerspective: "perspective"
   },
   CE = Dr.length;

function PE(e, t, n) {
   let r = "",
      i = !0;
   for (let o = 0; o < CE; o++) {
      const s = Dr[o],
         a = e[s];
      if (a === void 0) continue;
      let l = !0;
      if (typeof a == "number" ? l = a === (s.startsWith("scale") ? 1 : 0) : l = parseFloat(a) === 0, !l || n) {
         const u = Wg(a, tf[s]);
         if (!l) {
            i = !1;
            const c = EE[s] || s;
            r += `${c}(${u}) `
         }
         n && (t[s] = u)
      }
   }
   return r = r.trim(), n ? r = n(t, i ? "" : r) : i && (r = "none"), r
}

function nf(e, t, n) {
   const {
      style: r,
      vars: i,
      transformOrigin: o
   } = e;
   let s = !1,
      a = !1;
   for (const l in t) {
      const u = t[l];
      if (zn.has(l)) {
         s = !0;
         continue
      } else if (Jc(l)) {
         i[l] = u;
         continue
      } else {
         const c = Wg(u, tf[l]);
         l.startsWith("origin") ? (a = !0, o[l] = c) : r[l] = c
      }
   }
   if (t.transform || (s || n ? r.transform = PE(t, e.transform, n) : r.transform && (r.transform = "none")), a) {
      const {
         originX: l = "50%",
         originY: u = "50%",
         originZ: c = 0
      } = o;
      r.transformOrigin = `${l} ${u} ${c}`
   }
}
const rf = () => ({
   style: {},
   transform: {},
   transformOrigin: {},
   vars: {}
});

function Hg(e, t, n) {
   for (const r in t) !xe(t[r]) && !$g(r, n) && (e[r] = t[r])
}

function TE({
   transformTemplate: e
}, t) {
   return h.useMemo(() => {
      const n = rf();
      return nf(n, t, e), Object.assign({}, n.vars, n.style)
   }, [t])
}

function RE(e, t) {
   const n = e.style || {},
      r = {};
   return Hg(r, n, e), Object.assign(r, TE(e, t)), r
}

function kE(e, t) {
   const n = {},
      r = RE(e, t);
   return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag==="x"?"y":"x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n
}
const bE = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

function of(e) {
   return typeof e != "string" || e.includes("-") ? !1 : !!(bE.indexOf(e) > -1 || /[A-Z]/u.test(e))
}
const AE = {
      offset: "stroke-dashoffset",
      array: "stroke-dasharray"
   },
   NE = {
      offset: "strokeDashoffset",
      array: "strokeDasharray"
   };

function LE(e, t, n = 1, r = 0, i = !0) {
   e.pathLength = 1;
   const o = i ? AE : NE;
   e[o.offset] = _.transform(-r);
   const s = _.transform(t),
      a = _.transform(n);
   e[o.array] = `${s} ${a}`
}

function fh(e, t, n) {
   return typeof e == "string" ? e : _.transform(t + n * e)
}

function DE(e, t, n) {
   const r = fh(t, e.x, e.width),
      i = fh(n, e.y, e.height);
   return `${r} ${i}`
}

function sf(e, {
   attrX: t,
   attrY: n,
   attrScale: r,
   originX: i,
   originY: o,
   pathLength: s,
   pathSpacing: a = 1,
   pathOffset: l = 0,
   ...u
}, c, f) {
   if (nf(e, u, f), c) {
      e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
      return
   }
   e.attrs = e.style, e.style = {};
   const {
      attrs: d,
      style: g,
      dimensions: w
   } = e;
   d.transform && (w && (g.transform = d.transform), delete d.transform), w && (i !== void 0 || o !== void 0 || g.transform) && (g.transformOrigin = DE(w, i !== void 0 ? i : .5, o !== void 0 ? o : .5)), t !== void 0 && (d.x = t), n !== void 0 && (d.y = n), r !== void 0 && (d.scale = r), s !== void 0 && LE(d, s, a, l, !1)
}
const Kg = () => ({
      ...rf(),
      attrs: {}
   }),
   af = e => typeof e == "string" && e.toLowerCase() === "svg";

function OE(e, t, n, r) {
   const i = h.useMemo(() => {
      const o = Kg();
      return sf(o, t, af(r), e.transformTemplate), {
         ...o.attrs,
         style: {
            ...o.style
         }
      }
   }, [t]);
   if (e.style) {
      const o = {};
      Hg(o, e.style, e), i.style = {
         ...o,
         ...i.style
      }
   }
   return i
}

function ME(e = !1) {
   return (n, r, i, {
      latestValues: o
   }, s) => {
      const l = (of(n) ? OE : kE)(r, o, s, n),
         u = nE(r, typeof n == "string", e),
         c = n !== h.Fragment ? {
            ...u,
            ...l,
            ref: i
         } : {},
         {
            children: f
         } = r,
         d = h.useMemo(() => xe(f) ? f.get() : f, [f]);
      return h.createElement(n, {
         ...c,
         children: d
      })
   }
}

function dh(e) {
   const t = [{}, {}];
   return e == null || e.values.forEach((n, r) => {
      t[0][r] = n.get(), t[1][r] = n.getVelocity()
   }), t
}

function lf(e, t, n, r) {
   if (typeof t == "function") {
      const [i, o] = dh(r);
      t = t(n !== void 0 ? n : e.custom, i, o)
   }
   if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
      const [i, o] = dh(r);
      t = t(n !== void 0 ? n : e.custom, i, o)
   }
   return t
}
const yu = e => Array.isArray(e),
   jE = e => !!(e && typeof e == "object" && e.mix && e.toValue),
   _E = e => yu(e) ? e[e.length - 1] || 0 : e;

function Ko(e) {
   const t = xe(e) ? e.get() : e;
   return jE(t) ? t.toValue() : t
}

function FE({
   scrapeMotionValuesFromProps: e,
   createRenderState: t,
   onUpdate: n
}, r, i, o) {
   const s = {
      latestValues: IE(r, i, o, e),
      renderState: t()
   };
   return n && (s.onMount = a => n({
      props: r,
      current: a,
      ...s
   }), s.onUpdate = a => n(a)), s
}
const Gg = e => (t, n) => {
   const r = h.useContext(aa),
      i = h.useContext(sa),
      o = () => FE(e, t, r, i);
   return n ? o() : Hc(o)
};

function IE(e, t, n, r) {
   const i = {},
      o = r(e, {});
   for (const d in o) i[d] = Ko(o[d]);
   let {
      initial: s,
      animate: a
   } = e;
   const l = ua(e),
      u = Ig(e);
   t && u && !l && e.inherit !== !1 && (s === void 0 && (s = t.initial), a === void 0 && (a = t.animate));
   let c = n ? n.initial === !1 : !1;
   c = c || s === !1;
   const f = c ? a : s;
   if (f && typeof f != "boolean" && !la(f)) {
      const d = Array.isArray(f) ? f : [f];
      for (let g = 0; g < d.length; g++) {
         const w = lf(e, d[g]);
         if (w) {
            const {
               transitionEnd: v,
               transition: S,
               ...p
            } = w;
            for (const m in p) {
               let y = p[m];
               if (Array.isArray(y)) {
                  const E = c ? y.length - 1 : 0;
                  y = y[E]
               }
               y !== null && (i[m] = y)
            }
            for (const m in v) i[m] = v[m]
         }
      }
   }
   return i
}

function uf(e, t, n) {
   var r;
   const {
      style: i
   } = e, o = {};
   for (const s in i)(xe(i[s]) || t.style && xe(t.style[s]) || $g(s, e) || ((r = n == null ? void 0 : n.getValue(s)) === null || r === void 0 ? void 0 : r.liveStyle) !== void 0) && (o[s] = i[s]);
   return o
}
const VE = {
   useVisualState: Gg({
      scrapeMotionValuesFromProps: uf,
      createRenderState: rf
   })
};

function Xg(e, t) {
   try {
      t.dimensions = typeof e.getBBox == "function" ? e.getBBox() : e.getBoundingClientRect()
   } catch {
      t.dimensions = {
         x: 0,
         y: 0,
         width: 0,
         height: 0
      }
   }
}

function Yg(e, {
   style: t,
   vars: n
}, r, i) {
   Object.assign(e.style, t, i && i.getProjectionStyles(r));
   for (const o in n) e.style.setProperty(o, n[o])
}
const Qg = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

function qg(e, t, n, r) {
   Yg(e, t, void 0, r);
   for (const i in t.attrs) e.setAttribute(Qg.has(i) ? i : qc(i), t.attrs[i])
}

function Zg(e, t, n) {
   const r = uf(e, t, n);
   for (const i in e)
      if (xe(e[i]) || xe(t[i])) {
         const o = Dr.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
         r[o] = e[i]
      } return r
}
const hh = ["x", "y", "width", "height", "cx", "cy", "r"],
   BE = {
      useVisualState: Gg({
         scrapeMotionValuesFromProps: Zg,
         createRenderState: Kg,
         onUpdate: ({
            props: e,
            prevProps: t,
            current: n,
            renderState: r,
            latestValues: i
         }) => {
            if (!n) return;
            let o = !!e.drag;
            if (!o) {
               for (const a in i)
                  if (zn.has(a)) {
                     o = !0;
                     break
                  }
            }
            if (!o) return;
            let s = !t;
            if (t)
               for (let a = 0; a < hh.length; a++) {
                  const l = hh[a];
                  e[l] !== t[l] && (s = !0)
               }
            s && W.read(() => {
               Xg(n, r), W.render(() => {
                  sf(r, i, af(n.tagName), e.transformTemplate), qg(n, r)
               })
            })
         }
      })
   };

function zE(e, t) {
   return function(r, {
      forwardMotionProps: i
   } = {
      forwardMotionProps: !1
   }) {
      const s = {
         ...of(r) ? BE : VE,
         preloadedFeatures: e,
         useRender: ME(i),
         createVisualElement: t,
         Component: r
      };
      return fE(s)
   }
}

function Oi(e, t, n) {
   const r = e.getProps();
   return lf(r, t, n !== void 0 ? n : r.custom, e)
}
const UE = Xc(() => window.ScrollTimeline !== void 0);
class $E {
   constructor(t) {
      this.stop = () => this.runAll("stop"), this.animations = t.filter(Boolean)
   }
   get finished() {
      return Promise.all(this.animations.map(t => "finished" in t ? t.finished : t))
   }
   getAll(t) {
      return this.animations[0][t]
   }
   setAll(t, n) {
      for (let r = 0; r < this.animations.length; r++) this.animations[r][t] = n
   }
   attachTimeline(t, n) {
      const r = this.animations.map(i => {
         if (UE() && i.attachTimeline) return i.attachTimeline(t);
         if (typeof n == "function") return n(i)
      });
      return () => {
         r.forEach((i, o) => {
            i && i(), this.animations[o].stop()
         })
      }
   }
   get time() {
      return this.getAll("time")
   }
   set time(t) {
      this.setAll("time", t)
   }
   get speed() {
      return this.getAll("speed")
   }
   set speed(t) {
      this.setAll("speed", t)
   }
   get startTime() {
      return this.getAll("startTime")
   }
   get duration() {
      let t = 0;
      for (let n = 0; n < this.animations.length; n++) t = Math.max(t, this.animations[n].duration);
      return t
   }
   runAll(t) {
      this.animations.forEach(n => n[t]())
   }
   flatten() {
      this.runAll("flatten")
   }
   play() {
      this.runAll("play")
   }
   pause() {
      this.runAll("pause")
   }
   cancel() {
      this.runAll("cancel")
   }
   complete() {
      this.runAll("complete")
   }
}
class WE extends $E {
   then(t, n) {
      return Promise.all(this.animations).then(t).catch(n)
   }
}

function cf(e, t) {
   return e ? e[t] || e.default || e : void 0
}
const vu = 2e4;

function Jg(e) {
   let t = 0;
   const n = 50;
   let r = e.next(t);
   for (; !r.done && t < vu;) t += n, r = e.next(t);
   return t >= vu ? 1 / 0 : t
}

function ff(e) {
   return typeof e == "function"
}

function ph(e, t) {
   e.timeline = t, e.onfinish = null
}
const df = e => Array.isArray(e) && typeof e[0] == "number",
   HE = {
      linearEasing: void 0
   };

function KE(e, t) {
   const n = Xc(e);
   return () => {
      var r;
      return (r = HE[t]) !== null && r !== void 0 ? r : n()
   }
}
const Ls = KE(() => {
      try {
         document.createElement("div").animate({
            opacity: 0
         }, {
            easing: "linear(0, 1)"
         })
      } catch {
         return !1
      }
      return !0
   }, "linearEasing"),
   ey = (e, t, n = 10) => {
      let r = "";
      const i = Math.max(Math.round(t / n), 2);
      for (let o = 0; o < i; o++) r += e(Cr(0, i - 1, o)) + ", ";
      return `linear(${r.substring(0,r.length-2)})`
   };

function ty(e) {
   return !!(typeof e == "function" && Ls() || !e || typeof e == "string" && (e in wu || Ls()) || df(e) || Array.isArray(e) && e.every(ty))
}
const qr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
   wu = {
      linear: "linear",
      ease: "ease",
      easeIn: "ease-in",
      easeOut: "ease-out",
      easeInOut: "ease-in-out",
      circIn: qr([0, .65, .55, 1]),
      circOut: qr([.55, 0, 1, .45]),
      backIn: qr([.31, .01, .66, -.59]),
      backOut: qr([.33, 1.53, .69, .99])
   };

function ny(e, t) {
   if (e) return typeof e == "function" && Ls() ? ey(e, t) : df(e) ? qr(e) : Array.isArray(e) ? e.map(n => ny(n, t) || wu.easeOut) : wu[e]
}
const tt = {
   x: !1,
   y: !1
};

function ry() {
   return tt.x || tt.y
}

function GE(e, t, n) {
   var r;
   if (e instanceof Element) return [e];
   if (typeof e == "string") {
      let i = document;
      t && (i = t.current);
      const o = (r = n == null ? void 0 : n[e]) !== null && r !== void 0 ? r : i.querySelectorAll(e);
      return o ? Array.from(o) : []
   }
   return Array.from(e)
}

function iy(e, t) {
   const n = GE(e),
      r = new AbortController,
      i = {
         passive: !0,
         ...t,
         signal: r.signal
      };
   return [n, i, () => r.abort()]
}

function mh(e) {
   return !(e.pointerType === "touch" || ry())
}

function XE(e, t, n = {}) {
   const [r, i, o] = iy(e, n), s = a => {
      if (!mh(a)) return;
      const {
         target: l
      } = a, u = t(l, a);
      if (typeof u != "function" || !l) return;
      const c = f => {
         mh(f) && (u(f), l.removeEventListener("pointerleave", c))
      };
      l.addEventListener("pointerleave", c, i)
   };
   return r.forEach(a => {
      a.addEventListener("pointerenter", s, i)
   }), o
}
const oy = (e, t) => t ? e === t ? !0 : oy(e, t.parentElement) : !1,
   hf = e => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1,
   YE = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);

function QE(e) {
   return YE.has(e.tagName) || e.tabIndex !== -1
}
const Zr = new WeakSet;

function gh(e) {
   return t => {
      t.key === "Enter" && e(t)
   }
}

function qa(e, t) {
   e.dispatchEvent(new PointerEvent("pointer" + t, {
      isPrimary: !0,
      bubbles: !0
   }))
}
const qE = (e, t) => {
   const n = e.currentTarget;
   if (!n) return;
   const r = gh(() => {
      if (Zr.has(n)) return;
      qa(n, "down");
      const i = gh(() => {
            qa(n, "up")
         }),
         o = () => qa(n, "cancel");
      n.addEventListener("keyup", i, t), n.addEventListener("blur", o, t)
   });
   n.addEventListener("keydown", r, t), n.addEventListener("blur", () => n.removeEventListener("keydown", r), t)
};

function yh(e) {
   return hf(e) && !ry()
}

function ZE(e, t, n = {}) {
   const [r, i, o] = iy(e, n), s = a => {
      const l = a.currentTarget;
      if (!yh(a) || Zr.has(l)) return;
      Zr.add(l);
      const u = t(l, a),
         c = (g, w) => {
            window.removeEventListener("pointerup", f), window.removeEventListener("pointercancel", d), !(!yh(g) || !Zr.has(l)) && (Zr.delete(l), typeof u == "function" && u(g, {
               success: w
            }))
         },
         f = g => {
            c(g, n.useGlobalTarget || oy(l, g.target))
         },
         d = g => {
            c(g, !1)
         };
      window.addEventListener("pointerup", f, i), window.addEventListener("pointercancel", d, i)
   };
   return r.forEach(a => {
      !QE(a) && a.getAttribute("tabindex") === null && (a.tabIndex = 0), (n.useGlobalTarget ? window : a).addEventListener("pointerdown", s, i), a.addEventListener("focus", u => qE(u, i), i)
   }), o
}

function JE(e) {
   return e === "x" || e === "y" ? tt[e] ? null : (tt[e] = !0, () => {
      tt[e] = !1
   }) : tt.x || tt.y ? null : (tt.x = tt.y = !0, () => {
      tt.x = tt.y = !1
   })
}
const sy = new Set(["width", "height", "top", "left", "right", "bottom", ...Dr]);
let Go;

function eC() {
   Go = void 0
}
const wt = {
   now: () => (Go === void 0 && wt.set(de.isProcessing || Q2.useManualTiming ? de.timestamp : performance.now()), Go),
   set: e => {
      Go = e, queueMicrotask(eC)
   }
};

function pf(e, t) {
   e.indexOf(t) === -1 && e.push(t)
}

function mf(e, t) {
   const n = e.indexOf(t);
   n > -1 && e.splice(n, 1)
}
class gf {
   constructor() {
      this.subscriptions = []
   }
   add(t) {
      return pf(this.subscriptions, t), () => mf(this.subscriptions, t)
   }
   notify(t, n, r) {
      const i = this.subscriptions.length;
      if (i)
         if (i === 1) this.subscriptions[0](t, n, r);
         else
            for (let o = 0; o < i; o++) {
               const s = this.subscriptions[o];
               s && s(t, n, r)
            }
   }
   getSize() {
      return this.subscriptions.length
   }
   clear() {
      this.subscriptions.length = 0
   }
}

function ay(e, t) {
   return t ? e * (1e3 / t) : 0
}
const vh = 30,
   tC = e => !isNaN(parseFloat(e));
class nC {
   constructor(t, n = {}) {
      this.version = "12.4.1", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (r, i = !0) => {
         const o = wt.now();
         this.updatedAt !== o && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), i && this.events.renderRequest && this.events.renderRequest.notify(this.current)
      }, this.hasAnimated = !1, this.setCurrent(t), this.owner = n.owner
   }
   setCurrent(t) {
      this.current = t, this.updatedAt = wt.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = tC(this.current))
   }
   setPrevFrameValue(t = this.current) {
      this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt
   }
   onChange(t) {
      return this.on("change", t)
   }
   on(t, n) {
      this.events[t] || (this.events[t] = new gf);
      const r = this.events[t].add(n);
      return t === "change" ? () => {
         r(), W.read(() => {
            this.events.change.getSize() || this.stop()
         })
      } : r
   }
   clearListeners() {
      for (const t in this.events) this.events[t].clear()
   }
   attach(t, n) {
      this.passiveEffect = t, this.stopPassiveEffect = n
   }
   set(t, n = !0) {
      !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify)
   }
   setWithVelocity(t, n, r) {
      this.set(n), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - r
   }
   jump(t, n = !0) {
      this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
   }
   get() {
      return this.current
   }
   getPrevious() {
      return this.prev
   }
   getVelocity() {
      const t = wt.now();
      if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > vh) return 0;
      const n = Math.min(this.updatedAt - this.prevUpdatedAt, vh);
      return ay(parseFloat(this.current) - parseFloat(this.prevFrameValue), n)
   }
   start(t) {
      return this.stop(), new Promise(n => {
         this.hasAnimated = !0, this.animation = t(n), this.events.animationStart && this.events.animationStart.notify()
      }).then(() => {
         this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
      })
   }
   stop() {
      this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
   }
   isAnimating() {
      return !!this.animation
   }
   clearAnimation() {
      delete this.animation
   }
   destroy() {
      this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
   }
}

function Mi(e, t) {
   return new nC(e, t)
}

function rC(e, t, n) {
   e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Mi(n))
}

function iC(e, t) {
   const n = Oi(e, t);
   let {
      transitionEnd: r = {},
      transition: i = {},
      ...o
   } = n || {};
   o = {
      ...o,
      ...r
   };
   for (const s in o) {
      const a = _E(o[s]);
      rC(e, s, a)
   }
}

function oC(e) {
   return !!(xe(e) && e.add)
}

function xu(e, t) {
   const n = e.getValue("willChange");
   if (oC(n)) return n.add(t)
}

function ly(e) {
   return e.props[Vg]
}
const uy = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
   sC = 1e-7,
   aC = 12;

function lC(e, t, n, r, i) {
   let o, s, a = 0;
   do s = t + (n - t) / 2, o = uy(s, r, i) - e, o > 0 ? n = s : t = s; while (Math.abs(o) > sC && ++a < aC);
   return s
}

function Xi(e, t, n, r) {
   if (e === t && n === r) return Ie;
   const i = o => lC(o, 0, 1, e, n);
   return o => o === 0 || o === 1 ? o : uy(i(o), t, r)
}
const cy = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
   fy = e => t => 1 - e(1 - t),
   dy = Xi(.33, 1.53, .69, .99),
   yf = fy(dy),
   hy = cy(yf),
   py = e => (e *= 2) < 1 ? .5 * yf(e) : .5 * (2 - Math.pow(2, -10 * (e - 1))),
   vf = e => 1 - Math.sin(Math.acos(e)),
   my = fy(vf),
   gy = cy(vf),
   yy = e => /^0[^.\s]+$/u.test(e);

function uC(e) {
   return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || yy(e) : !0
}
const li = e => Math.round(e * 1e5) / 1e5,
   wf = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;

function cC(e) {
   return e == null
}
const fC = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
   xf = (e, t) => n => !!(typeof n == "string" && fC.test(n) && n.startsWith(e) || t && !cC(n) && Object.prototype.hasOwnProperty.call(n, t)),
   vy = (e, t, n) => r => {
      if (typeof r != "string") return r;
      const [i, o, s, a] = r.match(wf);
      return {
         [e]: parseFloat(i),
         [t]: parseFloat(o),
         [n]: parseFloat(s),
         alpha: a !== void 0 ? parseFloat(a) : 1
      }
   },
   dC = e => It(0, 255, e),
   Za = {
      ...Or,
      transform: e => Math.round(dC(e))
   },
   kn = {
      test: xf("rgb", "red"),
      parse: vy("red", "green", "blue"),
      transform: ({
         red: e,
         green: t,
         blue: n,
         alpha: r = 1
      }) => "rgba(" + Za.transform(e) + ", " + Za.transform(t) + ", " + Za.transform(n) + ", " + li(Di.transform(r)) + ")"
   };

function hC(e) {
   let t = "",
      n = "",
      r = "",
      i = "";
   return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, r += r, i += i), {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1
   }
}
const Su = {
      test: xf("#"),
      parse: hC,
      transform: kn.transform
   },
   or = {
      test: xf("hsl", "hue"),
      parse: vy("hue", "saturation", "lightness"),
      transform: ({
         hue: e,
         saturation: t,
         lightness: n,
         alpha: r = 1
      }) => "hsla(" + Math.round(e) + ", " + vt.transform(li(t)) + ", " + vt.transform(li(n)) + ", " + li(Di.transform(r)) + ")"
   },
   ye = {
      test: e => kn.test(e) || Su.test(e) || or.test(e),
      parse: e => kn.test(e) ? kn.parse(e) : or.test(e) ? or.parse(e) : Su.parse(e),
      transform: e => typeof e == "string" ? e : e.hasOwnProperty("red") ? kn.transform(e) : or.transform(e)
   },
   pC = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;

function mC(e) {
   var t, n;
   return isNaN(e) && typeof e == "string" && (((t = e.match(wf)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(pC)) === null || n === void 0 ? void 0 : n.length) || 0) > 0
}
const wy = "number",
   xy = "color",
   gC = "var",
   yC = "var(",
   wh = "${}",
   vC = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

function ji(e) {
   const t = e.toString(),
      n = [],
      r = {
         color: [],
         number: [],
         var: []
      },
      i = [];
   let o = 0;
   const a = t.replace(vC, l => (ye.test(l) ? (r.color.push(o), i.push(xy), n.push(ye.parse(l))) : l.startsWith(yC) ? (r.var.push(o), i.push(gC), n.push(l)) : (r.number.push(o), i.push(wy), n.push(parseFloat(l))), ++o, wh)).split(wh);
   return {
      values: n,
      split: a,
      indexes: r,
      types: i
   }
}

function Sy(e) {
   return ji(e).values
}

function Ey(e) {
   const {
      split: t,
      types: n
   } = ji(e), r = t.length;
   return i => {
      let o = "";
      for (let s = 0; s < r; s++)
         if (o += t[s], i[s] !== void 0) {
            const a = n[s];
            a === wy ? o += li(i[s]) : a === xy ? o += ye.transform(i[s]) : o += i[s]
         } return o
   }
}
const wC = e => typeof e == "number" ? 0 : e;

function xC(e) {
   const t = Sy(e);
   return Ey(e)(t.map(wC))
}
const un = {
      test: mC,
      parse: Sy,
      createTransformer: Ey,
      getAnimatableNone: xC
   },
   SC = new Set(["brightness", "contrast", "saturate", "opacity"]);

function EC(e) {
   const [t, n] = e.slice(0, -1).split("(");
   if (t === "drop-shadow") return e;
   const [r] = n.match(wf) || [];
   if (!r) return e;
   const i = n.replace(r, "");
   let o = SC.has(t) ? 1 : 0;
   return r !== n && (o *= 100), t + "(" + o + i + ")"
}
const CC = /\b([a-z-]*)\(.*?\)/gu,
   Eu = {
      ...un,
      getAnimatableNone: e => {
         const t = e.match(CC);
         return t ? t.map(EC).join(" ") : e
      }
   },
   PC = {
      ...tf,
      color: ye,
      backgroundColor: ye,
      outlineColor: ye,
      fill: ye,
      stroke: ye,
      borderColor: ye,
      borderTopColor: ye,
      borderRightColor: ye,
      borderBottomColor: ye,
      borderLeftColor: ye,
      filter: Eu,
      WebkitFilter: Eu
   },
   Sf = e => PC[e];

function Cy(e, t) {
   let n = Sf(e);
   return n !== Eu && (n = un), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
}
const TC = new Set(["auto", "none", "0"]);

function RC(e, t, n) {
   let r = 0,
      i;
   for (; r < e.length && !i;) {
      const o = e[r];
      typeof o == "string" && !TC.has(o) && ji(o).values.length && (i = e[r]), r++
   }
   if (i && n)
      for (const o of t) e[o] = Cy(n, i)
}
const xh = e => e === Or || e === _,
   Sh = (e, t) => parseFloat(e.split(", ")[t]),
   Eh = (e, t) => (n, {
      transform: r
   }) => {
      if (r === "none" || !r) return 0;
      const i = r.match(/^matrix3d\((.+)\)$/u);
      if (i) return Sh(i[1], t);
      {
         const o = r.match(/^matrix\((.+)\)$/u);
         return o ? Sh(o[1], e) : 0
      }
   },
   kC = new Set(["x", "y", "z"]),
   bC = Dr.filter(e => !kC.has(e));

function AC(e) {
   const t = [];
   return bC.forEach(n => {
      const r = e.getValue(n);
      r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0))
   }), t
}
const Tr = {
   width: ({
      x: e
   }, {
      paddingLeft: t = "0",
      paddingRight: n = "0"
   }) => e.max - e.min - parseFloat(t) - parseFloat(n),
   height: ({
      y: e
   }, {
      paddingTop: t = "0",
      paddingBottom: n = "0"
   }) => e.max - e.min - parseFloat(t) - parseFloat(n),
   top: (e, {
      top: t
   }) => parseFloat(t),
   left: (e, {
      left: t
   }) => parseFloat(t),
   bottom: ({
      y: e
   }, {
      top: t
   }) => parseFloat(t) + (e.max - e.min),
   right: ({
      x: e
   }, {
      left: t
   }) => parseFloat(t) + (e.max - e.min),
   x: Eh(4, 13),
   y: Eh(5, 14)
};
Tr.translateX = Tr.x;
Tr.translateY = Tr.y;
const Ln = new Set;
let Cu = !1,
   Pu = !1;

function Py() {
   if (Pu) {
      const e = Array.from(Ln).filter(r => r.needsMeasurement),
         t = new Set(e.map(r => r.element)),
         n = new Map;
      t.forEach(r => {
         const i = AC(r);
         i.length && (n.set(r, i), r.render())
      }), e.forEach(r => r.measureInitialState()), t.forEach(r => {
         r.render();
         const i = n.get(r);
         i && i.forEach(([o, s]) => {
            var a;
            (a = r.getValue(o)) === null || a === void 0 || a.set(s)
         })
      }), e.forEach(r => r.measureEndState()), e.forEach(r => {
         r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY)
      })
   }
   Pu = !1, Cu = !1, Ln.forEach(e => e.complete()), Ln.clear()
}

function Ty() {
   Ln.forEach(e => {
      e.readKeyframes(), e.needsMeasurement && (Pu = !0)
   })
}

function NC() {
   Ty(), Py()
}
class Ef {
   constructor(t, n, r, i, o, s = !1) {
      this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = r, this.motionValue = i, this.element = o, this.isAsync = s
   }
   scheduleResolve() {
      this.isScheduled = !0, this.isAsync ? (Ln.add(this), Cu || (Cu = !0, W.read(Ty), W.resolveKeyframes(Py))) : (this.readKeyframes(), this.complete())
   }
   readKeyframes() {
      const {
         unresolvedKeyframes: t,
         name: n,
         element: r,
         motionValue: i
      } = this;
      for (let o = 0; o < t.length; o++)
         if (t[o] === null)
            if (o === 0) {
               const s = i == null ? void 0 : i.get(),
                  a = t[t.length - 1];
               if (s !== void 0) t[0] = s;
               else if (r && n) {
                  const l = r.readValue(n, a);
                  l != null && (t[0] = l)
               }
               t[0] === void 0 && (t[0] = a), i && s === void 0 && i.set(t[0])
            } else t[o] = t[o - 1]
   }
   setFinalKeyframe() {}
   measureInitialState() {}
   renderEndStyles() {}
   measureEndState() {}
   complete() {
      this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), Ln.delete(this)
   }
   cancel() {
      this.isComplete || (this.isScheduled = !1, Ln.delete(this))
   }
   resume() {
      this.isComplete || this.scheduleResolve()
   }
}
const Ry = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
   LC = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;

function DC(e) {
   const t = LC.exec(e);
   if (!t) return [, ];
   const [, n, r, i] = t;
   return [`--${n??r}`, i]
}

function ky(e, t, n = 1) {
   const [r, i] = DC(e);
   if (!r) return;
   const o = window.getComputedStyle(t).getPropertyValue(r);
   if (o) {
      const s = o.trim();
      return Ry(s) ? parseFloat(s) : s
   }
   return ef(i) ? ky(i, t, n + 1) : i
}
const by = e => t => t.test(e),
   OC = {
      test: e => e === "auto",
      parse: e => e
   },
   Ay = [Or, _, vt, Ut, wE, vE, OC],
   Ch = e => Ay.find(by(e));
class Ny extends Ef {
   constructor(t, n, r, i, o) {
      super(t, n, r, i, o, !0)
   }
   readKeyframes() {
      const {
         unresolvedKeyframes: t,
         element: n,
         name: r
      } = this;
      if (!n || !n.current) return;
      super.readKeyframes();
      for (let l = 0; l < t.length; l++) {
         let u = t[l];
         if (typeof u == "string" && (u = u.trim(), ef(u))) {
            const c = ky(u, n.current);
            c !== void 0 && (t[l] = c), l === t.length - 1 && (this.finalKeyframe = u)
         }
      }
      if (this.resolveNoneKeyframes(), !sy.has(r) || t.length !== 2) return;
      const [i, o] = t, s = Ch(i), a = Ch(o);
      if (s !== a)
         if (xh(s) && xh(a))
            for (let l = 0; l < t.length; l++) {
               const u = t[l];
               typeof u == "string" && (t[l] = parseFloat(u))
            } else this.needsMeasurement = !0
   }
   resolveNoneKeyframes() {
      const {
         unresolvedKeyframes: t,
         name: n
      } = this, r = [];
      for (let i = 0; i < t.length; i++) uC(t[i]) && r.push(i);
      r.length && RC(t, r, n)
   }
   measureInitialState() {
      const {
         element: t,
         unresolvedKeyframes: n,
         name: r
      } = this;
      if (!t || !t.current) return;
      r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Tr[r](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
      const i = n[n.length - 1];
      i !== void 0 && t.getValue(r, i).jump(i, !1)
   }
   measureEndState() {
      var t;
      const {
         element: n,
         name: r,
         unresolvedKeyframes: i
      } = this;
      if (!n || !n.current) return;
      const o = n.getValue(r);
      o && o.jump(this.measuredOrigin, !1);
      const s = i.length - 1,
         a = i[s];
      i[s] = Tr[r](n.measureViewportBox(), window.getComputedStyle(n.current)), a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a), !((t = this.removedTransforms) === null || t === void 0) && t.length && this.removedTransforms.forEach(([l, u]) => {
         n.getValue(l).set(u)
      }), this.resolveNoneKeyframes()
   }
}
const Ph = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (un.test(e) || e === "0") && !e.startsWith("url("));

function MC(e) {
   const t = e[0];
   if (e.length === 1) return !0;
   for (let n = 0; n < e.length; n++)
      if (e[n] !== t) return !0
}

function jC(e, t, n, r) {
   const i = e[0];
   if (i === null) return !1;
   if (t === "display" || t === "visibility") return !0;
   const o = e[e.length - 1],
      s = Ph(i, t),
      a = Ph(o, t);
   return !s || !a ? !1 : MC(e) || (n === "spring" || ff(n)) && r
}
const _C = e => e !== null;

function ca(e, {
   repeat: t,
   repeatType: n = "loop"
}, r) {
   const i = e.filter(_C),
      o = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
   return !o || r === void 0 ? i[o] : r
}
const FC = 40;
class Ly {
   constructor({
      autoplay: t = !0,
      delay: n = 0,
      type: r = "keyframes",
      repeat: i = 0,
      repeatDelay: o = 0,
      repeatType: s = "loop",
      ...a
   }) {
      this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = wt.now(), this.options = {
         autoplay: t,
         delay: n,
         type: r,
         repeat: i,
         repeatDelay: o,
         repeatType: s,
         ...a
      }, this.updateFinishedPromise()
   }
   calcStartTime() {
      return this.resolvedAt ? this.resolvedAt - this.createdAt > FC ? this.resolvedAt : this.createdAt : this.createdAt
   }
   get resolved() {
      return !this._resolved && !this.hasAttemptedResolve && NC(), this._resolved
   }
   onKeyframesResolved(t, n) {
      this.resolvedAt = wt.now(), this.hasAttemptedResolve = !0;
      const {
         name: r,
         type: i,
         velocity: o,
         delay: s,
         onComplete: a,
         onUpdate: l,
         isGenerator: u
      } = this.options;
      if (!u && !jC(t, r, i, o))
         if (s) this.options.duration = 0;
         else {
            l && l(ca(t, this.options, n)), a && a(), this.resolveFinishedPromise();
            return
         } const c = this.initPlayback(t, n);
      c !== !1 && (this._resolved = {
         keyframes: t,
         finalKeyframe: n,
         ...c
      }, this.onPostResolved())
   }
   onPostResolved() {}
   then(t, n) {
      return this.currentFinishedPromise.then(t, n)
   }
   flatten() {
      this.options.type = "keyframes", this.options.ease = "linear"
   }
   updateFinishedPromise() {
      this.currentFinishedPromise = new Promise(t => {
         this.resolveFinishedPromise = t
      })
   }
}
const Q = (e, t, n) => e + (t - e) * n;

function Ja(e, t, n) {
   return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}

function IC({
   hue: e,
   saturation: t,
   lightness: n,
   alpha: r
}) {
   e /= 360, t /= 100, n /= 100;
   let i = 0,
      o = 0,
      s = 0;
   if (!t) i = o = s = n;
   else {
      const a = n < .5 ? n * (1 + t) : n + t - n * t,
         l = 2 * n - a;
      i = Ja(l, a, e + 1 / 3), o = Ja(l, a, e), s = Ja(l, a, e - 1 / 3)
   }
   return {
      red: Math.round(i * 255),
      green: Math.round(o * 255),
      blue: Math.round(s * 255),
      alpha: r
   }
}

function Ds(e, t) {
   return n => n > 0 ? t : e
}
const el = (e, t, n) => {
      const r = e * e,
         i = n * (t * t - r) + r;
      return i < 0 ? 0 : Math.sqrt(i)
   },
   VC = [Su, kn, or],
   BC = e => VC.find(t => t.test(e));

function Th(e) {
   const t = BC(e);
   if (!t) return !1;
   let n = t.parse(e);
   return t === or && (n = IC(n)), n
}
const Rh = (e, t) => {
      const n = Th(e),
         r = Th(t);
      if (!n || !r) return Ds(e, t);
      const i = {
         ...n
      };
      return o => (i.red = el(n.red, r.red, o), i.green = el(n.green, r.green, o), i.blue = el(n.blue, r.blue, o), i.alpha = Q(n.alpha, r.alpha, o), kn.transform(i))
   },
   zC = (e, t) => n => t(e(n)),
   Yi = (...e) => e.reduce(zC),
   Tu = new Set(["none", "hidden"]);

function UC(e, t) {
   return Tu.has(e) ? n => n <= 0 ? e : t : n => n >= 1 ? t : e
}

function $C(e, t) {
   return n => Q(e, t, n)
}

function Cf(e) {
   return typeof e == "number" ? $C : typeof e == "string" ? ef(e) ? Ds : ye.test(e) ? Rh : KC : Array.isArray(e) ? Dy : typeof e == "object" ? ye.test(e) ? Rh : WC : Ds
}

function Dy(e, t) {
   const n = [...e],
      r = n.length,
      i = e.map((o, s) => Cf(o)(o, t[s]));
   return o => {
      for (let s = 0; s < r; s++) n[s] = i[s](o);
      return n
   }
}

function WC(e, t) {
   const n = {
         ...e,
         ...t
      },
      r = {};
   for (const i in n) e[i] !== void 0 && t[i] !== void 0 && (r[i] = Cf(e[i])(e[i], t[i]));
   return i => {
      for (const o in r) n[o] = r[o](i);
      return n
   }
}

function HC(e, t) {
   var n;
   const r = [],
      i = {
         color: 0,
         var: 0,
         number: 0
      };
   for (let o = 0; o < t.values.length; o++) {
      const s = t.types[o],
         a = e.indexes[s][i[s]],
         l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
      r[o] = l, i[s]++
   }
   return r
}
const KC = (e, t) => {
   const n = un.createTransformer(t),
      r = ji(e),
      i = ji(t);
   return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? Tu.has(e) && !i.values.length || Tu.has(t) && !r.values.length ? UC(e, t) : Yi(Dy(HC(r, i), i.values), n) : Ds(e, t)
};

function Oy(e, t, n) {
   return typeof e == "number" && typeof t == "number" && typeof n == "number" ? Q(e, t, n) : Cf(e)(e, t)
}
const GC = 5;

function My(e, t, n) {
   const r = Math.max(t - GC, 0);
   return ay(n - e(r), t - r)
}
const ee = {
      stiffness: 100,
      damping: 10,
      mass: 1,
      velocity: 0,
      duration: 800,
      bounce: .3,
      visualDuration: .3,
      restSpeed: {
         granular: .01,
         default: 2
      },
      restDelta: {
         granular: .005,
         default: .5
      },
      minDuration: .01,
      maxDuration: 10,
      minDamping: .05,
      maxDamping: 1
   },
   tl = .001;

function XC({
   duration: e = ee.duration,
   bounce: t = ee.bounce,
   velocity: n = ee.velocity,
   mass: r = ee.mass
}) {
   let i, o, s = 1 - t;
   s = It(ee.minDamping, ee.maxDamping, s), e = It(ee.minDuration, ee.maxDuration, Ot(e)), s < 1 ? (i = u => {
      const c = u * s,
         f = c * e,
         d = c - n,
         g = Ru(u, s),
         w = Math.exp(-f);
      return tl - d / g * w
   }, o = u => {
      const f = u * s * e,
         d = f * n + n,
         g = Math.pow(s, 2) * Math.pow(u, 2) * e,
         w = Math.exp(-f),
         v = Ru(Math.pow(u, 2), s);
      return (-i(u) + tl > 0 ? -1 : 1) * ((d - g) * w) / v
   }) : (i = u => {
      const c = Math.exp(-u * e),
         f = (u - n) * e + 1;
      return -tl + c * f
   }, o = u => {
      const c = Math.exp(-u * e),
         f = (n - u) * (e * e);
      return c * f
   });
   const a = 5 / e,
      l = QC(i, o, a);
   if (e = Dt(e), isNaN(l)) return {
      stiffness: ee.stiffness,
      damping: ee.damping,
      duration: e
   };
   {
      const u = Math.pow(l, 2) * r;
      return {
         stiffness: u,
         damping: s * 2 * Math.sqrt(r * u),
         duration: e
      }
   }
}
const YC = 12;

function QC(e, t, n) {
   let r = n;
   for (let i = 1; i < YC; i++) r = r - e(r) / t(r);
   return r
}

function Ru(e, t) {
   return e * Math.sqrt(1 - t * t)
}
const qC = ["duration", "bounce"],
   ZC = ["stiffness", "damping", "mass"];

function kh(e, t) {
   return t.some(n => e[n] !== void 0)
}

function JC(e) {
   let t = {
      velocity: ee.velocity,
      stiffness: ee.stiffness,
      damping: ee.damping,
      mass: ee.mass,
      isResolvedFromDuration: !1,
      ...e
   };
   if (!kh(e, ZC) && kh(e, qC))
      if (e.visualDuration) {
         const n = e.visualDuration,
            r = 2 * Math.PI / (n * 1.2),
            i = r * r,
            o = 2 * It(.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
         t = {
            ...t,
            mass: ee.mass,
            stiffness: i,
            damping: o
         }
      } else {
         const n = XC(e);
         t = {
            ...t,
            ...n,
            mass: ee.mass
         }, t.isResolvedFromDuration = !0
      } return t
}

function jy(e = ee.visualDuration, t = ee.bounce) {
   const n = typeof e != "object" ? {
      visualDuration: e,
      keyframes: [0, 1],
      bounce: t
   } : e;
   let {
      restSpeed: r,
      restDelta: i
   } = n;
   const o = n.keyframes[0],
      s = n.keyframes[n.keyframes.length - 1],
      a = {
         done: !1,
         value: o
      },
      {
         stiffness: l,
         damping: u,
         mass: c,
         duration: f,
         velocity: d,
         isResolvedFromDuration: g
      } = JC({
         ...n,
         velocity: -Ot(n.velocity || 0)
      }),
      w = d || 0,
      v = u / (2 * Math.sqrt(l * c)),
      S = s - o,
      p = Ot(Math.sqrt(l / c)),
      m = Math.abs(S) < 5;
   r || (r = m ? ee.restSpeed.granular : ee.restSpeed.default), i || (i = m ? ee.restDelta.granular : ee.restDelta.default);
   let y;
   if (v < 1) {
      const C = Ru(p, v);
      y = T => {
         const R = Math.exp(-v * p * T);
         return s - R * ((w + v * p * S) / C * Math.sin(C * T) + S * Math.cos(C * T))
      }
   } else if (v === 1) y = C => s - Math.exp(-p * C) * (S + (w + p * S) * C);
   else {
      const C = p * Math.sqrt(v * v - 1);
      y = T => {
         const R = Math.exp(-v * p * T),
            k = Math.min(C * T, 300);
         return s - R * ((w + v * p * S) * Math.sinh(k) + C * S * Math.cosh(k)) / C
      }
   }
   const E = {
      calculatedDuration: g && f || null,
      next: C => {
         const T = y(C);
         if (g) a.done = C >= f;
         else {
            let R = 0;
            v < 1 && (R = C === 0 ? Dt(w) : My(y, C, T));
            const k = Math.abs(R) <= r,
               N = Math.abs(s - T) <= i;
            a.done = k && N
         }
         return a.value = a.done ? s : T, a
      },
      toString: () => {
         const C = Math.min(Jg(E), vu),
            T = ey(R => E.next(C * R).value, C, 30);
         return C + "ms " + T
      }
   };
   return E
}

function bh({
   keyframes: e,
   velocity: t = 0,
   power: n = .8,
   timeConstant: r = 325,
   bounceDamping: i = 10,
   bounceStiffness: o = 500,
   modifyTarget: s,
   min: a,
   max: l,
   restDelta: u = .5,
   restSpeed: c
}) {
   const f = e[0],
      d = {
         done: !1,
         value: f
      },
      g = k => a !== void 0 && k < a || l !== void 0 && k > l,
      w = k => a === void 0 ? l : l === void 0 || Math.abs(a - k) < Math.abs(l - k) ? a : l;
   let v = n * t;
   const S = f + v,
      p = s === void 0 ? S : s(S);
   p !== S && (v = p - f);
   const m = k => -v * Math.exp(-k / r),
      y = k => p + m(k),
      E = k => {
         const N = m(k),
            L = y(k);
         d.done = Math.abs(N) <= u, d.value = d.done ? p : L
      };
   let C, T;
   const R = k => {
      g(d.value) && (C = k, T = jy({
         keyframes: [d.value, w(d.value)],
         velocity: My(y, k, d.value),
         damping: i,
         stiffness: o,
         restDelta: u,
         restSpeed: c
      }))
   };
   return R(0), {
      calculatedDuration: null,
      next: k => {
         let N = !1;
         return !T && C === void 0 && (N = !0, E(k), R(k)), C !== void 0 && k >= C ? T.next(k - C) : (!N && E(k), d)
      }
   }
}
const eP = Xi(.42, 0, 1, 1),
   tP = Xi(0, 0, .58, 1),
   _y = Xi(.42, 0, .58, 1),
   nP = e => Array.isArray(e) && typeof e[0] != "number",
   rP = {
      linear: Ie,
      easeIn: eP,
      easeInOut: _y,
      easeOut: tP,
      circIn: vf,
      circInOut: gy,
      circOut: my,
      backIn: yf,
      backInOut: hy,
      backOut: dy,
      anticipate: py
   },
   Ah = e => {
      if (df(e)) {
         Mg(e.length === 4);
         const [t, n, r, i] = e;
         return Xi(t, n, r, i)
      } else if (typeof e == "string") return rP[e];
      return e
   };

function iP(e, t, n) {
   const r = [],
      i = n || Oy,
      o = e.length - 1;
   for (let s = 0; s < o; s++) {
      let a = i(e[s], e[s + 1]);
      if (t) {
         const l = Array.isArray(t) ? t[s] || Ie : t;
         a = Yi(l, a)
      }
      r.push(a)
   }
   return r
}

function oP(e, t, {
   clamp: n = !0,
   ease: r,
   mixer: i
} = {}) {
   const o = e.length;
   if (Mg(o === t.length), o === 1) return () => t[0];
   if (o === 2 && t[0] === t[1]) return () => t[1];
   const s = e[0] === e[1];
   e[0] > e[o - 1] && (e = [...e].reverse(), t = [...t].reverse());
   const a = iP(t, r, i),
      l = a.length,
      u = c => {
         if (s && c < e[0]) return t[0];
         let f = 0;
         if (l > 1)
            for (; f < e.length - 2 && !(c < e[f + 1]); f++);
         const d = Cr(e[f], e[f + 1], c);
         return a[f](d)
      };
   return n ? c => u(It(e[0], e[o - 1], c)) : u
}

function sP(e, t) {
   const n = e[e.length - 1];
   for (let r = 1; r <= t; r++) {
      const i = Cr(0, t, r);
      e.push(Q(n, 1, i))
   }
}

function aP(e) {
   const t = [0];
   return sP(t, e.length - 1), t
}

function lP(e, t) {
   return e.map(n => n * t)
}

function uP(e, t) {
   return e.map(() => t || _y).splice(0, e.length - 1)
}

function Os({
   duration: e = 300,
   keyframes: t,
   times: n,
   ease: r = "easeInOut"
}) {
   const i = nP(r) ? r.map(Ah) : Ah(r),
      o = {
         done: !1,
         value: t[0]
      },
      s = lP(n && n.length === t.length ? n : aP(t), e),
      a = oP(s, t, {
         ease: Array.isArray(i) ? i : uP(t, i)
      });
   return {
      calculatedDuration: e,
      next: l => (o.value = a(l), o.done = l >= e, o)
   }
}
const cP = e => {
      const t = ({
         timestamp: n
      }) => e(n);
      return {
         start: () => W.update(t, !0),
         stop: () => ln(t),
         now: () => de.isProcessing ? de.timestamp : wt.now()
      }
   },
   fP = {
      decay: bh,
      inertia: bh,
      tween: Os,
      keyframes: Os,
      spring: jy
   },
   dP = e => e / 100;
class Pf extends Ly {
   constructor(t) {
      super(t), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
         if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle") return;
         this.teardown();
         const {
            onStop: l
         } = this.options;
         l && l()
      };
      const {
         name: n,
         motionValue: r,
         element: i,
         keyframes: o
      } = this.options, s = (i == null ? void 0 : i.KeyframeResolver) || Ef, a = (l, u) => this.onKeyframesResolved(l, u);
      this.resolver = new s(o, a, n, r, i), this.resolver.scheduleResolve()
   }
   flatten() {
      super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes))
   }
   initPlayback(t) {
      const {
         type: n = "keyframes",
         repeat: r = 0,
         repeatDelay: i = 0,
         repeatType: o,
         velocity: s = 0
      } = this.options, a = ff(n) ? n : fP[n] || Os;
      let l, u;
      a !== Os && typeof t[0] != "number" && (l = Yi(dP, Oy(t[0], t[1])), t = [0, 100]);
      const c = a({
         ...this.options,
         keyframes: t
      });
      o === "mirror" && (u = a({
         ...this.options,
         keyframes: [...t].reverse(),
         velocity: -s
      })), c.calculatedDuration === null && (c.calculatedDuration = Jg(c));
      const {
         calculatedDuration: f
      } = c, d = f + i, g = d * (r + 1) - i;
      return {
         generator: c,
         mirroredGenerator: u,
         mapPercentToKeyframes: l,
         calculatedDuration: f,
         resolvedDuration: d,
         totalDuration: g
      }
   }
   onPostResolved() {
      const {
         autoplay: t = !0
      } = this.options;
      this.play(), this.pendingPlayState === "paused" || !t ? this.pause() : this.state = this.pendingPlayState
   }
   tick(t, n = !1) {
      const {
         resolved: r
      } = this;
      if (!r) {
         const {
            keyframes: k
         } = this.options;
         return {
            done: !0,
            value: k[k.length - 1]
         }
      }
      const {
         finalKeyframe: i,
         generator: o,
         mirroredGenerator: s,
         mapPercentToKeyframes: a,
         keyframes: l,
         calculatedDuration: u,
         totalDuration: c,
         resolvedDuration: f
      } = r;
      if (this.startTime === null) return o.next(0);
      const {
         delay: d,
         repeat: g,
         repeatType: w,
         repeatDelay: v,
         onUpdate: S
      } = this.options;
      this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - c / this.speed, this.startTime)), n ? this.currentTime = t : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
      const p = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
         m = this.speed >= 0 ? p < 0 : p > c;
      this.currentTime = Math.max(p, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = c);
      let y = this.currentTime,
         E = o;
      if (g) {
         const k = Math.min(this.currentTime, c) / f;
         let N = Math.floor(k),
            L = k % 1;
         !L && k >= 1 && (L = 1), L === 1 && N--, N = Math.min(N, g + 1), !!(N % 2) && (w === "reverse" ? (L = 1 - L, v && (L -= v / f)) : w === "mirror" && (E = s)), y = It(0, 1, L) * f
      }
      const C = m ? {
         done: !1,
         value: l[0]
      } : E.next(y);
      a && (C.value = a(C.value));
      let {
         done: T
      } = C;
      !m && u !== null && (T = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
      const R = this.holdTime === null && (this.state === "finished" || this.state === "running" && T);
      return R && i !== void 0 && (C.value = ca(l, this.options, i)), S && S(C.value), R && this.finish(), C
   }
   get duration() {
      const {
         resolved: t
      } = this;
      return t ? Ot(t.calculatedDuration) : 0
   }
   get time() {
      return Ot(this.currentTime)
   }
   set time(t) {
      t = Dt(t), this.currentTime = t, this.holdTime !== null || this.speed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed)
   }
   get speed() {
      return this.playbackSpeed
   }
   set speed(t) {
      const n = this.playbackSpeed !== t;
      this.playbackSpeed = t, n && (this.time = Ot(this.currentTime))
   }
   play() {
      if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
         this.pendingPlayState = "running";
         return
      }
      if (this.isStopped) return;
      const {
         driver: t = cP,
         onPlay: n,
         startTime: r
      } = this.options;
      this.driver || (this.driver = t(o => this.tick(o))), n && n();
      const i = this.driver.now();
      this.holdTime !== null ? this.startTime = i - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = i) : this.startTime = r ?? this.calcStartTime(), this.state === "finished" && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start()
   }
   pause() {
      var t;
      if (!this._resolved) {
         this.pendingPlayState = "paused";
         return
      }
      this.state = "paused", this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0
   }
   complete() {
      this.state !== "running" && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null
   }
   finish() {
      this.teardown(), this.state = "finished";
      const {
         onComplete: t
      } = this.options;
      t && t()
   }
   cancel() {
      this.cancelTime !== null && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise()
   }
   teardown() {
      this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel()
   }
   stopDriver() {
      this.driver && (this.driver.stop(), this.driver = void 0)
   }
   sample(t) {
      return this.startTime = 0, this.tick(t, !0)
   }
}
const hP = new Set(["opacity", "clipPath", "filter", "transform"]);

function pP(e, t, n, {
   delay: r = 0,
   duration: i = 300,
   repeat: o = 0,
   repeatType: s = "loop",
   ease: a = "easeInOut",
   times: l
} = {}) {
   const u = {
      [t]: n
   };
   l && (u.offset = l);
   const c = ny(a, i);
   return Array.isArray(c) && (u.easing = c), e.animate(u, {
      delay: r,
      duration: i,
      easing: Array.isArray(c) ? "linear" : c,
      fill: "both",
      iterations: o + 1,
      direction: s === "reverse" ? "alternate" : "normal"
   })
}
const mP = Xc(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
   Ms = 10,
   gP = 2e4;

function yP(e) {
   return ff(e.type) || e.type === "spring" || !ty(e.ease)
}

function vP(e, t) {
   const n = new Pf({
      ...t,
      keyframes: e,
      repeat: 0,
      delay: 0,
      isGenerator: !0
   });
   let r = {
      done: !1,
      value: e[0]
   };
   const i = [];
   let o = 0;
   for (; !r.done && o < gP;) r = n.sample(o), i.push(r.value), o += Ms;
   return {
      times: void 0,
      keyframes: i,
      duration: o - Ms,
      ease: "linear"
   }
}
const Fy = {
   anticipate: py,
   backInOut: hy,
   circInOut: gy
};

function wP(e) {
   return e in Fy
}
class Nh extends Ly {
   constructor(t) {
      super(t);
      const {
         name: n,
         motionValue: r,
         element: i,
         keyframes: o
      } = this.options;
      this.resolver = new Ny(o, (s, a) => this.onKeyframesResolved(s, a), n, r, i), this.resolver.scheduleResolve()
   }
   initPlayback(t, n) {
      let {
         duration: r = 300,
         times: i,
         ease: o,
         type: s,
         motionValue: a,
         name: l,
         startTime: u
      } = this.options;
      if (!a.owner || !a.owner.current) return !1;
      if (typeof o == "string" && Ls() && wP(o) && (o = Fy[o]), yP(this.options)) {
         const {
            onComplete: f,
            onUpdate: d,
            motionValue: g,
            element: w,
            ...v
         } = this.options, S = vP(t, v);
         t = S.keyframes, t.length === 1 && (t[1] = t[0]), r = S.duration, i = S.times, o = S.ease, s = "keyframes"
      }
      const c = pP(a.owner.current, l, t, {
         ...this.options,
         duration: r,
         times: i,
         ease: o
      });
      return c.startTime = u ?? this.calcStartTime(), this.pendingTimeline ? (ph(c, this.pendingTimeline), this.pendingTimeline = void 0) : c.onfinish = () => {
         const {
            onComplete: f
         } = this.options;
         a.set(ca(t, this.options, n)), f && f(), this.cancel(), this.resolveFinishedPromise()
      }, {
         animation: c,
         duration: r,
         times: i,
         type: s,
         ease: o,
         keyframes: t
      }
   }
   get duration() {
      const {
         resolved: t
      } = this;
      if (!t) return 0;
      const {
         duration: n
      } = t;
      return Ot(n)
   }
   get time() {
      const {
         resolved: t
      } = this;
      if (!t) return 0;
      const {
         animation: n
      } = t;
      return Ot(n.currentTime || 0)
   }
   set time(t) {
      const {
         resolved: n
      } = this;
      if (!n) return;
      const {
         animation: r
      } = n;
      r.currentTime = Dt(t)
   }
   get speed() {
      const {
         resolved: t
      } = this;
      if (!t) return 1;
      const {
         animation: n
      } = t;
      return n.playbackRate
   }
   set speed(t) {
      const {
         resolved: n
      } = this;
      if (!n) return;
      const {
         animation: r
      } = n;
      r.playbackRate = t
   }
   get state() {
      const {
         resolved: t
      } = this;
      if (!t) return "idle";
      const {
         animation: n
      } = t;
      return n.playState
   }
   get startTime() {
      const {
         resolved: t
      } = this;
      if (!t) return null;
      const {
         animation: n
      } = t;
      return n.startTime
   }
   attachTimeline(t) {
      if (!this._resolved) this.pendingTimeline = t;
      else {
         const {
            resolved: n
         } = this;
         if (!n) return Ie;
         const {
            animation: r
         } = n;
         ph(r, t)
      }
      return Ie
   }
   play() {
      if (this.isStopped) return;
      const {
         resolved: t
      } = this;
      if (!t) return;
      const {
         animation: n
      } = t;
      n.playState === "finished" && this.updateFinishedPromise(), n.play()
   }
   pause() {
      const {
         resolved: t
      } = this;
      if (!t) return;
      const {
         animation: n
      } = t;
      n.pause()
   }
   stop() {
      if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle") return;
      this.resolveFinishedPromise(), this.updateFinishedPromise();
      const {
         resolved: t
      } = this;
      if (!t) return;
      const {
         animation: n,
         keyframes: r,
         duration: i,
         type: o,
         ease: s,
         times: a
      } = t;
      if (n.playState === "idle" || n.playState === "finished") return;
      if (this.time) {
         const {
            motionValue: u,
            onUpdate: c,
            onComplete: f,
            element: d,
            ...g
         } = this.options, w = new Pf({
            ...g,
            keyframes: r,
            duration: i,
            type: o,
            ease: s,
            times: a,
            isGenerator: !0
         }), v = Dt(this.time);
         u.setWithVelocity(w.sample(v - Ms).value, w.sample(v).value, Ms)
      }
      const {
         onStop: l
      } = this.options;
      l && l(), this.cancel()
   }
   complete() {
      const {
         resolved: t
      } = this;
      t && t.animation.finish()
   }
   cancel() {
      const {
         resolved: t
      } = this;
      t && t.animation.cancel()
   }
   static supports(t) {
      const {
         motionValue: n,
         name: r,
         repeatDelay: i,
         repeatType: o,
         damping: s,
         type: a
      } = t;
      if (!n || !n.owner || !(n.owner.current instanceof HTMLElement)) return !1;
      const {
         onUpdate: l,
         transformTemplate: u
      } = n.owner.getProps();
      return mP() && r && hP.has(r) && !l && !u && !i && o !== "mirror" && s !== 0 && a !== "inertia"
   }
}
const xP = {
      type: "spring",
      stiffness: 500,
      damping: 25,
      restSpeed: 10
   },
   SP = e => ({
      type: "spring",
      stiffness: 550,
      damping: e === 0 ? 2 * Math.sqrt(550) : 30,
      restSpeed: 10
   }),
   EP = {
      type: "keyframes",
      duration: .8
   },
   CP = {
      type: "keyframes",
      ease: [.25, .1, .35, 1],
      duration: .3
   },
   PP = (e, {
      keyframes: t
   }) => t.length > 2 ? EP : zn.has(e) ? e.startsWith("scale") ? SP(t[1]) : xP : CP;

function TP({
   when: e,
   delay: t,
   delayChildren: n,
   staggerChildren: r,
   staggerDirection: i,
   repeat: o,
   repeatType: s,
   repeatDelay: a,
   from: l,
   elapsed: u,
   ...c
}) {
   return !!Object.keys(c).length
}
const Tf = (e, t, n, r = {}, i, o) => s => {
   const a = cf(r, e) || {},
      l = a.delay || r.delay || 0;
   let {
      elapsed: u = 0
   } = r;
   u = u - Dt(l);
   let c = {
      keyframes: Array.isArray(n) ? n : [null, n],
      ease: "easeOut",
      velocity: t.getVelocity(),
      ...a,
      delay: -u,
      onUpdate: d => {
         t.set(d), a.onUpdate && a.onUpdate(d)
      },
      onComplete: () => {
         s(), a.onComplete && a.onComplete()
      },
      name: e,
      motionValue: t,
      element: o ? void 0 : i
   };
   TP(a) || (c = {
      ...c,
      ...PP(e, c)
   }), c.duration && (c.duration = Dt(c.duration)), c.repeatDelay && (c.repeatDelay = Dt(c.repeatDelay)), c.from !== void 0 && (c.keyframes[0] = c.from);
   let f = !1;
   if ((c.type === !1 || c.duration === 0 && !c.repeatDelay) && (c.duration = 0, c.delay === 0 && (f = !0)), f && !o && t.get() !== void 0) {
      const d = ca(c.keyframes, a);
      if (d !== void 0) return W.update(() => {
         c.onUpdate(d), c.onComplete()
      }), new WE([])
   }
   return !o && Nh.supports(c) ? new Nh(c) : new Pf(c)
};

function RP({
   protectedKeys: e,
   needsAnimating: t
}, n) {
   const r = e.hasOwnProperty(n) && t[n] !== !0;
   return t[n] = !1, r
}

function Iy(e, t, {
   delay: n = 0,
   transitionOverride: r,
   type: i
} = {}) {
   var o;
   let {
      transition: s = e.getDefaultTransition(),
      transitionEnd: a,
      ...l
   } = t;
   r && (s = r);
   const u = [],
      c = i && e.animationState && e.animationState.getState()[i];
   for (const f in l) {
      const d = e.getValue(f, (o = e.latestValues[f]) !== null && o !== void 0 ? o : null),
         g = l[f];
      if (g === void 0 || c && RP(c, f)) continue;
      const w = {
         delay: n,
         ...cf(s || {}, f)
      };
      let v = !1;
      if (window.MotionHandoffAnimation) {
         const p = ly(e);
         if (p) {
            const m = window.MotionHandoffAnimation(p, f, W);
            m !== null && (w.startTime = m, v = !0)
         }
      }
      xu(e, f), d.start(Tf(f, d, g, e.shouldReduceMotion && sy.has(f) ? {
         type: !1
      } : w, e, v));
      const S = d.animation;
      S && u.push(S)
   }
   return a && Promise.all(u).then(() => {
      W.update(() => {
         a && iC(e, a)
      })
   }), u
}

function ku(e, t, n = {}) {
   var r;
   const i = Oi(e, t, n.type === "exit" ? (r = e.presenceContext) === null || r === void 0 ? void 0 : r.custom : void 0);
   let {
      transition: o = e.getDefaultTransition() || {}
   } = i || {};
   n.transitionOverride && (o = n.transitionOverride);
   const s = i ? () => Promise.all(Iy(e, i, n)) : () => Promise.resolve(),
      a = e.variantChildren && e.variantChildren.size ? (u = 0) => {
         const {
            delayChildren: c = 0,
            staggerChildren: f,
            staggerDirection: d
         } = o;
         return kP(e, t, c + u, f, d, n)
      } : () => Promise.resolve(),
      {
         when: l
      } = o;
   if (l) {
      const [u, c] = l === "beforeChildren" ? [s, a] : [a, s];
      return u().then(() => c())
   } else return Promise.all([s(), a(n.delay)])
}

function kP(e, t, n = 0, r = 0, i = 1, o) {
   const s = [],
      a = (e.variantChildren.size - 1) * r,
      l = i === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
   return Array.from(e.variantChildren).sort(bP).forEach((u, c) => {
      u.notify("AnimationStart", t), s.push(ku(u, t, {
         ...o,
         delay: n + l(c)
      }).then(() => u.notify("AnimationComplete", t)))
   }), Promise.all(s)
}

function bP(e, t) {
   return e.sortNodePosition(t)
}

function AP(e, t, n = {}) {
   e.notify("AnimationStart", t);
   let r;
   if (Array.isArray(t)) {
      const i = t.map(o => ku(e, o, n));
      r = Promise.all(i)
   } else if (typeof t == "string") r = ku(e, t, n);
   else {
      const i = typeof t == "function" ? Oi(e, t, n.custom) : t;
      r = Promise.all(Iy(e, i, n))
   }
   return r.then(() => {
      e.notify("AnimationComplete", t)
   })
}

function Vy(e, t) {
   if (!Array.isArray(t)) return !1;
   const n = t.length;
   if (n !== e.length) return !1;
   for (let r = 0; r < n; r++)
      if (t[r] !== e[r]) return !1;
   return !0
}
const NP = Qc.length;

function By(e) {
   if (!e) return;
   if (!e.isControllingVariants) {
      const n = e.parent ? By(e.parent) || {} : {};
      return e.props.initial !== void 0 && (n.initial = e.props.initial), n
   }
   const t = {};
   for (let n = 0; n < NP; n++) {
      const r = Qc[n],
         i = e.props[r];
      (Ni(i) || i === !1) && (t[r] = i)
   }
   return t
}
const LP = [...Yc].reverse(),
   DP = Yc.length;

function OP(e) {
   return t => Promise.all(t.map(({
      animation: n,
      options: r
   }) => AP(e, n, r)))
}

function MP(e) {
   let t = OP(e),
      n = Lh(),
      r = !0;
   const i = l => (u, c) => {
      var f;
      const d = Oi(e, c, l === "exit" ? (f = e.presenceContext) === null || f === void 0 ? void 0 : f.custom : void 0);
      if (d) {
         const {
            transition: g,
            transitionEnd: w,
            ...v
         } = d;
         u = {
            ...u,
            ...v,
            ...w
         }
      }
      return u
   };

   function o(l) {
      t = l(e)
   }

   function s(l) {
      const {
         props: u
      } = e, c = By(e.parent) || {}, f = [], d = new Set;
      let g = {},
         w = 1 / 0;
      for (let S = 0; S < DP; S++) {
         const p = LP[S],
            m = n[p],
            y = u[p] !== void 0 ? u[p] : c[p],
            E = Ni(y),
            C = p === l ? m.isActive : null;
         C === !1 && (w = S);
         let T = y === c[p] && y !== u[p] && E;
         if (T && r && e.manuallyAnimateOnMount && (T = !1), m.protectedKeys = {
               ...g
            }, !m.isActive && C === null || !y && !m.prevProp || la(y) || typeof y == "boolean") continue;
         const R = jP(m.prevProp, y);
         let k = R || p === l && m.isActive && !T && E || S > w && E,
            N = !1;
         const L = Array.isArray(y) ? y : [y];
         let z = L.reduce(i(p), {});
         C === !1 && (z = {});
         const {
            prevResolvedValues: Je = {}
         } = m, Pt = {
            ...Je,
            ...z
         }, gn = O => {
            k = !0, d.has(O) && (N = !0, d.delete(O)), m.needsAnimating[O] = !0;
            const A = e.getValue(O);
            A && (A.liveStyle = !1)
         };
         for (const O in Pt) {
            const A = z[O],
               M = Je[O];
            if (g.hasOwnProperty(O)) continue;
            let j = !1;
            yu(A) && yu(M) ? j = !Vy(A, M) : j = A !== M, j ? A != null ? gn(O) : d.add(O) : A !== void 0 && d.has(O) ? gn(O) : m.protectedKeys[O] = !0
         }
         m.prevProp = y, m.prevResolvedValues = z, m.isActive && (g = {
            ...g,
            ...z
         }), r && e.blockInitialAnimation && (k = !1), k && (!(T && R) || N) && f.push(...L.map(O => ({
            animation: O,
            options: {
               type: p
            }
         })))
      }
      if (d.size) {
         const S = {};
         if (typeof u.initial != "boolean") {
            const p = Oi(e, Array.isArray(u.initial) ? u.initial[0] : u.initial);
            p && p.transition && (S.transition = p.transition)
         }
         d.forEach(p => {
            const m = e.getBaseTarget(p),
               y = e.getValue(p);
            y && (y.liveStyle = !0), S[p] = m ?? null
         }), f.push({
            animation: S
         })
      }
      let v = !!f.length;
      return r && (u.initial === !1 || u.initial === u.animate) && !e.manuallyAnimateOnMount && (v = !1), r = !1, v ? t(f) : Promise.resolve()
   }

   function a(l, u) {
      var c;
      if (n[l].isActive === u) return Promise.resolve();
      (c = e.variantChildren) === null || c === void 0 || c.forEach(d => {
         var g;
         return (g = d.animationState) === null || g === void 0 ? void 0 : g.setActive(l, u)
      }), n[l].isActive = u;
      const f = s(l);
      for (const d in n) n[d].protectedKeys = {};
      return f
   }
   return {
      animateChanges: s,
      setActive: a,
      setAnimateFunction: o,
      getState: () => n,
      reset: () => {
         n = Lh(), r = !0
      }
   }
}

function jP(e, t) {
   return typeof t == "string" ? t !== e : Array.isArray(t) ? !Vy(t, e) : !1
}

function xn(e = !1) {
   return {
      isActive: e,
      protectedKeys: {},
      needsAnimating: {},
      prevResolvedValues: {}
   }
}

function Lh() {
   return {
      animate: xn(!0),
      whileInView: xn(),
      whileHover: xn(),
      whileTap: xn(),
      whileDrag: xn(),
      whileFocus: xn(),
      exit: xn()
   }
}
class pn {
   constructor(t) {
      this.isMounted = !1, this.node = t
   }
   update() {}
}
class _P extends pn {
   constructor(t) {
      super(t), t.animationState || (t.animationState = MP(t))
   }
   updateAnimationControlsSubscription() {
      const {
         animate: t
      } = this.node.getProps();
      la(t) && (this.unmountControls = t.subscribe(this.node))
   }
   mount() {
      this.updateAnimationControlsSubscription()
   }
   update() {
      const {
         animate: t
      } = this.node.getProps(), {
         animate: n
      } = this.node.prevProps || {};
      t !== n && this.updateAnimationControlsSubscription()
   }
   unmount() {
      var t;
      this.node.animationState.reset(), (t = this.unmountControls) === null || t === void 0 || t.call(this)
   }
}
let FP = 0;
class IP extends pn {
   constructor() {
      super(...arguments), this.id = FP++
   }
   update() {
      if (!this.node.presenceContext) return;
      const {
         isPresent: t,
         onExitComplete: n
      } = this.node.presenceContext, {
         isPresent: r
      } = this.node.prevPresenceContext || {};
      if (!this.node.animationState || t === r) return;
      const i = this.node.animationState.setActive("exit", !t);
      n && !t && i.then(() => {
         n(this.id)
      })
   }
   mount() {
      const {
         register: t,
         onExitComplete: n
      } = this.node.presenceContext || {};
      n && n(this.id), t && (this.unmount = t(this.id))
   }
   unmount() {}
}
const VP = {
   animation: {
      Feature: _P
   },
   exit: {
      Feature: IP
   }
};

function _i(e, t, n, r = {
   passive: !0
}) {
   return e.addEventListener(t, n, r), () => e.removeEventListener(t, n)
}

function Qi(e) {
   return {
      point: {
         x: e.pageX,
         y: e.pageY
      }
   }
}
const BP = e => t => hf(t) && e(t, Qi(t));

function ui(e, t, n, r) {
   return _i(e, t, BP(n), r)
}
const Dh = (e, t) => Math.abs(e - t);

function zP(e, t) {
   const n = Dh(e.x, t.x),
      r = Dh(e.y, t.y);
   return Math.sqrt(n ** 2 + r ** 2)
}
class zy {
   constructor(t, n, {
      transformPagePoint: r,
      contextWindow: i,
      dragSnapToOrigin: o = !1
   } = {}) {
      if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
            if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
            const f = rl(this.lastMoveEventInfo, this.history),
               d = this.startEvent !== null,
               g = zP(f.offset, {
                  x: 0,
                  y: 0
               }) >= 3;
            if (!d && !g) return;
            const {
               point: w
            } = f, {
               timestamp: v
            } = de;
            this.history.push({
               ...w,
               timestamp: v
            });
            const {
               onStart: S,
               onMove: p
            } = this.handlers;
            d || (S && S(this.lastMoveEvent, f), this.startEvent = this.lastMoveEvent), p && p(this.lastMoveEvent, f)
         }, this.handlePointerMove = (f, d) => {
            this.lastMoveEvent = f, this.lastMoveEventInfo = nl(d, this.transformPagePoint), W.update(this.updatePoint, !0)
         }, this.handlePointerUp = (f, d) => {
            this.end();
            const {
               onEnd: g,
               onSessionEnd: w,
               resumeAnimation: v
            } = this.handlers;
            if (this.dragSnapToOrigin && v && v(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
            const S = rl(f.type === "pointercancel" ? this.lastMoveEventInfo : nl(d, this.transformPagePoint), this.history);
            this.startEvent && g && g(f, S), w && w(f, S)
         }, !hf(t)) return;
      this.dragSnapToOrigin = o, this.handlers = n, this.transformPagePoint = r, this.contextWindow = i || window;
      const s = Qi(t),
         a = nl(s, this.transformPagePoint),
         {
            point: l
         } = a,
         {
            timestamp: u
         } = de;
      this.history = [{
         ...l,
         timestamp: u
      }];
      const {
         onSessionStart: c
      } = n;
      c && c(t, rl(a, this.history)), this.removeListeners = Yi(ui(this.contextWindow, "pointermove", this.handlePointerMove), ui(this.contextWindow, "pointerup", this.handlePointerUp), ui(this.contextWindow, "pointercancel", this.handlePointerUp))
   }
   updateHandlers(t) {
      this.handlers = t
   }
   end() {
      this.removeListeners && this.removeListeners(), ln(this.updatePoint)
   }
}

function nl(e, t) {
   return t ? {
      point: t(e.point)
   } : e
}

function Oh(e, t) {
   return {
      x: e.x - t.x,
      y: e.y - t.y
   }
}

function rl({
   point: e
}, t) {
   return {
      point: e,
      delta: Oh(e, Uy(t)),
      offset: Oh(e, UP(t)),
      velocity: $P(t, .1)
   }
}

function UP(e) {
   return e[0]
}

function Uy(e) {
   return e[e.length - 1]
}

function $P(e, t) {
   if (e.length < 2) return {
      x: 0,
      y: 0
   };
   let n = e.length - 1,
      r = null;
   const i = Uy(e);
   for (; n >= 0 && (r = e[n], !(i.timestamp - r.timestamp > Dt(t)));) n--;
   if (!r) return {
      x: 0,
      y: 0
   };
   const o = Ot(i.timestamp - r.timestamp);
   if (o === 0) return {
      x: 0,
      y: 0
   };
   const s = {
      x: (i.x - r.x) / o,
      y: (i.y - r.y) / o
   };
   return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s
}
const $y = 1e-4,
   WP = 1 - $y,
   HP = 1 + $y,
   Wy = .01,
   KP = 0 - Wy,
   GP = 0 + Wy;

function Ce(e) {
   return e.max - e.min
}

function XP(e, t, n) {
   return Math.abs(e - t) <= n
}

function Mh(e, t, n, r = .5) {
   e.origin = r, e.originPoint = Q(t.min, t.max, e.origin), e.scale = Ce(n) / Ce(t), e.translate = Q(n.min, n.max, e.origin) - e.originPoint, (e.scale >= WP && e.scale <= HP || isNaN(e.scale)) && (e.scale = 1), (e.translate >= KP && e.translate <= GP || isNaN(e.translate)) && (e.translate = 0)
}

function ci(e, t, n, r) {
   Mh(e.x, t.x, n.x, r ? r.originX : void 0), Mh(e.y, t.y, n.y, r ? r.originY : void 0)
}

function jh(e, t, n) {
   e.min = n.min + t.min, e.max = e.min + Ce(t)
}

function YP(e, t, n) {
   jh(e.x, t.x, n.x), jh(e.y, t.y, n.y)
}

function _h(e, t, n) {
   e.min = t.min - n.min, e.max = e.min + Ce(t)
}

function fi(e, t, n) {
   _h(e.x, t.x, n.x), _h(e.y, t.y, n.y)
}

function QP(e, {
   min: t,
   max: n
}, r) {
   return t !== void 0 && e < t ? e = r ? Q(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? Q(n, e, r.max) : Math.min(e, n)), e
}

function Fh(e, t, n) {
   return {
      min: t !== void 0 ? e.min + t : void 0,
      max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
   }
}

function qP(e, {
   top: t,
   left: n,
   bottom: r,
   right: i
}) {
   return {
      x: Fh(e.x, n, i),
      y: Fh(e.y, t, r)
   }
}

function Ih(e, t) {
   let n = t.min - e.min,
      r = t.max - e.max;
   return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), {
      min: n,
      max: r
   }
}

function ZP(e, t) {
   return {
      x: Ih(e.x, t.x),
      y: Ih(e.y, t.y)
   }
}

function JP(e, t) {
   let n = .5;
   const r = Ce(e),
      i = Ce(t);
   return i > r ? n = Cr(t.min, t.max - r, e.min) : r > i && (n = Cr(e.min, e.max - i, t.min)), It(0, 1, n)
}

function e3(e, t) {
   const n = {};
   return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n
}
const bu = .35;

function t3(e = bu) {
   return e === !1 ? e = 0 : e === !0 && (e = bu), {
      x: Vh(e, "left", "right"),
      y: Vh(e, "top", "bottom")
   }
}

function Vh(e, t, n) {
   return {
      min: Bh(e, t),
      max: Bh(e, n)
   }
}

function Bh(e, t) {
   return typeof e == "number" ? e : e[t] || 0
}
const zh = () => ({
      translate: 0,
      scale: 1,
      origin: 0,
      originPoint: 0
   }),
   sr = () => ({
      x: zh(),
      y: zh()
   }),
   Uh = () => ({
      min: 0,
      max: 0
   }),
   ne = () => ({
      x: Uh(),
      y: Uh()
   });

function He(e) {
   return [e("x"), e("y")]
}

function Hy({
   top: e,
   left: t,
   right: n,
   bottom: r
}) {
   return {
      x: {
         min: t,
         max: n
      },
      y: {
         min: e,
         max: r
      }
   }
}

function n3({
   x: e,
   y: t
}) {
   return {
      top: t.min,
      right: e.max,
      bottom: t.max,
      left: e.min
   }
}

function r3(e, t) {
   if (!t) return e;
   const n = t({
         x: e.left,
         y: e.top
      }),
      r = t({
         x: e.right,
         y: e.bottom
      });
   return {
      top: n.y,
      left: n.x,
      bottom: r.y,
      right: r.x
   }
}

function il(e) {
   return e === void 0 || e === 1
}

function Au({
   scale: e,
   scaleX: t,
   scaleY: n
}) {
   return !il(e) || !il(t) || !il(n)
}

function Cn(e) {
   return Au(e) || Ky(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
}

function Ky(e) {
   return $h(e.x) || $h(e.y)
}

function $h(e) {
   return e && e !== "0%"
}

function js(e, t, n) {
   const r = e - n,
      i = t * r;
   return n + i
}

function Wh(e, t, n, r, i) {
   return i !== void 0 && (e = js(e, i, r)), js(e, n, r) + t
}

function Nu(e, t = 0, n = 1, r, i) {
   e.min = Wh(e.min, t, n, r, i), e.max = Wh(e.max, t, n, r, i)
}

function Gy(e, {
   x: t,
   y: n
}) {
   Nu(e.x, t.translate, t.scale, t.originPoint), Nu(e.y, n.translate, n.scale, n.originPoint)
}
const Hh = .999999999999,
   Kh = 1.0000000000001;

function i3(e, t, n, r = !1) {
   const i = n.length;
   if (!i) return;
   t.x = t.y = 1;
   let o, s;
   for (let a = 0; a < i; a++) {
      o = n[a], s = o.projectionDelta;
      const {
         visualElement: l
      } = o.options;
      l && l.props.style && l.props.style.display === "contents" || (r && o.options.layoutScroll && o.scroll && o !== o.root && lr(e, {
         x: -o.scroll.offset.x,
         y: -o.scroll.offset.y
      }), s && (t.x *= s.x.scale, t.y *= s.y.scale, Gy(e, s)), r && Cn(o.latestValues) && lr(e, o.latestValues))
   }
   t.x < Kh && t.x > Hh && (t.x = 1), t.y < Kh && t.y > Hh && (t.y = 1)
}

function ar(e, t) {
   e.min = e.min + t, e.max = e.max + t
}

function Gh(e, t, n, r, i = .5) {
   const o = Q(e.min, e.max, i);
   Nu(e, t, n, o, r)
}

function lr(e, t) {
   Gh(e.x, t.x, t.scaleX, t.scale, t.originX), Gh(e.y, t.y, t.scaleY, t.scale, t.originY)
}

function Xy(e, t) {
   return Hy(r3(e.getBoundingClientRect(), t))
}

function o3(e, t, n) {
   const r = Xy(e, n),
      {
         scroll: i
      } = t;
   return i && (ar(r.x, i.offset.x), ar(r.y, i.offset.y)), r
}
const Yy = ({
      current: e
   }) => e ? e.ownerDocument.defaultView : null,
   s3 = new WeakMap;
class a3 {
   constructor(t) {
      this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
         x: 0,
         y: 0
      }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = ne(), this.visualElement = t
   }
   start(t, {
      snapToCursor: n = !1
   } = {}) {
      const {
         presenceContext: r
      } = this.visualElement;
      if (r && r.isPresent === !1) return;
      const i = c => {
            const {
               dragSnapToOrigin: f
            } = this.getProps();
            f ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(Qi(c).point)
         },
         o = (c, f) => {
            const {
               drag: d,
               dragPropagation: g,
               onDragStart: w
            } = this.getProps();
            if (d && !g && (this.openDragLock && this.openDragLock(), this.openDragLock = JE(d), !this.openDragLock)) return;
            this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), He(S => {
               let p = this.getAxisMotionValue(S).get() || 0;
               if (vt.test(p)) {
                  const {
                     projection: m
                  } = this.visualElement;
                  if (m && m.layout) {
                     const y = m.layout.layoutBox[S];
                     y && (p = Ce(y) * (parseFloat(p) / 100))
                  }
               }
               this.originPoint[S] = p
            }), w && W.postRender(() => w(c, f)), xu(this.visualElement, "transform");
            const {
               animationState: v
            } = this.visualElement;
            v && v.setActive("whileDrag", !0)
         },
         s = (c, f) => {
            const {
               dragPropagation: d,
               dragDirectionLock: g,
               onDirectionLock: w,
               onDrag: v
            } = this.getProps();
            if (!d && !this.openDragLock) return;
            const {
               offset: S
            } = f;
            if (g && this.currentDirection === null) {
               this.currentDirection = l3(S), this.currentDirection !== null && w && w(this.currentDirection);
               return
            }
            this.updateAxis("x", f.point, S), this.updateAxis("y", f.point, S), this.visualElement.render(), v && v(c, f)
         },
         a = (c, f) => this.stop(c, f),
         l = () => He(c => {
            var f;
            return this.getAnimationState(c) === "paused" && ((f = this.getAxisMotionValue(c).animation) === null || f === void 0 ? void 0 : f.play())
         }),
         {
            dragSnapToOrigin: u
         } = this.getProps();
      this.panSession = new zy(t, {
         onSessionStart: i,
         onStart: o,
         onMove: s,
         onSessionEnd: a,
         resumeAnimation: l
      }, {
         transformPagePoint: this.visualElement.getTransformPagePoint(),
         dragSnapToOrigin: u,
         contextWindow: Yy(this.visualElement)
      })
   }
   stop(t, n) {
      const r = this.isDragging;
      if (this.cancel(), !r) return;
      const {
         velocity: i
      } = n;
      this.startAnimation(i);
      const {
         onDragEnd: o
      } = this.getProps();
      o && W.postRender(() => o(t, n))
   }
   cancel() {
      this.isDragging = !1;
      const {
         projection: t,
         animationState: n
      } = this.visualElement;
      t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
      const {
         dragPropagation: r
      } = this.getProps();
      !r && this.openDragLock && (this.openDragLock(), this.openDragLock = null), n && n.setActive("whileDrag", !1)
   }
   updateAxis(t, n, r) {
      const {
         drag: i
      } = this.getProps();
      if (!r || !Po(t, i, this.currentDirection)) return;
      const o = this.getAxisMotionValue(t);
      let s = this.originPoint[t] + r[t];
      this.constraints && this.constraints[t] && (s = QP(s, this.constraints[t], this.elastic[t])), o.set(s)
   }
   resolveConstraints() {
      var t;
      const {
         dragConstraints: n,
         dragElastic: r
      } = this.getProps(), i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, o = this.constraints;
      n && ir(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && i ? this.constraints = qP(i.layoutBox, n) : this.constraints = !1, this.elastic = t3(r), o !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && He(s => {
         this.constraints !== !1 && this.getAxisMotionValue(s) && (this.constraints[s] = e3(i.layoutBox[s], this.constraints[s]))
      })
   }
   resolveRefConstraints() {
      const {
         dragConstraints: t,
         onMeasureDragConstraints: n
      } = this.getProps();
      if (!t || !ir(t)) return !1;
      const r = t.current,
         {
            projection: i
         } = this.visualElement;
      if (!i || !i.layout) return !1;
      const o = o3(r, i.root, this.visualElement.getTransformPagePoint());
      let s = ZP(i.layout.layoutBox, o);
      if (n) {
         const a = n(n3(s));
         this.hasMutatedConstraints = !!a, a && (s = Hy(a))
      }
      return s
   }
   startAnimation(t) {
      const {
         drag: n,
         dragMomentum: r,
         dragElastic: i,
         dragTransition: o,
         dragSnapToOrigin: s,
         onDragTransitionEnd: a
      } = this.getProps(), l = this.constraints || {}, u = He(c => {
         if (!Po(c, n, this.currentDirection)) return;
         let f = l && l[c] || {};
         s && (f = {
            min: 0,
            max: 0
         });
         const d = i ? 200 : 1e6,
            g = i ? 40 : 1e7,
            w = {
               type: "inertia",
               velocity: r ? t[c] : 0,
               bounceStiffness: d,
               bounceDamping: g,
               timeConstant: 750,
               restDelta: 1,
               restSpeed: 10,
               ...o,
               ...f
            };
         return this.startAxisValueAnimation(c, w)
      });
      return Promise.all(u).then(a)
   }
   startAxisValueAnimation(t, n) {
      const r = this.getAxisMotionValue(t);
      return xu(this.visualElement, t), r.start(Tf(t, r, 0, n, this.visualElement, !1))
   }
   stopAnimation() {
      He(t => this.getAxisMotionValue(t).stop())
   }
   pauseAnimation() {
      He(t => {
         var n;
         return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.pause()
      })
   }
   getAnimationState(t) {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.state
   }
   getAxisMotionValue(t) {
      const n = `_drag${t.toUpperCase()}`,
         r = this.visualElement.getProps(),
         i = r[n];
      return i || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
   }
   snapToCursor(t) {
      He(n => {
         const {
            drag: r
         } = this.getProps();
         if (!Po(n, r, this.currentDirection)) return;
         const {
            projection: i
         } = this.visualElement, o = this.getAxisMotionValue(n);
         if (i && i.layout) {
            const {
               min: s,
               max: a
            } = i.layout.layoutBox[n];
            o.set(t[n] - Q(s, a, .5))
         }
      })
   }
   scalePositionWithinConstraints() {
      if (!this.visualElement.current) return;
      const {
         drag: t,
         dragConstraints: n
      } = this.getProps(), {
         projection: r
      } = this.visualElement;
      if (!ir(n) || !r || !this.constraints) return;
      this.stopAnimation();
      const i = {
         x: 0,
         y: 0
      };
      He(s => {
         const a = this.getAxisMotionValue(s);
         if (a && this.constraints !== !1) {
            const l = a.get();
            i[s] = JP({
               min: l,
               max: l
            }, this.constraints[s])
         }
      });
      const {
         transformTemplate: o
      } = this.visualElement.getProps();
      this.visualElement.current.style.transform = o ? o({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), He(s => {
         if (!Po(s, t, null)) return;
         const a = this.getAxisMotionValue(s),
            {
               min: l,
               max: u
            } = this.constraints[s];
         a.set(Q(l, u, i[s]))
      })
   }
   addListeners() {
      if (!this.visualElement.current) return;
      s3.set(this.visualElement, this);
      const t = this.visualElement.current,
         n = ui(t, "pointerdown", l => {
            const {
               drag: u,
               dragListener: c = !0
            } = this.getProps();
            u && c && this.start(l)
         }),
         r = () => {
            const {
               dragConstraints: l
            } = this.getProps();
            ir(l) && l.current && (this.constraints = this.resolveRefConstraints())
         },
         {
            projection: i
         } = this.visualElement,
         o = i.addEventListener("measure", r);
      i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), W.read(r);
      const s = _i(window, "resize", () => this.scalePositionWithinConstraints()),
         a = i.addEventListener("didUpdate", ({
            delta: l,
            hasLayoutChanged: u
         }) => {
            this.isDragging && u && (He(c => {
               const f = this.getAxisMotionValue(c);
               f && (this.originPoint[c] += l[c].translate, f.set(f.get() + l[c].translate))
            }), this.visualElement.render())
         });
      return () => {
         s(), n(), o(), a && a()
      }
   }
   getProps() {
      const t = this.visualElement.getProps(),
         {
            drag: n = !1,
            dragDirectionLock: r = !1,
            dragPropagation: i = !1,
            dragConstraints: o = !1,
            dragElastic: s = bu,
            dragMomentum: a = !0
         } = t;
      return {
         ...t,
         drag: n,
         dragDirectionLock: r,
         dragPropagation: i,
         dragConstraints: o,
         dragElastic: s,
         dragMomentum: a
      }
   }
}

function Po(e, t, n) {
   return (t === !0 || t === e) && (n === null || n === e)
}

function l3(e, t = 10) {
   let n = null;
   return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n
}
class u3 extends pn {
   constructor(t) {
      super(t), this.removeGroupControls = Ie, this.removeListeners = Ie, this.controls = new a3(t)
   }
   mount() {
      const {
         dragControls: t
      } = this.node.getProps();
      t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Ie
   }
   unmount() {
      this.removeGroupControls(), this.removeListeners()
   }
}
const Xh = e => (t, n) => {
   e && W.postRender(() => e(t, n))
};
class c3 extends pn {
   constructor() {
      super(...arguments), this.removePointerDownListener = Ie
   }
   onPointerDown(t) {
      this.session = new zy(t, this.createPanHandlers(), {
         transformPagePoint: this.node.getTransformPagePoint(),
         contextWindow: Yy(this.node)
      })
   }
   createPanHandlers() {
      const {
         onPanSessionStart: t,
         onPanStart: n,
         onPan: r,
         onPanEnd: i
      } = this.node.getProps();
      return {
         onSessionStart: Xh(t),
         onStart: Xh(n),
         onMove: r,
         onEnd: (o, s) => {
            delete this.session, i && W.postRender(() => i(o, s))
         }
      }
   }
   mount() {
      this.removePointerDownListener = ui(this.node.current, "pointerdown", t => this.onPointerDown(t))
   }
   update() {
      this.session && this.session.updateHandlers(this.createPanHandlers())
   }
   unmount() {
      this.removePointerDownListener(), this.session && this.session.end()
   }
}
const Xo = {
   hasAnimatedSinceResize: !0,
   hasEverUpdated: !1
};

function Yh(e, t) {
   return t.max === t.min ? 0 : e / (t.max - t.min) * 100
}
const Hr = {
      correct: (e, t) => {
         if (!t.target) return e;
         if (typeof e == "string")
            if (_.test(e)) e = parseFloat(e);
            else return e;
         const n = Yh(e, t.target.x),
            r = Yh(e, t.target.y);
         return `${n}% ${r}%`
      }
   },
   f3 = {
      correct: (e, {
         treeScale: t,
         projectionDelta: n
      }) => {
         const r = e,
            i = un.parse(e);
         if (i.length > 5) return r;
         const o = un.createTransformer(e),
            s = typeof i[0] != "number" ? 1 : 0,
            a = n.x.scale * t.x,
            l = n.y.scale * t.y;
         i[0 + s] /= a, i[1 + s] /= l;
         const u = Q(a, l, .5);
         return typeof i[2 + s] == "number" && (i[2 + s] /= u), typeof i[3 + s] == "number" && (i[3 + s] /= u), o(i)
      }
   };
class d3 extends h.Component {
   componentDidMount() {
      const {
         visualElement: t,
         layoutGroup: n,
         switchLayoutGroup: r,
         layoutId: i
      } = this.props, {
         projection: o
      } = t;
      yE(h3), o && (n.group && n.group.add(o), r && r.register && i && r.register(o), o.root.didUpdate(), o.addEventListener("animationComplete", () => {
         this.safeToRemove()
      }), o.setOptions({
         ...o.options,
         onExitComplete: () => this.safeToRemove()
      })), Xo.hasEverUpdated = !0
   }
   getSnapshotBeforeUpdate(t) {
      const {
         layoutDependency: n,
         visualElement: r,
         drag: i,
         isPresent: o
      } = this.props, s = r.projection;
      return s && (s.isPresent = o, i || t.layoutDependency !== n || n === void 0 ? s.willUpdate() : this.safeToRemove(), t.isPresent !== o && (o ? s.promote() : s.relegate() || W.postRender(() => {
         const a = s.getStack();
         (!a || !a.members.length) && this.safeToRemove()
      }))), null
   }
   componentDidUpdate() {
      const {
         projection: t
      } = this.props.visualElement;
      t && (t.root.didUpdate(), Zc.postRender(() => {
         !t.currentAnimation && t.isLead() && this.safeToRemove()
      }))
   }
   componentWillUnmount() {
      const {
         visualElement: t,
         layoutGroup: n,
         switchLayoutGroup: r
      } = this.props, {
         projection: i
      } = t;
      i && (i.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(i), r && r.deregister && r.deregister(i))
   }
   safeToRemove() {
      const {
         safeToRemove: t
      } = this.props;
      t && t()
   }
   render() {
      return null
   }
}

function Qy(e) {
   const [t, n] = Dg(), r = h.useContext(Wc);
   return x.jsx(d3, {
      ...e,
      layoutGroup: r,
      switchLayoutGroup: h.useContext(Bg),
      isPresent: t,
      safeToRemove: n
   })
}
const h3 = {
   borderRadius: {
      ...Hr,
      applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
   },
   borderTopLeftRadius: Hr,
   borderTopRightRadius: Hr,
   borderBottomLeftRadius: Hr,
   borderBottomRightRadius: Hr,
   boxShadow: f3
};

function p3(e, t, n) {
   const r = xe(e) ? e : Mi(e);
   return r.start(Tf("", r, t, n)), r.animation
}

function m3(e) {
   return e instanceof SVGElement && e.tagName !== "svg"
}
const g3 = (e, t) => e.depth - t.depth;
class y3 {
   constructor() {
      this.children = [], this.isDirty = !1
   }
   add(t) {
      pf(this.children, t), this.isDirty = !0
   }
   remove(t) {
      mf(this.children, t), this.isDirty = !0
   }
   forEach(t) {
      this.isDirty && this.children.sort(g3), this.isDirty = !1, this.children.forEach(t)
   }
}

function v3(e, t) {
   const n = wt.now(),
      r = ({
         timestamp: i
      }) => {
         const o = i - n;
         o >= t && (ln(r), e(o - t))
      };
   return W.read(r, !0), () => ln(r)
}
const qy = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
   w3 = qy.length,
   Qh = e => typeof e == "string" ? parseFloat(e) : e,
   qh = e => typeof e == "number" || _.test(e);

function x3(e, t, n, r, i, o) {
   i ? (e.opacity = Q(0, n.opacity !== void 0 ? n.opacity : 1, S3(r)), e.opacityExit = Q(t.opacity !== void 0 ? t.opacity : 1, 0, E3(r))) : o && (e.opacity = Q(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
   for (let s = 0; s < w3; s++) {
      const a = `border${qy[s]}Radius`;
      let l = Zh(t, a),
         u = Zh(n, a);
      if (l === void 0 && u === void 0) continue;
      l || (l = 0), u || (u = 0), l === 0 || u === 0 || qh(l) === qh(u) ? (e[a] = Math.max(Q(Qh(l), Qh(u), r), 0), (vt.test(u) || vt.test(l)) && (e[a] += "%")) : e[a] = u
   }(t.rotate || n.rotate) && (e.rotate = Q(t.rotate || 0, n.rotate || 0, r))
}

function Zh(e, t) {
   return e[t] !== void 0 ? e[t] : e.borderRadius
}
const S3 = Zy(0, .5, my),
   E3 = Zy(.5, .95, Ie);

function Zy(e, t, n) {
   return r => r < e ? 0 : r > t ? 1 : n(Cr(e, t, r))
}

function Jh(e, t) {
   e.min = t.min, e.max = t.max
}

function We(e, t) {
   Jh(e.x, t.x), Jh(e.y, t.y)
}

function ep(e, t) {
   e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin
}

function tp(e, t, n, r, i) {
   return e -= t, e = js(e, 1 / n, r), i !== void 0 && (e = js(e, 1 / i, r)), e
}

function C3(e, t = 0, n = 1, r = .5, i, o = e, s = e) {
   if (vt.test(t) && (t = parseFloat(t), t = Q(s.min, s.max, t / 100) - s.min), typeof t != "number") return;
   let a = Q(o.min, o.max, r);
   e === o && (a -= t), e.min = tp(e.min, t, n, a, i), e.max = tp(e.max, t, n, a, i)
}

function np(e, t, [n, r, i], o, s) {
   C3(e, t[n], t[r], t[i], t.scale, o, s)
}
const P3 = ["x", "scaleX", "originX"],
   T3 = ["y", "scaleY", "originY"];

function rp(e, t, n, r) {
   np(e.x, t, P3, n ? n.x : void 0, r ? r.x : void 0), np(e.y, t, T3, n ? n.y : void 0, r ? r.y : void 0)
}

function ip(e) {
   return e.translate === 0 && e.scale === 1
}

function Jy(e) {
   return ip(e.x) && ip(e.y)
}

function op(e, t) {
   return e.min === t.min && e.max === t.max
}

function R3(e, t) {
   return op(e.x, t.x) && op(e.y, t.y)
}

function sp(e, t) {
   return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max)
}

function ev(e, t) {
   return sp(e.x, t.x) && sp(e.y, t.y)
}

function ap(e) {
   return Ce(e.x) / Ce(e.y)
}

function lp(e, t) {
   return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint
}
class k3 {
   constructor() {
      this.members = []
   }
   add(t) {
      pf(this.members, t), t.scheduleRender()
   }
   remove(t) {
      if (mf(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
         const n = this.members[this.members.length - 1];
         n && this.promote(n)
      }
   }
   relegate(t) {
      const n = this.members.findIndex(i => t === i);
      if (n === 0) return !1;
      let r;
      for (let i = n; i >= 0; i--) {
         const o = this.members[i];
         if (o.isPresent !== !1) {
            r = o;
            break
         }
      }
      return r ? (this.promote(r), !0) : !1
   }
   promote(t, n) {
      const r = this.lead;
      if (t !== r && (this.prevLead = r, this.lead = t, t.show(), r)) {
         r.instance && r.scheduleRender(), t.scheduleRender(), t.resumeFrom = r, n && (t.resumeFrom.preserveOpacity = !0), r.snapshot && (t.snapshot = r.snapshot, t.snapshot.latestValues = r.animationValues || r.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
         const {
            crossfade: i
         } = t.options;
         i === !1 && r.hide()
      }
   }
   exitAnimationComplete() {
      this.members.forEach(t => {
         const {
            options: n,
            resumingFrom: r
         } = t;
         n.onExitComplete && n.onExitComplete(), r && r.options.onExitComplete && r.options.onExitComplete()
      })
   }
   scheduleRender() {
      this.members.forEach(t => {
         t.instance && t.scheduleRender(!1)
      })
   }
   removeLeadSnapshot() {
      this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
   }
}

function b3(e, t, n) {
   let r = "";
   const i = e.x.translate / t.x,
      o = e.y.translate / t.y,
      s = (n == null ? void 0 : n.z) || 0;
   if ((i || o || s) && (r = `translate3d(${i}px, ${o}px, ${s}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1/t.x}, ${1/t.y}) `), n) {
      const {
         transformPerspective: u,
         rotate: c,
         rotateX: f,
         rotateY: d,
         skewX: g,
         skewY: w
      } = n;
      u && (r = `perspective(${u}px) ${r}`), c && (r += `rotate(${c}deg) `), f && (r += `rotateX(${f}deg) `), d && (r += `rotateY(${d}deg) `), g && (r += `skewX(${g}deg) `), w && (r += `skewY(${w}deg) `)
   }
   const a = e.x.scale * t.x,
      l = e.y.scale * t.y;
   return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none"
}
const ol = ["", "X", "Y", "Z"],
   A3 = {
      visibility: "hidden"
   },
   up = 1e3;
let N3 = 0;

function sl(e, t, n, r) {
   const {
      latestValues: i
   } = t;
   i[e] && (n[e] = i[e], t.setStaticValue(e, 0), r && (r[e] = 0))
}

function tv(e) {
   if (e.hasCheckedOptimisedAppear = !0, e.root === e) return;
   const {
      visualElement: t
   } = e.options;
   if (!t) return;
   const n = ly(t);
   if (window.MotionHasOptimisedAnimation(n, "transform")) {
      const {
         layout: i,
         layoutId: o
      } = e.options;
      window.MotionCancelOptimisedAnimation(n, "transform", W, !(i || o))
   }
   const {
      parent: r
   } = e;
   r && !r.hasCheckedOptimisedAppear && tv(r)
}

function nv({
   attachResizeListener: e,
   defaultParent: t,
   measureScroll: n,
   checkIsScrollRoot: r,
   resetTransform: i
}) {
   return class {
      constructor(s = {}, a = t == null ? void 0 : t()) {
         this.id = N3++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
            x: 1,
            y: 1
         }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
            this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
         }, this.updateProjection = () => {
            this.projectionUpdateScheduled = !1, this.nodes.forEach(O3), this.nodes.forEach(I3), this.nodes.forEach(V3), this.nodes.forEach(M3)
         }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = s, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
         for (let l = 0; l < this.path.length; l++) this.path[l].shouldResetTransform = !0;
         this.root === this && (this.nodes = new y3)
      }
      addEventListener(s, a) {
         return this.eventHandlers.has(s) || this.eventHandlers.set(s, new gf), this.eventHandlers.get(s).add(a)
      }
      notifyListeners(s, ...a) {
         const l = this.eventHandlers.get(s);
         l && l.notify(...a)
      }
      hasListeners(s) {
         return this.eventHandlers.has(s)
      }
      mount(s, a = this.root.hasTreeAnimated) {
         if (this.instance) return;
         this.isSVG = m3(s), this.instance = s;
         const {
            layoutId: l,
            layout: u,
            visualElement: c
         } = this.options;
         if (c && !c.current && c.mount(s), this.root.nodes.add(this), this.parent && this.parent.children.add(this), a && (u || l) && (this.isLayoutDirty = !0), e) {
            let f;
            const d = () => this.root.updateBlockedByResize = !1;
            e(s, () => {
               this.root.updateBlockedByResize = !0, f && f(), f = v3(d, 250), Xo.hasAnimatedSinceResize && (Xo.hasAnimatedSinceResize = !1, this.nodes.forEach(fp))
            })
         }
         l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && c && (l || u) && this.addEventListener("didUpdate", ({
            delta: f,
            hasLayoutChanged: d,
            hasRelativeLayoutChanged: g,
            layout: w
         }) => {
            if (this.isTreeAnimationBlocked()) {
               this.target = void 0, this.relativeTarget = void 0;
               return
            }
            const v = this.options.transition || c.getDefaultTransition() || W3,
               {
                  onLayoutAnimationStart: S,
                  onLayoutAnimationComplete: p
               } = c.getProps(),
               m = !this.targetLayout || !ev(this.targetLayout, w),
               y = !d && g;
            if (this.options.layoutRoot || this.resumeFrom || y || d && (m || !this.currentAnimation)) {
               this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(f, y);
               const E = {
                  ...cf(v, "layout"),
                  onPlay: S,
                  onComplete: p
               };
               (c.shouldReduceMotion || this.options.layoutRoot) && (E.delay = 0, E.type = !1), this.startAnimation(E)
            } else d || fp(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
            this.targetLayout = w
         })
      }
      unmount() {
         this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
         const s = this.getStack();
         s && s.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, ln(this.updateProjection)
      }
      blockUpdate() {
         this.updateManuallyBlocked = !0
      }
      unblockUpdate() {
         this.updateManuallyBlocked = !1
      }
      isUpdateBlocked() {
         return this.updateManuallyBlocked || this.updateBlockedByResize
      }
      isTreeAnimationBlocked() {
         return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
      }
      startUpdate() {
         this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(B3), this.animationId++)
      }
      getTransformTemplate() {
         const {
            visualElement: s
         } = this.options;
         return s && s.getProps().transformTemplate
      }
      willUpdate(s = !0) {
         if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
            this.options.onExitComplete && this.options.onExitComplete();
            return
         }
         if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && tv(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
         this.isLayoutDirty = !0;
         for (let c = 0; c < this.path.length; c++) {
            const f = this.path[c];
            f.shouldResetTransform = !0, f.updateScroll("snapshot"), f.options.layoutRoot && f.willUpdate(!1)
         }
         const {
            layoutId: a,
            layout: l
         } = this.options;
         if (a === void 0 && !l) return;
         const u = this.getTransformTemplate();
         this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0, this.updateSnapshot(), s && this.notifyListeners("willUpdate")
      }
      update() {
         if (this.updateScheduled = !1, this.isUpdateBlocked()) {
            this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(cp);
            return
         }
         this.isUpdating || this.nodes.forEach(_3), this.isUpdating = !1, this.nodes.forEach(F3), this.nodes.forEach(L3), this.nodes.forEach(D3), this.clearAllSnapshots();
         const a = wt.now();
         de.delta = It(0, 1e3 / 60, a - de.timestamp), de.timestamp = a, de.isProcessing = !0, Qa.update.process(de), Qa.preRender.process(de), Qa.render.process(de), de.isProcessing = !1
      }
      didUpdate() {
         this.updateScheduled || (this.updateScheduled = !0, Zc.read(this.scheduleUpdate))
      }
      clearAllSnapshots() {
         this.nodes.forEach(j3), this.sharedNodes.forEach(z3)
      }
      scheduleUpdateProjection() {
         this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, W.preRender(this.updateProjection, !1, !0))
      }
      scheduleCheckAfterUnmount() {
         W.postRender(() => {
            this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
         })
      }
      updateSnapshot() {
         this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !Ce(this.snapshot.measuredBox.x) && !Ce(this.snapshot.measuredBox.y) && (this.snapshot = void 0))
      }
      updateLayout() {
         if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
         if (this.resumeFrom && !this.resumeFrom.instance)
            for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
         const s = this.layout;
         this.layout = this.measure(!1), this.layoutCorrected = ne(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
         const {
            visualElement: a
         } = this.options;
         a && a.notify("LayoutMeasure", this.layout.layoutBox, s ? s.layoutBox : void 0)
      }
      updateScroll(s = "measure") {
         let a = !!(this.options.layoutScroll && this.instance);
         if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === s && (a = !1), a) {
            const l = r(this.instance);
            this.scroll = {
               animationId: this.root.animationId,
               phase: s,
               isRoot: l,
               offset: n(this.instance),
               wasRoot: this.scroll ? this.scroll.isRoot : l
            }
         }
      }
      resetTransform() {
         if (!i) return;
         const s = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
            a = this.projectionDelta && !Jy(this.projectionDelta),
            l = this.getTransformTemplate(),
            u = l ? l(this.latestValues, "") : void 0,
            c = u !== this.prevTransformTemplateValue;
         s && (a || Cn(this.latestValues) || c) && (i(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender())
      }
      measure(s = !0) {
         const a = this.measurePageBox();
         let l = this.removeElementScroll(a);
         return s && (l = this.removeTransform(l)), H3(l), {
            animationId: this.root.animationId,
            measuredBox: a,
            layoutBox: l,
            latestValues: {},
            source: this.id
         }
      }
      measurePageBox() {
         var s;
         const {
            visualElement: a
         } = this.options;
         if (!a) return ne();
         const l = a.measureViewportBox();
         if (!(((s = this.scroll) === null || s === void 0 ? void 0 : s.wasRoot) || this.path.some(K3))) {
            const {
               scroll: c
            } = this.root;
            c && (ar(l.x, c.offset.x), ar(l.y, c.offset.y))
         }
         return l
      }
      removeElementScroll(s) {
         var a;
         const l = ne();
         if (We(l, s), !((a = this.scroll) === null || a === void 0) && a.wasRoot) return l;
         for (let u = 0; u < this.path.length; u++) {
            const c = this.path[u],
               {
                  scroll: f,
                  options: d
               } = c;
            c !== this.root && f && d.layoutScroll && (f.wasRoot && We(l, s), ar(l.x, f.offset.x), ar(l.y, f.offset.y))
         }
         return l
      }
      applyTransform(s, a = !1) {
         const l = ne();
         We(l, s);
         for (let u = 0; u < this.path.length; u++) {
            const c = this.path[u];
            !a && c.options.layoutScroll && c.scroll && c !== c.root && lr(l, {
               x: -c.scroll.offset.x,
               y: -c.scroll.offset.y
            }), Cn(c.latestValues) && lr(l, c.latestValues)
         }
         return Cn(this.latestValues) && lr(l, this.latestValues), l
      }
      removeTransform(s) {
         const a = ne();
         We(a, s);
         for (let l = 0; l < this.path.length; l++) {
            const u = this.path[l];
            if (!u.instance || !Cn(u.latestValues)) continue;
            Au(u.latestValues) && u.updateSnapshot();
            const c = ne(),
               f = u.measurePageBox();
            We(c, f), rp(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c)
         }
         return Cn(this.latestValues) && rp(a, this.latestValues), a
      }
      setTargetDelta(s) {
         this.targetDelta = s, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
      }
      setOptions(s) {
         this.options = {
            ...this.options,
            ...s,
            crossfade: s.crossfade !== void 0 ? s.crossfade : !0
         }
      }
      clearMeasurements() {
         this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
      }
      forceRelativeParentToResolveTarget() {
         this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== de.timestamp && this.relativeParent.resolveTargetDelta(!0)
      }
      resolveTargetDelta(s = !1) {
         var a;
         const l = this.getLead();
         this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
         const u = !!this.resumingFrom || this !== l;
         if (!(s || u && this.isSharedProjectionDirty || this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
         const {
            layout: f,
            layoutId: d
         } = this.options;
         if (!(!this.layout || !(f || d))) {
            if (this.resolvedRelativeTargetAt = de.timestamp, !this.targetDelta && !this.relativeTarget) {
               const g = this.getClosestProjectingParent();
               g && g.layout && this.animationProgress !== 1 ? (this.relativeParent = g, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ne(), this.relativeTargetOrigin = ne(), fi(this.relativeTargetOrigin, this.layout.layoutBox, g.layout.layoutBox), We(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
            }
            if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = ne(), this.targetWithTransforms = ne()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), YP(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : We(this.target, this.layout.layoutBox), Gy(this.target, this.targetDelta)) : We(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
               this.attemptToResolveRelativeTarget = !1;
               const g = this.getClosestProjectingParent();
               g && !!g.resumingFrom == !!this.resumingFrom && !g.options.layoutScroll && g.target && this.animationProgress !== 1 ? (this.relativeParent = g, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ne(), this.relativeTargetOrigin = ne(), fi(this.relativeTargetOrigin, this.target, g.target), We(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
            }
         }
      }
      getClosestProjectingParent() {
         if (!(!this.parent || Au(this.parent.latestValues) || Ky(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
      }
      isProjecting() {
         return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
      }
      calcProjection() {
         var s;
         const a = this.getLead(),
            l = !!this.resumingFrom || this !== a;
         let u = !0;
         if ((this.isProjectionDirty || !((s = this.parent) === null || s === void 0) && s.isProjectionDirty) && (u = !1), l && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1), this.resolvedRelativeTargetAt === de.timestamp && (u = !1), u) return;
         const {
            layout: c,
            layoutId: f
         } = this.options;
         if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(c || f)) return;
         We(this.layoutCorrected, this.layout.layoutBox);
         const d = this.treeScale.x,
            g = this.treeScale.y;
         i3(this.layoutCorrected, this.treeScale, this.path, l), a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox, a.targetWithTransforms = ne());
         const {
            target: w
         } = a;
         if (!w) {
            this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
            return
         }!this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (ep(this.prevProjectionDelta.x, this.projectionDelta.x), ep(this.prevProjectionDelta.y, this.projectionDelta.y)), ci(this.projectionDelta, this.layoutCorrected, w, this.latestValues), (this.treeScale.x !== d || this.treeScale.y !== g || !lp(this.projectionDelta.x, this.prevProjectionDelta.x) || !lp(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", w))
      }
      hide() {
         this.isVisible = !1
      }
      show() {
         this.isVisible = !0
      }
      scheduleRender(s = !0) {
         var a;
         if ((a = this.options.visualElement) === null || a === void 0 || a.scheduleRender(), s) {
            const l = this.getStack();
            l && l.scheduleRender()
         }
         this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
      }
      createProjectionDeltas() {
         this.prevProjectionDelta = sr(), this.projectionDelta = sr(), this.projectionDeltaWithTransform = sr()
      }
      setAnimationOrigin(s, a = !1) {
         const l = this.snapshot,
            u = l ? l.latestValues : {},
            c = {
               ...this.latestValues
            },
            f = sr();
         (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
         const d = ne(),
            g = l ? l.source : void 0,
            w = this.layout ? this.layout.source : void 0,
            v = g !== w,
            S = this.getStack(),
            p = !S || S.members.length <= 1,
            m = !!(v && !p && this.options.crossfade === !0 && !this.path.some($3));
         this.animationProgress = 0;
         let y;
         this.mixTargetDelta = E => {
            const C = E / 1e3;
            dp(f.x, s.x, C), dp(f.y, s.y, C), this.setTargetDelta(f), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (fi(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox), U3(this.relativeTarget, this.relativeTargetOrigin, d, C), y && R3(this.relativeTarget, y) && (this.isProjectionDirty = !1), y || (y = ne()), We(y, this.relativeTarget)), v && (this.animationValues = c, x3(c, u, this.latestValues, C, m, p)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = C
         }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
      }
      startAnimation(s) {
         this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (ln(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = W.update(() => {
            Xo.hasAnimatedSinceResize = !0, this.currentAnimation = p3(0, up, {
               ...s,
               onUpdate: a => {
                  this.mixTargetDelta(a), s.onUpdate && s.onUpdate(a)
               },
               onStop: () => {},
               onComplete: () => {
                  s.onComplete && s.onComplete(), this.completeAnimation()
               }
            }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
         })
      }
      completeAnimation() {
         this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
         const s = this.getStack();
         s && s.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
      }
      finishAnimation() {
         this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(up), this.currentAnimation.stop()), this.completeAnimation()
      }
      applyTransformsToTarget() {
         const s = this.getLead();
         let {
            targetWithTransforms: a,
            target: l,
            layout: u,
            latestValues: c
         } = s;
         if (!(!a || !l || !u)) {
            if (this !== s && this.layout && u && rv(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
               l = this.target || ne();
               const f = Ce(this.layout.layoutBox.x);
               l.x.min = s.target.x.min, l.x.max = l.x.min + f;
               const d = Ce(this.layout.layoutBox.y);
               l.y.min = s.target.y.min, l.y.max = l.y.min + d
            }
            We(a, l), lr(a, c), ci(this.projectionDeltaWithTransform, this.layoutCorrected, a, c)
         }
      }
      registerSharedNode(s, a) {
         this.sharedNodes.has(s) || this.sharedNodes.set(s, new k3), this.sharedNodes.get(s).add(a);
         const u = a.options.initialPromotionConfig;
         a.promote({
            transition: u ? u.transition : void 0,
            preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(a) : void 0
         })
      }
      isLead() {
         const s = this.getStack();
         return s ? s.lead === this : !0
      }
      getLead() {
         var s;
         const {
            layoutId: a
         } = this.options;
         return a ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) || this : this
      }
      getPrevLead() {
         var s;
         const {
            layoutId: a
         } = this.options;
         return a ? (s = this.getStack()) === null || s === void 0 ? void 0 : s.prevLead : void 0
      }
      getStack() {
         const {
            layoutId: s
         } = this.options;
         if (s) return this.root.sharedNodes.get(s)
      }
      promote({
         needsReset: s,
         transition: a,
         preserveFollowOpacity: l
      } = {}) {
         const u = this.getStack();
         u && u.promote(this, l), s && (this.projectionDelta = void 0, this.needsReset = !0), a && this.setOptions({
            transition: a
         })
      }
      relegate() {
         const s = this.getStack();
         return s ? s.relegate(this) : !1
      }
      resetSkewAndRotation() {
         const {
            visualElement: s
         } = this.options;
         if (!s) return;
         let a = !1;
         const {
            latestValues: l
         } = s;
         if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = !0), !a) return;
         const u = {};
         l.z && sl("z", s, u, this.animationValues);
         for (let c = 0; c < ol.length; c++) sl(`rotate${ol[c]}`, s, u, this.animationValues), sl(`skew${ol[c]}`, s, u, this.animationValues);
         s.render();
         for (const c in u) s.setStaticValue(c, u[c]), this.animationValues && (this.animationValues[c] = u[c]);
         s.scheduleRender()
      }
      getProjectionStyles(s) {
         var a, l;
         if (!this.instance || this.isSVG) return;
         if (!this.isVisible) return A3;
         const u = {
               visibility: ""
            },
            c = this.getTransformTemplate();
         if (this.needsReset) return this.needsReset = !1, u.opacity = "", u.pointerEvents = Ko(s == null ? void 0 : s.pointerEvents) || "", u.transform = c ? c(this.latestValues, "") : "none", u;
         const f = this.getLead();
         if (!this.projectionDelta || !this.layout || !f.target) {
            const v = {};
            return this.options.layoutId && (v.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, v.pointerEvents = Ko(s == null ? void 0 : s.pointerEvents) || ""), this.hasProjected && !Cn(this.latestValues) && (v.transform = c ? c({}, "") : "none", this.hasProjected = !1), v
         }
         const d = f.animationValues || f.latestValues;
         this.applyTransformsToTarget(), u.transform = b3(this.projectionDeltaWithTransform, this.treeScale, d), c && (u.transform = c(d, u.transform));
         const {
            x: g,
            y: w
         } = this.projectionDelta;
         u.transformOrigin = `${g.origin*100}% ${w.origin*100}% 0`, f.animationValues ? u.opacity = f === this ? (l = (a = d.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : d.opacityExit : u.opacity = f === this ? d.opacity !== void 0 ? d.opacity : "" : d.opacityExit !== void 0 ? d.opacityExit : 0;
         for (const v in Li) {
            if (d[v] === void 0) continue;
            const {
               correct: S,
               applyTo: p,
               isCSSVariable: m
            } = Li[v], y = u.transform === "none" ? d[v] : S(d[v], f);
            if (p) {
               const E = p.length;
               for (let C = 0; C < E; C++) u[p[C]] = y
            } else m ? this.options.visualElement.renderState.vars[v] = y : u[v] = y
         }
         return this.options.layoutId && (u.pointerEvents = f === this ? Ko(s == null ? void 0 : s.pointerEvents) || "" : "none"), u
      }
      clearSnapshot() {
         this.resumeFrom = this.snapshot = void 0
      }
      resetTree() {
         this.root.nodes.forEach(s => {
            var a;
            return (a = s.currentAnimation) === null || a === void 0 ? void 0 : a.stop()
         }), this.root.nodes.forEach(cp), this.root.sharedNodes.clear()
      }
   }
}

function L3(e) {
   e.updateLayout()
}

function D3(e) {
   var t;
   const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
   if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
      const {
         layoutBox: r,
         measuredBox: i
      } = e.layout, {
         animationType: o
      } = e.options, s = n.source !== e.layout.source;
      o === "size" ? He(f => {
         const d = s ? n.measuredBox[f] : n.layoutBox[f],
            g = Ce(d);
         d.min = r[f].min, d.max = d.min + g
      }) : rv(o, n.layoutBox, r) && He(f => {
         const d = s ? n.measuredBox[f] : n.layoutBox[f],
            g = Ce(r[f]);
         d.max = d.min + g, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[f].max = e.relativeTarget[f].min + g)
      });
      const a = sr();
      ci(a, r, n.layoutBox);
      const l = sr();
      s ? ci(l, e.applyTransform(i, !0), n.measuredBox) : ci(l, r, n.layoutBox);
      const u = !Jy(a);
      let c = !1;
      if (!e.resumeFrom) {
         const f = e.getClosestProjectingParent();
         if (f && !f.resumeFrom) {
            const {
               snapshot: d,
               layout: g
            } = f;
            if (d && g) {
               const w = ne();
               fi(w, n.layoutBox, d.layoutBox);
               const v = ne();
               fi(v, r, g.layoutBox), ev(w, v) || (c = !0), f.options.layoutRoot && (e.relativeTarget = v, e.relativeTargetOrigin = w, e.relativeParent = f)
            }
         }
      }
      e.notifyListeners("didUpdate", {
         layout: r,
         snapshot: n,
         delta: l,
         layoutDelta: a,
         hasLayoutChanged: u,
         hasRelativeLayoutChanged: c
      })
   } else if (e.isLead()) {
      const {
         onExitComplete: r
      } = e.options;
      r && r()
   }
   e.options.transition = void 0
}

function O3(e) {
   e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}

function M3(e) {
   e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}

function j3(e) {
   e.clearSnapshot()
}

function cp(e) {
   e.clearMeasurements()
}

function _3(e) {
   e.isLayoutDirty = !1
}

function F3(e) {
   const {
      visualElement: t
   } = e.options;
   t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform()
}

function fp(e) {
   e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0
}

function I3(e) {
   e.resolveTargetDelta()
}

function V3(e) {
   e.calcProjection()
}

function B3(e) {
   e.resetSkewAndRotation()
}

function z3(e) {
   e.removeLeadSnapshot()
}

function dp(e, t, n) {
   e.translate = Q(t.translate, 0, n), e.scale = Q(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint
}

function hp(e, t, n, r) {
   e.min = Q(t.min, n.min, r), e.max = Q(t.max, n.max, r)
}

function U3(e, t, n, r) {
   hp(e.x, t.x, n.x, r), hp(e.y, t.y, n.y, r)
}

function $3(e) {
   return e.animationValues && e.animationValues.opacityExit !== void 0
}
const W3 = {
      duration: .45,
      ease: [.4, 0, .1, 1]
   },
   pp = e => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e),
   mp = pp("applewebkit/") && !pp("chrome/") ? Math.round : Ie;

function gp(e) {
   e.min = mp(e.min), e.max = mp(e.max)
}

function H3(e) {
   gp(e.x), gp(e.y)
}

function rv(e, t, n) {
   return e === "position" || e === "preserve-aspect" && !XP(ap(t), ap(n), .2)
}

function K3(e) {
   var t;
   return e !== e.root && ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
}
const G3 = nv({
      attachResizeListener: (e, t) => _i(e, "resize", t),
      measureScroll: () => ({
         x: document.documentElement.scrollLeft || document.body.scrollLeft,
         y: document.documentElement.scrollTop || document.body.scrollTop
      }),
      checkIsScrollRoot: () => !0
   }),
   al = {
      current: void 0
   },
   iv = nv({
      measureScroll: e => ({
         x: e.scrollLeft,
         y: e.scrollTop
      }),
      defaultParent: () => {
         if (!al.current) {
            const e = new G3({});
            e.mount(window), e.setOptions({
               layoutScroll: !0
            }), al.current = e
         }
         return al.current
      },
      resetTransform: (e, t) => {
         e.style.transform = t !== void 0 ? t : "none"
      },
      checkIsScrollRoot: e => window.getComputedStyle(e).position === "fixed"
   }),
   X3 = {
      pan: {
         Feature: c3
      },
      drag: {
         Feature: u3,
         ProjectionNode: iv,
         MeasureLayout: Qy
      }
   };

function yp(e, t, n) {
   const {
      props: r
   } = e;
   e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
   const i = "onHover" + n,
      o = r[i];
   o && W.postRender(() => o(t, Qi(t)))
}
class Y3 extends pn {
   mount() {
      const {
         current: t
      } = this.node;
      t && (this.unmount = XE(t, (n, r) => (yp(this.node, r, "Start"), i => yp(this.node, i, "End"))))
   }
   unmount() {}
}
class Q3 extends pn {
   constructor() {
      super(...arguments), this.isActive = !1
   }
   onFocus() {
      let t = !1;
      try {
         t = this.node.current.matches(":focus-visible")
      } catch {
         t = !0
      }!t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
   }
   onBlur() {
      !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
   }
   mount() {
      this.unmount = Yi(_i(this.node.current, "focus", () => this.onFocus()), _i(this.node.current, "blur", () => this.onBlur()))
   }
   unmount() {}
}

function vp(e, t, n) {
   const {
      props: r
   } = e;
   e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
   const i = "onTap" + (n === "End" ? "" : n),
      o = r[i];
   o && W.postRender(() => o(t, Qi(t)))
}
class q3 extends pn {
   mount() {
      const {
         current: t
      } = this.node;
      t && (this.unmount = ZE(t, (n, r) => (vp(this.node, r, "Start"), (i, {
         success: o
      }) => vp(this.node, i, o ? "End" : "Cancel")), {
         useGlobalTarget: this.node.props.globalTapTarget
      }))
   }
   unmount() {}
}
const Lu = new WeakMap,
   ll = new WeakMap,
   Z3 = e => {
      const t = Lu.get(e.target);
      t && t(e)
   },
   J3 = e => {
      e.forEach(Z3)
   };

function eT({
   root: e,
   ...t
}) {
   const n = e || document;
   ll.has(n) || ll.set(n, {});
   const r = ll.get(n),
      i = JSON.stringify(t);
   return r[i] || (r[i] = new IntersectionObserver(J3, {
      root: e,
      ...t
   })), r[i]
}

function tT(e, t, n) {
   const r = eT(t);
   return Lu.set(e, n), r.observe(e), () => {
      Lu.delete(e), r.unobserve(e)
   }
}
const nT = {
   some: 0,
   all: 1
};
class rT extends pn {
   constructor() {
      super(...arguments), this.hasEnteredView = !1, this.isInView = !1
   }
   startObserver() {
      this.unmount();
      const {
         viewport: t = {}
      } = this.node.getProps(), {
         root: n,
         margin: r,
         amount: i = "some",
         once: o
      } = t, s = {
         root: n ? n.current : void 0,
         rootMargin: r,
         threshold: typeof i == "number" ? i : nT[i]
      }, a = l => {
         const {
            isIntersecting: u
         } = l;
         if (this.isInView === u || (this.isInView = u, o && !u && this.hasEnteredView)) return;
         u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
         const {
            onViewportEnter: c,
            onViewportLeave: f
         } = this.node.getProps(), d = u ? c : f;
         d && d(l)
      };
      return tT(this.node.current, s, a)
   }
   mount() {
      this.startObserver()
   }
   update() {
      if (typeof IntersectionObserver > "u") return;
      const {
         props: t,
         prevProps: n
      } = this.node;
      ["amount", "margin", "root"].some(iT(t, n)) && this.startObserver()
   }
   unmount() {}
}

function iT({
   viewport: e = {}
}, {
   viewport: t = {}
} = {}) {
   return n => e[n] !== t[n]
}
const oT = {
      inView: {
         Feature: rT
      },
      tap: {
         Feature: q3
      },
      focus: {
         Feature: Q3
      },
      hover: {
         Feature: Y3
      }
   },
   sT = {
      layout: {
         ProjectionNode: iv,
         MeasureLayout: Qy
      }
   },
   Du = {
      current: null
   },
   ov = {
      current: !1
   };

function aT() {
   if (ov.current = !0, !!Gc)
      if (window.matchMedia) {
         const e = window.matchMedia("(prefers-reduced-motion)"),
            t = () => Du.current = e.matches;
         e.addListener(t), t()
      } else Du.current = !1
}
const lT = [...Ay, ye, un],
   uT = e => lT.find(by(e)),
   cT = new WeakMap;

function fT(e, t, n) {
   for (const r in t) {
      const i = t[r],
         o = n[r];
      if (xe(i)) e.addValue(r, i);
      else if (xe(o)) e.addValue(r, Mi(i, {
         owner: e
      }));
      else if (o !== i)
         if (e.hasValue(r)) {
            const s = e.getValue(r);
            s.liveStyle === !0 ? s.jump(i) : s.hasAnimated || s.set(i)
         } else {
            const s = e.getStaticValue(r);
            e.addValue(r, Mi(s !== void 0 ? s : i, {
               owner: e
            }))
         }
   }
   for (const r in n) t[r] === void 0 && e.removeValue(r);
   return t
}
const wp = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class dT {
   scrapeMotionValuesFromProps(t, n, r) {
      return {}
   }
   constructor({
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      blockInitialAnimation: o,
      visualState: s
   }, a = {}) {
      this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.KeyframeResolver = Ef, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
         this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
      }, this.renderScheduledAt = 0, this.scheduleRender = () => {
         const g = wt.now();
         this.renderScheduledAt < g && (this.renderScheduledAt = g, W.render(this.render, !1, !0))
      };
      const {
         latestValues: l,
         renderState: u,
         onUpdate: c
      } = s;
      this.onUpdate = c, this.latestValues = l, this.baseTarget = {
         ...l
      }, this.initialValues = n.initial ? {
         ...l
      } : {}, this.renderState = u, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = i, this.options = a, this.blockInitialAnimation = !!o, this.isControllingVariants = ua(n), this.isVariantNode = Ig(n), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(t && t.current);
      const {
         willChange: f,
         ...d
      } = this.scrapeMotionValuesFromProps(n, {}, this);
      for (const g in d) {
         const w = d[g];
         l[g] !== void 0 && xe(w) && w.set(l[g], !1)
      }
   }
   mount(t) {
      this.current = t, cT.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), ov.current || aT(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Du.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
   }
   unmount() {
      this.projection && this.projection.unmount(), ln(this.notifyUpdate), ln(this.render), this.valueSubscriptions.forEach(t => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
      for (const t in this.events) this.events[t].clear();
      for (const t in this.features) {
         const n = this.features[t];
         n && (n.unmount(), n.isMounted = !1)
      }
      this.current = null
   }
   bindToMotionValue(t, n) {
      this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
      const r = zn.has(t);
      r && this.onBindTransform && this.onBindTransform();
      const i = n.on("change", a => {
            this.latestValues[t] = a, this.props.onUpdate && W.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0)
         }),
         o = n.on("renderRequest", this.scheduleRender);
      let s;
      window.MotionCheckAppearSync && (s = window.MotionCheckAppearSync(this, t, n)), this.valueSubscriptions.set(t, () => {
         i(), o(), s && s(), n.owner && n.stop()
      })
   }
   sortNodePosition(t) {
      return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current)
   }
   updateFeatures() {
      let t = "animation";
      for (t in Pr) {
         const n = Pr[t];
         if (!n) continue;
         const {
            isEnabled: r,
            Feature: i
         } = n;
         if (!this.features[t] && i && r(this.props) && (this.features[t] = new i(this)), this.features[t]) {
            const o = this.features[t];
            o.isMounted ? o.update() : (o.mount(), o.isMounted = !0)
         }
      }
   }
   triggerBuild() {
      this.build(this.renderState, this.latestValues, this.props)
   }
   measureViewportBox() {
      return this.current ? this.measureInstanceViewportBox(this.current, this.props) : ne()
   }
   getStaticValue(t) {
      return this.latestValues[t]
   }
   setStaticValue(t, n) {
      this.latestValues[t] = n
   }
   update(t, n) {
      (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
      for (let r = 0; r < wp.length; r++) {
         const i = wp[r];
         this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
         const o = "on" + i,
            s = t[o];
         s && (this.propEventSubscriptions[i] = this.on(i, s))
      }
      this.prevMotionValues = fT(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue(), this.onUpdate && this.onUpdate(this)
   }
   getProps() {
      return this.props
   }
   getVariant(t) {
      return this.props.variants ? this.props.variants[t] : void 0
   }
   getDefaultTransition() {
      return this.props.transition
   }
   getTransformPagePoint() {
      return this.props.transformPagePoint
   }
   getClosestVariantNode() {
      return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
   }
   addVariantChild(t) {
      const n = this.getClosestVariantNode();
      if (n) return n.variantChildren && n.variantChildren.add(t), () => n.variantChildren.delete(t)
   }
   addValue(t, n) {
      const r = this.values.get(t);
      n !== r && (r && this.removeValue(t), this.bindToMotionValue(t, n), this.values.set(t, n), this.latestValues[t] = n.get())
   }
   removeValue(t) {
      this.values.delete(t);
      const n = this.valueSubscriptions.get(t);
      n && (n(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState)
   }
   hasValue(t) {
      return this.values.has(t)
   }
   getValue(t, n) {
      if (this.props.values && this.props.values[t]) return this.props.values[t];
      let r = this.values.get(t);
      return r === void 0 && n !== void 0 && (r = Mi(n === null ? void 0 : n, {
         owner: this
      }), this.addValue(t, r)), r
   }
   readValue(t, n) {
      var r;
      let i = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (r = this.getBaseTargetFromProps(this.props, t)) !== null && r !== void 0 ? r : this.readValueFromInstance(this.current, t, this.options);
      return i != null && (typeof i == "string" && (Ry(i) || yy(i)) ? i = parseFloat(i) : !uT(i) && un.test(n) && (i = Cy(t, n)), this.setBaseTarget(t, xe(i) ? i.get() : i)), xe(i) ? i.get() : i
   }
   setBaseTarget(t, n) {
      this.baseTarget[t] = n
   }
   getBaseTarget(t) {
      var n;
      const {
         initial: r
      } = this.props;
      let i;
      if (typeof r == "string" || typeof r == "object") {
         const s = lf(this.props, r, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
         s && (i = s[t])
      }
      if (r && i !== void 0) return i;
      const o = this.getBaseTargetFromProps(this.props, t);
      return o !== void 0 && !xe(o) ? o : this.initialValues[t] !== void 0 && i === void 0 ? void 0 : this.baseTarget[t]
   }
   on(t, n) {
      return this.events[t] || (this.events[t] = new gf), this.events[t].add(n)
   }
   notify(t, ...n) {
      this.events[t] && this.events[t].notify(...n)
   }
}
class sv extends dT {
   constructor() {
      super(...arguments), this.KeyframeResolver = Ny
   }
   sortInstanceNodePosition(t, n) {
      return t.compareDocumentPosition(n) & 2 ? 1 : -1
   }
   getBaseTargetFromProps(t, n) {
      return t.style ? t.style[n] : void 0
   }
   removeValueFromRenderState(t, {
      vars: n,
      style: r
   }) {
      delete n[t], delete r[t]
   }
   handleChildMotionValue() {
      this.childSubscription && (this.childSubscription(), delete this.childSubscription);
      const {
         children: t
      } = this.props;
      xe(t) && (this.childSubscription = t.on("change", n => {
         this.current && (this.current.textContent = `${n}`)
      }))
   }
}

function hT(e) {
   return window.getComputedStyle(e)
}
class pT extends sv {
   constructor() {
      super(...arguments), this.type = "html", this.renderInstance = Yg
   }
   readValueFromInstance(t, n) {
      if (zn.has(n)) {
         const r = Sf(n);
         return r && r.default || 0
      } else {
         const r = hT(t),
            i = (Jc(n) ? r.getPropertyValue(n) : r[n]) || 0;
         return typeof i == "string" ? i.trim() : i
      }
   }
   measureInstanceViewportBox(t, {
      transformPagePoint: n
   }) {
      return Xy(t, n)
   }
   build(t, n, r) {
      nf(t, n, r.transformTemplate)
   }
   scrapeMotionValuesFromProps(t, n, r) {
      return uf(t, n, r)
   }
}
class mT extends sv {
   constructor() {
      super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = ne, this.updateDimensions = () => {
         this.current && !this.renderState.dimensions && Xg(this.current, this.renderState)
      }
   }
   getBaseTargetFromProps(t, n) {
      return t[n]
   }
   readValueFromInstance(t, n) {
      if (zn.has(n)) {
         const r = Sf(n);
         return r && r.default || 0
      }
      return n = Qg.has(n) ? n : qc(n), t.getAttribute(n)
   }
   scrapeMotionValuesFromProps(t, n, r) {
      return Zg(t, n, r)
   }
   onBindTransform() {
      this.current && !this.renderState.dimensions && W.postRender(this.updateDimensions)
   }
   build(t, n, r) {
      sf(t, n, this.isSVGTag, r.transformTemplate)
   }
   renderInstance(t, n, r, i) {
      qg(t, n, r, i)
   }
   mount(t) {
      this.isSVGTag = af(t.tagName), super.mount(t)
   }
}
const gT = (e, t) => of(e) ? new mT(t) : new pT(t, {
      allowProjection: e !== h.Fragment
   }),
   yT = zE({
      ...VP,
      ...oT,
      ...X3,
      ...sT
   }, gT),
   V = rE(yT),
   vT = [{
      title: "Owner Tarisya",
      description: "Owner Number.",
      url: "https://wa.me/6282191310415",
      icon: "🌷"
   }, {
      title: "My Instagram",
      description: "Don't Forget To Follow",
      url: "https://www.instagram.com/tarishaarisy?igsh=M25hbnc4eHR4dWhq",
      icon: "🩰"
   }, {
      title: "My Tiktok",
      description: "Follow to support",
      url: "https://www.tiktok.com/@syaa230501",
      icon: "💐"
   },{
      title: "Bot Hd Group",
      description: "Join to my group for free bot",
      url: "https://chat.whatsapp.com/KDtjsr1OO6EDH5R7f8etyT",
      icon: "🎀"
   },{
      title: "Channel Telegram",
      description: "Join to my Channel On Telegram",
      url: "https://t.me/paideditbytarisyaaa",
      icon: "🧸"
   },{
      title: "My Store Group",
      description: "Join to my store group",
      url: "https://chat.whatsapp.com/GrAGOYUsYJsJOfVdHPF8yt",
      icon: "🧺"
   }, {
      title: "Currently Playing",
      isSpotify: !0,
      songTitle: "LOve Story",
      artist: "Indilia",
      albumArt: "https://files.catbox.moe/hy5etu.jpg",
      url: "https://open.spotify.com/track/6nGeLlakfzlBcFdZXteDq7?si=c8Mqb649QceJL8emMGbOGQ",
      preview: "https://files.catbox.moe/2apykt.mp3"
   }],
   wT = () => {
      const [e, t] = h.useState(null), n = h.useRef(new Audio), r = (i, o, s) => {
         i.preventDefault(), i.stopPropagation(), e === o ? (n.current.pause(), t(null)) : (n.current.pause(), n.current.src = s, n.current.play().catch(a => console.log("Audio playback error:", a)), t(o), n.current.onended = () => {
            t(null)
         })
      };
      return x.jsx("div", {
         className: "w-full max-w-md mt-6 space-y-3",
         children: vT.map((i, o) => x.jsx("a", {
            href: i.url,
            className: `flex items-center justify-between p-3 bg-gray-100/80 dark:bg-white/5 backdrop-blur-lg hover:bg-gray-200/80 dark:hover:bg-white/10 ${i.isSpotify?"rounded-full":"rounded-lg"} transition-all duration-300 cursor-pointer group hover:translate-x-1 border border-gray-200/50 dark:border-white/10 shadow-lg`,
            children: i.isSpotify ? x.jsxs(x.Fragment, {
               children: [x.jsxs("div", {
                  className: "flex items-center space-x-3",
                  children: [x.jsxs("div", {
                     className: "relative w-10 h-10",
                     children: [x.jsx(V.img, {
                        src: i.albumArt,
                        alt: "Album Art",
                        className: "rounded-full",
                        animate: {
                           rotate: e === o ? 360 : 0
                        },
                        transition: {
                           duration: 3,
                           ease: "linear",
                           repeat: e === o ? 1 / 0 : 0
                        }
                     }), x.jsx("div", {
                        className: `absolute inset-0 bg-gradient-to-r from-green-500/30 to-blue-500/30 rounded-full ${e===o?"animate-pulse":""}`
                     })]
                  }), x.jsxs("div", {
                     children: [x.jsx("h3", {
                        className: "text-sm font-medium",
                        children: i.songTitle
                     }), x.jsx("p", {
                        className: "text-xs text-gray-400",
                        children: i.artist
                     })]
                  })]
               }), x.jsxs("div", {
                  className: "flex items-center space-x-2",
                  children: [i.preview && x.jsx("button", {
                     onClick: s => r(s, o, i.preview),
                     className: "p-2 bg-green-500 hover:bg-green-600 rounded-full text-white transition-all duration-300",
                     children: e === o ? x.jsx(V2, {
                        size: 12
                     }) : x.jsx(B2, {
                        size: 12
                     })
                  }), x.jsx($c, {
                     className: "text-green-500 text-xl"
                  })]
               })]
            }) : x.jsxs(x.Fragment, {
               children: [x.jsxs("div", {
                  className: "flex items-center space-x-3",
                  children: [x.jsx("span", {
                     className: "text-lg",
                     children: i.icon
                  }), x.jsxs("div", {
                     children: [x.jsx("h3", {
                        className: "text-sm font-medium",
                        children: i.title
                     }), x.jsx("p", {
                        className: "text-xs text-gray-400",
                        children: i.description
                     })]
                  })]
               }), x.jsx(H2, {
                  className: "text-gray-400 text-sm"
               })]
            })
         }, o))
      })
   },
   xT = () => {
      const [e, t] = h.useState(!0), [n, r] = h.useState(!1), i = hn();
      h.useEffect(() => {
         document.documentElement.classList.add("dark")
      }, []);
      const o = () => {
            t(!e), document.documentElement.classList.toggle("dark")
         },
         s = {
            initial: {
               opacity: 0,
               y: -20
            },
            animate: {
               opacity: 1,
               y: 0
            },
            exit: {
               opacity: 0,
               y: -20
            }
         };
      return x.jsx(V.header, {
         initial: {
            y: -100
         },
         animate: {
            y: 0
         },
         className: "fixed top-0 left-0 right-0 z-50",
         children: x.jsxs("nav", {
            className: "p-3 bg-white/80 dark:bg-black/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800",
            children: [x.jsxs("div", {
               className: "max-w-7xl mx-auto flex items-center justify-between",
               children: [x.jsx(V.div, {
                  whileHover: {
                     scale: 1.05
                  },
                  whileTap: {
                     scale: .95
                  },
                  children: x.jsx(Rs, {
                     to: "/",
                     className: "text-lg font-bold bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent",
                     children: "Tarisya Store 🎀"
                  })
               }), x.jsxs("div", {
                  className: "flex items-center gap-4",
                  children: [x.jsx(V.button, {
                     whileHover: {
                        scale: 1.1
                     },
                     whileTap: {
                        scale: .9
                     },
                     onClick: o,
                     className: "relative w-14 h-7 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300",
                     children: x.jsx(V.div, {
                        layout: !0,
                        className: `absolute top-1 left-1 w-5 h-5 rounded-full flex items-center justify-center
                ${e?"bg-gray-800":"bg-yellow-400"}`,
                        animate: {
                           x: e ? 28 : 0,
                           rotate: e ? 360 : 0
                        },
                        transition: {
                           type: "spring",
                           stiffness: 300,
                           damping: 20
                        },
                        children: e ? x.jsx(I2, {
                           size: 12,
                           className: "text-yellow-400"
                        }) : x.jsx(U2, {
                           size: 12,
                           className: "text-white"
                        })
                     })
                  }), x.jsx(V.button, {
                     whileHover: {
                        scale: 1.1
                     },
                     whileTap: {
                        scale: .9
                     },
                     onClick: () => r(!n),
                     className: "p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all",
                     children: x.jsxs("div", {
                        className: "flex flex-col gap-1.5 w-6",
                        children: [x.jsx(V.span, {
                           animate: {
                              rotate: n ? 45 : 0,
                              y: n ? 8 : 0
                           },
                           className: "block h-0.5 bg-gray-800 dark:bg-white origin-center"
                        }), x.jsx(V.span, {
                           animate: {
                              opacity: n ? 0 : 1
                           },
                           className: "block h-0.5 bg-gray-800 dark:bg-white"
                        }), x.jsx(V.span, {
                           animate: {
                              rotate: n ? -45 : 0,
                              y: n ? -8 : 0
                           },
                           className: "block h-0.5 bg-gray-800 dark:bg-white origin-center"
                        })]
                     })
                  })]
               })]
            }), x.jsx(As, {
               children: n && x.jsx(V.div, {
                  initial: "initial",
                  animate: "animate",
                  exit: "exit",
                  variants: s,
                  className: "absolute top-full left-0 right-0 bg-white/90 dark:bg-black/90 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800",
                  children: x.jsx("nav", {
                     className: "max-w-7xl mx-auto p-4",
                     children: x.jsx(V.div, {
                        variants: {
                           initial: {
                              opacity: 0
                           },
                           animate: {
                              opacity: 1,
                              transition: {
                                 staggerChildren: .1
                              }
                           }
                        },
                        className: "space-y-2",
                        children: [{
                           to: "/",
                           label: "Home"
                        }, {
                           to: "/Market",
                           label: "Market"
                        }].map(a => x.jsx(V.div, {
                           variants: {
                              initial: {
                                 x: -20,
                                 opacity: 0
                              },
                              animate: {
                                 x: 0,
                                 opacity: 1
                              }
                           },
                           children: x.jsx(Rs, {
                              to: a.to,
                              onClick: () => r(!1),
                              className: `block px-4 py-2 rounded-lg ${i.pathname===a.to?"bg-gray-100 dark:bg-gray-800":"hover:bg-gray-50 dark:hover:bg-gray-800"} transition-all`,
                              children: a.label
                           })
                        }, a.to))
                     })
                  })
               })
            })]
         })
      })
   };

function Te(e, t, {
   checkForDefaultPrevented: n = !0
} = {}) {
   return function(i) {
      if (e == null || e(i), n === !1 || !i.defaultPrevented) return t == null ? void 0 : t(i)
   }
}

function xp(e, t) {
   if (typeof e == "function") return e(t);
   e != null && (e.current = t)
}

function av(...e) {
   return t => {
      let n = !1;
      const r = e.map(i => {
         const o = xp(i, t);
         return !n && typeof o == "function" && (n = !0), o
      });
      if (n) return () => {
         for (let i = 0; i < r.length; i++) {
            const o = r[i];
            typeof o == "function" ? o() : xp(e[i], null)
         }
      }
   }
}

function $e(...e) {
   return h.useCallback(av(...e), e)
}

function ST(e, t) {
   const n = h.createContext(t),
      r = o => {
         const {
            children: s,
            ...a
         } = o, l = h.useMemo(() => a, Object.values(a));
         return x.jsx(n.Provider, {
            value: l,
            children: s
         })
      };
   r.displayName = e + "Provider";

   function i(o) {
      const s = h.useContext(n);
      if (s) return s;
      if (t !== void 0) return t;
      throw new Error(`\`${o}\` must be used within \`${e}\``)
   }
   return [r, i]
}

function lv(e, t = []) {
   let n = [];

   function r(o, s) {
      const a = h.createContext(s),
         l = n.length;
      n = [...n, s];
      const u = f => {
         var p;
         const {
            scope: d,
            children: g,
            ...w
         } = f, v = ((p = d == null ? void 0 : d[e]) == null ? void 0 : p[l]) || a, S = h.useMemo(() => w, Object.values(w));
         return x.jsx(v.Provider, {
            value: S,
            children: g
         })
      };
      u.displayName = o + "Provider";

      function c(f, d) {
         var v;
         const g = ((v = d == null ? void 0 : d[e]) == null ? void 0 : v[l]) || a,
            w = h.useContext(g);
         if (w) return w;
         if (s !== void 0) return s;
         throw new Error(`\`${f}\` must be used within \`${o}\``)
      }
      return [u, c]
   }
   const i = () => {
      const o = n.map(s => h.createContext(s));
      return function(a) {
         const l = (a == null ? void 0 : a[e]) || o;
         return h.useMemo(() => ({
            [`__scope${e}`]: {
               ...a,
               [e]: l
            }
         }), [a, l])
      }
   };
   return i.scopeName = e, [r, ET(i, ...t)]
}

function ET(...e) {
   const t = e[0];
   if (e.length === 1) return t;
   const n = () => {
      const r = e.map(i => ({
         useScope: i(),
         scopeName: i.scopeName
      }));
      return function(o) {
         const s = r.reduce((a, {
            useScope: l,
            scopeName: u
         }) => {
            const f = l(o)[`__scope${u}`];
            return {
               ...a,
               ...f
            }
         }, {});
         return h.useMemo(() => ({
            [`__scope${t.scopeName}`]: s
         }), [s])
      }
   };
   return n.scopeName = t.scopeName, n
}
var Fi = globalThis != null && globalThis.document ? h.useLayoutEffect : () => {},
   CT = j1["useId".toString()] || (() => {}),
   PT = 0;

function ul(e) {
   const [t, n] = h.useState(CT());
   return Fi(() => {
      e || n(r => r ?? String(PT++))
   }, [e]), e || (t ? `radix-${t}` : "")
}

function Ae(e) {
   const t = h.useRef(e);
   return h.useEffect(() => {
      t.current = e
   }), h.useMemo(() => (...n) => {
      var r;
      return (r = t.current) == null ? void 0 : r.call(t, ...n)
   }, [])
}

function TT({
   prop: e,
   defaultProp: t,
   onChange: n = () => {}
}) {
   const [r, i] = RT({
      defaultProp: t,
      onChange: n
   }), o = e !== void 0, s = o ? e : r, a = Ae(n), l = h.useCallback(u => {
      if (o) {
         const f = typeof u == "function" ? u(e) : u;
         f !== e && a(f)
      } else i(u)
   }, [o, e, i, a]);
   return [s, l]
}

function RT({
   defaultProp: e,
   onChange: t
}) {
   const n = h.useState(e),
      [r] = n,
      i = h.useRef(r),
      o = Ae(t);
   return h.useEffect(() => {
      i.current !== r && (o(r), i.current = r)
   }, [r, i, o]), n
}
var Rf = h.forwardRef((e, t) => {
   const {
      children: n,
      ...r
   } = e, i = h.Children.toArray(n), o = i.find(bT);
   if (o) {
      const s = o.props.children,
         a = i.map(l => l === o ? h.Children.count(s) > 1 ? h.Children.only(null) : h.isValidElement(s) ? s.props.children : null : l);
      return x.jsx(Ou, {
         ...r,
         ref: t,
         children: h.isValidElement(s) ? h.cloneElement(s, void 0, a) : null
      })
   }
   return x.jsx(Ou, {
      ...r,
      ref: t,
      children: n
   })
});
Rf.displayName = "Slot";
var Ou = h.forwardRef((e, t) => {
   const {
      children: n,
      ...r
   } = e;
   if (h.isValidElement(n)) {
      const i = NT(n),
         o = AT(r, n.props);
      return n.type !== h.Fragment && (o.ref = t ? av(t, i) : i), h.cloneElement(n, o)
   }
   return h.Children.count(n) > 1 ? h.Children.only(null) : null
});
Ou.displayName = "SlotClone";
var kT = ({
   children: e
}) => x.jsx(x.Fragment, {
   children: e
});

function bT(e) {
   return h.isValidElement(e) && e.type === kT
}

function AT(e, t) {
   const n = {
      ...t
   };
   for (const r in t) {
      const i = e[r],
         o = t[r];
      /^on[A-Z]/.test(r) ? i && o ? n[r] = (...a) => {
         o(...a), i(...a)
      } : i && (n[r] = i) : r === "style" ? n[r] = {
         ...i,
         ...o
      } : r === "className" && (n[r] = [i, o].filter(Boolean).join(" "))
   }
   return {
      ...e,
      ...n
   }
}

function NT(e) {
   var r, i;
   let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get,
      n = t && "isReactWarning" in t && t.isReactWarning;
   return n ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}
var LT = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"],
   Me = LT.reduce((e, t) => {
      const n = h.forwardRef((r, i) => {
         const {
            asChild: o,
            ...s
         } = r, a = o ? Rf : t;
         return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), x.jsx(a, {
            ...s,
            ref: i
         })
      });
      return n.displayName = `Primitive.${t}`, {
         ...e,
         [t]: n
      }
   }, {});

function DT(e, t) {
   e && _c.flushSync(() => e.dispatchEvent(t))
}

function OT(e, t = globalThis == null ? void 0 : globalThis.document) {
   const n = Ae(e);
   h.useEffect(() => {
      const r = i => {
         i.key === "Escape" && n(i)
      };
      return t.addEventListener("keydown", r, {
         capture: !0
      }), () => t.removeEventListener("keydown", r, {
         capture: !0
      })
   }, [n, t])
}
var MT = "DismissableLayer",
   Mu = "dismissableLayer.update",
   jT = "dismissableLayer.pointerDownOutside",
   _T = "dismissableLayer.focusOutside",
   Sp, uv = h.createContext({
      layers: new Set,
      layersWithOutsidePointerEventsDisabled: new Set,
      branches: new Set
   }),
   cv = h.forwardRef((e, t) => {
      const {
         disableOutsidePointerEvents: n = !1,
         onEscapeKeyDown: r,
         onPointerDownOutside: i,
         onFocusOutside: o,
         onInteractOutside: s,
         onDismiss: a,
         ...l
      } = e, u = h.useContext(uv), [c, f] = h.useState(null), d = (c == null ? void 0 : c.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, g] = h.useState({}), w = $e(t, R => f(R)), v = Array.from(u.layers), [S] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), p = v.indexOf(S), m = c ? v.indexOf(c) : -1, y = u.layersWithOutsidePointerEventsDisabled.size > 0, E = m >= p, C = VT(R => {
         const k = R.target,
            N = [...u.branches].some(L => L.contains(k));
         !E || N || (i == null || i(R), s == null || s(R), R.defaultPrevented || a == null || a())
      }, d), T = BT(R => {
         const k = R.target;
         [...u.branches].some(L => L.contains(k)) || (o == null || o(R), s == null || s(R), R.defaultPrevented || a == null || a())
      }, d);
      return OT(R => {
         m === u.layers.size - 1 && (r == null || r(R), !R.defaultPrevented && a && (R.preventDefault(), a()))
      }, d), h.useEffect(() => {
         if (c) return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Sp = d.body.style.pointerEvents, d.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(c)), u.layers.add(c), Ep(), () => {
            n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (d.body.style.pointerEvents = Sp)
         }
      }, [c, d, n, u]), h.useEffect(() => () => {
         c && (u.layers.delete(c), u.layersWithOutsidePointerEventsDisabled.delete(c), Ep())
      }, [c, u]), h.useEffect(() => {
         const R = () => g({});
         return document.addEventListener(Mu, R), () => document.removeEventListener(Mu, R)
      }, []), x.jsx(Me.div, {
         ...l,
         ref: w,
         style: {
            pointerEvents: y ? E ? "auto" : "none" : void 0,
            ...e.style
         },
         onFocusCapture: Te(e.onFocusCapture, T.onFocusCapture),
         onBlurCapture: Te(e.onBlurCapture, T.onBlurCapture),
         onPointerDownCapture: Te(e.onPointerDownCapture, C.onPointerDownCapture)
      })
   });
cv.displayName = MT;
var FT = "DismissableLayerBranch",
   IT = h.forwardRef((e, t) => {
      const n = h.useContext(uv),
         r = h.useRef(null),
         i = $e(t, r);
      return h.useEffect(() => {
         const o = r.current;
         if (o) return n.branches.add(o), () => {
            n.branches.delete(o)
         }
      }, [n.branches]), x.jsx(Me.div, {
         ...e,
         ref: i
      })
   });
IT.displayName = FT;

function VT(e, t = globalThis == null ? void 0 : globalThis.document) {
   const n = Ae(e),
      r = h.useRef(!1),
      i = h.useRef(() => {});
   return h.useEffect(() => {
      const o = a => {
            if (a.target && !r.current) {
               let l = function() {
                  fv(jT, n, u, {
                     discrete: !0
                  })
               };
               const u = {
                  originalEvent: a
               };
               a.pointerType === "touch" ? (t.removeEventListener("click", i.current), i.current = l, t.addEventListener("click", i.current, {
                  once: !0
               })) : l()
            } else t.removeEventListener("click", i.current);
            r.current = !1
         },
         s = window.setTimeout(() => {
            t.addEventListener("pointerdown", o)
         }, 0);
      return () => {
         window.clearTimeout(s), t.removeEventListener("pointerdown", o), t.removeEventListener("click", i.current)
      }
   }, [t, n]), {
      onPointerDownCapture: () => r.current = !0
   }
}

function BT(e, t = globalThis == null ? void 0 : globalThis.document) {
   const n = Ae(e),
      r = h.useRef(!1);
   return h.useEffect(() => {
      const i = o => {
         o.target && !r.current && fv(_T, n, {
            originalEvent: o
         }, {
            discrete: !1
         })
      };
      return t.addEventListener("focusin", i), () => t.removeEventListener("focusin", i)
   }, [t, n]), {
      onFocusCapture: () => r.current = !0,
      onBlurCapture: () => r.current = !1
   }
}

function Ep() {
   const e = new CustomEvent(Mu);
   document.dispatchEvent(e)
}

function fv(e, t, n, {
   discrete: r
}) {
   const i = n.originalEvent.target,
      o = new CustomEvent(e, {
         bubbles: !1,
         cancelable: !0,
         detail: n
      });
   t && i.addEventListener(e, t, {
      once: !0
   }), r ? DT(i, o) : i.dispatchEvent(o)
}
var cl = "focusScope.autoFocusOnMount",
   fl = "focusScope.autoFocusOnUnmount",
   Cp = {
      bubbles: !1,
      cancelable: !0
   },
   zT = "FocusScope",
   dv = h.forwardRef((e, t) => {
      const {
         loop: n = !1,
         trapped: r = !1,
         onMountAutoFocus: i,
         onUnmountAutoFocus: o,
         ...s
      } = e, [a, l] = h.useState(null), u = Ae(i), c = Ae(o), f = h.useRef(null), d = $e(t, v => l(v)), g = h.useRef({
         paused: !1,
         pause() {
            this.paused = !0
         },
         resume() {
            this.paused = !1
         }
      }).current;
      h.useEffect(() => {
         if (r) {
            let v = function(y) {
                  if (g.paused || !a) return;
                  const E = y.target;
                  a.contains(E) ? f.current = E : $t(f.current, {
                     select: !0
                  })
               },
               S = function(y) {
                  if (g.paused || !a) return;
                  const E = y.relatedTarget;
                  E !== null && (a.contains(E) || $t(f.current, {
                     select: !0
                  }))
               },
               p = function(y) {
                  if (document.activeElement === document.body)
                     for (const C of y) C.removedNodes.length > 0 && $t(a)
               };
            document.addEventListener("focusin", v), document.addEventListener("focusout", S);
            const m = new MutationObserver(p);
            return a && m.observe(a, {
               childList: !0,
               subtree: !0
            }), () => {
               document.removeEventListener("focusin", v), document.removeEventListener("focusout", S), m.disconnect()
            }
         }
      }, [r, a, g.paused]), h.useEffect(() => {
         if (a) {
            Tp.add(g);
            const v = document.activeElement;
            if (!a.contains(v)) {
               const p = new CustomEvent(cl, Cp);
               a.addEventListener(cl, u), a.dispatchEvent(p), p.defaultPrevented || (UT(GT(hv(a)), {
                  select: !0
               }), document.activeElement === v && $t(a))
            }
            return () => {
               a.removeEventListener(cl, u), setTimeout(() => {
                  const p = new CustomEvent(fl, Cp);
                  a.addEventListener(fl, c), a.dispatchEvent(p), p.defaultPrevented || $t(v ?? document.body, {
                     select: !0
                  }), a.removeEventListener(fl, c), Tp.remove(g)
               }, 0)
            }
         }
      }, [a, u, c, g]);
      const w = h.useCallback(v => {
         if (!n && !r || g.paused) return;
         const S = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey,
            p = document.activeElement;
         if (S && p) {
            const m = v.currentTarget,
               [y, E] = $T(m);
            y && E ? !v.shiftKey && p === E ? (v.preventDefault(), n && $t(y, {
               select: !0
            })) : v.shiftKey && p === y && (v.preventDefault(), n && $t(E, {
               select: !0
            })) : p === m && v.preventDefault()
         }
      }, [n, r, g.paused]);
      return x.jsx(Me.div, {
         tabIndex: -1,
         ...s,
         ref: d,
         onKeyDown: w
      })
   });
dv.displayName = zT;

function UT(e, {
   select: t = !1
} = {}) {
   const n = document.activeElement;
   for (const r of e)
      if ($t(r, {
            select: t
         }), document.activeElement !== n) return
}

function $T(e) {
   const t = hv(e),
      n = Pp(t, e),
      r = Pp(t.reverse(), e);
   return [n, r]
}

function hv(e) {
   const t = [],
      n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
         acceptNode: r => {
            const i = r.tagName === "INPUT" && r.type === "hidden";
            return r.disabled || r.hidden || i ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
         }
      });
   for (; n.nextNode();) t.push(n.currentNode);
   return t
}

function Pp(e, t) {
   for (const n of e)
      if (!WT(n, {
            upTo: t
         })) return n
}

function WT(e, {
   upTo: t
}) {
   if (getComputedStyle(e).visibility === "hidden") return !0;
   for (; e;) {
      if (t !== void 0 && e === t) return !1;
      if (getComputedStyle(e).display === "none") return !0;
      e = e.parentElement
   }
   return !1
}

function HT(e) {
   return e instanceof HTMLInputElement && "select" in e
}

function $t(e, {
   select: t = !1
} = {}) {
   if (e && e.focus) {
      const n = document.activeElement;
      e.focus({
         preventScroll: !0
      }), e !== n && HT(e) && t && e.select()
   }
}
var Tp = KT();

function KT() {
   let e = [];
   return {
      add(t) {
         const n = e[0];
         t !== n && (n == null || n.pause()), e = Rp(e, t), e.unshift(t)
      },
      remove(t) {
         var n;
         e = Rp(e, t), (n = e[0]) == null || n.resume()
      }
   }
}

function Rp(e, t) {
   const n = [...e],
      r = n.indexOf(t);
   return r !== -1 && n.splice(r, 1), n
}

function GT(e) {
   return e.filter(t => t.tagName !== "A")
}
var XT = "Portal",
   pv = h.forwardRef((e, t) => {
      var a;
      const {
         container: n,
         ...r
      } = e, [i, o] = h.useState(!1);
      Fi(() => o(!0), []);
      const s = n || i && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
      return s ? Hx.createPortal(x.jsx(Me.div, {
         ...r,
         ref: t
      }), s) : null
   });
pv.displayName = XT;

function YT(e, t) {
   return h.useReducer((n, r) => t[n][r] ?? n, e)
}
var mn = e => {
   const {
      present: t,
      children: n
   } = e, r = QT(t), i = typeof n == "function" ? n({
      present: r.isPresent
   }) : h.Children.only(n), o = $e(r.ref, qT(i));
   return typeof n == "function" || r.isPresent ? h.cloneElement(i, {
      ref: o
   }) : null
};
mn.displayName = "Presence";

function QT(e) {
   const [t, n] = h.useState(), r = h.useRef({}), i = h.useRef(e), o = h.useRef("none"), s = e ? "mounted" : "unmounted", [a, l] = YT(s, {
      mounted: {
         UNMOUNT: "unmounted",
         ANIMATION_OUT: "unmountSuspended"
      },
      unmountSuspended: {
         MOUNT: "mounted",
         ANIMATION_END: "unmounted"
      },
      unmounted: {
         MOUNT: "mounted"
      }
   });
   return h.useEffect(() => {
      const u = To(r.current);
      o.current = a === "mounted" ? u : "none"
   }, [a]), Fi(() => {
      const u = r.current,
         c = i.current;
      if (c !== e) {
         const d = o.current,
            g = To(u);
         e ? l("MOUNT") : g === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(c && d !== g ? "ANIMATION_OUT" : "UNMOUNT"), i.current = e
      }
   }, [e, l]), Fi(() => {
      if (t) {
         let u;
         const c = t.ownerDocument.defaultView ?? window,
            f = g => {
               const v = To(r.current).includes(g.animationName);
               if (g.target === t && v && (l("ANIMATION_END"), !i.current)) {
                  const S = t.style.animationFillMode;
                  t.style.animationFillMode = "forwards", u = c.setTimeout(() => {
                     t.style.animationFillMode === "forwards" && (t.style.animationFillMode = S)
                  })
               }
            },
            d = g => {
               g.target === t && (o.current = To(r.current))
            };
         return t.addEventListener("animationstart", d), t.addEventListener("animationcancel", f), t.addEventListener("animationend", f), () => {
            c.clearTimeout(u), t.removeEventListener("animationstart", d), t.removeEventListener("animationcancel", f), t.removeEventListener("animationend", f)
         }
      } else l("ANIMATION_END")
   }, [t, l]), {
      isPresent: ["mounted", "unmountSuspended"].includes(a),
      ref: h.useCallback(u => {
         u && (r.current = getComputedStyle(u)), n(u)
      }, [])
   }
}

function To(e) {
   return (e == null ? void 0 : e.animationName) || "none"
}

function qT(e) {
   var r, i;
   let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get,
      n = t && "isReactWarning" in t && t.isReactWarning;
   return n ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}
var dl = 0;

function ZT() {
   h.useEffect(() => {
      const e = document.querySelectorAll("[data-radix-focus-guard]");
      return document.body.insertAdjacentElement("afterbegin", e[0] ?? kp()), document.body.insertAdjacentElement("beforeend", e[1] ?? kp()), dl++, () => {
         dl === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(t => t.remove()), dl--
      }
   }, [])
}

function kp() {
   const e = document.createElement("span");
   return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e
}
var mt = function() {
   return mt = Object.assign || function(t) {
      for (var n, r = 1, i = arguments.length; r < i; r++) {
         n = arguments[r];
         for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
      }
      return t
   }, mt.apply(this, arguments)
};

function mv(e, t) {
   var n = {};
   for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
   if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
   return n
}

function JT(e, t, n) {
   if (n || arguments.length === 2)
      for (var r = 0, i = t.length, o; r < i; r++)(o || !(r in t)) && (o || (o = Array.prototype.slice.call(t, 0, r)), o[r] = t[r]);
   return e.concat(o || Array.prototype.slice.call(t))
}
var Yo = "right-scroll-bar-position",
   Qo = "width-before-scroll-bar",
   e4 = "with-scroll-bars-hidden",
   t4 = "--removed-body-scroll-bar-size";

function hl(e, t) {
   return typeof e == "function" ? e(t) : e && (e.current = t), e
}

function n4(e, t) {
   var n = h.useState(function() {
      return {
         value: e,
         callback: t,
         facade: {
            get current() {
               return n.value
            },
            set current(r) {
               var i = n.value;
               i !== r && (n.value = r, n.callback(r, i))
            }
         }
      }
   })[0];
   return n.callback = t, n.facade
}
var r4 = typeof window < "u" ? h.useLayoutEffect : h.useEffect,
   bp = new WeakMap;

function i4(e, t) {
   var n = n4(t || null, function(r) {
      return e.forEach(function(i) {
         return hl(i, r)
      })
   });
   return r4(function() {
      var r = bp.get(n);
      if (r) {
         var i = new Set(r),
            o = new Set(e),
            s = n.current;
         i.forEach(function(a) {
            o.has(a) || hl(a, null)
         }), o.forEach(function(a) {
            i.has(a) || hl(a, s)
         })
      }
      bp.set(n, e)
   }, [e]), n
}

function o4(e) {
   return e
}

function s4(e, t) {
   t === void 0 && (t = o4);
   var n = [],
      r = !1,
      i = {
         read: function() {
            if (r) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
            return n.length ? n[n.length - 1] : e
         },
         useMedium: function(o) {
            var s = t(o, r);
            return n.push(s),
               function() {
                  n = n.filter(function(a) {
                     return a !== s
                  })
               }
         },
         assignSyncMedium: function(o) {
            for (r = !0; n.length;) {
               var s = n;
               n = [], s.forEach(o)
            }
            n = {
               push: function(a) {
                  return o(a)
               },
               filter: function() {
                  return n
               }
            }
         },
         assignMedium: function(o) {
            r = !0;
            var s = [];
            if (n.length) {
               var a = n;
               n = [], a.forEach(o), s = n
            }
            var l = function() {
                  var c = s;
                  s = [], c.forEach(o)
               },
               u = function() {
                  return Promise.resolve().then(l)
               };
            u(), n = {
               push: function(c) {
                  s.push(c), u()
               },
               filter: function(c) {
                  return s = s.filter(c), n
               }
            }
         }
      };
   return i
}

function a4(e) {
   e === void 0 && (e = {});
   var t = s4(null);
   return t.options = mt({
      async: !0,
      ssr: !1
   }, e), t
}
var gv = function(e) {
   var t = e.sideCar,
      n = mv(e, ["sideCar"]);
   if (!t) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
   var r = t.read();
   if (!r) throw new Error("Sidecar medium not found");
   return h.createElement(r, mt({}, n))
};
gv.isSideCarExport = !0;

function l4(e, t) {
   return e.useMedium(t), gv
}
var yv = a4(),
   pl = function() {},
   fa = h.forwardRef(function(e, t) {
      var n = h.useRef(null),
         r = h.useState({
            onScrollCapture: pl,
            onWheelCapture: pl,
            onTouchMoveCapture: pl
         }),
         i = r[0],
         o = r[1],
         s = e.forwardProps,
         a = e.children,
         l = e.className,
         u = e.removeScrollBar,
         c = e.enabled,
         f = e.shards,
         d = e.sideCar,
         g = e.noIsolation,
         w = e.inert,
         v = e.allowPinchZoom,
         S = e.as,
         p = S === void 0 ? "div" : S,
         m = e.gapMode,
         y = mv(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
         E = d,
         C = i4([n, t]),
         T = mt(mt({}, y), i);
      return h.createElement(h.Fragment, null, c && h.createElement(E, {
         sideCar: yv,
         removeScrollBar: u,
         shards: f,
         noIsolation: g,
         inert: w,
         setCallbacks: o,
         allowPinchZoom: !!v,
         lockRef: n,
         gapMode: m
      }), s ? h.cloneElement(h.Children.only(a), mt(mt({}, T), {
         ref: C
      })) : h.createElement(p, mt({}, T, {
         className: l,
         ref: C
      }), a))
   });
fa.defaultProps = {
   enabled: !0,
   removeScrollBar: !0,
   inert: !1
};
fa.classNames = {
   fullWidth: Qo,
   zeroRight: Yo
};
var Ap, u4 = function() {
   if (Ap) return Ap;
   if (typeof __webpack_nonce__ < "u") return __webpack_nonce__
};

function c4() {
   if (!document) return null;
   var e = document.createElement("style");
   e.type = "text/css";
   var t = u4();
   return t && e.setAttribute("nonce", t), e
}

function f4(e, t) {
   e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t))
}

function d4(e) {
   var t = document.head || document.getElementsByTagName("head")[0];
   t.appendChild(e)
}
var h4 = function() {
      var e = 0,
         t = null;
      return {
         add: function(n) {
            e == 0 && (t = c4()) && (f4(t, n), d4(t)), e++
         },
         remove: function() {
            e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null)
         }
      }
   },
   p4 = function() {
      var e = h4();
      return function(t, n) {
         h.useEffect(function() {
            return e.add(t),
               function() {
                  e.remove()
               }
         }, [t && n])
      }
   },
   vv = function() {
      var e = p4(),
         t = function(n) {
            var r = n.styles,
               i = n.dynamic;
            return e(r, i), null
         };
      return t
   },
   m4 = {
      left: 0,
      top: 0,
      right: 0,
      gap: 0
   },
   ml = function(e) {
      return parseInt(e || "", 10) || 0
   },
   g4 = function(e) {
      var t = window.getComputedStyle(document.body),
         n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
         r = t[e === "padding" ? "paddingTop" : "marginTop"],
         i = t[e === "padding" ? "paddingRight" : "marginRight"];
      return [ml(n), ml(r), ml(i)]
   },
   y4 = function(e) {
      if (e === void 0 && (e = "margin"), typeof window > "u") return m4;
      var t = g4(e),
         n = document.documentElement.clientWidth,
         r = window.innerWidth;
      return {
         left: t[0],
         top: t[1],
         right: t[2],
         gap: Math.max(0, r - n + t[2] - t[0])
      }
   },
   v4 = vv(),
   mr = "data-scroll-locked",
   w4 = function(e, t, n, r) {
      var i = e.left,
         o = e.top,
         s = e.right,
         a = e.gap;
      return n === void 0 && (n = "margin"), `
  .`.concat(e4, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(a, "px ").concat(r, `;
  }
  body[`).concat(mr, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([t && "position: relative ".concat(r, ";"), n === "margin" && `
    padding-left: `.concat(i, `px;
    padding-top: `).concat(o, `px;
    padding-right: `).concat(s, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a, "px ").concat(r, `;
    `), n === "padding" && "padding-right: ".concat(a, "px ").concat(r, ";")].filter(Boolean).join(""), `
  }
  
  .`).concat(Yo, ` {
    right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(Qo, ` {
    margin-right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(Yo, " .").concat(Yo, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Qo, " .").concat(Qo, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(mr, `] {
    `).concat(t4, ": ").concat(a, `px;
  }
`)
   },
   Np = function() {
      var e = parseInt(document.body.getAttribute(mr) || "0", 10);
      return isFinite(e) ? e : 0
   },
   x4 = function() {
      h.useEffect(function() {
         return document.body.setAttribute(mr, (Np() + 1).toString()),
            function() {
               var e = Np() - 1;
               e <= 0 ? document.body.removeAttribute(mr) : document.body.setAttribute(mr, e.toString())
            }
      }, [])
   },
   S4 = function(e) {
      var t = e.noRelative,
         n = e.noImportant,
         r = e.gapMode,
         i = r === void 0 ? "margin" : r;
      x4();
      var o = h.useMemo(function() {
         return y4(i)
      }, [i]);
      return h.createElement(v4, {
         styles: w4(o, !t, i, n ? "" : "!important")
      })
   },
   ju = !1;
if (typeof window < "u") try {
   var Ro = Object.defineProperty({}, "passive", {
      get: function() {
         return ju = !0, !0
      }
   });
   window.addEventListener("test", Ro, Ro), window.removeEventListener("test", Ro, Ro)
} catch {
   ju = !1
}
var $n = ju ? {
      passive: !1
   } : !1,
   E4 = function(e) {
      return e.tagName === "TEXTAREA"
   },
   wv = function(e, t) {
      if (!(e instanceof Element)) return !1;
      var n = window.getComputedStyle(e);
      return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !E4(e) && n[t] === "visible")
   },
   C4 = function(e) {
      return wv(e, "overflowY")
   },
   P4 = function(e) {
      return wv(e, "overflowX")
   },
   Lp = function(e, t) {
      var n = t.ownerDocument,
         r = t;
      do {
         typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
         var i = xv(e, r);
         if (i) {
            var o = Sv(e, r),
               s = o[1],
               a = o[2];
            if (s > a) return !0
         }
         r = r.parentNode
      } while (r && r !== n.body);
      return !1
   },
   T4 = function(e) {
      var t = e.scrollTop,
         n = e.scrollHeight,
         r = e.clientHeight;
      return [t, n, r]
   },
   R4 = function(e) {
      var t = e.scrollLeft,
         n = e.scrollWidth,
         r = e.clientWidth;
      return [t, n, r]
   },
   xv = function(e, t) {
      return e === "v" ? C4(t) : P4(t)
   },
   Sv = function(e, t) {
      return e === "v" ? T4(t) : R4(t)
   },
   k4 = function(e, t) {
      return e === "h" && t === "rtl" ? -1 : 1
   },
   b4 = function(e, t, n, r, i) {
      var o = k4(e, window.getComputedStyle(t).direction),
         s = o * r,
         a = n.target,
         l = t.contains(a),
         u = !1,
         c = s > 0,
         f = 0,
         d = 0;
      do {
         var g = Sv(e, a),
            w = g[0],
            v = g[1],
            S = g[2],
            p = v - S - o * w;
         (w || p) && xv(e, a) && (f += p, d += w), a instanceof ShadowRoot ? a = a.host : a = a.parentNode
      } while (!l && a !== document.body || l && (t.contains(a) || t === a));
      return (c && (i && Math.abs(f) < 1 || !i && s > f) || !c && (i && Math.abs(d) < 1 || !i && -s > d)) && (u = !0), u
   },
   ko = function(e) {
      return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
   },
   Dp = function(e) {
      return [e.deltaX, e.deltaY]
   },
   Op = function(e) {
      return e && "current" in e ? e.current : e
   },
   A4 = function(e, t) {
      return e[0] === t[0] && e[1] === t[1]
   },
   N4 = function(e) {
      return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`)
   },
   L4 = 0,
   Wn = [];

function D4(e) {
   var t = h.useRef([]),
      n = h.useRef([0, 0]),
      r = h.useRef(),
      i = h.useState(L4++)[0],
      o = h.useState(vv)[0],
      s = h.useRef(e);
   h.useEffect(function() {
      s.current = e
   }, [e]), h.useEffect(function() {
      if (e.inert) {
         document.body.classList.add("block-interactivity-".concat(i));
         var v = JT([e.lockRef.current], (e.shards || []).map(Op), !0).filter(Boolean);
         return v.forEach(function(S) {
               return S.classList.add("allow-interactivity-".concat(i))
            }),
            function() {
               document.body.classList.remove("block-interactivity-".concat(i)), v.forEach(function(S) {
                  return S.classList.remove("allow-interactivity-".concat(i))
               })
            }
      }
   }, [e.inert, e.lockRef.current, e.shards]);
   var a = h.useCallback(function(v, S) {
         if ("touches" in v && v.touches.length === 2 || v.type === "wheel" && v.ctrlKey) return !s.current.allowPinchZoom;
         var p = ko(v),
            m = n.current,
            y = "deltaX" in v ? v.deltaX : m[0] - p[0],
            E = "deltaY" in v ? v.deltaY : m[1] - p[1],
            C, T = v.target,
            R = Math.abs(y) > Math.abs(E) ? "h" : "v";
         if ("touches" in v && R === "h" && T.type === "range") return !1;
         var k = Lp(R, T);
         if (!k) return !0;
         if (k ? C = R : (C = R === "v" ? "h" : "v", k = Lp(R, T)), !k) return !1;
         if (!r.current && "changedTouches" in v && (y || E) && (r.current = C), !C) return !0;
         var N = r.current || C;
         return b4(N, S, v, N === "h" ? y : E, !0)
      }, []),
      l = h.useCallback(function(v) {
         var S = v;
         if (!(!Wn.length || Wn[Wn.length - 1] !== o)) {
            var p = "deltaY" in S ? Dp(S) : ko(S),
               m = t.current.filter(function(C) {
                  return C.name === S.type && (C.target === S.target || S.target === C.shadowParent) && A4(C.delta, p)
               })[0];
            if (m && m.should) {
               S.cancelable && S.preventDefault();
               return
            }
            if (!m) {
               var y = (s.current.shards || []).map(Op).filter(Boolean).filter(function(C) {
                     return C.contains(S.target)
                  }),
                  E = y.length > 0 ? a(S, y[0]) : !s.current.noIsolation;
               E && S.cancelable && S.preventDefault()
            }
         }
      }, []),
      u = h.useCallback(function(v, S, p, m) {
         var y = {
            name: v,
            delta: S,
            target: p,
            should: m,
            shadowParent: O4(p)
         };
         t.current.push(y), setTimeout(function() {
            t.current = t.current.filter(function(E) {
               return E !== y
            })
         }, 1)
      }, []),
      c = h.useCallback(function(v) {
         n.current = ko(v), r.current = void 0
      }, []),
      f = h.useCallback(function(v) {
         u(v.type, Dp(v), v.target, a(v, e.lockRef.current))
      }, []),
      d = h.useCallback(function(v) {
         u(v.type, ko(v), v.target, a(v, e.lockRef.current))
      }, []);
   h.useEffect(function() {
      return Wn.push(o), e.setCallbacks({
            onScrollCapture: f,
            onWheelCapture: f,
            onTouchMoveCapture: d
         }), document.addEventListener("wheel", l, $n), document.addEventListener("touchmove", l, $n), document.addEventListener("touchstart", c, $n),
         function() {
            Wn = Wn.filter(function(v) {
               return v !== o
            }), document.removeEventListener("wheel", l, $n), document.removeEventListener("touchmove", l, $n), document.removeEventListener("touchstart", c, $n)
         }
   }, []);
   var g = e.removeScrollBar,
      w = e.inert;
   return h.createElement(h.Fragment, null, w ? h.createElement(o, {
      styles: N4(i)
   }) : null, g ? h.createElement(S4, {
      gapMode: e.gapMode
   }) : null)
}

function O4(e) {
   for (var t = null; e !== null;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
   return t
}
const M4 = l4(yv, D4);
var Ev = h.forwardRef(function(e, t) {
   return h.createElement(fa, mt({}, e, {
      ref: t,
      sideCar: M4
   }))
});
Ev.classNames = fa.classNames;
const j4 = Ev;
var _4 = function(e) {
      if (typeof document > "u") return null;
      var t = Array.isArray(e) ? e[0] : e;
      return t.ownerDocument.body
   },
   Hn = new WeakMap,
   bo = new WeakMap,
   Ao = {},
   gl = 0,
   Cv = function(e) {
      return e && (e.host || Cv(e.parentNode))
   },
   F4 = function(e, t) {
      return t.map(function(n) {
         if (e.contains(n)) return n;
         var r = Cv(n);
         return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null)
      }).filter(function(n) {
         return !!n
      })
   },
   I4 = function(e, t, n, r) {
      var i = F4(t, Array.isArray(e) ? e : [e]);
      Ao[n] || (Ao[n] = new WeakMap);
      var o = Ao[n],
         s = [],
         a = new Set,
         l = new Set(i),
         u = function(f) {
            !f || a.has(f) || (a.add(f), u(f.parentNode))
         };
      i.forEach(u);
      var c = function(f) {
         !f || l.has(f) || Array.prototype.forEach.call(f.children, function(d) {
            if (a.has(d)) c(d);
            else try {
               var g = d.getAttribute(r),
                  w = g !== null && g !== "false",
                  v = (Hn.get(d) || 0) + 1,
                  S = (o.get(d) || 0) + 1;
               Hn.set(d, v), o.set(d, S), s.push(d), v === 1 && w && bo.set(d, !0), S === 1 && d.setAttribute(n, "true"), w || d.setAttribute(r, "true")
            } catch (p) {
               console.error("aria-hidden: cannot operate on ", d, p)
            }
         })
      };
      return c(t), a.clear(), gl++,
         function() {
            s.forEach(function(f) {
               var d = Hn.get(f) - 1,
                  g = o.get(f) - 1;
               Hn.set(f, d), o.set(f, g), d || (bo.has(f) || f.removeAttribute(r), bo.delete(f)), g || f.removeAttribute(n)
            }), gl--, gl || (Hn = new WeakMap, Hn = new WeakMap, bo = new WeakMap, Ao = {})
         }
   },
   V4 = function(e, t, n) {
      n === void 0 && (n = "data-aria-hidden");
      var r = Array.from(Array.isArray(e) ? e : [e]),
         i = t || _4(e);
      return i ? (r.push.apply(r, Array.from(i.querySelectorAll("[aria-live]"))), I4(r, i, n, "aria-hidden")) : function() {
         return null
      }
   },
   kf = "Dialog",
   [Pv, ck] = lv(kf),
   [B4, ut] = Pv(kf),
   Tv = e => {
      const {
         __scopeDialog: t,
         children: n,
         open: r,
         defaultOpen: i,
         onOpenChange: o,
         modal: s = !0
      } = e, a = h.useRef(null), l = h.useRef(null), [u = !1, c] = TT({
         prop: r,
         defaultProp: i,
         onChange: o
      });
      return x.jsx(B4, {
         scope: t,
         triggerRef: a,
         contentRef: l,
         contentId: ul(),
         titleId: ul(),
         descriptionId: ul(),
         open: u,
         onOpenChange: c,
         onOpenToggle: h.useCallback(() => c(f => !f), [c]),
         modal: s,
         children: n
      })
   };
Tv.displayName = kf;
var Rv = "DialogTrigger",
   kv = h.forwardRef((e, t) => {
      const {
         __scopeDialog: n,
         ...r
      } = e, i = ut(Rv, n), o = $e(t, i.triggerRef);
      return x.jsx(Me.button, {
         type: "button",
         "aria-haspopup": "dialog",
         "aria-expanded": i.open,
         "aria-controls": i.contentId,
         "data-state": Nf(i.open),
         ...r,
         ref: o,
         onClick: Te(e.onClick, i.onOpenToggle)
      })
   });
kv.displayName = Rv;
var bf = "DialogPortal",
   [z4, bv] = Pv(bf, {
      forceMount: void 0
   }),
   Av = e => {
      const {
         __scopeDialog: t,
         forceMount: n,
         children: r,
         container: i
      } = e, o = ut(bf, t);
      return x.jsx(z4, {
         scope: t,
         forceMount: n,
         children: h.Children.map(r, s => x.jsx(mn, {
            present: n || o.open,
            children: x.jsx(pv, {
               asChild: !0,
               container: i,
               children: s
            })
         }))
      })
   };
Av.displayName = bf;
var _s = "DialogOverlay",
   Nv = h.forwardRef((e, t) => {
      const n = bv(_s, e.__scopeDialog),
         {
            forceMount: r = n.forceMount,
            ...i
         } = e,
         o = ut(_s, e.__scopeDialog);
      return o.modal ? x.jsx(mn, {
         present: r || o.open,
         children: x.jsx(U4, {
            ...i,
            ref: t
         })
      }) : null
   });
Nv.displayName = _s;
var U4 = h.forwardRef((e, t) => {
      const {
         __scopeDialog: n,
         ...r
      } = e, i = ut(_s, n);
      return x.jsx(j4, {
         as: Rf,
         allowPinchZoom: !0,
         shards: [i.contentRef],
         children: x.jsx(Me.div, {
            "data-state": Nf(i.open),
            ...r,
            ref: t,
            style: {
               pointerEvents: "auto",
               ...r.style
            }
         })
      })
   }),
   Fn = "DialogContent",
   Lv = h.forwardRef((e, t) => {
      const n = bv(Fn, e.__scopeDialog),
         {
            forceMount: r = n.forceMount,
            ...i
         } = e,
         o = ut(Fn, e.__scopeDialog);
      return x.jsx(mn, {
         present: r || o.open,
         children: o.modal ? x.jsx($4, {
            ...i,
            ref: t
         }) : x.jsx(W4, {
            ...i,
            ref: t
         })
      })
   });
Lv.displayName = Fn;
var $4 = h.forwardRef((e, t) => {
      const n = ut(Fn, e.__scopeDialog),
         r = h.useRef(null),
         i = $e(t, n.contentRef, r);
      return h.useEffect(() => {
         const o = r.current;
         if (o) return V4(o)
      }, []), x.jsx(Dv, {
         ...e,
         ref: i,
         trapFocus: n.open,
         disableOutsidePointerEvents: !0,
         onCloseAutoFocus: Te(e.onCloseAutoFocus, o => {
            var s;
            o.preventDefault(), (s = n.triggerRef.current) == null || s.focus()
         }),
         onPointerDownOutside: Te(e.onPointerDownOutside, o => {
            const s = o.detail.originalEvent,
               a = s.button === 0 && s.ctrlKey === !0;
            (s.button === 2 || a) && o.preventDefault()
         }),
         onFocusOutside: Te(e.onFocusOutside, o => o.preventDefault())
      })
   }),
   W4 = h.forwardRef((e, t) => {
      const n = ut(Fn, e.__scopeDialog),
         r = h.useRef(!1),
         i = h.useRef(!1);
      return x.jsx(Dv, {
         ...e,
         ref: t,
         trapFocus: !1,
         disableOutsidePointerEvents: !1,
         onCloseAutoFocus: o => {
            var s, a;
            (s = e.onCloseAutoFocus) == null || s.call(e, o), o.defaultPrevented || (r.current || (a = n.triggerRef.current) == null || a.focus(), o.preventDefault()), r.current = !1, i.current = !1
         },
         onInteractOutside: o => {
            var l, u;
            (l = e.onInteractOutside) == null || l.call(e, o), o.defaultPrevented || (r.current = !0, o.detail.originalEvent.type === "pointerdown" && (i.current = !0));
            const s = o.target;
            ((u = n.triggerRef.current) == null ? void 0 : u.contains(s)) && o.preventDefault(), o.detail.originalEvent.type === "focusin" && i.current && o.preventDefault()
         }
      })
   }),
   Dv = h.forwardRef((e, t) => {
      const {
         __scopeDialog: n,
         trapFocus: r,
         onOpenAutoFocus: i,
         onCloseAutoFocus: o,
         ...s
      } = e, a = ut(Fn, n), l = h.useRef(null), u = $e(t, l);
      return ZT(), x.jsxs(x.Fragment, {
         children: [x.jsx(dv, {
            asChild: !0,
            loop: !0,
            trapped: r,
            onMountAutoFocus: i,
            onUnmountAutoFocus: o,
            children: x.jsx(cv, {
               role: "dialog",
               id: a.contentId,
               "aria-describedby": a.descriptionId,
               "aria-labelledby": a.titleId,
               "data-state": Nf(a.open),
               ...s,
               ref: u,
               onDismiss: () => a.onOpenChange(!1)
            })
         }), x.jsxs(x.Fragment, {
            children: [x.jsx(X4, {
               titleId: a.titleId
            }), x.jsx(Q4, {
               contentRef: l,
               descriptionId: a.descriptionId
            })]
         })]
      })
   }),
   Af = "DialogTitle",
   H4 = h.forwardRef((e, t) => {
      const {
         __scopeDialog: n,
         ...r
      } = e, i = ut(Af, n);
      return x.jsx(Me.h2, {
         id: i.titleId,
         ...r,
         ref: t
      })
   });
H4.displayName = Af;
var Ov = "DialogDescription",
   K4 = h.forwardRef((e, t) => {
      const {
         __scopeDialog: n,
         ...r
      } = e, i = ut(Ov, n);
      return x.jsx(Me.p, {
         id: i.descriptionId,
         ...r,
         ref: t
      })
   });
K4.displayName = Ov;
var Mv = "DialogClose",
   G4 = h.forwardRef((e, t) => {
      const {
         __scopeDialog: n,
         ...r
      } = e, i = ut(Mv, n);
      return x.jsx(Me.button, {
         type: "button",
         ...r,
         ref: t,
         onClick: Te(e.onClick, () => i.onOpenChange(!1))
      })
   });
G4.displayName = Mv;

function Nf(e) {
   return e ? "open" : "closed"
}
var jv = "DialogTitleWarning",
   [fk, _v] = ST(jv, {
      contentName: Fn,
      titleName: Af,
      docsSlug: "dialog"
   }),
   X4 = ({
      titleId: e
   }) => {
      const t = _v(jv),
         n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
      return h.useEffect(() => {
         e && (document.getElementById(e) || console.error(n))
      }, [n, e]), null
   },
   Y4 = "DialogDescriptionWarning",
   Q4 = ({
      contentRef: e,
      descriptionId: t
   }) => {
      const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${_v(Y4).contentName}}.`;
      return h.useEffect(() => {
         var o;
         const i = (o = e.current) == null ? void 0 : o.getAttribute("aria-describedby");
         t && i && (document.getElementById(t) || console.warn(r))
      }, [r, e, t]), null
   },
   Mp = Tv,
   q4 = kv,
   jp = Av,
   _p = Nv,
   Fp = Lv,
   Z4 = h.createContext(void 0);

function J4(e) {
   const t = h.useContext(Z4);
   return e || t || "ltr"
}

function e5(e, [t, n]) {
   return Math.min(n, Math.max(t, e))
}

function t5(e, t) {
   return h.useReducer((n, r) => t[n][r] ?? n, e)
}
var Lf = "ScrollArea",
   [Fv, dk] = lv(Lf),
   [n5, Ze] = Fv(Lf),
   Iv = h.forwardRef((e, t) => {
      const {
         __scopeScrollArea: n,
         type: r = "hover",
         dir: i,
         scrollHideDelay: o = 600,
         ...s
      } = e, [a, l] = h.useState(null), [u, c] = h.useState(null), [f, d] = h.useState(null), [g, w] = h.useState(null), [v, S] = h.useState(null), [p, m] = h.useState(0), [y, E] = h.useState(0), [C, T] = h.useState(!1), [R, k] = h.useState(!1), N = $e(t, z => l(z)), L = J4(i);
      return x.jsx(n5, {
         scope: n,
         type: r,
         dir: L,
         scrollHideDelay: o,
         scrollArea: a,
         viewport: u,
         onViewportChange: c,
         content: f,
         onContentChange: d,
         scrollbarX: g,
         onScrollbarXChange: w,
         scrollbarXEnabled: C,
         onScrollbarXEnabledChange: T,
         scrollbarY: v,
         onScrollbarYChange: S,
         scrollbarYEnabled: R,
         onScrollbarYEnabledChange: k,
         onCornerWidthChange: m,
         onCornerHeightChange: E,
         children: x.jsx(Me.div, {
            dir: L,
            ...s,
            ref: N,
            style: {
               position: "relative",
               "--radix-scroll-area-corner-width": p + "px",
               "--radix-scroll-area-corner-height": y + "px",
               ...e.style
            }
         })
      })
   });
Iv.displayName = Lf;
var Vv = "ScrollAreaViewport",
   Bv = h.forwardRef((e, t) => {
      const {
         __scopeScrollArea: n,
         children: r,
         nonce: i,
         ...o
      } = e, s = Ze(Vv, n), a = h.useRef(null), l = $e(t, a, s.onViewportChange);
      return x.jsxs(x.Fragment, {
         children: [x.jsx("style", {
            dangerouslySetInnerHTML: {
               __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: i
         }), x.jsx(Me.div, {
            "data-radix-scroll-area-viewport": "",
            ...o,
            ref: l,
            style: {
               overflowX: s.scrollbarXEnabled ? "scroll" : "hidden",
               overflowY: s.scrollbarYEnabled ? "scroll" : "hidden",
               ...e.style
            },
            children: x.jsx("div", {
               ref: s.onContentChange,
               style: {
                  minWidth: "100%",
                  display: "table"
               },
               children: r
            })
         })]
      })
   });
Bv.displayName = Vv;
var Ct = "ScrollAreaScrollbar",
   zv = h.forwardRef((e, t) => {
      const {
         forceMount: n,
         ...r
      } = e, i = Ze(Ct, e.__scopeScrollArea), {
         onScrollbarXEnabledChange: o,
         onScrollbarYEnabledChange: s
      } = i, a = e.orientation === "horizontal";
      return h.useEffect(() => (a ? o(!0) : s(!0), () => {
         a ? o(!1) : s(!1)
      }), [a, o, s]), i.type === "hover" ? x.jsx(r5, {
         ...r,
         ref: t,
         forceMount: n
      }) : i.type === "scroll" ? x.jsx(i5, {
         ...r,
         ref: t,
         forceMount: n
      }) : i.type === "auto" ? x.jsx(Uv, {
         ...r,
         ref: t,
         forceMount: n
      }) : i.type === "always" ? x.jsx(Df, {
         ...r,
         ref: t
      }) : null
   });
zv.displayName = Ct;
var r5 = h.forwardRef((e, t) => {
      const {
         forceMount: n,
         ...r
      } = e, i = Ze(Ct, e.__scopeScrollArea), [o, s] = h.useState(!1);
      return h.useEffect(() => {
         const a = i.scrollArea;
         let l = 0;
         if (a) {
            const u = () => {
                  window.clearTimeout(l), s(!0)
               },
               c = () => {
                  l = window.setTimeout(() => s(!1), i.scrollHideDelay)
               };
            return a.addEventListener("pointerenter", u), a.addEventListener("pointerleave", c), () => {
               window.clearTimeout(l), a.removeEventListener("pointerenter", u), a.removeEventListener("pointerleave", c)
            }
         }
      }, [i.scrollArea, i.scrollHideDelay]), x.jsx(mn, {
         present: n || o,
         children: x.jsx(Uv, {
            "data-state": o ? "visible" : "hidden",
            ...r,
            ref: t
         })
      })
   }),
   i5 = h.forwardRef((e, t) => {
      const {
         forceMount: n,
         ...r
      } = e, i = Ze(Ct, e.__scopeScrollArea), o = e.orientation === "horizontal", s = ha(() => l("SCROLL_END"), 100), [a, l] = t5("hidden", {
         hidden: {
            SCROLL: "scrolling"
         },
         scrolling: {
            SCROLL_END: "idle",
            POINTER_ENTER: "interacting"
         },
         interacting: {
            SCROLL: "interacting",
            POINTER_LEAVE: "idle"
         },
         idle: {
            HIDE: "hidden",
            SCROLL: "scrolling",
            POINTER_ENTER: "interacting"
         }
      });
      return h.useEffect(() => {
         if (a === "idle") {
            const u = window.setTimeout(() => l("HIDE"), i.scrollHideDelay);
            return () => window.clearTimeout(u)
         }
      }, [a, i.scrollHideDelay, l]), h.useEffect(() => {
         const u = i.viewport,
            c = o ? "scrollLeft" : "scrollTop";
         if (u) {
            let f = u[c];
            const d = () => {
               const g = u[c];
               f !== g && (l("SCROLL"), s()), f = g
            };
            return u.addEventListener("scroll", d), () => u.removeEventListener("scroll", d)
         }
      }, [i.viewport, o, l, s]), x.jsx(mn, {
         present: n || a !== "hidden",
         children: x.jsx(Df, {
            "data-state": a === "hidden" ? "hidden" : "visible",
            ...r,
            ref: t,
            onPointerEnter: Te(e.onPointerEnter, () => l("POINTER_ENTER")),
            onPointerLeave: Te(e.onPointerLeave, () => l("POINTER_LEAVE"))
         })
      })
   }),
   Uv = h.forwardRef((e, t) => {
      const n = Ze(Ct, e.__scopeScrollArea),
         {
            forceMount: r,
            ...i
         } = e,
         [o, s] = h.useState(!1),
         a = e.orientation === "horizontal",
         l = ha(() => {
            if (n.viewport) {
               const u = n.viewport.offsetWidth < n.viewport.scrollWidth,
                  c = n.viewport.offsetHeight < n.viewport.scrollHeight;
               s(a ? u : c)
            }
         }, 10);
      return Rr(n.viewport, l), Rr(n.content, l), x.jsx(mn, {
         present: r || o,
         children: x.jsx(Df, {
            "data-state": o ? "visible" : "hidden",
            ...i,
            ref: t
         })
      })
   }),
   Df = h.forwardRef((e, t) => {
      const {
         orientation: n = "vertical",
         ...r
      } = e, i = Ze(Ct, e.__scopeScrollArea), o = h.useRef(null), s = h.useRef(0), [a, l] = h.useState({
         content: 0,
         viewport: 0,
         scrollbar: {
            size: 0,
            paddingStart: 0,
            paddingEnd: 0
         }
      }), u = Kv(a.viewport, a.content), c = {
         ...r,
         sizes: a,
         onSizesChange: l,
         hasThumb: u > 0 && u < 1,
         onThumbChange: d => o.current = d,
         onThumbPointerUp: () => s.current = 0,
         onThumbPointerDown: d => s.current = d
      };

      function f(d, g) {
         return f5(d, s.current, a, g)
      }
      return n === "horizontal" ? x.jsx(o5, {
         ...c,
         ref: t,
         onThumbPositionChange: () => {
            if (i.viewport && o.current) {
               const d = i.viewport.scrollLeft,
                  g = Ip(d, a, i.dir);
               o.current.style.transform = `translate3d(${g}px, 0, 0)`
            }
         },
         onWheelScroll: d => {
            i.viewport && (i.viewport.scrollLeft = d)
         },
         onDragScroll: d => {
            i.viewport && (i.viewport.scrollLeft = f(d, i.dir))
         }
      }) : n === "vertical" ? x.jsx(s5, {
         ...c,
         ref: t,
         onThumbPositionChange: () => {
            if (i.viewport && o.current) {
               const d = i.viewport.scrollTop,
                  g = Ip(d, a);
               o.current.style.transform = `translate3d(0, ${g}px, 0)`
            }
         },
         onWheelScroll: d => {
            i.viewport && (i.viewport.scrollTop = d)
         },
         onDragScroll: d => {
            i.viewport && (i.viewport.scrollTop = f(d))
         }
      }) : null
   }),
   o5 = h.forwardRef((e, t) => {
      const {
         sizes: n,
         onSizesChange: r,
         ...i
      } = e, o = Ze(Ct, e.__scopeScrollArea), [s, a] = h.useState(), l = h.useRef(null), u = $e(t, l, o.onScrollbarXChange);
      return h.useEffect(() => {
         l.current && a(getComputedStyle(l.current))
      }, [l]), x.jsx(Wv, {
         "data-orientation": "horizontal",
         ...i,
         ref: u,
         sizes: n,
         style: {
            bottom: 0,
            left: o.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
            right: o.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
            "--radix-scroll-area-thumb-width": da(n) + "px",
            ...e.style
         },
         onThumbPointerDown: c => e.onThumbPointerDown(c.x),
         onDragScroll: c => e.onDragScroll(c.x),
         onWheelScroll: (c, f) => {
            if (o.viewport) {
               const d = o.viewport.scrollLeft + c.deltaX;
               e.onWheelScroll(d), Xv(d, f) && c.preventDefault()
            }
         },
         onResize: () => {
            l.current && o.viewport && s && r({
               content: o.viewport.scrollWidth,
               viewport: o.viewport.offsetWidth,
               scrollbar: {
                  size: l.current.clientWidth,
                  paddingStart: Is(s.paddingLeft),
                  paddingEnd: Is(s.paddingRight)
               }
            })
         }
      })
   }),
   s5 = h.forwardRef((e, t) => {
      const {
         sizes: n,
         onSizesChange: r,
         ...i
      } = e, o = Ze(Ct, e.__scopeScrollArea), [s, a] = h.useState(), l = h.useRef(null), u = $e(t, l, o.onScrollbarYChange);
      return h.useEffect(() => {
         l.current && a(getComputedStyle(l.current))
      }, [l]), x.jsx(Wv, {
         "data-orientation": "vertical",
         ...i,
         ref: u,
         sizes: n,
         style: {
            top: 0,
            right: o.dir === "ltr" ? 0 : void 0,
            left: o.dir === "rtl" ? 0 : void 0,
            bottom: "var(--radix-scroll-area-corner-height)",
            "--radix-scroll-area-thumb-height": da(n) + "px",
            ...e.style
         },
         onThumbPointerDown: c => e.onThumbPointerDown(c.y),
         onDragScroll: c => e.onDragScroll(c.y),
         onWheelScroll: (c, f) => {
            if (o.viewport) {
               const d = o.viewport.scrollTop + c.deltaY;
               e.onWheelScroll(d), Xv(d, f) && c.preventDefault()
            }
         },
         onResize: () => {
            l.current && o.viewport && s && r({
               content: o.viewport.scrollHeight,
               viewport: o.viewport.offsetHeight,
               scrollbar: {
                  size: l.current.clientHeight,
                  paddingStart: Is(s.paddingTop),
                  paddingEnd: Is(s.paddingBottom)
               }
            })
         }
      })
   }),
   [a5, $v] = Fv(Ct),
   Wv = h.forwardRef((e, t) => {
      const {
         __scopeScrollArea: n,
         sizes: r,
         hasThumb: i,
         onThumbChange: o,
         onThumbPointerUp: s,
         onThumbPointerDown: a,
         onThumbPositionChange: l,
         onDragScroll: u,
         onWheelScroll: c,
         onResize: f,
         ...d
      } = e, g = Ze(Ct, n), [w, v] = h.useState(null), S = $e(t, N => v(N)), p = h.useRef(null), m = h.useRef(""), y = g.viewport, E = r.content - r.viewport, C = Ae(c), T = Ae(l), R = ha(f, 10);

      function k(N) {
         if (p.current) {
            const L = N.clientX - p.current.left,
               z = N.clientY - p.current.top;
            u({
               x: L,
               y: z
            })
         }
      }
      return h.useEffect(() => {
         const N = L => {
            const z = L.target;
            (w == null ? void 0 : w.contains(z)) && C(L, E)
         };
         return document.addEventListener("wheel", N, {
            passive: !1
         }), () => document.removeEventListener("wheel", N, {
            passive: !1
         })
      }, [y, w, E, C]), h.useEffect(T, [r, T]), Rr(w, R), Rr(g.content, R), x.jsx(a5, {
         scope: n,
         scrollbar: w,
         hasThumb: i,
         onThumbChange: Ae(o),
         onThumbPointerUp: Ae(s),
         onThumbPositionChange: T,
         onThumbPointerDown: Ae(a),
         children: x.jsx(Me.div, {
            ...d,
            ref: S,
            style: {
               position: "absolute",
               ...d.style
            },
            onPointerDown: Te(e.onPointerDown, N => {
               N.button === 0 && (N.target.setPointerCapture(N.pointerId), p.current = w.getBoundingClientRect(), m.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", g.viewport && (g.viewport.style.scrollBehavior = "auto"), k(N))
            }),
            onPointerMove: Te(e.onPointerMove, k),
            onPointerUp: Te(e.onPointerUp, N => {
               const L = N.target;
               L.hasPointerCapture(N.pointerId) && L.releasePointerCapture(N.pointerId), document.body.style.webkitUserSelect = m.current, g.viewport && (g.viewport.style.scrollBehavior = ""), p.current = null
            })
         })
      })
   }),
   Fs = "ScrollAreaThumb",
   Hv = h.forwardRef((e, t) => {
      const {
         forceMount: n,
         ...r
      } = e, i = $v(Fs, e.__scopeScrollArea);
      return x.jsx(mn, {
         present: n || i.hasThumb,
         children: x.jsx(l5, {
            ref: t,
            ...r
         })
      })
   }),
   l5 = h.forwardRef((e, t) => {
      const {
         __scopeScrollArea: n,
         style: r,
         ...i
      } = e, o = Ze(Fs, n), s = $v(Fs, n), {
         onThumbPositionChange: a
      } = s, l = $e(t, f => s.onThumbChange(f)), u = h.useRef(void 0), c = ha(() => {
         u.current && (u.current(), u.current = void 0)
      }, 100);
      return h.useEffect(() => {
         const f = o.viewport;
         if (f) {
            const d = () => {
               if (c(), !u.current) {
                  const g = d5(f, a);
                  u.current = g, a()
               }
            };
            return a(), f.addEventListener("scroll", d), () => f.removeEventListener("scroll", d)
         }
      }, [o.viewport, c, a]), x.jsx(Me.div, {
         "data-state": s.hasThumb ? "visible" : "hidden",
         ...i,
         ref: l,
         style: {
            width: "var(--radix-scroll-area-thumb-width)",
            height: "var(--radix-scroll-area-thumb-height)",
            ...r
         },
         onPointerDownCapture: Te(e.onPointerDownCapture, f => {
            const g = f.target.getBoundingClientRect(),
               w = f.clientX - g.left,
               v = f.clientY - g.top;
            s.onThumbPointerDown({
               x: w,
               y: v
            })
         }),
         onPointerUp: Te(e.onPointerUp, s.onThumbPointerUp)
      })
   });
Hv.displayName = Fs;
var Of = "ScrollAreaCorner",
   u5 = h.forwardRef((e, t) => {
      const n = Ze(Of, e.__scopeScrollArea),
         r = !!(n.scrollbarX && n.scrollbarY);
      return n.type !== "scroll" && r ? x.jsx(c5, {
         ...e,
         ref: t
      }) : null
   });
u5.displayName = Of;
var c5 = h.forwardRef((e, t) => {
   const {
      __scopeScrollArea: n,
      ...r
   } = e, i = Ze(Of, n), [o, s] = h.useState(0), [a, l] = h.useState(0), u = !!(o && a);
   return Rr(i.scrollbarX, () => {
      var f;
      const c = ((f = i.scrollbarX) == null ? void 0 : f.offsetHeight) || 0;
      i.onCornerHeightChange(c), l(c)
   }), Rr(i.scrollbarY, () => {
      var f;
      const c = ((f = i.scrollbarY) == null ? void 0 : f.offsetWidth) || 0;
      i.onCornerWidthChange(c), s(c)
   }), u ? x.jsx(Me.div, {
      ...r,
      ref: t,
      style: {
         width: o,
         height: a,
         position: "absolute",
         right: i.dir === "ltr" ? 0 : void 0,
         left: i.dir === "rtl" ? 0 : void 0,
         bottom: 0,
         ...e.style
      }
   }) : null
});

function Is(e) {
   return e ? parseInt(e, 10) : 0
}

function Kv(e, t) {
   const n = e / t;
   return isNaN(n) ? 0 : n
}

function da(e) {
   const t = Kv(e.viewport, e.content),
      n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
      r = (e.scrollbar.size - n) * t;
   return Math.max(r, 18)
}

function f5(e, t, n, r = "ltr") {
   const i = da(n),
      o = i / 2,
      s = t || o,
      a = i - s,
      l = n.scrollbar.paddingStart + s,
      u = n.scrollbar.size - n.scrollbar.paddingEnd - a,
      c = n.content - n.viewport,
      f = r === "ltr" ? [0, c] : [c * -1, 0];
   return Gv([l, u], f)(e)
}

function Ip(e, t, n = "ltr") {
   const r = da(t),
      i = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
      o = t.scrollbar.size - i,
      s = t.content - t.viewport,
      a = o - r,
      l = n === "ltr" ? [0, s] : [s * -1, 0],
      u = e5(e, l);
   return Gv([0, s], [0, a])(u)
}

function Gv(e, t) {
   return n => {
      if (e[0] === e[1] || t[0] === t[1]) return t[0];
      const r = (t[1] - t[0]) / (e[1] - e[0]);
      return t[0] + r * (n - e[0])
   }
}

function Xv(e, t) {
   return e > 0 && e < t
}
var d5 = (e, t = () => {}) => {
   let n = {
         left: e.scrollLeft,
         top: e.scrollTop
      },
      r = 0;
   return function i() {
      const o = {
            left: e.scrollLeft,
            top: e.scrollTop
         },
         s = n.left !== o.left,
         a = n.top !== o.top;
      (s || a) && t(), n = o, r = window.requestAnimationFrame(i)
   }(), () => window.cancelAnimationFrame(r)
};

function ha(e, t) {
   const n = Ae(e),
      r = h.useRef(0);
   return h.useEffect(() => () => window.clearTimeout(r.current), []), h.useCallback(() => {
      window.clearTimeout(r.current), r.current = window.setTimeout(n, t)
   }, [n, t])
}

function Rr(e, t) {
   const n = Ae(t);
   Fi(() => {
      let r = 0;
      if (e) {
         const i = new ResizeObserver(() => {
            cancelAnimationFrame(r), r = window.requestAnimationFrame(n)
         });
         return i.observe(e), () => {
            window.cancelAnimationFrame(r), i.unobserve(e)
         }
      }
   }, [e, n])
}
var h5 = Iv,
   p5 = Bv,
   m5 = zv,
   g5 = Hv;

function Yv(e, t) {
   return function() {
      return e.apply(t, arguments)
   }
}
const {
   toString: y5
} = Object.prototype, {
   getPrototypeOf: Mf
} = Object, pa = (e => t => {
   const n = y5.call(t);
   return e[n] || (e[n] = n.slice(8, -1).toLowerCase())
})(Object.create(null)), ct = e => (e = e.toLowerCase(), t => pa(t) === e), ma = e => t => typeof t === e, {
   isArray: Mr
} = Array, Ii = ma("undefined");

function v5(e) {
   return e !== null && !Ii(e) && e.constructor !== null && !Ii(e.constructor) && Ve(e.constructor.isBuffer) && e.constructor.isBuffer(e)
}
const Qv = ct("ArrayBuffer");

function w5(e) {
   let t;
   return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Qv(e.buffer), t
}
const x5 = ma("string"),
   Ve = ma("function"),
   qv = ma("number"),
   ga = e => e !== null && typeof e == "object",
   S5 = e => e === !0 || e === !1,
   qo = e => {
      if (pa(e) !== "object") return !1;
      const t = Mf(e);
      return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
   },
   E5 = ct("Date"),
   C5 = ct("File"),
   P5 = ct("Blob"),
   T5 = ct("FileList"),
   R5 = e => ga(e) && Ve(e.pipe),
   k5 = e => {
      let t;
      return e && (typeof FormData == "function" && e instanceof FormData || Ve(e.append) && ((t = pa(e)) === "formdata" || t === "object" && Ve(e.toString) && e.toString() === "[object FormData]"))
   },
   b5 = ct("URLSearchParams"),
   [A5, N5, L5, D5] = ["ReadableStream", "Request", "Response", "Headers"].map(ct),
   O5 = e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");

function qi(e, t, {
   allOwnKeys: n = !1
} = {}) {
   if (e === null || typeof e > "u") return;
   let r, i;
   if (typeof e != "object" && (e = [e]), Mr(e))
      for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e);
   else {
      const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
         s = o.length;
      let a;
      for (r = 0; r < s; r++) a = o[r], t.call(null, e[a], a, e)
   }
}

function Zv(e, t) {
   t = t.toLowerCase();
   const n = Object.keys(e);
   let r = n.length,
      i;
   for (; r-- > 0;)
      if (i = n[r], t === i.toLowerCase()) return i;
   return null
}
const bn = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(),
   Jv = e => !Ii(e) && e !== bn;

function _u() {
   const {
      caseless: e
   } = Jv(this) && this || {}, t = {}, n = (r, i) => {
      const o = e && Zv(t, i) || i;
      qo(t[o]) && qo(r) ? t[o] = _u(t[o], r) : qo(r) ? t[o] = _u({}, r) : Mr(r) ? t[o] = r.slice() : t[o] = r
   };
   for (let r = 0, i = arguments.length; r < i; r++) arguments[r] && qi(arguments[r], n);
   return t
}
const M5 = (e, t, n, {
      allOwnKeys: r
   } = {}) => (qi(t, (i, o) => {
      n && Ve(i) ? e[o] = Yv(i, n) : e[o] = i
   }, {
      allOwnKeys: r
   }), e),
   j5 = e => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
   _5 = (e, t, n, r) => {
      e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
         value: t.prototype
      }), n && Object.assign(e.prototype, n)
   },
   F5 = (e, t, n, r) => {
      let i, o, s;
      const a = {};
      if (t = t || {}, e == null) return t;
      do {
         for (i = Object.getOwnPropertyNames(e), o = i.length; o-- > 0;) s = i[o], (!r || r(s, e, t)) && !a[s] && (t[s] = e[s], a[s] = !0);
         e = n !== !1 && Mf(e)
      } while (e && (!n || n(e, t)) && e !== Object.prototype);
      return t
   },
   I5 = (e, t, n) => {
      e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
      const r = e.indexOf(t, n);
      return r !== -1 && r === n
   },
   V5 = e => {
      if (!e) return null;
      if (Mr(e)) return e;
      let t = e.length;
      if (!qv(t)) return null;
      const n = new Array(t);
      for (; t-- > 0;) n[t] = e[t];
      return n
   },
   B5 = (e => t => e && t instanceof e)(typeof Uint8Array < "u" && Mf(Uint8Array)),
   z5 = (e, t) => {
      const r = (e && e[Symbol.iterator]).call(e);
      let i;
      for (;
         (i = r.next()) && !i.done;) {
         const o = i.value;
         t.call(e, o[0], o[1])
      }
   },
   U5 = (e, t) => {
      let n;
      const r = [];
      for (;
         (n = e.exec(t)) !== null;) r.push(n);
      return r
   },
   $5 = ct("HTMLFormElement"),
   W5 = e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, i) {
      return r.toUpperCase() + i
   }),
   Vp = (({
      hasOwnProperty: e
   }) => (t, n) => e.call(t, n))(Object.prototype),
   H5 = ct("RegExp"),
   e1 = (e, t) => {
      const n = Object.getOwnPropertyDescriptors(e),
         r = {};
      qi(n, (i, o) => {
         let s;
         (s = t(i, o, e)) !== !1 && (r[o] = s || i)
      }), Object.defineProperties(e, r)
   },
   K5 = e => {
      e1(e, (t, n) => {
         if (Ve(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1) return !1;
         const r = e[n];
         if (Ve(r)) {
            if (t.enumerable = !1, "writable" in t) {
               t.writable = !1;
               return
            }
            t.set || (t.set = () => {
               throw Error("Can not rewrite read-only method '" + n + "'")
            })
         }
      })
   },
   G5 = (e, t) => {
      const n = {},
         r = i => {
            i.forEach(o => {
               n[o] = !0
            })
         };
      return Mr(e) ? r(e) : r(String(e).split(t)), n
   },
   X5 = () => {},
   Y5 = (e, t) => e != null && Number.isFinite(e = +e) ? e : t,
   yl = "abcdefghijklmnopqrstuvwxyz",
   Bp = "0123456789",
   t1 = {
      DIGIT: Bp,
      ALPHA: yl,
      ALPHA_DIGIT: yl + yl.toUpperCase() + Bp
   },
   Q5 = (e = 16, t = t1.ALPHA_DIGIT) => {
      let n = "";
      const {
         length: r
      } = t;
      for (; e--;) n += t[Math.random() * r | 0];
      return n
   };

function q5(e) {
   return !!(e && Ve(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator])
}
const Z5 = e => {
      const t = new Array(10),
         n = (r, i) => {
            if (ga(r)) {
               if (t.indexOf(r) >= 0) return;
               if (!("toJSON" in r)) {
                  t[i] = r;
                  const o = Mr(r) ? [] : {};
                  return qi(r, (s, a) => {
                     const l = n(s, i + 1);
                     !Ii(l) && (o[a] = l)
                  }), t[i] = void 0, o
               }
            }
            return r
         };
      return n(e, 0)
   },
   J5 = ct("AsyncFunction"),
   eR = e => e && (ga(e) || Ve(e)) && Ve(e.then) && Ve(e.catch),
   n1 = ((e, t) => e ? setImmediate : t ? ((n, r) => (bn.addEventListener("message", ({
      source: i,
      data: o
   }) => {
      i === bn && o === n && r.length && r.shift()()
   }, !1), i => {
      r.push(i), bn.postMessage(n, "*")
   }))(`axios@${Math.random()}`, []) : n => setTimeout(n))(typeof setImmediate == "function", Ve(bn.postMessage)),
   tR = typeof queueMicrotask < "u" ? queueMicrotask.bind(bn) : typeof process < "u" && process.nextTick || n1,
   P = {
      isArray: Mr,
      isArrayBuffer: Qv,
      isBuffer: v5,
      isFormData: k5,
      isArrayBufferView: w5,
      isString: x5,
      isNumber: qv,
      isBoolean: S5,
      isObject: ga,
      isPlainObject: qo,
      isReadableStream: A5,
      isRequest: N5,
      isResponse: L5,
      isHeaders: D5,
      isUndefined: Ii,
      isDate: E5,
      isFile: C5,
      isBlob: P5,
      isRegExp: H5,
      isFunction: Ve,
      isStream: R5,
      isURLSearchParams: b5,
      isTypedArray: B5,
      isFileList: T5,
      forEach: qi,
      merge: _u,
      extend: M5,
      trim: O5,
      stripBOM: j5,
      inherits: _5,
      toFlatObject: F5,
      kindOf: pa,
      kindOfTest: ct,
      endsWith: I5,
      toArray: V5,
      forEachEntry: z5,
      matchAll: U5,
      isHTMLForm: $5,
      hasOwnProperty: Vp,
      hasOwnProp: Vp,
      reduceDescriptors: e1,
      freezeMethods: K5,
      toObjectSet: G5,
      toCamelCase: W5,
      noop: X5,
      toFiniteNumber: Y5,
      findKey: Zv,
      global: bn,
      isContextDefined: Jv,
      ALPHABET: t1,
      generateString: Q5,
      isSpecCompliantForm: q5,
      toJSONObject: Z5,
      isAsyncFn: J5,
      isThenable: eR,
      setImmediate: n1,
      asap: tR
   };

function F(e, t, n, r, i) {
   Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), i && (this.response = i, this.status = i.status ? i.status : null)
}
P.inherits(F, Error, {
   toJSON: function() {
      return {
         message: this.message,
         name: this.name,
         description: this.description,
         number: this.number,
         fileName: this.fileName,
         lineNumber: this.lineNumber,
         columnNumber: this.columnNumber,
         stack: this.stack,
         config: P.toJSONObject(this.config),
         code: this.code,
         status: this.status
      }
   }
});
const r1 = F.prototype,
   i1 = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e => {
   i1[e] = {
      value: e
   }
});
Object.defineProperties(F, i1);
Object.defineProperty(r1, "isAxiosError", {
   value: !0
});
F.from = (e, t, n, r, i, o) => {
   const s = Object.create(r1);
   return P.toFlatObject(e, s, function(l) {
      return l !== Error.prototype
   }, a => a !== "isAxiosError"), F.call(s, e.message, t, n, r, i), s.cause = e, s.name = e.name, o && Object.assign(s, o), s
};
const nR = null;

function Fu(e) {
   return P.isPlainObject(e) || P.isArray(e)
}

function o1(e) {
   return P.endsWith(e, "[]") ? e.slice(0, -2) : e
}

function zp(e, t, n) {
   return e ? e.concat(t).map(function(i, o) {
      return i = o1(i), !n && o ? "[" + i + "]" : i
   }).join(n ? "." : "") : t
}

function rR(e) {
   return P.isArray(e) && !e.some(Fu)
}
const iR = P.toFlatObject(P, {}, null, function(t) {
   return /^is[A-Z]/.test(t)
});

function ya(e, t, n) {
   if (!P.isObject(e)) throw new TypeError("target must be an object");
   t = t || new FormData, n = P.toFlatObject(n, {
      metaTokens: !0,
      dots: !1,
      indexes: !1
   }, !1, function(v, S) {
      return !P.isUndefined(S[v])
   });
   const r = n.metaTokens,
      i = n.visitor || c,
      o = n.dots,
      s = n.indexes,
      l = (n.Blob || typeof Blob < "u" && Blob) && P.isSpecCompliantForm(t);
   if (!P.isFunction(i)) throw new TypeError("visitor must be a function");

   function u(w) {
      if (w === null) return "";
      if (P.isDate(w)) return w.toISOString();
      if (!l && P.isBlob(w)) throw new F("Blob is not supported. Use a Buffer instead.");
      return P.isArrayBuffer(w) || P.isTypedArray(w) ? l && typeof Blob == "function" ? new Blob([w]) : Buffer.from(w) : w
   }

   function c(w, v, S) {
      let p = w;
      if (w && !S && typeof w == "object") {
         if (P.endsWith(v, "{}")) v = r ? v : v.slice(0, -2), w = JSON.stringify(w);
         else if (P.isArray(w) && rR(w) || (P.isFileList(w) || P.endsWith(v, "[]")) && (p = P.toArray(w))) return v = o1(v), p.forEach(function(y, E) {
            !(P.isUndefined(y) || y === null) && t.append(s === !0 ? zp([v], E, o) : s === null ? v : v + "[]", u(y))
         }), !1
      }
      return Fu(w) ? !0 : (t.append(zp(S, v, o), u(w)), !1)
   }
   const f = [],
      d = Object.assign(iR, {
         defaultVisitor: c,
         convertValue: u,
         isVisitable: Fu
      });

   function g(w, v) {
      if (!P.isUndefined(w)) {
         if (f.indexOf(w) !== -1) throw Error("Circular reference detected in " + v.join("."));
         f.push(w), P.forEach(w, function(p, m) {
            (!(P.isUndefined(p) || p === null) && i.call(t, p, P.isString(m) ? m.trim() : m, v, d)) === !0 && g(p, v ? v.concat(m) : [m])
         }), f.pop()
      }
   }
   if (!P.isObject(e)) throw new TypeError("data must be an object");
   return g(e), t
}

function Up(e) {
   const t = {
      "!": "%21",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "~": "%7E",
      "%20": "+",
      "%00": "\0"
   };
   return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
      return t[r]
   })
}

function jf(e, t) {
   this._pairs = [], e && ya(e, this, t)
}
const s1 = jf.prototype;
s1.append = function(t, n) {
   this._pairs.push([t, n])
};
s1.toString = function(t) {
   const n = t ? function(r) {
      return t.call(this, r, Up)
   } : Up;
   return this._pairs.map(function(i) {
      return n(i[0]) + "=" + n(i[1])
   }, "").join("&")
};

function oR(e) {
   return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
}

function a1(e, t, n) {
   if (!t) return e;
   const r = n && n.encode || oR;
   P.isFunction(n) && (n = {
      serialize: n
   });
   const i = n && n.serialize;
   let o;
   if (i ? o = i(t, n) : o = P.isURLSearchParams(t) ? t.toString() : new jf(t, n).toString(r), o) {
      const s = e.indexOf("#");
      s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + o
   }
   return e
}
class sR {
   constructor() {
      this.handlers = []
   }
   use(t, n, r) {
      return this.handlers.push({
         fulfilled: t,
         rejected: n,
         synchronous: r ? r.synchronous : !1,
         runWhen: r ? r.runWhen : null
      }), this.handlers.length - 1
   }
   eject(t) {
      this.handlers[t] && (this.handlers[t] = null)
   }
   clear() {
      this.handlers && (this.handlers = [])
   }
   forEach(t) {
      P.forEach(this.handlers, function(r) {
         r !== null && t(r)
      })
   }
}
const $p = sR,
   l1 = {
      silentJSONParsing: !0,
      forcedJSONParsing: !0,
      clarifyTimeoutError: !1
   },
   aR = typeof URLSearchParams < "u" ? URLSearchParams : jf,
   lR = typeof FormData < "u" ? FormData : null,
   uR = typeof Blob < "u" ? Blob : null,
   cR = {
      isBrowser: !0,
      classes: {
         URLSearchParams: aR,
         FormData: lR,
         Blob: uR
      },
      protocols: ["http", "https", "file", "blob", "url", "data"]
   },
   _f = typeof window < "u" && typeof document < "u",
   Iu = typeof navigator == "object" && navigator || void 0,
   fR = _f && (!Iu || ["ReactNative", "NativeScript", "NS"].indexOf(Iu.product) < 0),
   dR = (() => typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(),
   hR = _f && window.location.href || "http://localhost",
   pR = Object.freeze(Object.defineProperty({
      __proto__: null,
      hasBrowserEnv: _f,
      hasStandardBrowserEnv: fR,
      hasStandardBrowserWebWorkerEnv: dR,
      navigator: Iu,
      origin: hR
   }, Symbol.toStringTag, {
      value: "Module"
   })),
   we = {
      ...pR,
      ...cR
   };

function mR(e, t) {
   return ya(e, new we.classes.URLSearchParams, Object.assign({
      visitor: function(n, r, i, o) {
         return we.isNode && P.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments)
      }
   }, t))
}

function gR(e) {
   return P.matchAll(/\w+|\[(\w*)]/g, e).map(t => t[0] === "[]" ? "" : t[1] || t[0])
}

function yR(e) {
   const t = {},
      n = Object.keys(e);
   let r;
   const i = n.length;
   let o;
   for (r = 0; r < i; r++) o = n[r], t[o] = e[o];
   return t
}

function u1(e) {
   function t(n, r, i, o) {
      let s = n[o++];
      if (s === "__proto__") return !0;
      const a = Number.isFinite(+s),
         l = o >= n.length;
      return s = !s && P.isArray(i) ? i.length : s, l ? (P.hasOwnProp(i, s) ? i[s] = [i[s], r] : i[s] = r, !a) : ((!i[s] || !P.isObject(i[s])) && (i[s] = []), t(n, r, i[s], o) && P.isArray(i[s]) && (i[s] = yR(i[s])), !a)
   }
   if (P.isFormData(e) && P.isFunction(e.entries)) {
      const n = {};
      return P.forEachEntry(e, (r, i) => {
         t(gR(r), i, n, 0)
      }), n
   }
   return null
}

function vR(e, t, n) {
   if (P.isString(e)) try {
      return (t || JSON.parse)(e), P.trim(e)
   } catch (r) {
      if (r.name !== "SyntaxError") throw r
   }
   return (n || JSON.stringify)(e)
}
const Ff = {
   transitional: l1,
   adapter: ["xhr", "http", "fetch"],
   transformRequest: [function(t, n) {
      const r = n.getContentType() || "",
         i = r.indexOf("application/json") > -1,
         o = P.isObject(t);
      if (o && P.isHTMLForm(t) && (t = new FormData(t)), P.isFormData(t)) return i ? JSON.stringify(u1(t)) : t;
      if (P.isArrayBuffer(t) || P.isBuffer(t) || P.isStream(t) || P.isFile(t) || P.isBlob(t) || P.isReadableStream(t)) return t;
      if (P.isArrayBufferView(t)) return t.buffer;
      if (P.isURLSearchParams(t)) return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
      let a;
      if (o) {
         if (r.indexOf("application/x-www-form-urlencoded") > -1) return mR(t, this.formSerializer).toString();
         if ((a = P.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
            const l = this.env && this.env.FormData;
            return ya(a ? {
               "files[]": t
            } : t, l && new l, this.formSerializer)
         }
      }
      return o || i ? (n.setContentType("application/json", !1), vR(t)) : t
   }],
   transformResponse: [function(t) {
      const n = this.transitional || Ff.transitional,
         r = n && n.forcedJSONParsing,
         i = this.responseType === "json";
      if (P.isResponse(t) || P.isReadableStream(t)) return t;
      if (t && P.isString(t) && (r && !this.responseType || i)) {
         const s = !(n && n.silentJSONParsing) && i;
         try {
            return JSON.parse(t)
         } catch (a) {
            if (s) throw a.name === "SyntaxError" ? F.from(a, F.ERR_BAD_RESPONSE, this, null, this.response) : a
         }
      }
      return t
   }],
   timeout: 0,
   xsrfCookieName: "XSRF-TOKEN",
   xsrfHeaderName: "X-XSRF-TOKEN",
   maxContentLength: -1,
   maxBodyLength: -1,
   env: {
      FormData: we.classes.FormData,
      Blob: we.classes.Blob
   },
   validateStatus: function(t) {
      return t >= 200 && t < 300
   },
   headers: {
      common: {
         Accept: "application/json, text/plain, */*",
         "Content-Type": void 0
      }
   }
};
P.forEach(["delete", "get", "head", "post", "put", "patch"], e => {
   Ff.headers[e] = {}
});
const If = Ff,
   wR = P.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]),
   xR = e => {
      const t = {};
      let n, r, i;
      return e && e.split(`
`).forEach(function(s) {
         i = s.indexOf(":"), n = s.substring(0, i).trim().toLowerCase(), r = s.substring(i + 1).trim(), !(!n || t[n] && wR[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r)
      }), t
   },
   Wp = Symbol("internals");

function Kr(e) {
   return e && String(e).trim().toLowerCase()
}

function Zo(e) {
   return e === !1 || e == null ? e : P.isArray(e) ? e.map(Zo) : String(e)
}

function SR(e) {
   const t = Object.create(null),
      n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
   let r;
   for (; r = n.exec(e);) t[r[1]] = r[2];
   return t
}
const ER = e => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());

function vl(e, t, n, r, i) {
   if (P.isFunction(r)) return r.call(this, t, n);
   if (i && (t = n), !!P.isString(t)) {
      if (P.isString(r)) return t.indexOf(r) !== -1;
      if (P.isRegExp(r)) return r.test(t)
   }
}

function CR(e) {
   return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r)
}

function PR(e, t) {
   const n = P.toCamelCase(" " + t);
   ["get", "set", "has"].forEach(r => {
      Object.defineProperty(e, r + n, {
         value: function(i, o, s) {
            return this[r].call(this, t, i, o, s)
         },
         configurable: !0
      })
   })
}
class va {
   constructor(t) {
      t && this.set(t)
   }
   set(t, n, r) {
      const i = this;

      function o(a, l, u) {
         const c = Kr(l);
         if (!c) throw new Error("header name must be a non-empty string");
         const f = P.findKey(i, c);
         (!f || i[f] === void 0 || u === !0 || u === void 0 && i[f] !== !1) && (i[f || l] = Zo(a))
      }
      const s = (a, l) => P.forEach(a, (u, c) => o(u, c, l));
      if (P.isPlainObject(t) || t instanceof this.constructor) s(t, n);
      else if (P.isString(t) && (t = t.trim()) && !ER(t)) s(xR(t), n);
      else if (P.isHeaders(t))
         for (const [a, l] of t.entries()) o(l, a, r);
      else t != null && o(n, t, r);
      return this
   }
   get(t, n) {
      if (t = Kr(t), t) {
         const r = P.findKey(this, t);
         if (r) {
            const i = this[r];
            if (!n) return i;
            if (n === !0) return SR(i);
            if (P.isFunction(n)) return n.call(this, i, r);
            if (P.isRegExp(n)) return n.exec(i);
            throw new TypeError("parser must be boolean|regexp|function")
         }
      }
   }
   has(t, n) {
      if (t = Kr(t), t) {
         const r = P.findKey(this, t);
         return !!(r && this[r] !== void 0 && (!n || vl(this, this[r], r, n)))
      }
      return !1
   }
   delete(t, n) {
      const r = this;
      let i = !1;

      function o(s) {
         if (s = Kr(s), s) {
            const a = P.findKey(r, s);
            a && (!n || vl(r, r[a], a, n)) && (delete r[a], i = !0)
         }
      }
      return P.isArray(t) ? t.forEach(o) : o(t), i
   }
   clear(t) {
      const n = Object.keys(this);
      let r = n.length,
         i = !1;
      for (; r--;) {
         const o = n[r];
         (!t || vl(this, this[o], o, t, !0)) && (delete this[o], i = !0)
      }
      return i
   }
   normalize(t) {
      const n = this,
         r = {};
      return P.forEach(this, (i, o) => {
         const s = P.findKey(r, o);
         if (s) {
            n[s] = Zo(i), delete n[o];
            return
         }
         const a = t ? CR(o) : String(o).trim();
         a !== o && delete n[o], n[a] = Zo(i), r[a] = !0
      }), this
   }
   concat(...t) {
      return this.constructor.concat(this, ...t)
   }
   toJSON(t) {
      const n = Object.create(null);
      return P.forEach(this, (r, i) => {
         r != null && r !== !1 && (n[i] = t && P.isArray(r) ? r.join(", ") : r)
      }), n
   } [Symbol.iterator]() {
      return Object.entries(this.toJSON())[Symbol.iterator]()
   }
   toString() {
      return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`)
   }
   get[Symbol.toStringTag]() {
      return "AxiosHeaders"
   }
   static from(t) {
      return t instanceof this ? t : new this(t)
   }
   static concat(t, ...n) {
      const r = new this(t);
      return n.forEach(i => r.set(i)), r
   }
   static accessor(t) {
      const r = (this[Wp] = this[Wp] = {
            accessors: {}
         }).accessors,
         i = this.prototype;

      function o(s) {
         const a = Kr(s);
         r[a] || (PR(i, s), r[a] = !0)
      }
      return P.isArray(t) ? t.forEach(o) : o(t), this
   }
}
va.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
P.reduceDescriptors(va.prototype, ({
   value: e
}, t) => {
   let n = t[0].toUpperCase() + t.slice(1);
   return {
      get: () => e,
      set(r) {
         this[n] = r
      }
   }
});
P.freezeMethods(va);
const at = va;

function wl(e, t) {
   const n = this || If,
      r = t || n,
      i = at.from(r.headers);
   let o = r.data;
   return P.forEach(e, function(a) {
      o = a.call(n, o, i.normalize(), t ? t.status : void 0)
   }), i.normalize(), o
}

function c1(e) {
   return !!(e && e.__CANCEL__)
}

function jr(e, t, n) {
   F.call(this, e ?? "canceled", F.ERR_CANCELED, t, n), this.name = "CanceledError"
}
P.inherits(jr, F, {
   __CANCEL__: !0
});

function f1(e, t, n) {
   const r = n.config.validateStatus;
   !n.status || !r || r(n.status) ? e(n) : t(new F("Request failed with status code " + n.status, [F.ERR_BAD_REQUEST, F.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4], n.config, n.request, n))
}

function TR(e) {
   const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
   return t && t[1] || ""
}

function RR(e, t) {
   e = e || 10;
   const n = new Array(e),
      r = new Array(e);
   let i = 0,
      o = 0,
      s;
   return t = t !== void 0 ? t : 1e3,
      function(l) {
         const u = Date.now(),
            c = r[o];
         s || (s = u), n[i] = l, r[i] = u;
         let f = o,
            d = 0;
         for (; f !== i;) d += n[f++], f = f % e;
         if (i = (i + 1) % e, i === o && (o = (o + 1) % e), u - s < t) return;
         const g = c && u - c;
         return g ? Math.round(d * 1e3 / g) : void 0
      }
}

function kR(e, t) {
   let n = 0,
      r = 1e3 / t,
      i, o;
   const s = (u, c = Date.now()) => {
      n = c, i = null, o && (clearTimeout(o), o = null), e.apply(null, u)
   };
   return [(...u) => {
      const c = Date.now(),
         f = c - n;
      f >= r ? s(u, c) : (i = u, o || (o = setTimeout(() => {
         o = null, s(i)
      }, r - f)))
   }, () => i && s(i)]
}
const Vs = (e, t, n = 3) => {
      let r = 0;
      const i = RR(50, 250);
      return kR(o => {
         const s = o.loaded,
            a = o.lengthComputable ? o.total : void 0,
            l = s - r,
            u = i(l),
            c = s <= a;
         r = s;
         const f = {
            loaded: s,
            total: a,
            progress: a ? s / a : void 0,
            bytes: l,
            rate: u || void 0,
            estimated: u && a && c ? (a - s) / u : void 0,
            event: o,
            lengthComputable: a != null,
            [t ? "download" : "upload"]: !0
         };
         e(f)
      }, n)
   },
   Hp = (e, t) => {
      const n = e != null;
      return [r => t[0]({
         lengthComputable: n,
         total: e,
         loaded: r
      }), t[1]]
   },
   Kp = e => (...t) => P.asap(() => e(...t)),
   bR = we.hasStandardBrowserEnv ? ((e, t) => n => (n = new URL(n, we.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(new URL(we.origin), we.navigator && /(msie|trident)/i.test(we.navigator.userAgent)) : () => !0,
   AR = we.hasStandardBrowserEnv ? {
      write(e, t, n, r, i, o) {
         const s = [e + "=" + encodeURIComponent(t)];
         P.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()), P.isString(r) && s.push("path=" + r), P.isString(i) && s.push("domain=" + i), o === !0 && s.push("secure"), document.cookie = s.join("; ")
      },
      read(e) {
         const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
         return t ? decodeURIComponent(t[3]) : null
      },
      remove(e) {
         this.write(e, "", Date.now() - 864e5)
      }
   } : {
      write() {},
      read() {
         return null
      },
      remove() {}
   };

function NR(e) {
   return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}

function LR(e, t) {
   return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e
}

function d1(e, t) {
   return e && !NR(t) ? LR(e, t) : t
}
const Gp = e => e instanceof at ? {
   ...e
} : e;

function In(e, t) {
   t = t || {};
   const n = {};

   function r(u, c, f, d) {
      return P.isPlainObject(u) && P.isPlainObject(c) ? P.merge.call({
         caseless: d
      }, u, c) : P.isPlainObject(c) ? P.merge({}, c) : P.isArray(c) ? c.slice() : c
   }

   function i(u, c, f, d) {
      if (P.isUndefined(c)) {
         if (!P.isUndefined(u)) return r(void 0, u, f, d)
      } else return r(u, c, f, d)
   }

   function o(u, c) {
      if (!P.isUndefined(c)) return r(void 0, c)
   }

   function s(u, c) {
      if (P.isUndefined(c)) {
         if (!P.isUndefined(u)) return r(void 0, u)
      } else return r(void 0, c)
   }

   function a(u, c, f) {
      if (f in t) return r(u, c);
      if (f in e) return r(void 0, u)
   }
   const l = {
      url: o,
      method: o,
      data: o,
      baseURL: s,
      transformRequest: s,
      transformResponse: s,
      paramsSerializer: s,
      timeout: s,
      timeoutMessage: s,
      withCredentials: s,
      withXSRFToken: s,
      adapter: s,
      responseType: s,
      xsrfCookieName: s,
      xsrfHeaderName: s,
      onUploadProgress: s,
      onDownloadProgress: s,
      decompress: s,
      maxContentLength: s,
      maxBodyLength: s,
      beforeRedirect: s,
      transport: s,
      httpAgent: s,
      httpsAgent: s,
      cancelToken: s,
      socketPath: s,
      responseEncoding: s,
      validateStatus: a,
      headers: (u, c, f) => i(Gp(u), Gp(c), f, !0)
   };
   return P.forEach(Object.keys(Object.assign({}, e, t)), function(c) {
      const f = l[c] || i,
         d = f(e[c], t[c], c);
      P.isUndefined(d) && f !== a || (n[c] = d)
   }), n
}
const h1 = e => {
      const t = In({}, e);
      let {
         data: n,
         withXSRFToken: r,
         xsrfHeaderName: i,
         xsrfCookieName: o,
         headers: s,
         auth: a
      } = t;
      t.headers = s = at.from(s), t.url = a1(d1(t.baseURL, t.url), e.params, e.paramsSerializer), a && s.set("Authorization", "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : "")));
      let l;
      if (P.isFormData(n)) {
         if (we.hasStandardBrowserEnv || we.hasStandardBrowserWebWorkerEnv) s.setContentType(void 0);
         else if ((l = s.getContentType()) !== !1) {
            const [u, ...c] = l ? l.split(";").map(f => f.trim()).filter(Boolean) : [];
            s.setContentType([u || "multipart/form-data", ...c].join("; "))
         }
      }
      if (we.hasStandardBrowserEnv && (r && P.isFunction(r) && (r = r(t)), r || r !== !1 && bR(t.url))) {
         const u = i && o && AR.read(o);
         u && s.set(i, u)
      }
      return t
   },
   DR = typeof XMLHttpRequest < "u",
   OR = DR && function(e) {
      return new Promise(function(n, r) {
         const i = h1(e);
         let o = i.data;
         const s = at.from(i.headers).normalize();
         let {
            responseType: a,
            onUploadProgress: l,
            onDownloadProgress: u
         } = i, c, f, d, g, w;

         function v() {
            g && g(), w && w(), i.cancelToken && i.cancelToken.unsubscribe(c), i.signal && i.signal.removeEventListener("abort", c)
         }
         let S = new XMLHttpRequest;
         S.open(i.method.toUpperCase(), i.url, !0), S.timeout = i.timeout;

         function p() {
            if (!S) return;
            const y = at.from("getAllResponseHeaders" in S && S.getAllResponseHeaders()),
               C = {
                  data: !a || a === "text" || a === "json" ? S.responseText : S.response,
                  status: S.status,
                  statusText: S.statusText,
                  headers: y,
                  config: e,
                  request: S
               };
            f1(function(R) {
               n(R), v()
            }, function(R) {
               r(R), v()
            }, C), S = null
         }
         "onloadend" in S ? S.onloadend = p : S.onreadystatechange = function() {
            !S || S.readyState !== 4 || S.status === 0 && !(S.responseURL && S.responseURL.indexOf("file:") === 0) || setTimeout(p)
         }, S.onabort = function() {
            S && (r(new F("Request aborted", F.ECONNABORTED, e, S)), S = null)
         }, S.onerror = function() {
            r(new F("Network Error", F.ERR_NETWORK, e, S)), S = null
         }, S.ontimeout = function() {
            let E = i.timeout ? "timeout of " + i.timeout + "ms exceeded" : "timeout exceeded";
            const C = i.transitional || l1;
            i.timeoutErrorMessage && (E = i.timeoutErrorMessage), r(new F(E, C.clarifyTimeoutError ? F.ETIMEDOUT : F.ECONNABORTED, e, S)), S = null
         }, o === void 0 && s.setContentType(null), "setRequestHeader" in S && P.forEach(s.toJSON(), function(E, C) {
            S.setRequestHeader(C, E)
         }), P.isUndefined(i.withCredentials) || (S.withCredentials = !!i.withCredentials), a && a !== "json" && (S.responseType = i.responseType), u && ([d, w] = Vs(u, !0), S.addEventListener("progress", d)), l && S.upload && ([f, g] = Vs(l), S.upload.addEventListener("progress", f), S.upload.addEventListener("loadend", g)), (i.cancelToken || i.signal) && (c = y => {
            S && (r(!y || y.type ? new jr(null, e, S) : y), S.abort(), S = null)
         }, i.cancelToken && i.cancelToken.subscribe(c), i.signal && (i.signal.aborted ? c() : i.signal.addEventListener("abort", c)));
         const m = TR(i.url);
         if (m && we.protocols.indexOf(m) === -1) {
            r(new F("Unsupported protocol " + m + ":", F.ERR_BAD_REQUEST, e));
            return
         }
         S.send(o || null)
      })
   },
   MR = (e, t) => {
      const {
         length: n
      } = e = e ? e.filter(Boolean) : [];
      if (t || n) {
         let r = new AbortController,
            i;
         const o = function(u) {
            if (!i) {
               i = !0, a();
               const c = u instanceof Error ? u : this.reason;
               r.abort(c instanceof F ? c : new jr(c instanceof Error ? c.message : c))
            }
         };
         let s = t && setTimeout(() => {
            s = null, o(new F(`timeout ${t} of ms exceeded`, F.ETIMEDOUT))
         }, t);
         const a = () => {
            e && (s && clearTimeout(s), s = null, e.forEach(u => {
               u.unsubscribe ? u.unsubscribe(o) : u.removeEventListener("abort", o)
            }), e = null)
         };
         e.forEach(u => u.addEventListener("abort", o));
         const {
            signal: l
         } = r;
         return l.unsubscribe = () => P.asap(a), l
      }
   },
   jR = MR,
   _R = function*(e, t) {
      let n = e.byteLength;
      if (!t || n < t) {
         yield e;
         return
      }
      let r = 0,
         i;
      for (; r < n;) i = r + t, yield e.slice(r, i), r = i
   },
   FR = async function*(e, t) {
      for await (const n of IR(e)) yield* _R(n, t)
   }, IR = async function*(e) {
      if (e[Symbol.asyncIterator]) {
         yield* e;
         return
      }
      const t = e.getReader();
      try {
         for (;;) {
            const {
               done: n,
               value: r
            } = await t.read();
            if (n) break;
            yield r
         }
      } finally {
         await t.cancel()
      }
   }, Xp = (e, t, n, r) => {
      const i = FR(e, t);
      let o = 0,
         s, a = l => {
            s || (s = !0, r && r(l))
         };
      return new ReadableStream({
         async pull(l) {
            try {
               const {
                  done: u,
                  value: c
               } = await i.next();
               if (u) {
                  a(), l.close();
                  return
               }
               let f = c.byteLength;
               if (n) {
                  let d = o += f;
                  n(d)
               }
               l.enqueue(new Uint8Array(c))
            } catch (u) {
               throw a(u), u
            }
         },
         cancel(l) {
            return a(l), i.return()
         }
      }, {
         highWaterMark: 2
      })
   }, wa = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", p1 = wa && typeof ReadableStream == "function", VR = wa && (typeof TextEncoder == "function" ? (e => t => e.encode(t))(new TextEncoder) : async e => new Uint8Array(await new Response(e).arrayBuffer())), m1 = (e, ...t) => {
      try {
         return !!e(...t)
      } catch {
         return !1
      }
   }, BR = p1 && m1(() => {
      let e = !1;
      const t = new Request(we.origin, {
         body: new ReadableStream,
         method: "POST",
         get duplex() {
            return e = !0, "half"
         }
      }).headers.has("Content-Type");
      return e && !t
   }), Yp = 64 * 1024, Vu = p1 && m1(() => P.isReadableStream(new Response("").body)), Bs = {
      stream: Vu && (e => e.body)
   };
wa && (e => {
   ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(t => {
      !Bs[t] && (Bs[t] = P.isFunction(e[t]) ? n => n[t]() : (n, r) => {
         throw new F(`Response type '${t}' is not supported`, F.ERR_NOT_SUPPORT, r)
      })
   })
})(new Response);
const zR = async e => {
   if (e == null) return 0;
   if (P.isBlob(e)) return e.size;
   if (P.isSpecCompliantForm(e)) return (await new Request(we.origin, {
      method: "POST",
      body: e
   }).arrayBuffer()).byteLength;
   if (P.isArrayBufferView(e) || P.isArrayBuffer(e)) return e.byteLength;
   if (P.isURLSearchParams(e) && (e = e + ""), P.isString(e)) return (await VR(e)).byteLength
}, UR = async (e, t) => {
   const n = P.toFiniteNumber(e.getContentLength());
   return n ?? zR(t)
}, $R = wa && (async e => {
   let {
      url: t,
      method: n,
      data: r,
      signal: i,
      cancelToken: o,
      timeout: s,
      onDownloadProgress: a,
      onUploadProgress: l,
      responseType: u,
      headers: c,
      withCredentials: f = "same-origin",
      fetchOptions: d
   } = h1(e);
   u = u ? (u + "").toLowerCase() : "text";
   let g = jR([i, o && o.toAbortSignal()], s),
      w;
   const v = g && g.unsubscribe && (() => {
      g.unsubscribe()
   });
   let S;
   try {
      if (l && BR && n !== "get" && n !== "head" && (S = await UR(c, r)) !== 0) {
         let C = new Request(t, {
               method: "POST",
               body: r,
               duplex: "half"
            }),
            T;
         if (P.isFormData(r) && (T = C.headers.get("content-type")) && c.setContentType(T), C.body) {
            const [R, k] = Hp(S, Vs(Kp(l)));
            r = Xp(C.body, Yp, R, k)
         }
      }
      P.isString(f) || (f = f ? "include" : "omit");
      const p = "credentials" in Request.prototype;
      w = new Request(t, {
         ...d,
         signal: g,
         method: n.toUpperCase(),
         headers: c.normalize().toJSON(),
         body: r,
         duplex: "half",
         credentials: p ? f : void 0
      });
      let m = await fetch(w);
      const y = Vu && (u === "stream" || u === "response");
      if (Vu && (a || y && v)) {
         const C = {};
         ["status", "statusText", "headers"].forEach(N => {
            C[N] = m[N]
         });
         const T = P.toFiniteNumber(m.headers.get("content-length")),
            [R, k] = a && Hp(T, Vs(Kp(a), !0)) || [];
         m = new Response(Xp(m.body, Yp, R, () => {
            k && k(), v && v()
         }), C)
      }
      u = u || "text";
      let E = await Bs[P.findKey(Bs, u) || "text"](m, e);
      return !y && v && v(), await new Promise((C, T) => {
         f1(C, T, {
            data: E,
            headers: at.from(m.headers),
            status: m.status,
            statusText: m.statusText,
            config: e,
            request: w
         })
      })
   } catch (p) {
      throw v && v(), p && p.name === "TypeError" && /fetch/i.test(p.message) ? Object.assign(new F("Network Error", F.ERR_NETWORK, e, w), {
         cause: p.cause || p
      }) : F.from(p, p && p.code, e, w)
   }
}), Bu = {
   http: nR,
   xhr: OR,
   fetch: $R
};
P.forEach(Bu, (e, t) => {
   if (e) {
      try {
         Object.defineProperty(e, "name", {
            value: t
         })
      } catch {}
      Object.defineProperty(e, "adapterName", {
         value: t
      })
   }
});
const Qp = e => `- ${e}`,
   WR = e => P.isFunction(e) || e === null || e === !1,
   g1 = {
      getAdapter: e => {
         e = P.isArray(e) ? e : [e];
         const {
            length: t
         } = e;
         let n, r;
         const i = {};
         for (let o = 0; o < t; o++) {
            n = e[o];
            let s;
            if (r = n, !WR(n) && (r = Bu[(s = String(n)).toLowerCase()], r === void 0)) throw new F(`Unknown adapter '${s}'`);
            if (r) break;
            i[s || "#" + o] = r
         }
         if (!r) {
            const o = Object.entries(i).map(([a, l]) => `adapter ${a} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build"));
            let s = t ? o.length > 1 ? `since :
` + o.map(Qp).join(`
`) : " " + Qp(o[0]) : "as no adapter specified";
            throw new F("There is no suitable adapter to dispatch the request " + s, "ERR_NOT_SUPPORT")
         }
         return r
      },
      adapters: Bu
   };

function xl(e) {
   if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new jr(null, e)
}

function qp(e) {
   return xl(e), e.headers = at.from(e.headers), e.data = wl.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), g1.getAdapter(e.adapter || If.adapter)(e).then(function(r) {
      return xl(e), r.data = wl.call(e, e.transformResponse, r), r.headers = at.from(r.headers), r
   }, function(r) {
      return c1(r) || (xl(e), r && r.response && (r.response.data = wl.call(e, e.transformResponse, r.response), r.response.headers = at.from(r.response.headers))), Promise.reject(r)
   })
}
const y1 = "1.7.9",
   xa = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
   xa[e] = function(r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e
   }
});
const Zp = {};
xa.transitional = function(t, n, r) {
   function i(o, s) {
      return "[Axios v" + y1 + "] Transitional option '" + o + "'" + s + (r ? ". " + r : "")
   }
   return (o, s, a) => {
      if (t === !1) throw new F(i(s, " has been removed" + (n ? " in " + n : "")), F.ERR_DEPRECATED);
      return n && !Zp[s] && (Zp[s] = !0, console.warn(i(s, " has been deprecated since v" + n + " and will be removed in the near future"))), t ? t(o, s, a) : !0
   }
};
xa.spelling = function(t) {
   return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0)
};

function HR(e, t, n) {
   if (typeof e != "object") throw new F("options must be an object", F.ERR_BAD_OPTION_VALUE);
   const r = Object.keys(e);
   let i = r.length;
   for (; i-- > 0;) {
      const o = r[i],
         s = t[o];
      if (s) {
         const a = e[o],
            l = a === void 0 || s(a, o, e);
         if (l !== !0) throw new F("option " + o + " must be " + l, F.ERR_BAD_OPTION_VALUE);
         continue
      }
      if (n !== !0) throw new F("Unknown option " + o, F.ERR_BAD_OPTION)
   }
}
const Jo = {
      assertOptions: HR,
      validators: xa
   },
   dt = Jo.validators;
class zs {
   constructor(t) {
      this.defaults = t, this.interceptors = {
         request: new $p,
         response: new $p
      }
   }
   async request(t, n) {
      try {
         return await this._request(t, n)
      } catch (r) {
         if (r instanceof Error) {
            let i = {};
            Error.captureStackTrace ? Error.captureStackTrace(i) : i = new Error;
            const o = i.stack ? i.stack.replace(/^.+\n/, "") : "";
            try {
               r.stack ? o && !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + o) : r.stack = o
            } catch {}
         }
         throw r
      }
   }
   _request(t, n) {
      typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = In(this.defaults, n);
      const {
         transitional: r,
         paramsSerializer: i,
         headers: o
      } = n;
      r !== void 0 && Jo.assertOptions(r, {
         silentJSONParsing: dt.transitional(dt.boolean),
         forcedJSONParsing: dt.transitional(dt.boolean),
         clarifyTimeoutError: dt.transitional(dt.boolean)
      }, !1), i != null && (P.isFunction(i) ? n.paramsSerializer = {
         serialize: i
      } : Jo.assertOptions(i, {
         encode: dt.function,
         serialize: dt.function
      }, !0)), Jo.assertOptions(n, {
         baseUrl: dt.spelling("baseURL"),
         withXsrfToken: dt.spelling("withXSRFToken")
      }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
      let s = o && P.merge(o.common, o[n.method]);
      o && P.forEach(["delete", "get", "head", "post", "put", "patch", "common"], w => {
         delete o[w]
      }), n.headers = at.concat(s, o);
      const a = [];
      let l = !0;
      this.interceptors.request.forEach(function(v) {
         typeof v.runWhen == "function" && v.runWhen(n) === !1 || (l = l && v.synchronous, a.unshift(v.fulfilled, v.rejected))
      });
      const u = [];
      this.interceptors.response.forEach(function(v) {
         u.push(v.fulfilled, v.rejected)
      });
      let c, f = 0,
         d;
      if (!l) {
         const w = [qp.bind(this), void 0];
         for (w.unshift.apply(w, a), w.push.apply(w, u), d = w.length, c = Promise.resolve(n); f < d;) c = c.then(w[f++], w[f++]);
         return c
      }
      d = a.length;
      let g = n;
      for (f = 0; f < d;) {
         const w = a[f++],
            v = a[f++];
         try {
            g = w(g)
         } catch (S) {
            v.call(this, S);
            break
         }
      }
      try {
         c = qp.call(this, g)
      } catch (w) {
         return Promise.reject(w)
      }
      for (f = 0, d = u.length; f < d;) c = c.then(u[f++], u[f++]);
      return c
   }
   getUri(t) {
      t = In(this.defaults, t);
      const n = d1(t.baseURL, t.url);
      return a1(n, t.params, t.paramsSerializer)
   }
}
P.forEach(["delete", "get", "head", "options"], function(t) {
   zs.prototype[t] = function(n, r) {
      return this.request(In(r || {}, {
         method: t,
         url: n,
         data: (r || {}).data
      }))
   }
});
P.forEach(["post", "put", "patch"], function(t) {
   function n(r) {
      return function(o, s, a) {
         return this.request(In(a || {}, {
            method: t,
            headers: r ? {
               "Content-Type": "multipart/form-data"
            } : {},
            url: o,
            data: s
         }))
      }
   }
   zs.prototype[t] = n(), zs.prototype[t + "Form"] = n(!0)
});
const es = zs;
class Vf {
   constructor(t) {
      if (typeof t != "function") throw new TypeError("executor must be a function.");
      let n;
      this.promise = new Promise(function(o) {
         n = o
      });
      const r = this;
      this.promise.then(i => {
         if (!r._listeners) return;
         let o = r._listeners.length;
         for (; o-- > 0;) r._listeners[o](i);
         r._listeners = null
      }), this.promise.then = i => {
         let o;
         const s = new Promise(a => {
            r.subscribe(a), o = a
         }).then(i);
         return s.cancel = function() {
            r.unsubscribe(o)
         }, s
      }, t(function(o, s, a) {
         r.reason || (r.reason = new jr(o, s, a), n(r.reason))
      })
   }
   throwIfRequested() {
      if (this.reason) throw this.reason
   }
   subscribe(t) {
      if (this.reason) {
         t(this.reason);
         return
      }
      this._listeners ? this._listeners.push(t) : this._listeners = [t]
   }
   unsubscribe(t) {
      if (!this._listeners) return;
      const n = this._listeners.indexOf(t);
      n !== -1 && this._listeners.splice(n, 1)
   }
   toAbortSignal() {
      const t = new AbortController,
         n = r => {
            t.abort(r)
         };
      return this.subscribe(n), t.signal.unsubscribe = () => this.unsubscribe(n), t.signal
   }
   static source() {
      let t;
      return {
         token: new Vf(function(i) {
            t = i
         }),
         cancel: t
      }
   }
}
const KR = Vf;

function GR(e) {
   return function(n) {
      return e.apply(null, n)
   }
}

function XR(e) {
   return P.isObject(e) && e.isAxiosError === !0
}
const zu = {
   Continue: 100,
   SwitchingProtocols: 101,
   Processing: 102,
   EarlyHints: 103,
   Ok: 200,
   Created: 201,
   Accepted: 202,
   NonAuthoritativeInformation: 203,
   NoContent: 204,
   ResetContent: 205,
   PartialContent: 206,
   MultiStatus: 207,
   AlreadyReported: 208,
   ImUsed: 226,
   MultipleChoices: 300,
   MovedPermanently: 301,
   Found: 302,
   SeeOther: 303,
   NotModified: 304,
   UseProxy: 305,
   Unused: 306,
   TemporaryRedirect: 307,
   PermanentRedirect: 308,
   BadRequest: 400,
   Unauthorized: 401,
   PaymentRequired: 402,
   Forbidden: 403,
   NotFound: 404,
   MethodNotAllowed: 405,
   NotAcceptable: 406,
   ProxyAuthenticationRequired: 407,
   RequestTimeout: 408,
   Conflict: 409,
   Gone: 410,
   LengthRequired: 411,
   PreconditionFailed: 412,
   PayloadTooLarge: 413,
   UriTooLong: 414,
   UnsupportedMediaType: 415,
   RangeNotSatisfiable: 416,
   ExpectationFailed: 417,
   ImATeapot: 418,
   MisdirectedRequest: 421,
   UnprocessableEntity: 422,
   Locked: 423,
   FailedDependency: 424,
   TooEarly: 425,
   UpgradeRequired: 426,
   PreconditionRequired: 428,
   TooManyRequests: 429,
   RequestHeaderFieldsTooLarge: 431,
   UnavailableForLegalReasons: 451,
   InternalServerError: 500,
   NotImplemented: 501,
   BadGateway: 502,
   ServiceUnavailable: 503,
   GatewayTimeout: 504,
   HttpVersionNotSupported: 505,
   VariantAlsoNegotiates: 506,
   InsufficientStorage: 507,
   LoopDetected: 508,
   NotExtended: 510,
   NetworkAuthenticationRequired: 511
};
Object.entries(zu).forEach(([e, t]) => {
   zu[t] = e
});
const YR = zu;

function v1(e) {
   const t = new es(e),
      n = Yv(es.prototype.request, t);
   return P.extend(n, es.prototype, t, {
      allOwnKeys: !0
   }), P.extend(n, t, null, {
      allOwnKeys: !0
   }), n.create = function(i) {
      return v1(In(e, i))
   }, n
}
const se = v1(If);
se.Axios = es;
se.CanceledError = jr;
se.CancelToken = KR;
se.isCancel = c1;
se.VERSION = y1;
se.toFormData = ya;
se.AxiosError = F;
se.Cancel = se.CanceledError;
se.all = function(t) {
   return Promise.all(t)
};
se.spread = GR;
se.isAxiosError = XR;
se.mergeConfig = In;
se.AxiosHeaders = at;
se.formToJSON = e => u1(P.isHTMLForm(e) ? new FormData(e) : e);
se.getAdapter = g1.getAdapter;
se.HttpStatusCode = YR;
se.default = se;
const No = se;

function Zi(e, t) {
   if (e == null) return {};
   var n = {},
      r = Object.keys(e),
      i, o;
   for (o = 0; o < r.length; o++) i = r[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
   return n
}
var QR = ["color"],
   qR = h.forwardRef(function(e, t) {
      var n = e.color,
         r = n === void 0 ? "currentColor" : n,
         i = Zi(e, QR);
      return h.createElement("svg", Object.assign({
         width: "15",
         height: "15",
         viewBox: "0 0 15 15",
         fill: "none",
         xmlns: "http://www.w3.org/2000/svg"
      }, i, {
         ref: t
      }), h.createElement("path", {
         d: "M12.5 3L2.5 3.00002C1.67157 3.00002 1 3.6716 1 4.50002V9.50003C1 10.3285 1.67157 11 2.5 11H7.50003C7.63264 11 7.75982 11.0527 7.85358 11.1465L10 13.2929V11.5C10 11.2239 10.2239 11 10.5 11H12.5C13.3284 11 14 10.3285 14 9.50003V4.5C14 3.67157 13.3284 3 12.5 3ZM2.49999 2.00002L12.5 2C13.8807 2 15 3.11929 15 4.5V9.50003C15 10.8807 13.8807 12 12.5 12H11V14.5C11 14.7022 10.8782 14.8845 10.6913 14.9619C10.5045 15.0393 10.2894 14.9965 10.1464 14.8536L7.29292 12H2.5C1.11929 12 0 10.8807 0 9.50003V4.50002C0 3.11931 1.11928 2.00003 2.49999 2.00002Z",
         fill: r,
         fillRule: "evenodd",
         clipRule: "evenodd"
      }))
   }),
   ZR = ["color"],
   JR = h.forwardRef(function(e, t) {
      var n = e.color,
         r = n === void 0 ? "currentColor" : n,
         i = Zi(e, ZR);
      return h.createElement("svg", Object.assign({
         width: "15",
         height: "15",
         viewBox: "0 0 15 15",
         fill: "none",
         xmlns: "http://www.w3.org/2000/svg"
      }, i, {
         ref: t
      }), h.createElement("path", {
         d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
         fill: r,
         fillRule: "evenodd",
         clipRule: "evenodd"
      }))
   }),
   ek = ["color"],
   tk = h.forwardRef(function(e, t) {
      var n = e.color,
         r = n === void 0 ? "currentColor" : n,
         i = Zi(e, ek);
      return h.createElement("svg", Object.assign({
         width: "15",
         height: "15",
         viewBox: "0 0 15 15",
         fill: "none",
         xmlns: "http://www.w3.org/2000/svg"
      }, i, {
         ref: t
      }), h.createElement("path", {
         d: "M4.89346 2.35248C3.49195 2.35248 2.35248 3.49359 2.35248 4.90532C2.35248 6.38164 3.20954 7.9168 4.37255 9.33522C5.39396 10.581 6.59464 11.6702 7.50002 12.4778C8.4054 11.6702 9.60608 10.581 10.6275 9.33522C11.7905 7.9168 12.6476 6.38164 12.6476 4.90532C12.6476 3.49359 11.5081 2.35248 10.1066 2.35248C9.27059 2.35248 8.81894 2.64323 8.5397 2.95843C8.27877 3.25295 8.14623 3.58566 8.02501 3.88993C8.00391 3.9429 7.98315 3.99501 7.96211 4.04591C7.88482 4.23294 7.7024 4.35494 7.50002 4.35494C7.29765 4.35494 7.11523 4.23295 7.03793 4.04592C7.01689 3.99501 6.99612 3.94289 6.97502 3.8899C6.8538 3.58564 6.72126 3.25294 6.46034 2.95843C6.18109 2.64323 5.72945 2.35248 4.89346 2.35248ZM1.35248 4.90532C1.35248 2.94498 2.936 1.35248 4.89346 1.35248C6.0084 1.35248 6.73504 1.76049 7.20884 2.2953C7.32062 2.42147 7.41686 2.55382 7.50002 2.68545C7.58318 2.55382 7.67941 2.42147 7.79119 2.2953C8.265 1.76049 8.99164 1.35248 10.1066 1.35248C12.064 1.35248 13.6476 2.94498 13.6476 4.90532C13.6476 6.74041 12.6013 8.50508 11.4008 9.96927C10.2636 11.3562 8.92194 12.5508 8.00601 13.3664C7.94645 13.4194 7.88869 13.4709 7.83291 13.5206C7.64324 13.6899 7.3568 13.6899 7.16713 13.5206C7.11135 13.4709 7.05359 13.4194 6.99403 13.3664C6.0781 12.5508 4.73641 11.3562 3.59926 9.96927C2.39872 8.50508 1.35248 6.74041 1.35248 4.90532Z",
         fill: r,
         fillRule: "evenodd",
         clipRule: "evenodd"
      }))
   }),
   nk = ["color"],
   Jp = h.forwardRef(function(e, t) {
      var n = e.color,
         r = n === void 0 ? "currentColor" : n,
         i = Zi(e, nk);
      return h.createElement("svg", Object.assign({
         width: "15",
         height: "15",
         viewBox: "0 0 15 15",
         fill: "none",
         xmlns: "http://www.w3.org/2000/svg"
      }, i, {
         ref: t
      }), h.createElement("path", {
         d: "M1.20308 1.04312C1.00481 0.954998 0.772341 1.0048 0.627577 1.16641C0.482813 1.32802 0.458794 1.56455 0.568117 1.75196L3.92115 7.50002L0.568117 13.2481C0.458794 13.4355 0.482813 13.672 0.627577 13.8336C0.772341 13.9952 1.00481 14.045 1.20308 13.9569L14.7031 7.95693C14.8836 7.87668 15 7.69762 15 7.50002C15 7.30243 14.8836 7.12337 14.7031 7.04312L1.20308 1.04312ZM4.84553 7.10002L2.21234 2.586L13.2689 7.50002L2.21234 12.414L4.84552 7.90002H9C9.22092 7.90002 9.4 7.72094 9.4 7.50002C9.4 7.27911 9.22092 7.10002 9 7.10002H4.84553Z",
         fill: r,
         fillRule: "evenodd",
         clipRule: "evenodd"
      }))
   }),
   rk = ["color"],
   em = h.forwardRef(function(e, t) {
      var n = e.color,
         r = n === void 0 ? "currentColor" : n,
         i = Zi(e, rk);
      return h.createElement("svg", Object.assign({
         width: "15",
         height: "15",
         viewBox: "0 0 15 15",
         fill: "none",
         xmlns: "http://www.w3.org/2000/svg"
      }, i, {
         ref: t
      }), h.createElement("path", {
         d: "M7.5 0.875C5.49797 0.875 3.875 2.49797 3.875 4.5C3.875 6.15288 4.98124 7.54738 6.49373 7.98351C5.2997 8.12901 4.27557 8.55134 3.50407 9.31167C2.52216 10.2794 2.02502 11.72 2.02502 13.5999C2.02502 13.8623 2.23769 14.0749 2.50002 14.0749C2.76236 14.0749 2.97502 13.8623 2.97502 13.5999C2.97502 11.8799 3.42786 10.7206 4.17091 9.9883C4.91536 9.25463 6.02674 8.87499 7.49995 8.87499C8.97317 8.87499 10.0846 9.25463 10.8291 9.98831C11.5721 10.7206 12.025 11.8799 12.025 13.5999C12.025 13.8623 12.2376 14.0749 12.5 14.0749C12.7623 14.075 12.975 13.8623 12.975 13.6C12.975 11.72 12.4778 10.2794 11.4959 9.31166C10.7244 8.55135 9.70025 8.12903 8.50625 7.98352C10.0187 7.5474 11.125 6.15289 11.125 4.5C11.125 2.49797 9.50203 0.875 7.5 0.875ZM4.825 4.5C4.825 3.02264 6.02264 1.825 7.5 1.825C8.97736 1.825 10.175 3.02264 10.175 4.5C10.175 5.97736 8.97736 7.175 7.5 7.175C6.02264 7.175 4.825 5.97736 4.825 4.5Z",
         fill: r,
         fillRule: "evenodd",
         clipRule: "evenodd"
      }))
   });
const ik = () => {
      var yn;
      const [e, t] = h.useState([]), [n, r] = h.useState(""), [i, o] = h.useState(""), [s, a] = h.useState(""), [l, u] = h.useState([]), [c, f] = h.useState(null), [d, g] = h.useState(null), [w, v] = h.useState(!1), [S, p] = h.useState(""), [m, y] = h.useState("success"), [E, C] = h.useState(null), [T, R] = h.useState(!1);
      h.useEffect(() => {
         (async () => {
            const A = "95610055362643b38c330075da33af69",
               M = "c0eeaaf13cb448b49a3c14d232845352";
            try {
               const j = await No.post("https://accounts.spotify.com/api/token", "grant_type=client_credentials", {
                  headers: {
                     Authorization: "Basic " + btoa(A + ":" + M),
                     "Content-Type": "application/x-www-form-urlencoded"
                  }
               });
               g(j.data.access_token)
            } catch (j) {
               console.error("Error getting Spotify token:", j)
            }
         })(), k()
      }, []);
      const k = async () => {
         try {
            const O = await No.get("https://ruloaooa-hooh.hf.space/api/comments", {
               withCredentials: !0
            });
            t(O.data)
         } catch (O) {
            console.error("Error loading comments:", O), t([])
         }
      }, N = async O => {
         if (!(!d || !O)) try {
            const A = await No.get(`https://api.spotify.com/v1/search?q=${O}&type=track&limit=5`, {
               headers: {
                  Authorization: `Bearer ${d}`
               }
            });
            u(A.data.tracks.items)
         } catch (A) {
            console.error("Error searching Spotify:", A)
         }
      }, [L, z] = h.useState(!1), [Je, Pt] = h.useState(0), gn = async () => {
         var M;
         if (!n.trim() || !i.trim()) return;
         const O = Date.now();
         if (O - Je < 12e4) {
            v(!0), p("Please wait 2 minutes before sending another message"), y("error"), setTimeout(() => v(!1), 3e3);
            return
         }
         z(!0);
         const A = {
            id: Date.now().toString(),
            name: i,
            text: n,
            song: c,
            timestamp: new Date().toISOString()
         };
         try {
            const j = await No.post("https://ruloaooa-hooh.hf.space/api/comments", A, {
               withCredentials: !0
            });
            t(ie => [j.data, ...ie]), r(""), o(""), f(null), a(""), Pt(O), z(!1), alert("Message sent successfully!");
            const G = (M = document.querySelector('[role="dialog"]')) == null ? void 0 : M.parentElement;
            G && G.remove()
         } catch (j) {
            console.error("Error saving comment:", j), alert("Failed to send message. Please try again.")
         }
      }, Ji = O => {
         R(!0), C(O)
      };
      return x.jsxs("div", {
         className: "min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-black text-white pb-10",
         children: [x.jsxs(V.div, {
            initial: {
               opacity: 0,
               y: 50
            },
            animate: {
               opacity: 1,
               y: 0
            },
            className: "pt-20 px-4 max-w-6xl mx-auto",
            children: [x.jsxs("div", {
               className: "text-center mb-12",
               children: [x.jsx(V.div, {
                  initial: {
                     scale: 0
                  },
                  animate: {
                     scale: 1,
                     rotate: 360
                  },
                  transition: {
                     duration: .5
                  },
                  className: "inline-block mb-4",
                  children: x.jsx(qR, {
                     className: "w-12 h-12 text-blue-400"
                  })
               }), x.jsx(V.h1, {
                  initial: {
                     scale: .5
                  },
                  animate: {
                     scale: 1
                  },
                  className: "text-5xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent mb-4",
                  children: "Kata-kata hari ini kawan!!!!"
               }), x.jsx("p", {
                  className: "text-gray-400",
                  children: "Leave your mark on this website by commenting or simply sharing your favorite songs."
               })]
            }), x.jsxs("div", {
               className: "grid md:grid-cols-2 gap-8",
               children: [x.jsxs(V.div, {
                  initial: {
                     x: -50,
                     opacity: 0
                  },
                  animate: {
                     x: 0,
                     opacity: 1
                  },
                  className: "bg-white/5 backdrop-blur-lg rounded-xl p-2 shadow-xl border border-white/10",
                  children: [x.jsxs(Mp, {
                     children: [x.jsxs(q4, {
                        className: "w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg group",
                        children: [x.jsx(Jp, {
                           className: "w-5 h-5 transition-transform group-hover:-translate-y-1"
                        }), "Kata kata hari ini!!!!!"]
                     }), x.jsxs(jp, {
                        children: [x.jsx(_p, {
                           className: "fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
                        }), x.jsx(Fp, {
                           className: "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-900 p-6 rounded-xl w-[90vw] max-w-xl border border-white/10 z-40",
                           children: x.jsxs("div", {
                              className: "space-y-4",
                              children: [x.jsxs("div", {
                                 className: "flex items-center gap-2 bg-gray-800 p-3 rounded-lg border border-white/10",
                                 children: [x.jsx(em, {
                                    className: "w-5 h-5 text-purple-400"
                                 }), x.jsx("input", {
                                    type: "text",
                                    value: i,
                                    onChange: O => o(O.target.value),
                                    placeholder: "Your name",
                                    className: "w-full bg-transparent focus:outline-none text-white"
                                 })]
                              }), x.jsxs("div", {
                                 className: "relative",
                                 children: [x.jsxs("div", {
                                    className: "flex items-center bg-gray-800 rounded-lg border border-white/10",
                                    children: [x.jsx(z2, {
                                       className: "ml-3 text-gray-400"
                                    }), x.jsx("input", {
                                       type: "text",
                                       value: s,
                                       onChange: O => {
                                          a(O.target.value), N(O.target.value)
                                       },
                                       placeholder: "Search for a song...",
                                       className: "w-full bg-transparent p-3 focus:outline-none text-white"
                                    })]
                                 }), x.jsx(As, {
                                    children: l.length > 0 && s && x.jsx(V.div, {
                                       initial: {
                                          opacity: 0,
                                          y: -10
                                       },
                                       animate: {
                                          opacity: 1,
                                          y: 0
                                       },
                                       exit: {
                                          opacity: 0,
                                          y: -10
                                       },
                                       className: "absolute z-50 w-full mt-1 bg-gray-800/95 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 shadow-xl",
                                       children: l.map(O => {
                                          var A;
                                          return x.jsxs(V.div, {
                                             whileHover: {
                                                backgroundColor: "rgba(255,255,255,0.1)"
                                             },
                                             onClick: () => {
                                                f(O), a(""), u([])
                                             },
                                             className: "p-3 cursor-pointer flex items-center gap-3",
                                             children: [x.jsx("img", {
                                                src: (A = O.album.images[2]) == null ? void 0 : A.url,
                                                className: "w-10 h-10 rounded",
                                                alt: O.name
                                             }), x.jsxs("div", {
                                                children: [x.jsx("p", {
                                                   className: "font-medium text-white",
                                                   children: O.name
                                                }), x.jsxs("p", {
                                                   className: "text-sm text-gray-400",
                                                   children: ["Artist: ", O.artists[0].name]
                                                })]
                                             })]
                                          }, O.id)
                                       })
                                    })
                                 })]
                              }), c && x.jsxs(V.div, {
                                 initial: {
                                    opacity: 0,
                                    scale: .95
                                 },
                                 animate: {
                                    opacity: 1,
                                    scale: 1
                                 },
                                 className: "bg-gray-800 p-3 rounded-lg flex items-center gap-3 border border-white/10",
                                 children: [x.jsx("img", {
                                    src: (yn = c.album.images[2]) == null ? void 0 : yn.url,
                                    className: "w-10 h-10 rounded",
                                    alt: c.name
                                 }), x.jsxs("div", {
                                    children: [x.jsx("p", {
                                       className: "font-medium text-white",
                                       children: c.name
                                    }), x.jsx("p", {
                                       className: "text-sm text-gray-400",
                                       children: c.artists[0].name
                                    })]
                                 })]
                              }), x.jsx("textarea", {
                                 value: n,
                                 onChange: O => r(O.target.value),
                                 placeholder: "Write your message...",
                                 className: "w-full bg-gray-800 p-3 rounded-lg resize-none h-32 focus:outline-none focus:ring-2 ring-purple-500 border border-white/10 text-white"
                              }), x.jsxs("button", {
                                 onClick: gn,
                                 className: "w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 p-3 rounded-lg transition-all font-medium text-white flex items-center justify-center gap-2",
                                 children: [x.jsx(Jp, {
                                    className: "w-5 h-5"
                                 }), "Send Message"]
                              })]
                           })
                        })]
                     })]
                  }), w && x.jsx(V.div, {
                     initial: {
                        opacity: 0,
                        y: 20
                     },
                     animate: {
                        opacity: 1,
                        y: 0
                     },
                     exit: {
                        opacity: 0,
                        y: -20
                     },
                     className: `fixed top-4 left-1/2 -translate-x-1/2 ${m==="success"?"bg-green-500":"bg-red-500"} text-white px-6 py-3 rounded-lg shadow-lg z-[100]`,
                     children: S
                  })]
               }), x.jsx(V.div, {
                  initial: {
                     x: 50,
                     opacity: 0
                  },
                  animate: {
                     x: 0,
                     opacity: 1
                  },
                  className: "bg-white/5 backdrop-blur-lg rounded-xl shadow-xl border border-white/10",
                  children: x.jsxs(h5, {
                     className: "h-[400px]",
                     children: [x.jsx(p5, {
                        className: "h-full p-4",
                        children: x.jsx("div", {
                           className: "space-y-6 mb-4",
                           children: e.map(O => {
                              var A;
                              return x.jsxs(V.div, {
                                 initial: {
                                    opacity: 0,
                                    y: 20
                                 },
                                 animate: {
                                    opacity: 1,
                                    y: 0
                                 },
                                 className: "bg-white/5 p-4 rounded-lg border border-white/10 hover:bg-white/10 transition-all",
                                 children: [x.jsxs("div", {
                                    className: "flex items-center gap-2 mb-2",
                                    children: [x.jsx(em, {
                                       className: "w-5 h-5 text-purple-400"
                                    }), x.jsxs("p", {
                                       className: "font-medium",
                                       children: ["To: ", O.name]
                                    })]
                                 }), x.jsx("p", {
                                    className: "text-gray-300 mb-3",
                                    children: O.text
                                 }), O.song && x.jsxs("div", {
                                    onClick: () => Ji(O.song.id),
                                    className: "flex items-center gap-3 bg-black/30 p-2 rounded-lg relative cursor-pointer hover:bg-black/50",
                                    children: [x.jsx("img", {
                                       src: (A = O.song.album.images[2]) == null ? void 0 : A.url,
                                       className: "w-10 h-10 rounded",
                                       alt: O.song.name
                                    }), x.jsxs("div", {
                                       className: "flex-1",
                                       children: [x.jsx("p", {
                                          className: "font-medium",
                                          children: O.song.name
                                       }), x.jsx("p", {
                                          className: "text-sm text-gray-400",
                                          children: O.song.artists[0].name
                                       })]
                                    })]
                                 }), x.jsx("p", {
                                    className: "text-xs text-gray-500 mt-2",
                                    children: new Date(O.timestamp).toLocaleString()
                                 })]
                              }, O.id)
                           })
                        })
                     }), x.jsx(m5, {
                        className: "w-2 bg-white/5 rounded-full",
                        orientation: "vertical",
                        children: x.jsx(g5, {
                           className: "bg-purple-500/50 rounded-full"
                        })
                     })]
                  })
               })]
            })]
         }), x.jsx(Mp, {
            open: !!E,
            onOpenChange: () => C(null),
            children: x.jsxs(jp, {
               children: [x.jsx(_p, {
                  className: "fixed inset-0 bg-black/80 backdrop-blur-sm"
               }), x.jsxs(Fp, {
                  className: "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-900 p-6 rounded-xl w-[90vw] max-w-xl border border-white/10",
                  children: [x.jsxs("div", {
                     className: "flex justify-between items-center mb-4",
                     children: [x.jsx("h3", {
                        className: "text-lg font-semibold text-white",
                        children: "Preview Songs"
                     }), x.jsx("button", {
                        onClick: () => C(null),
                        className: "text-gray-400 hover:text-white",
                        children: x.jsx(JR, {})
                     })]
                  }), x.jsxs(V.div, {
                     initial: {
                        opacity: 0,
                        scale: .9
                     },
                     animate: {
                        opacity: 1,
                        scale: 1
                     },
                     exit: {
                        opacity: 0,
                        scale: .9
                     },
                     transition: {
                        duration: .2
                     },
                     className: "relative",
                     children: [x.jsx(As, {
                        children: T && x.jsx(V.div, {
                           initial: {
                              opacity: 0
                           },
                           animate: {
                              opacity: 1
                           },
                           exit: {
                              opacity: 0
                           },
                           className: "absolute inset-0 flex items-center justify-center bg-gray-900/50 backdrop-blur-sm z-10",
                           children: x.jsx(V.div, {
                              animate: {
                                 rotate: 360
                              },
                              transition: {
                                 duration: 1,
                                 repeat: 1 / 0,
                                 ease: "linear"
                              },
                              className: "w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full"
                           })
                        })
                     }), x.jsx("iframe", {
                        src: `https://open.spotify.com/embed/track/${E}`,
                        width: "100%",
                        height: "352",
                        frameBorder: "0",
                        allowFullScreen: !0,
                        allow: "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",
                        loading: "lazy",
                        onLoad: () => R(!1),
                        className: "bg-black/20"
                     })]
                  })]
               })]
            })
         }), x.jsx(V.footer, {
            initial: {
               opacity: 0,
               y: 20
            },
            animate: {
               opacity: 1,
               y: 0
            },
            className: "fixed bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent backdrop-blur-sm",
            children: x.jsx("div", {
               className: "max-w-6xl mx-auto px-4 py-4",
               children: x.jsxs("div", {
                  className: "flex items-center justify-between",
                  children: [x.jsxs(V.p, {
                     initial: {
                        x: -20
                     },
                     animate: {
                        x: 0
                     },
                     className: "text-sm text-gray-400",
                     children: ["Total comments: ", e.length > 0 ? e.length : 0]
                  }), x.jsxs(V.div, {
                     initial: {
                        x: 20
                     },
                     animate: {
                        x: 0
                     },
                     className: "flex items-center gap-2",
                     children: [x.jsx($c, {
                        className: "text-green-500 w-4 h-4"
                     }), x.jsx("span", {
                        className: "text-sm text-gray-400",
                        children: "Share your favorite songs"
                     })]
                  })]
               })
            })
         })]
      })
   },
   Sl = "6282191310415",
   ok = [{
      id: 1,
      name: "PAID EDIT",
      price: "Rp 00,-",
      category: "Paid Edit",
      description: "Paid Edit",
      image: "https://files.catbox.moe/3l85xa.jpg"
   }, {
      id: 2,
      name: "STARLIGHT",
      price: "Rp 00,-",
      category: "Starlight",
      description: "Starlight MLBB",
      image: "https://files.catbox.moe/3l85xa.jpg"
   },{
      id: 3,
      name: "WDP",
      price: "Rp 00,-",
      category: "Wdp Mobile Legend",
      description: "Wdp Mobile Legend",
      image: "https://files.catbox.moe/3l85xa.jpg"
   }],
   sk = () => {
      const e = t => {
         const n = `Hello, I'm interested in purchasing: ${t.name} (${t.price}$)`,
            r = `https://wa.me/${Sl}?text=${encodeURIComponent(n)}`;
         window.open(r, "_blank")
      };
      return x.jsxs("div", {
         className: "container mx-auto px-4 pt-24 pb-10",
         children: [x.jsxs(V.div, {
            className: "flex flex-col items-center text-center mb-12",
            initial: {
               opacity: 0,
               y: -20
            },
            animate: {
               opacity: 1,
               y: 0
            },
            transition: {
               duration: .6
            },
            children: [x.jsx(V.h1, {
               className: "text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text",
               initial: {
                  opacity: 0,
                  scale: .9
               },
               animate: {
                  opacity: 1,
                  scale: 1
               },
               transition: {
                  duration: .5,
                  delay: .2
               },
               children: "Welcome to Tarisya Store this a digital collection"     
            }), x.jsx(V.p, {
               className: "text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto",
               initial: {
                  opacity: 0
               },
               animate: {
                  opacity: 1
               },
               transition: {
                  duration: .5,
                  delay: .3
               },
               children: "Selamat berbelanja di Tarisya Store, Silahkan pilih pesanan anda dan akan di teruskan ke whatsapp. Thankyou and Happy Shopping!!!."
            })]
         }), x.jsx(V.div, {
            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8",
            initial: {
               opacity: 0
            },
            animate: {
               opacity: 1
            },
            transition: {
               duration: .5,
               delay: .4
            },
            children: x.jsx(As, {
               children: ok.map(t => x.jsxs(V.div, {
                  className: "bg-white dark:bg-gray-800/40 rounded-xl overflow-hidden shadow-xl border border-gray-200/30 dark:border-white/5 hover:shadow-2xl hover:border-purple-500/30 transition-all duration-500 group",
                  whileHover: {
                     y: -5,
                     transition: {
                        duration: .3
                     }
                  },
                  initial: {
                     opacity: 0,
                     y: 20
                  },
                  animate: {
                     opacity: 1,
                     y: 0
                  },
                  transition: {
                     duration: .5,
                     delay: t.id * .1
                  },
                  children: [x.jsxs("div", {
                     className: "relative overflow-hidden h-56",
                     children: [x.jsx("img", {
                        src: t.image,
                        alt: t.name,
                        className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110",
                        onError: n => {
                           n.target.src = "/logo.jpg"
                        }
                     }), x.jsx("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                     }), x.jsx(V.div, {
                        className: "absolute top-3 right-3 bg-white dark:bg-gray-800 p-2 rounded-full cursor-pointer shadow-md",
                        whileHover: {
                           scale: 1.1
                        },
                        whileTap: {
                           scale: .9
                        },
                        children: x.jsx(tk, {
                           className: "text-gray-400 hover:text-red-500 transition-colors"
                        })
                     })]
                  }), x.jsxs("div", {
                     className: "p-6",
                     children: [x.jsxs("div", {
                        className: "flex justify-between items-start mb-2",
                        children: [x.jsx("h3", {
                           className: "text-xl font-bold",
                           children: t.name
                        }), x.jsxs("span", {
                           className: "font-mono text-lg font-semibold text-purple-600 dark:text-purple-400",
                           children: ["$", t.price]
                        })]
                     }), x.jsx("p", {
                        className: "text-gray-600 dark:text-gray-300 mb-4 line-clamp-2",
                        children: t.description
                     }), x.jsxs("div", {
                        className: "flex justify-between items-center",
                        children: [x.jsx("span", {
                           className: "inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-xs font-medium",
                           children: t.category
                        }), x.jsx("button", {
                           onClick: () => e(t),
                           className: "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25",
                           children: "Buy Now"
                        })]
                     })]
                  })]
               }, t.id))
            })
         }), x.jsx(V.div, {
            className: "mt-12 text-center",
            initial: {
               opacity: 0
            },
            animate: {
               opacity: 1
            },
            transition: {
               duration: .5,
               delay: .6
            },
            children: x.jsxs("p", {
               className: "text-gray-500 dark:text-gray-400",
               children: ["Need help with your purchase? Contact us directly on WhatsApp at", x.jsxs("a", {
                  href: `https://wa.me/${Sl}`,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "ml-1 text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium",
                  children: ["+", Sl]
               })]
            })
         })]
      })
   };

function ak() {
   return x.jsx(w2, {
      children: x.jsxs("div", {
         className: "bg-white dark:bg-black text-gray-900 dark:text-white min-h-screen font-sans transition-colors duration-300",
         children: [x.jsx(xT, {}), x.jsxs(XS, {
            children: [x.jsx($o, {
               path: "/",
               element: x.jsx("main", {
                  children: x.jsxs("div", {
                     className: "flex flex-col items-center justify-center px-4 py-20",
                     children: [x.jsx(W2, {}), x.jsx(wT, {})]
                  })
               })
            }), x.jsx($o, {
               path: "/public",
               element: x.jsx(ik, {})
            }), x.jsx($o, {
               path: "/market",
               element: x.jsx(sk, {})
            })]
         })]
      })
   })
}
El.createRoot(document.getElementById("root")).render(x.jsx(At.StrictMode, {
   children: x.jsx(ak, {})
}));

function __vite__mapDeps(indexes) {
   if (!__vite__mapDeps.viteFileDeps) {
      __vite__mapDeps.viteFileDeps = []
   }
   return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
