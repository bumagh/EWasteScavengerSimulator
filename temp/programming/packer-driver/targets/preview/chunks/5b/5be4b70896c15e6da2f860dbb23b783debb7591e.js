System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Enum, _crd, PanelType;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Enum = _cc.Enum;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "da599RZhJxDjaD13v8LTO7l", "PanelType", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Enum']);

      _export("PanelType", PanelType = /*#__PURE__*/function (PanelType) {
        PanelType[PanelType["Home"] = -1] = "Home";
        PanelType[PanelType["Shop"] = -1] = "Shop";
        return PanelType;
      }({}));

      ;
      Enum(PanelType);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5be4b70896c15e6da2f860dbb23b783debb7591e.js.map