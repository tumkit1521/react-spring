!(function(t, e) {
  'object' == typeof exports && 'undefined' != typeof module
    ? e(exports, require('react'), require('react-dom'))
    : 'function' == typeof define && define.amd
    ? define(['exports', 'react', 'react-dom'], e)
    : e((t.ReactSpring = {}), t.React, t.ReactDOM)
})(this, function(t, e, v) {
  'use strict'
  var g = 'default' in e ? e.default : e
  function E(t, e) {
    if (null == t) return {}
    var n,
      r,
      i = {},
      o = Object.keys(t)
    for (r = 0; r < o.length; r++)
      (n = o[r]), 0 <= e.indexOf(n) || (i[n] = t[n])
    return i
  }
  v = v && v.hasOwnProperty('default') ? v.default : v
  var n = void 0,
    i = void 0,
    j = [],
    V = function(t) {
      return 'undefined' != typeof window && window.requestAnimationFrame(t)
    },
    r = function(t) {
      return 'undefined' != typeof window && window.cancelAnimationFrame(t)
    },
    c = void 0,
    S = function() {
      return Date.now()
    },
    o = void 0,
    a = void 0,
    s = function(t, e) {
      return (i = { fn: t, transform: e })
    },
    u = function(t) {
      return (j = t)
    },
    l = function(t) {
      return (n = t)
    },
    d = function(t) {
      return (c = t)
    },
    f = function(t) {
      return (o = t)
    },
    p = function(t) {
      return (a = t)
    },
    h = Object.freeze({
      get bugfixes() {
        return n
      },
      get applyAnimatedValues() {
        return i
      },
      get colorNames() {
        return j
      },
      get requestFrame() {
        return V
      },
      get cancelFrame() {
        return r
      },
      get interpolation() {
        return c
      },
      get now() {
        return S
      },
      get defaultElement() {
        return o
      },
      get createAnimatedStyle() {
        return a
      },
      injectApplyAnimatedValues: s,
      injectColorNames: u,
      injectBugfixes: l,
      injectInterpolation: d,
      injectFrame: function(t, e) {
        var n
        return (V = (n = [t, e])[0]), (r = n[1]), n
      },
      injectNow: function(t) {
        return (S = t)
      },
      injectDefaultElement: f,
      injectCreateAnimatedStyle: p,
    })
  function m(t, e) {
    ;(t.prototype = Object.create(e.prototype)),
      ((t.prototype.constructor = t).__proto__ = e)
  }
  var O = (function() {
    function t() {}
    var e = t.prototype
    return (
      (e.attach = function() {}),
      (e.detach = function() {}),
      (e.getValue = function() {}),
      (e.getAnimatedValue = function() {
        return this.getValue()
      }),
      (e.addChild = function(t) {}),
      (e.removeChild = function(t) {}),
      (e.getChildren = function() {
        return []
      }),
      t
    )
  })()
  function y(t) {
    if (void 0 === t)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      )
    return t
  }
  var b = function(e) {
      return Object.keys(e).map(function(t) {
        return e[t]
      })
    },
    w = (function(i) {
      function t() {
        for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
          n[r] = arguments[r]
        return (
          ((e = i.call.apply(i, [this].concat(n)) || this).children = []),
          (e.getChildren = function() {
            return e.children
          }),
          (e.getPayload = function(t) {
            return (
              void 0 === t && (t = void 0),
              void 0 !== t && e.payload ? e.payload[t] : e.payload || y(y(e))
            )
          }),
          e
        )
      }
      m(t, i)
      var e = t.prototype
      return (
        (e.addChild = function(t) {
          0 === this.children.length && this.attach(), this.children.push(t)
        }),
        (e.removeChild = function(t) {
          var e = this.children.indexOf(t)
          this.children.splice(e, 1),
            0 === this.children.length && this.detach()
        }),
        t
      )
    })(O),
    k = (function(i) {
      function t() {
        for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
          n[r] = arguments[r]
        return (
          ((e = i.call.apply(i, [this].concat(n)) || this).payload = []),
          (e.getAnimatedValue = function() {
            return e.getValue()
          }),
          (e.attach = function() {
            return e.payload.forEach(function(t) {
              return t instanceof O && t.addChild(y(y(e)))
            })
          }),
          (e.detach = function() {
            return e.payload.forEach(function(t) {
              return t instanceof O && t.removeChild(y(y(e)))
            })
          }),
          e
        )
      }
      return m(t, i), t
    })(w),
    A = (function(i) {
      function t() {
        for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
          n[r] = arguments[r]
        return (
          ((e = i.call.apply(i, [this].concat(n)) || this).payload = {}),
          (e.getAnimatedValue = function() {
            return e.getValue(!0)
          }),
          (e.attach = function() {
            return b(e.payload).forEach(function(t) {
              return t instanceof O && t.addChild(y(y(e)))
            })
          }),
          (e.detach = function() {
            return b(e.payload).forEach(function(t) {
              return t instanceof O && t.removeChild(y(y(e)))
            })
          }),
          e
        )
      }
      return (
        m(t, i),
        (t.prototype.getValue = function(t) {
          void 0 === t && (t = !1)
          var e = {}
          for (var n in this.payload) {
            var r = this.payload[n]
            ;(!t || r instanceof O) &&
              (e[n] =
                r instanceof O ? r[t ? 'getAnimatedValue' : 'getValue']() : r)
          }
          return e
        }),
        t
      )
    })(w),
    x = (function(n) {
      function t(t) {
        var e
        return (
          (e = n.call(this) || this),
          !(t = t || {}).transform ||
            t.transform instanceof O ||
            (t = i.transform(t)),
          (e.payload = t),
          e
        )
      }
      return m(t, n), t
    })(A),
    P = {
      transparent: 0,
      aliceblue: 4042850303,
      antiquewhite: 4209760255,
      aqua: 16777215,
      aquamarine: 2147472639,
      azure: 4043309055,
      beige: 4126530815,
      bisque: 4293182719,
      black: 255,
      blanchedalmond: 4293643775,
      blue: 65535,
      blueviolet: 2318131967,
      brown: 2771004159,
      burlywood: 3736635391,
      burntsienna: 3934150143,
      cadetblue: 1604231423,
      chartreuse: 2147418367,
      chocolate: 3530104575,
      coral: 4286533887,
      cornflowerblue: 1687547391,
      cornsilk: 4294499583,
      crimson: 3692313855,
      cyan: 16777215,
      darkblue: 35839,
      darkcyan: 9145343,
      darkgoldenrod: 3095792639,
      darkgray: 2846468607,
      darkgreen: 6553855,
      darkgrey: 2846468607,
      darkkhaki: 3182914559,
      darkmagenta: 2332068863,
      darkolivegreen: 1433087999,
      darkorange: 4287365375,
      darkorchid: 2570243327,
      darkred: 2332033279,
      darksalmon: 3918953215,
      darkseagreen: 2411499519,
      darkslateblue: 1211993087,
      darkslategray: 793726975,
      darkslategrey: 793726975,
      darkturquoise: 13554175,
      darkviolet: 2483082239,
      deeppink: 4279538687,
      deepskyblue: 12582911,
      dimgray: 1768516095,
      dimgrey: 1768516095,
      dodgerblue: 512819199,
      firebrick: 2988581631,
      floralwhite: 4294635775,
      forestgreen: 579543807,
      fuchsia: 4278255615,
      gainsboro: 3705462015,
      ghostwhite: 4177068031,
      gold: 4292280575,
      goldenrod: 3668254975,
      gray: 2155905279,
      green: 8388863,
      greenyellow: 2919182335,
      grey: 2155905279,
      honeydew: 4043305215,
      hotpink: 4285117695,
      indianred: 3445382399,
      indigo: 1258324735,
      ivory: 4294963455,
      khaki: 4041641215,
      lavender: 3873897215,
      lavenderblush: 4293981695,
      lawngreen: 2096890111,
      lemonchiffon: 4294626815,
      lightblue: 2916673279,
      lightcoral: 4034953471,
      lightcyan: 3774873599,
      lightgoldenrodyellow: 4210742015,
      lightgray: 3553874943,
      lightgreen: 2431553791,
      lightgrey: 3553874943,
      lightpink: 4290167295,
      lightsalmon: 4288707327,
      lightseagreen: 548580095,
      lightskyblue: 2278488831,
      lightslategray: 2005441023,
      lightslategrey: 2005441023,
      lightsteelblue: 2965692159,
      lightyellow: 4294959359,
      lime: 16711935,
      limegreen: 852308735,
      linen: 4210091775,
      magenta: 4278255615,
      maroon: 2147483903,
      mediumaquamarine: 1724754687,
      mediumblue: 52735,
      mediumorchid: 3126187007,
      mediumpurple: 2473647103,
      mediumseagreen: 1018393087,
      mediumslateblue: 2070474495,
      mediumspringgreen: 16423679,
      mediumturquoise: 1221709055,
      mediumvioletred: 3340076543,
      midnightblue: 421097727,
      mintcream: 4127193855,
      mistyrose: 4293190143,
      moccasin: 4293178879,
      navajowhite: 4292783615,
      navy: 33023,
      oldlace: 4260751103,
      olive: 2155872511,
      olivedrab: 1804477439,
      orange: 4289003775,
      orangered: 4282712319,
      orchid: 3664828159,
      palegoldenrod: 4008225535,
      palegreen: 2566625535,
      paleturquoise: 2951671551,
      palevioletred: 3681588223,
      papayawhip: 4293907967,
      peachpuff: 4292524543,
      peru: 3448061951,
      pink: 4290825215,
      plum: 3718307327,
      powderblue: 2967529215,
      purple: 2147516671,
      rebeccapurple: 1714657791,
      red: 4278190335,
      rosybrown: 3163525119,
      royalblue: 1097458175,
      saddlebrown: 2336560127,
      salmon: 4202722047,
      sandybrown: 4104413439,
      seagreen: 780883967,
      seashell: 4294307583,
      sienna: 2689740287,
      silver: 3233857791,
      skyblue: 2278484991,
      slateblue: 1784335871,
      slategray: 1887473919,
      slategrey: 1887473919,
      snow: 4294638335,
      springgreen: 16744447,
      steelblue: 1182971135,
      tan: 3535047935,
      teal: 8421631,
      thistle: 3636451583,
      tomato: 4284696575,
      turquoise: 1088475391,
      violet: 4001558271,
      wheat: 4125012991,
      white: 4294967295,
      whitesmoke: 4126537215,
      yellow: 4294902015,
      yellowgreen: 2597139199,
    }
  function R() {
    return (R =
      Object.assign ||
      function(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e]
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
        }
        return t
      }).apply(this, arguments)
  }
  var C = (function() {
    function l() {}
    return (
      (l.create = function(t, e, n) {
        if ('function' == typeof t) return t
        if (c && t.output && 'string' == typeof t.output[0]) return c(t)
        if (Array.isArray(t))
          return l.create({ range: t, output: e, extrapolate: n || 'extend' })
        var r = t.output,
          i = t.range || [0, 1],
          o =
            t.easing ||
            function(t) {
              return t
            },
          a = 'extend',
          s = t.map
        void 0 !== t.extrapolateLeft
          ? (a = t.extrapolateLeft)
          : void 0 !== t.extrapolate && (a = t.extrapolate)
        var u = 'extend'
        return (
          void 0 !== t.extrapolateRight
            ? (u = t.extrapolateRight)
            : void 0 !== t.extrapolate && (u = t.extrapolate),
          function(t) {
            var e = (function(t, e) {
              for (var n = 1; n < e.length - 1 && !(e[n] >= t); ++n);
              return n - 1
            })(t, i)
            return (function(t, e, n, r, i, o, a, s, u) {
              var l = u ? u(t) : t
              if (l < e) {
                if ('identity' === a) return l
                'clamp' === a && (l = e)
              }
              if (n < l) {
                if ('identity' === s) return l
                'clamp' === s && (l = n)
              }
              if (r === i) return r
              if (e === n) return t <= e ? r : i
              e === -1 / 0
                ? (l = -l)
                : n === 1 / 0
                ? (l -= e)
                : (l = (l - e) / (n - e))
              ;(l = o(l)),
                r === -1 / 0
                  ? (l = -l)
                  : i === 1 / 0
                  ? (l += r)
                  : (l = l * (i - r) + r)
              return l
            })(t, i[e], i[e + 1], r[e], r[e + 1], o, a, u, s)
          }
        )
      }),
      l
    )
  })()
  var F = '[-+]?\\d*\\.?\\d+',
    T = F + '%'
  function I() {
    return (
      '\\(\\s*(' +
      Array.prototype.slice.call(arguments).join(')\\s*,\\s*(') +
      ')\\s*\\)'
    )
  }
  var M = new RegExp('rgb' + I(F, F, F)),
    U = new RegExp('rgba' + I(F, F, F, F)),
    q = new RegExp('hsl' + I(F, T, T)),
    D = new RegExp('hsla' + I(F, T, T, F)),
    W = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    K = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    L = /^#([0-9a-fA-F]{6})$/,
    z = /^#([0-9a-fA-F]{8})$/
  function _(t, e, n) {
    return (
      n < 0 && (n += 1),
      1 < n && (n -= 1),
      n < 1 / 6
        ? t + 6 * (e - t) * n
        : n < 0.5
        ? e
        : n < 2 / 3
        ? t + (e - t) * (2 / 3 - n) * 6
        : t
    )
  }
  function G(t, e, n) {
    var r = n < 0.5 ? n * (1 + e) : n + e - n * e,
      i = 2 * n - r,
      o = _(i, r, t + 1 / 3),
      a = _(i, r, t),
      s = _(i, r, t - 1 / 3)
    return (
      (Math.round(255 * o) << 24) |
      (Math.round(255 * a) << 16) |
      (Math.round(255 * s) << 8)
    )
  }
  function N(t) {
    var e = parseInt(t, 10)
    return e < 0 ? 0 : 255 < e ? 255 : e
  }
  function $(t) {
    return (((parseFloat(t) % 360) + 360) % 360) / 360
  }
  function B(t) {
    var e = parseFloat(t)
    return e < 0 ? 0 : 1 < e ? 255 : Math.round(255 * e)
  }
  function H(t) {
    var e = parseFloat(t)
    return e < 0 ? 0 : 100 < e ? 1 : e / 100
  }
  function Z(t) {
    var e,
      n,
      r =
        'number' == typeof (e = t)
          ? e >>> 0 === e && 0 <= e && e <= 4294967295
            ? e
            : null
          : (n = L.exec(e))
          ? parseInt(n[1] + 'ff', 16) >>> 0
          : P.hasOwnProperty(e)
          ? P[e]
          : (n = M.exec(e))
          ? ((N(n[1]) << 24) | (N(n[2]) << 16) | (N(n[3]) << 8) | 255) >>> 0
          : (n = U.exec(e))
          ? ((N(n[1]) << 24) | (N(n[2]) << 16) | (N(n[3]) << 8) | B(n[4])) >>> 0
          : (n = W.exec(e))
          ? parseInt(n[1] + n[1] + n[2] + n[2] + n[3] + n[3] + 'ff', 16) >>> 0
          : (n = z.exec(e))
          ? parseInt(n[1], 16) >>> 0
          : (n = K.exec(e))
          ? parseInt(
              n[1] + n[1] + n[2] + n[2] + n[3] + n[3] + n[4] + n[4],
              16
            ) >>> 0
          : (n = q.exec(e))
          ? (255 | G($(n[1]), H(n[2]), H(n[3]))) >>> 0
          : (n = D.exec(e))
          ? (G($(n[1]), H(n[2]), H(n[3])) | B(n[4])) >>> 0
          : null
    return null === r
      ? t
      : 'rgba(' +
          ((4278190080 & (r = r || 0)) >>> 24) +
          ', ' +
          ((16711680 & r) >>> 16) +
          ', ' +
          ((65280 & r) >>> 8) +
          ', ' +
          (255 & r) / 255 +
          ')'
  }
  var J = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
    Q = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
    X = new RegExp('(' + Object.keys(P).join('|') + ')', 'g')
  var Y = (function(i) {
    function o(t, e, n) {
      var r
      return (
        ((r = i.call(this) || this).getValue = function() {
          var t
          return (t = r).calc.apply(
            t,
            r.payload.map(function(t) {
              return t.getValue()
            })
          )
        }),
        (r.updateConfig = function(t, e) {
          return (r.calc = C.create(t, e))
        }),
        (r.interpolate = function(t, e) {
          return new o(y(y(r)), t, e)
        }),
        (r.payload =
          t instanceof k && !t.updateConfig
            ? t.payload
            : Array.isArray(t)
            ? t
            : [t]),
        (r.calc = C.create(e, n)),
        r
      )
    }
    return m(o, i), o
  })(k)
  var tt = (function(e) {
      function t(t) {
        var n
        return (
          ((n = e.call(this) || this).setValue = function(t, e) {
            void 0 === e && (e = !0), (n.value = t), e && n.flush()
          }),
          (n.getValue = function() {
            return n.value
          }),
          (n.updateStyles = function() {
            return (function e(t, n) {
              'function' == typeof t.update
                ? n.add(t)
                : t.getChildren().forEach(function(t) {
                    return e(t, n)
                  })
            })(y(y(n)), n.animatedStyles)
          }),
          (n.updateValue = function(t) {
            return n.flush((n.value = t))
          }),
          (n.interpolate = function(t, e) {
            return new Y(y(y(n)), t, e)
          }),
          (n.value = t),
          (n.animatedStyles = new Set()),
          (n.done = !1),
          (n.startPosition = t),
          (n.lastPosition = t),
          (n.lastVelocity = void 0),
          (n.lastTime = void 0),
          (n.controller = void 0),
          n
        )
      }
      m(t, e)
      var n = t.prototype
      return (
        (n.flush = function() {
          0 === this.animatedStyles.size && this.updateStyles(),
            this.animatedStyles.forEach(function(t) {
              return t.update()
            })
        }),
        (n.prepare = function(t) {
          void 0 === this.controller && (this.controller = t),
            this.controller === t &&
              ((this.startPosition = this.value),
              (this.lastPosition = this.value),
              (this.lastVelocity = t.isActive ? this.lastVelocity : void 0),
              (this.lastTime = t.isActive ? this.lastTime : void 0),
              (this.done = !1),
              this.animatedStyles.clear())
        }),
        t
      )
    })(w),
    et = (function(e) {
      function t(t) {
        var i
        return (
          ((i = e.call(this) || this).setValue = function(n, r) {
            void 0 === r && (r = !0),
              Array.isArray(n)
                ? n.length === i.payload.length &&
                  n.forEach(function(t, e) {
                    return i.payload[e].setValue(t, r)
                  })
                : i.payload.forEach(function(t, e) {
                    return i.payload[e].setValue(n, r)
                  })
          }),
          (i.getValue = function() {
            return i.payload.map(function(t) {
              return t.getValue()
            })
          }),
          (i.interpolate = function(t, e) {
            return new Y(y(y(i)), t, e)
          }),
          (i.payload = t.map(function(t) {
            return new tt(t)
          })),
          i
        )
      }
      return m(t, e), t
    })(k)
  function nt(t, e) {
    return null == t ? e : t
  }
  function rt(t) {
    return void 0 !== t ? (Array.isArray(t) ? t : [t]) : []
  }
  function it(t, e) {
    if (typeof t != typeof e) return !1
    if ('string' == typeof t || 'number' == typeof t) return t === e
    var n
    for (n in t) if (!(n in e)) return !1
    for (n in e) if (t[n] !== e[n]) return !1
    return void 0 !== n || t === e
  }
  function ot(t) {
    for (
      var e = arguments.length, n = new Array(1 < e ? e - 1 : 0), r = 1;
      r < e;
      r++
    )
      n[r - 1] = arguments[r]
    return 'function' == typeof t ? t.apply(void 0, n) : t
  }
  function at(e) {
    return Object.keys(e).map(function(t) {
      return e[t]
    })
  }
  function st(r) {
    var t,
      i = ((t = r).to,
      t.from,
      t.config,
      t.native,
      t.onStart,
      t.onRest,
      t.onFrame,
      t.children,
      t.reset,
      t.reverse,
      t.force,
      t.immediate,
      t.impl,
      t.inject,
      t.delay,
      t.attach,
      t.destroyed,
      t.interpolateTo,
      t.autoStart,
      t.ref,
      E(t, [
        'to',
        'from',
        'config',
        'native',
        'onStart',
        'onRest',
        'onFrame',
        'children',
        'reset',
        'reverse',
        'force',
        'immediate',
        'impl',
        'inject',
        'delay',
        'attach',
        'destroyed',
        'interpolateTo',
        'autoStart',
        'ref',
      ])),
      e = Object.keys(r).reduce(function(t, e) {
        var n
        return void 0 !== i[e] ? t : R({}, t, (((n = {})[e] = r[e]), n))
      }, {})
    return R({ to: i }, e)
  }
  function ut(t, e) {
    var n,
      r = e[0],
      i = e[1]
    return R({}, t, (((n = {})[r] = new (Array.isArray(i) ? et : tt)(i)), n))
  }
  function lt(t) {
    var e = t.from,
      n = t.to,
      r = t.native,
      i = Object.entries(R({}, e, n))
    return r ? i.reduce(ut, {}) : R({}, e, n)
  }
  function ct(t, e) {
    return (
      e &&
        ('function' == typeof e
          ? e(t)
          : 'object' == typeof e && (e.current = t)),
      t
    )
  }
  var dt = function(t) {
    return 'auto' === t
  }
  var ft = {
      animationIterationCount: !0,
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
      strokeWidth: !0,
    },
    pt = ['Webkit', 'Ms', 'Moz', 'O']
  ft = Object.keys(ft).reduce(function(r, i) {
    return (
      pt.forEach(function(t) {
        return (r[
          ((e = t), (n = i), e + n.charAt(0).toUpperCase() + n.substring(1))
        ] = r[i])
        var e, n
      }),
      r
    )
  }, ft)
  var ht = {}
  p(function(t) {
    return new x(t)
  }),
    f('div'),
    d(function(n) {
      var r = n.output
          .map(function(t) {
            return t.replace(Q, Z)
          })
          .map(function(t) {
            return t.replace(X, Z)
          }),
        i = r[0].match(J).map(function() {
          return []
        })
      r.forEach(function(t) {
        t.match(J).forEach(function(t, e) {
          return i[e].push(+t)
        })
      })
      var o = r[0].match(J).map(function(t, e) {
        return C.create(R({}, n, { output: i[e] }))
      })
      return function(t) {
        var e = 0
        return r[0]
          .replace(J, function() {
            return o[e++](t)
          })
          .replace(
            /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
            function(t, e, n, r, i) {
              return (
                'rgba(' +
                Math.round(e) +
                ', ' +
                Math.round(n) +
                ', ' +
                Math.round(r) +
                ', ' +
                i +
                ')'
              )
            }
          )
      }
    }),
    u(P),
    l(function(f, p) {
      var h = f.from,
        m = f.to,
        t = f.children
      if (at(m).some(dt) || at(h).some(dt)) {
        var e = t(lt(f))
        if (e) {
          Array.isArray(e) && (e = { type: 'div', props: { children: e } })
          var n = e.props.style
          return g.createElement(
            e.type,
            R({ key: e.key ? e.key : void 0 }, e.props, {
              style: R({}, n, { position: 'absolute', visibility: 'hidden' }),
              ref: function(t) {
                if (t) {
                  var e,
                    n,
                    r = v.findDOMNode(t),
                    i = getComputedStyle(r)
                  if ('border-box' === i.boxSizing)
                    (e = r.offsetWidth), (n = r.offsetHeight)
                  else {
                    var o =
                        parseFloat(i.paddingLeft || 0) +
                        parseFloat(i.paddingRight || 0),
                      a =
                        parseFloat(i.paddingTop || 0) +
                        parseFloat(i.paddingBottom || 0),
                      s =
                        parseFloat(i.borderLeftWidth || 0) +
                        parseFloat(i.borderRightWidth || 0),
                      u =
                        parseFloat(i.borderTopWidth || 0) +
                        parseFloat(i.borderBottomWidth || 0)
                    ;(e = r.offsetWidth - o - s), (n = r.offsetHeight - a - u)
                  }
                  var l = ((c = e),
                  (d = n),
                  function(t, e) {
                    var n,
                      r = e[0],
                      i = e[1]
                    return R(
                      {},
                      t,
                      (((n = {})[r] =
                        'auto' === i ? (~r.indexOf('height') ? d : c) : i),
                      n)
                    )
                  })
                  p(
                    R({}, f, {
                      from: Object.entries(h).reduce(l, h),
                      to: Object.entries(m).reduce(l, m),
                    })
                  )
                }
                var c, d
              },
            })
          )
        }
      }
    }),
    s(
      function(t, e) {
        if (!t.nodeType || void 0 === t.setAttribute) return !1
        var n,
          r,
          i,
          o = e.style,
          a = e.children,
          s = e.scrollTop,
          u = e.scrollLeft,
          l = E(e, ['style', 'children', 'scrollTop', 'scrollLeft'])
        for (var c in (void 0 !== s && (t.scrollTop = s),
        void 0 !== u && (t.scrollLeft = u),
        void 0 !== a && (t.textContent = a),
        o))
          if (o.hasOwnProperty(c)) {
            var d = 0 === c.indexOf('--'),
              f = ((r = o[(n = c)]),
              (i = d),
              null == r || 'boolean' == typeof r || '' === r
                ? ''
                : i ||
                  'number' != typeof r ||
                  0 === r ||
                  (ft.hasOwnProperty(n) && ft[n])
                ? ('' + r).trim()
                : r + 'px')
            'float' === c && (c = 'cssFloat'),
              d ? t.style.setProperty(c, f) : (t.style[c] = f)
          }
        for (var p in l) {
          var h =
            ht[p] ||
            (ht[p] = p.replace(/([A-Z])/g, function(t) {
              return '-' + t.toLowerCase()
            }))
          void 0 !== t.getAttribute(h) && t.setAttribute(h, l[p])
        }
      },
      function(t) {
        return t
      }
    )
  var mt = !1,
    vt = new Set(),
    yt = function t() {
      var e = S(),
        n = vt,
        r = Array.isArray(n),
        i = 0
      for (n = r ? n : n[Symbol.iterator](); ; ) {
        var o
        if (r) {
          if (i >= n.length) break
          o = n[i++]
        } else {
          if ((i = n.next()).done) break
          o = i.value
        }
        for (var a = o, s = !0, u = !0, l = 0; l < a.configs.length; l++) {
          for (
            var c = a.configs[l], d = void 0, f = void 0, p = 0;
            p < c.animatedValues.length;
            p++
          ) {
            var h = c.animatedValues[p]
            if (!h.done) {
              var m = c.fromValues[p],
                v = c.toValues[p],
                y = h.lastPosition,
                g = v instanceof O,
                b = Array.isArray(c.initialVelocity)
                  ? c.initialVelocity[p]
                  : c.initialVelocity
              if (
                (g && (v = v.getValue()),
                c.immediate || (!g && !c.decay && m === v))
              )
                h.updateValue(v), (h.done = !0)
              else if (c.delay && e - a.startTime < c.delay) s = !1
              else if (
                ((u = !1), 'string' != typeof m && 'string' != typeof v)
              ) {
                if (void 0 !== c.duration)
                  (y =
                    m +
                    c.easing((e - a.startTime - c.delay) / c.duration) *
                      (v - m)),
                    (d = e >= a.startTime + c.delay + c.duration)
                else if (c.decay)
                  (y =
                    m +
                    (b / (1 - 0.998)) *
                      (1 - Math.exp(-(1 - 0.998) * (e - a.startTime)))),
                    (d = Math.abs(h.lastPosition - y) < 0.1) && (v = y)
                else {
                  ;(f = void 0 !== h.lastTime ? h.lastTime : e),
                    (b =
                      void 0 !== h.lastVelocity
                        ? h.lastVelocity
                        : c.initialVelocity),
                    f + 64 < e && (f = e)
                  for (var w = Math.floor(e - f), k = 0; k < w; ++k) {
                    y +=
                      (1 *
                        (b +=
                          (1 *
                            ((-c.tension * (y - v) + -c.friction * b) /
                              c.mass)) /
                          1e3)) /
                      1e3
                  }
                  var A =
                      !(!c.clamp || 0 === c.tension) && (m < v ? v < y : y < v),
                    x = Math.abs(b) <= c.precision,
                    P = 0 === c.tension || Math.abs(v - y) <= c.precision
                  ;(d = A || (x && P)), (h.lastVelocity = b), (h.lastTime = e)
                }
                g && !c.toValues[p].done && (d = !1),
                  d ? (h.value !== v && (y = v), (h.done = !0)) : (s = !1),
                  h.updateValue(y),
                  (h.lastPosition = y)
              } else h.updateValue(v), (h.done = !0)
            }
          }
          ;(!a.props.onFrame && a.props.native) ||
            (a.animatedProps[c.name] = c.interpolation.getValue())
        }
        ;(!a.props.onFrame && a.props.native) ||
          (!a.props.native && a.onUpdate && a.onUpdate(),
          a.props.onFrame && a.props.onFrame(a.animatedProps)),
          s && (vt.delete(a), a.debouncedOnEnd({ finished: !0, noChange: u }))
      }
      vt.size ? V(t) : (mt = !1)
    },
    gt = function(t) {
      vt.has(t) && vt.delete(t)
    },
    bt = (function() {
      function t(t, e) {
        var n = this
        void 0 === e && (e = { native: !0, interpolateTo: !0, autoStart: !0 }),
          (this.getValues = function() {
            return n.props.native ? n.interpolations : n.animatedProps
          }),
          (this.dependents = new Set()),
          (this.isActive = !1),
          (this.hasChanged = !1),
          (this.props = {}),
          (this.merged = {}),
          (this.animations = {}),
          (this.interpolations = {}),
          (this.animatedProps = {}),
          (this.configs = []),
          (this.frame = void 0),
          (this.startTime = void 0),
          (this.lastTime = void 0),
          this.update(R({}, t, e))
      }
      var e = t.prototype
      return (
        (e.update = function(t) {
          var g = this
          this.props = R({}, this.props, t)
          var e = this.props.interpolateTo ? st(this.props) : this.props,
            n = e.from,
            b = void 0 === n ? {} : n,
            r = e.to,
            i = void 0 === r ? {} : r,
            o = e.config,
            w = void 0 === o ? {} : o,
            a = e.delay,
            k = void 0 === a ? 0 : a,
            s = e.reverse,
            u = e.attach,
            A = e.reset,
            x = e.immediate,
            l = e.autoStart,
            c = e.ref
          if (s) {
            var d = [i, b]
            ;(b = d[0]), (i = d[1])
          }
          this.hasChanged = !1
          var P = u && u(this),
            f = A ? {} : this.merged
          if (
            ((this.merged = R({}, b, f, i)),
            (this.animations = Object.entries(this.merged).reduce(function(
              t,
              e,
              n
            ) {
              var r,
                i,
                o,
                a = e[0],
                s = e[1],
                u = (!A && t[a]) || {},
                l = 'number' == typeof s,
                c =
                  'string' == typeof s &&
                  !s.startsWith('#') &&
                  !/\d/.test(s) &&
                  !j[s],
                d = !l && !c && Array.isArray(s),
                f = void 0 !== b[a] ? b[a] : s,
                p = l || d ? s : c ? s : 1,
                h = ot(w, a)
              if (
                (P && (p = P.animations[a].parent),
                void 0 === h.decay && it(u.changes, s))
              )
                return t
              if (((g.hasChanged = !0), l || c)) i = o = u.parent || new tt(f)
              else if (d) i = o = u.parent || new et(f)
              else {
                var m = u.interpolation && u.interpolation.calc(u.parent.value)
                u.parent ? (i = u.parent).setValue(0, !1) : (i = new tt(0))
                var v = { output: [void 0 !== m ? m : f, s] }
                u.interpolation
                  ? ((o = u.interpolation), u.interpolation.updateConfig(v))
                  : (o = i.interpolate(v))
              }
              ot(x, a) && i.setValue(s, !1)
              var y = rt(i.getPayload())
              return (
                y.forEach(function(t) {
                  return t.prepare(g)
                }),
                R(
                  {},
                  t,
                  (((r = {})[a] = R({}, u, {
                    name: a,
                    parent: i,
                    interpolation: o,
                    animatedValues: y,
                    changes: s,
                    fromValues: rt(i.getValue()),
                    toValues: rt(P ? p.getPayload() : p),
                    immediate: ot(x, a),
                    delay: nt(h.delay, k || 0),
                    initialVelocity: nt(h.velocity, 0),
                    clamp: nt(h.clamp, !1),
                    precision: nt(h.precision, 0.01),
                    tension: nt(h.tension, 170),
                    friction: nt(h.friction, 26),
                    mass: nt(h.mass, 1),
                    duration: h.duration,
                    easing: nt(h.easing, function(t) {
                      return t
                    }),
                    decay: h.decay,
                  })),
                  r)
                )
              )
            },
            this.animations)),
            this.hasChanged)
          )
            for (var p in ((this.configs = at(this.animations)),
            (this.animatedProps = {}),
            (this.interpolations = {}),
            this.animations))
              (this.interpolations[p] = this.animations[p].interpolation),
                (this.animatedProps[p] = this.animations[
                  p
                ].interpolation.getValue())
          for (
            var h = arguments.length, m = new Array(1 < h ? h - 1 : 0), v = 1;
            v < h;
            v++
          )
            m[v - 1] = arguments[v]
          c || (!l && !m.length) || this.start.apply(this, m)
          var y = m[0],
            V = m[1]
          return (
            (this.onEnd = 'function' == typeof y && y),
            (this.onUpdate = V),
            this.getValues()
          )
        }),
        (e.start = function(t, e) {
          var n,
            r = this
          return (
            (this.startTime = S()),
            this.isActive && this.stop(),
            (this.isActive = !0),
            (this.onEnd = 'function' == typeof t && t),
            (this.onUpdate = e),
            this.props.onStart && this.props.onStart(),
            (n = this),
            vt.has(n) || (vt.add(n), mt || V(yt), (mt = !0)),
            new Promise(function(t) {
              return (r.resolve = t)
            })
          )
        }),
        (e.stop = function(t) {
          void 0 === t && (t = !1),
            t &&
              at(this.animations).forEach(function(t) {
                return (t.changes = void 0)
              }),
            this.debouncedOnEnd({ finished: t })
        }),
        (e.destroy = function() {
          gt(this),
            (this.props = {}),
            (this.merged = {}),
            (this.animations = {}),
            (this.interpolations = {}),
            (this.animatedProps = {}),
            (this.configs = [])
        }),
        (e.debouncedOnEnd = function(t) {
          gt(this), (this.isActive = !1)
          var e = this.onEnd
          ;(this.onEnd = null),
            e && e(t),
            this.resolve && this.resolve(),
            (this.resolve = null)
        }),
        t
      )
    })(),
    wt = (function(r) {
      function t(t, e) {
        var n
        return (
          (n = r.call(this) || this),
          t.style && (t = R({}, t, { style: a(t.style) })),
          (n.payload = t),
          (n.update = e),
          n.attach(),
          n
        )
      }
      return m(t, r), t
    })(A)
  function kt(r) {
    var n = (function(n) {
      function t(t) {
        var e
        return (
          ((e = n.call(this) || this).callback = function() {
            e.node &&
              (!1 ===
                i.fn(e.node, e.propsAnimated.getAnimatedValue(), y(y(e))) &&
                e.forceUpdate())
          }),
          e.attachProps(t),
          e
        )
      }
      m(t, n)
      var e = t.prototype
      return (
        (e.componentWillUnmount = function() {
          this.propsAnimated && this.propsAnimated.detach()
        }),
        (e.setNativeProps = function(t) {
          !1 === i.fn(this.node, t, this) && this.forceUpdate()
        }),
        (e.attachProps = function(t) {
          t.forwardRef
          var e = E(t, ['forwardRef']),
            n = this.propsAnimated
          ;(this.propsAnimated = new wt(e, this.callback)), n && n.detach()
        }),
        (e.shouldComponentUpdate = function(t) {
          var e = t.style,
            n = E(t, ['style']),
            r = this.props,
            i = r.style
          return (
            (!it(E(r, ['style']), n) || !it(i, e)) && (this.attachProps(t), !0)
          )
        }),
        (e.render = function() {
          var e = this,
            t = this.propsAnimated.getValue(),
            n = (t.scrollTop, t.scrollLeft, E(t, ['scrollTop', 'scrollLeft']))
          return g.createElement(
            r,
            R({}, n, {
              ref: function(t) {
                return (e.node = ct(t, e.props.forwardRef))
              },
            })
          )
        }),
        t
      )
    })(g.Component)
    return g.forwardRef(function(t, e) {
      return g.createElement(n, R({}, t, { forwardRef: e }))
    })
  }
  var At = {
      default: { tension: 170, friction: 26 },
      gentle: { tension: 120, friction: 14 },
      wobbly: { tension: 180, friction: 12 },
      stiff: { tension: 210, friction: 20 },
      slow: { tension: 280, friction: 60 },
      molasses: { tension: 280, friction: 120 },
    },
    xt = (function(r) {
      function t() {
        for (var i, t = arguments.length, e = new Array(t), n = 0; n < t; n++)
          e[n] = arguments[n]
        return (
          ((i = r.call.apply(r, [this].concat(e)) || this).state = {
            lastProps: { from: {}, to: {} },
            propsChanged: !1,
            internal: !1,
          }),
          (i.controller = new bt(null, null)),
          (i.didUpdate = !1),
          (i.didInject = !1),
          (i.finished = !0),
          (i.start = function() {
            i.finished = !1
            var e = i.mounted
            i.controller.start(function(t) {
              return i.finish(R({}, t, { wasMounted: e }))
            }, i.update)
          }),
          (i.stop = function() {
            return i.controller.stop(!0)
          }),
          (i.update = function() {
            return i.mounted && i.setState({ internal: !0 })
          }),
          (i.finish = function(t) {
            var e = t.finished,
              n = t.noChange,
              r = t.wasMounted
            ;(i.finished = !0),
              i.mounted &&
                e &&
                (!i.props.onRest ||
                  (!r && n) ||
                  i.props.onRest(i.controller.merged),
                i.mounted &&
                  i.didInject &&
                  ((i.afterInject = lt(i.props)), i.setState({ internal: !0 })),
                i.mounted &&
                  (i.didInject || i.props.after) &&
                  i.setState({ internal: !0 }),
                (i.didInject = !1))
          }),
          i
        )
      }
      m(t, r)
      var e = t.prototype
      return (
        (e.componentDidMount = function() {
          this.componentDidUpdate(), (this.mounted = !0)
        }),
        (e.componentWillUnmount = function() {
          ;(this.mounted = !1), this.stop()
        }),
        (t.getDerivedStateFromProps = function(t, e) {
          var n = e.internal,
            r = e.lastProps,
            i = t.from,
            o = t.to,
            a = t.reset,
            s = t.force
          return {
            propsChanged:
              !it(o, r.to) || !it(i, r.from) || (a && !n) || (s && !n),
            lastProps: t,
            internal: !1,
          }
        }),
        (e.render = function() {
          var e = this,
            t = this.props.children,
            n = this.state.propsChanged
          if (this.props.inject && n && !this.injectProps) {
            var r = this.props.inject(this.props, function(t) {
              ;(e.injectProps = t), e.setState({ internal: !0 })
            })
            if (r) return r
          }
          ;(this.injectProps || n) &&
            ((this.didInject = !1),
            this.injectProps
              ? (this.controller.update(this.injectProps),
                (this.didInject = !0))
              : n && this.controller.update(this.props),
            (this.didUpdate = !0),
            (this.afterInject = void 0),
            (this.injectProps = void 0))
          var i = R({}, this.controller.getValues(), this.afterInject)
          return (
            this.finished && (i = R({}, i, this.props.after)),
            Object.keys(i).length ? t(i) : null
          )
        }),
        (e.componentDidUpdate = function() {
          this.didUpdate && this.start(), (this.didUpdate = !1)
        }),
        t
      )
    })(g.Component)
  xt.defaultProps = {
    from: {},
    to: {},
    config: At.default,
    native: !1,
    immediate: !1,
    reset: !1,
    force: !1,
    inject: n,
  }
  var Pt = (function(r) {
    function t() {
      for (var i, t = arguments.length, e = new Array(t), n = 0; n < t; n++)
        e[n] = arguments[n]
      return (
        ((i = r.call.apply(r, [this].concat(e)) || this).first = !0),
        (i.instances = new Set()),
        (i.hook = function(t, e, n, r) {
          return (
            i.instances.add(t),
            (r
            ? e === n - 1
            : 0 === e)
              ? void 0
              : Array.from(i.instances)[r ? e + 1 : e - 1]
          )
        }),
        i
      )
    }
    m(t, r)
    var e = t.prototype
    return (
      (e.render = function() {
        var e = this,
          t = this.props,
          n = t.items,
          i = t.children,
          r = t.from,
          o = void 0 === r ? {} : r,
          a = t.initial,
          s = t.reverse,
          u = t.keys,
          l = t.delay,
          c = t.onRest,
          d = E(t, [
            'items',
            'children',
            'from',
            'initial',
            'reverse',
            'keys',
            'delay',
            'onRest',
          ]),
          f = rt(n)
        return rt(f).map(function(n, r) {
          return g.createElement(
            xt,
            R(
              {
                onRest: 0 === r ? c : null,
                key: 'function' == typeof u ? u(n) : rt(u)[r],
                from: e.first && void 0 !== a ? a || {} : o,
              },
              d,
              {
                delay: (0 === r && l) || void 0,
                attach: function(t) {
                  return e.hook(t, r, f.length, s)
                },
                children: function(t) {
                  var e = i(n, r)
                  return e ? e(t) : null
                },
              }
            )
          )
        })
      }),
      (e.componentDidUpdate = function(t) {
        ;(this.first = !1),
          t.items !== this.props.items && this.instances.clear()
      }),
      t
    )
  })(g.PureComponent)
  Pt.defaultProps = {
    keys: function(t) {
      return t
    },
  }
  var Vt = '__default',
    jt = (function(i) {
      function t() {
        for (var t, e = arguments.length, n = new Array(e), r = 0; r < e; r++)
          n[r] = arguments[r]
        return (
          ((t = i.call.apply(i, [this].concat(n)) || this).guid = 0),
          (t.state = {
            props: {},
            resolve: function() {
              return null
            },
            last: !0,
            index: 0,
          }),
          (t.next = function(n, r, i) {
            return (
              void 0 === r && (r = !0),
              void 0 === i && (i = 0),
              (t.running = !0),
              new Promise(function(e) {
                t.mounted &&
                  t.setState(
                    function(t) {
                      return { props: n, resolve: e, last: r, index: i }
                    },
                    function() {
                      return (t.running = !1)
                    }
                  )
              })
            )
          }),
          t
        )
      }
      m(t, i)
      var e = t.prototype
      return (
        (e.componentDidMount = function() {
          ;(this.mounted = !0), this.componentDidUpdate({})
        }),
        (e.componentWillUnmount = function() {
          this.mounted = !1
        }),
        (e.componentDidUpdate = function(t) {
          var s = this,
            e = this.props,
            r = e.states,
            u = e.filter,
            l = e.state
          ;(t.state !== this.props.state ||
            (this.props.reset && !this.running) ||
            !it(r[l], t.states[t.state])) &&
            r &&
            l &&
            r[l] &&
            (function() {
              var i = ++s.guid,
                o = r[l]
              if (o)
                if (Array.isArray(o))
                  for (
                    var a = Promise.resolve(),
                      t = function(t) {
                        var e = t,
                          n = o[e],
                          r = e === o.length - 1
                        a = a.then(function() {
                          return i === s.guid && s.next(u(n), r, e)
                        })
                      },
                      e = 0;
                    e < o.length;
                    e++
                  )
                    t(e)
                else if ('function' == typeof o) {
                  var n = 0
                  o(
                    function(t, e) {
                      return (
                        void 0 === e && (e = !1),
                        i === s.guid && s.next(u(t), e, n++)
                      )
                    },
                    function() {
                      return V(function() {
                        return s.instance && s.instance.stop()
                      })
                    },
                    s.props
                  )
                } else s.next(u(r[l]))
            })()
        }),
        (e.render = function() {
          var e = this,
            t = this.state,
            n = t.props,
            r = t.resolve,
            i = t.last,
            o = t.index
          if (!n || 0 === Object.keys(n).length) return null
          var a = this.props,
            s = (a.state, a.filter, a.states, a.config),
            u = a.primitive,
            l = a.onRest,
            c = a.forwardRef,
            d = E(a, [
              'state',
              'filter',
              'states',
              'config',
              'primitive',
              'onRest',
              'forwardRef',
            ])
          return (
            Array.isArray(s) && (s = s[o]),
            g.createElement(
              u,
              R(
                {
                  ref: function(t) {
                    return (e.instance = ct(t, c))
                  },
                  config: s,
                },
                d,
                n,
                {
                  onRest: function(t) {
                    r(t), l && i && l(t)
                  },
                }
              )
            )
          )
        }),
        t
      )
    })(g.PureComponent)
  jt.defaultProps = { state: Vt }
  var St = g.forwardRef(function(t, e) {
    return g.createElement(jt, R({}, t, { forwardRef: e }))
  })
  ;(St.create = function(r) {
    return function(e, n) {
      var t
      return (
        void 0 === n &&
          (n = function(t) {
            return t
          }),
        ('function' == typeof e || Array.isArray(e)) &&
          (((t = {})[Vt] = e), (e = t)),
        function(t) {
          return g.createElement(
            jt,
            R({ primitive: r, states: e, filter: n }, t)
          )
        }
      )
    }
  }),
    (St.Spring = function(t) {
      return St.create(xt)(t, st)
    }),
    (St.Trail = function(t) {
      return St.create(Pt)(t, st)
    })
  var Ot = 0,
    Ct = function(t) {
      var e = t.items,
        n = t.keys,
        r = E(t, ['items', 'keys'])
      return (
        (e = rt(void 0 !== e ? e : null)),
        (n = 'function' == typeof n ? e.map(n) : rt(n)),
        R(
          {
            items: e,
            keys: n.map(function(t) {
              return String(t)
            }),
          },
          r
        )
      )
    },
    Et = (function(e) {
      m(n, e)
      var t = n.prototype
      function n(t) {
        var s
        return (
          ((s = e.call(this, t) || this).destroyItem = function(i, o, a) {
            return function(t) {
              var e = s.props,
                n = e.onRest,
                r = e.onDestroyed
              s.mounted &&
                (r && r(i),
                n && n(i, a, t),
                s.batch
                  ? s.batch.add(o)
                  : ((s.batch = new Set([o])),
                    V(function() {
                      s.setState(function(t) {
                        var e = t.deleted
                        return (
                          (e = e.filter(function(t) {
                            return !s.batch.has(t.key)
                          })),
                          (s.batch = null),
                          { deleted: e }
                        )
                      })
                    })))
            }
          }),
          (s.state = {
            first: !0,
            transitions: [],
            current: {},
            deleted: [],
            prevProps: t,
          }),
          (s.batch = null),
          s
        )
      }
      return (
        (t.componentDidMount = function() {
          this.mounted = !0
        }),
        (t.componentWillUnmount = function() {
          this.mounted = !1
        }),
        (n.getDerivedStateFromProps = function(t, e) {
          var r = e.first,
            n = e.prevProps,
            i = E(e, ['first', 'prevProps']),
            o = Ct(t),
            a = o.items,
            s = o.keys,
            u = o.initial,
            l = o.from,
            c = o.enter,
            d = o.leave,
            f = o.update,
            p = o.trail,
            h = void 0 === p ? 0 : p,
            m = o.unique,
            v = o.config,
            y = Ct(n),
            g = y.keys,
            b = y.items,
            w = R({}, i.current),
            k = [].concat(i.deleted),
            A = Object.keys(w),
            x = new Set(A),
            P = new Set(s),
            V = s.filter(function(t) {
              return !x.has(t)
            }),
            j = i.transitions
              .filter(function(t) {
                return !t.destroyed && !P.has(t.originalKey)
              })
              .map(function(t) {
                return t.originalKey
              }),
            S = s.filter(function(t) {
              return x.has(t)
            }),
            O = 0
          V.forEach(function(e) {
            m &&
              k.find(function(t) {
                return t.originalKey === e
              }) &&
              (k = k.filter(function(t) {
                return t.originalKey !== e
              }))
            var t = s.indexOf(e),
              n = a[t]
            w[e] = {
              state: 'enter',
              originalKey: e,
              key: m ? String(e) : Ot++,
              item: n,
              trail: (O += h),
              config: ot(v, n, 'enter'),
              from: ot(r && void 0 !== u ? u || {} : l, n),
              to: ot(c, n),
            }
          }),
            j.forEach(function(t) {
              var e = g.indexOf(t),
                n = b[e]
              k.push(
                R({}, w[t], {
                  state: 'leave',
                  destroyed: !0,
                  left: g[Math.max(0, e - 1)],
                  right: g[Math.min(g.length, e + 1)],
                  trail: (O += h),
                  config: ot(v, n, 'leave'),
                  to: ot(d, n),
                })
              ),
                delete w[t]
            }),
            S.forEach(function(t) {
              var e = s.indexOf(t),
                n = a[e]
              w[t] = R({}, w[t], {
                item: n,
                state: 'update',
                trail: (O += h),
                config: ot(v, n, 'update'),
                to: ot(f, n),
              })
            })
          var C = s.map(function(t) {
            return w[t]
          })
          return (
            k.forEach(function(t) {
              var e,
                n = t.left,
                r = t.right,
                i = E(t, ['left', 'right'])
              ;-1 !==
                (e = C.findIndex(function(t) {
                  return t.originalKey === n
                })) && (e += 1),
                -1 === e &&
                  (e = C.findIndex(function(t) {
                    return t.originalKey === r
                  })),
                -1 === e &&
                  (e = k.findIndex(function(t) {
                    return t.originalKey === n
                  })),
                -1 === e &&
                  (e = k.findIndex(function(t) {
                    return t.originalKey === r
                  })),
                (e = Math.max(0, e)),
                (C = [].concat(C.slice(0, e), [i], C.slice(e)))
            }),
            {
              first: r && 0 === V.length,
              transitions: C,
              current: w,
              deleted: k,
              prevProps: t,
            }
          )
        }),
        (t.render = function() {
          var d = this,
            t = this.props,
            f = (t.initial,
            t.from,
            t.enter,
            t.leave,
            t.update,
            t.onDestroyed,
            t.keys,
            t.items,
            t.onFrame),
            p = t.onRest,
            h = t.onStart,
            m = (t.trail, t.config, t.children),
            v = (t.unique, t.reset),
            y = E(t, [
              'initial',
              'from',
              'enter',
              'leave',
              'update',
              'onDestroyed',
              'keys',
              'items',
              'onFrame',
              'onRest',
              'onStart',
              'trail',
              'config',
              'children',
              'unique',
              'reset',
            ])
          return this.state.transitions.map(function(t, n) {
            var e,
              r = t.state,
              i = t.key,
              o = t.item,
              a = t.from,
              s = t.to,
              u = t.trail,
              l = t.config,
              c = t.destroyed
            return g.createElement(
              St,
              R(
                {
                  reset: v && 'enter' === r,
                  primitive: xt,
                  state: r,
                  filter: st,
                  states: ((e = {}), (e[r] = s), e),
                  key: i,
                  onRest: c
                    ? d.destroyItem(o, i, r)
                    : p &&
                      function(t) {
                        return p(o, r, t)
                      },
                  onStart:
                    h &&
                    function() {
                      return h(o, r)
                    },
                  onFrame:
                    f &&
                    function(t) {
                      return f(o, r, t)
                    },
                  delay: u,
                  config: l,
                },
                y,
                {
                  from: a,
                  children: function(t) {
                    var e = m(o, r, n)
                    return e ? e(t) : null
                  },
                }
              )
            )
          })
        }),
        n
      )
    })(g.PureComponent)
  Et.defaultProps = {
    keys: function(t) {
      return t
    },
    unique: !1,
    reset: !1,
  }
  var Rt = [
    'a',
    'abbr',
    'address',
    'area',
    'article',
    'aside',
    'audio',
    'b',
    'base',
    'bdi',
    'bdo',
    'big',
    'blockquote',
    'body',
    'br',
    'button',
    'canvas',
    'caption',
    'cite',
    'code',
    'col',
    'colgroup',
    'data',
    'datalist',
    'dd',
    'del',
    'details',
    'dfn',
    'dialog',
    'div',
    'dl',
    'dt',
    'em',
    'embed',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'hgroup',
    'hr',
    'html',
    'i',
    'iframe',
    'img',
    'input',
    'ins',
    'kbd',
    'keygen',
    'label',
    'legend',
    'li',
    'link',
    'main',
    'map',
    'mark',
    'marquee',
    'menu',
    'menuitem',
    'meta',
    'meter',
    'nav',
    'noscript',
    'object',
    'ol',
    'optgroup',
    'option',
    'output',
    'p',
    'param',
    'picture',
    'pre',
    'progress',
    'q',
    'rp',
    'rt',
    'ruby',
    's',
    'samp',
    'script',
    'section',
    'select',
    'small',
    'source',
    'span',
    'strong',
    'style',
    'sub',
    'summary',
    'sup',
    'table',
    'tbody',
    'td',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'time',
    'title',
    'tr',
    'track',
    'u',
    'ul',
    'var',
    'video',
    'wbr',
    'circle',
    'clipPath',
    'defs',
    'ellipse',
    'foreignObject',
    'g',
    'image',
    'line',
    'linearGradient',
    'mask',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'radialGradient',
    'rect',
    'stop',
    'svg',
    'text',
    'tspan',
  ].reduce(function(t, e) {
    return (t[e] = kt(e)), t
  }, kt)
  ;(t.Spring = xt),
    (t.Keyframes = St),
    (t.Transition = Et),
    (t.Trail = Pt),
    (t.Controller = bt),
    (t.config = At),
    (t.animated = Rt),
    (t.interpolate = function(t, e, n) {
      return t && new Y(t, e, n)
    }),
    (t.Globals = h),
    Object.defineProperty(t, '__esModule', { value: !0 })
})
