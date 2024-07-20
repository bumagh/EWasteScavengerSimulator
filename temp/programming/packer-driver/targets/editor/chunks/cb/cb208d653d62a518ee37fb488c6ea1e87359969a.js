System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Component, director, Label, BackButton, sceneArray, _dec, _class, _crd, ccclass, property, ListItem;

  function _reportPossibleCrUseOfBackButton(extras) {
    _reporterNs.report("BackButton", "./BackButton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsceneArray(extras) {
    _reporterNs.report("sceneArray", "./SceneList", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Button = _cc.Button;
      Component = _cc.Component;
      director = _cc.director;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      BackButton = _unresolved_2.BackButton;
    }, function (_unresolved_3) {
      sceneArray = _unresolved_3.sceneArray;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dfb240gUk5FzLJW2+GbHJRv", "ListItem", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'director', 'Label', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ListItem", ListItem = (_dec = ccclass('ListItem'), _dec(_class = class ListItem extends Component {
        constructor(...args) {
          super(...args);
          this.index = -1;
          this._name = '';
          this.label = null;
          this.button = null;
        }

        onload() {}

        start() {
          // Your initialization goes here.
          this.index = this.node.getSiblingIndex();
          this._name = '';

          if (this.node) {
            this.label = this.node.getComponentInChildren(Label);
            this.button = this.node.getComponent(Button);
          }

          this.updateItem(this.index, (_crd && sceneArray === void 0 ? (_reportPossibleCrUseOfsceneArray({
            error: Error()
          }), sceneArray) : sceneArray)[this.index]);
        }

        loadScene() {
          (_crd && BackButton === void 0 ? (_reportPossibleCrUseOfBackButton({
            error: Error()
          }), BackButton) : BackButton).saveOffset();
          (_crd && BackButton === void 0 ? (_reportPossibleCrUseOfBackButton({
            error: Error()
          }), BackButton) : BackButton).saveIndex(this.index);
          this.button.interactable = false;
          director.loadScene(this._name, (_crd && BackButton === void 0 ? (_reportPossibleCrUseOfBackButton({
            error: Error()
          }), BackButton) : BackButton).refreshButton);
        }

        updateItem(idx, name) {
          this.index = idx;
          this._name = name;
          this.label.string = name;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=cb208d653d62a518ee37fb488c6ea1e87359969a.js.map