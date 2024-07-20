System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, game, Vec3, Layout, ScrollView, v2, sceneArray, _dec, _class, _class2, _crd, ccclass, property, BackButton;

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
      Component = _cc.Component;
      director = _cc.director;
      game = _cc.game;
      Vec3 = _cc.Vec3;
      Layout = _cc.Layout;
      ScrollView = _cc.ScrollView;
      v2 = _cc.v2;
    }, function (_unresolved_2) {
      sceneArray = _unresolved_2.sceneArray;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b20edYWY5pMo6v9nvpXwDsb", "BackButton", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'director', 'game', 'Node', 'Vec3', 'Layout', 'ScrollView', 'v2']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BackButton", BackButton = (_dec = ccclass('BackButton'), _dec(_class = (_class2 = class BackButton extends Component {
        static get offset() {
          return BackButton._offset;
        }

        static set offset(value) {
          BackButton._offset = value;
        }

        static saveOffset() {
          if (BackButton._scrollNode) {
            BackButton._offset = new Vec3(0, BackButton._scrollCom.getScrollOffset().y, 0);
          }
        }

        static saveIndex(index) {
          BackButton._sceneIndex = index;
          BackButton.refreshButton();
        }

        static refreshButton() {
          if (BackButton._sceneIndex === -1) {
            BackButton._prevNode.active = false;
            BackButton._nextNode.active = false;
          } else {
            BackButton._prevNode.active = true;
            BackButton._nextNode.active = true;
          }
        }

        __preload() {
          // @ts-ignore
          const sceneInfo = game._sceneInfos;
          let firstIndex = 0;
          let lastIndex = 0;
          let sceneString = '';

          for (let i = 0; i < sceneInfo.length; i++) {
            sceneString = sceneInfo[i].url;
            firstIndex = sceneString.lastIndexOf('/') + 1;
            lastIndex = sceneString.lastIndexOf('.scene');
            sceneString = sceneString.substring(firstIndex, lastIndex);

            if (sceneString === 'test-list') {
              continue;
            }

            (_crd && sceneArray === void 0 ? (_reportPossibleCrUseOfsceneArray({
              error: Error()
            }), sceneArray) : sceneArray).push(sceneString);
          }
        }

        start() {
          game.addPersistRootNode(this.node);
          BackButton._scrollNode = this.node.getParent().getChildByPath('Canvas/ScrollView');

          if (BackButton._scrollNode) {
            BackButton._scrollCom = BackButton._scrollNode.getComponent(ScrollView);
          }

          BackButton._blockInput = this.node.getChildByName('BlockInput');
          BackButton._blockInput.active = false;
          BackButton._prevNode = this.node.getChildByName('PrevButton');
          BackButton._nextNode = this.node.getChildByName('NextButton');

          if (BackButton._prevNode && BackButton._nextNode) {
            BackButton.refreshButton();
          }
        }

        backToList() {
          BackButton._blockInput.active = true;
          director.loadScene('test-list', () => {
            BackButton._sceneIndex = -1;
            BackButton.refreshButton();
            BackButton._scrollNode = this.node.getParent().getChildByPath('Canvas/ScrollView');

            if (BackButton._scrollNode) {
              BackButton._scrollCom = BackButton._scrollNode.getComponent(ScrollView); // @ts-ignore

              BackButton._scrollCom._content.getComponent(Layout).updateLayout();

              BackButton._scrollCom.scrollToOffset(v2(BackButton.offset.x, BackButton.offset.y), 0.1, true);
            }

            BackButton._blockInput.active = false;
          });
        }

        nextscene() {
          BackButton._blockInput.active = true;
          this.updateSceneIndex(true);
          director.loadScene(this.getSceneName(), () => {
            BackButton._blockInput.active = false;
          });
        }

        prescene() {
          BackButton._blockInput.active = true;
          this.updateSceneIndex(false);
          director.loadScene(this.getSceneName(), () => {
            BackButton._blockInput.active = false;
          });
        }

        updateSceneIndex(next) {
          if (next) {
            BackButton._sceneIndex + 1 >= (_crd && sceneArray === void 0 ? (_reportPossibleCrUseOfsceneArray({
              error: Error()
            }), sceneArray) : sceneArray).length ? BackButton._sceneIndex = 0 : BackButton._sceneIndex += 1;
          } else {
            BackButton._sceneIndex - 1 < 0 ? BackButton._sceneIndex = (_crd && sceneArray === void 0 ? (_reportPossibleCrUseOfsceneArray({
              error: Error()
            }), sceneArray) : sceneArray).length - 1 : BackButton._sceneIndex -= 1;
          }
        }

        getSceneName() {
          return (_crd && sceneArray === void 0 ? (_reportPossibleCrUseOfsceneArray({
            error: Error()
          }), sceneArray) : sceneArray)[BackButton._sceneIndex];
        }

      }, _class2._scrollNode = null, _class2._offset = new Vec3(), _class2._scrollCom = null, _class2._sceneIndex = -1, _class2._blockInput = void 0, _class2._prevNode = void 0, _class2._nextNode = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=71db24c788748d742ce29bdb9e80237e35683d09.js.map