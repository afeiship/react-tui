/*!
 * name: next-xhr-header
 * url: https://github.com/afeiship/next-xhr-header
 * version: 1.0.0
 * date: 2019-08-31T11:56:21.628Z
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  var NxXhrHeader = nx.declare('nx.XhrHeader', {
    properties: {
      request: {
        set: function(inValue) {
          nx.forIn(
            inValue,
            function(key, value) {
              this.xhr.setRequestHeader(key, value);
            },
            this
          );
          this._request = nx.mix(this._request, inValue);
        },
        get: function() {
          return this._request || null;
        }
      }
    },
    methods: {
      init: function(inXhr) {
        this.xhr = inXhr;
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxXhrHeader;
  }
})();

//# sourceMappingURL=next-xhr-header.js.map