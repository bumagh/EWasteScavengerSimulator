System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Sprite, SpriteFrame, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _crd, ccclass, property, getRandomInt, HeroSlot;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Label = _cc.Label;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "57d15BvDjxLBLxQT6h/Vxab", "HeroSlot", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Sprite', 'SpriteFrame']);

      ({
        ccclass,
        property
      } = _decorator);

      getRandomInt = function (min, max) {
        var ratio = Math.random();
        return min + Math.floor((max - min) * ratio);
      };

      _export("HeroSlot", HeroSlot = (_dec = property([SpriteFrame]), _dec2 = property([SpriteFrame]), _dec3 = property([SpriteFrame]), _dec4 = property([SpriteFrame]), _dec5 = property(Label), _dec6 = property(Sprite), _dec7 = property(Sprite), _dec8 = property(Sprite), _dec9 = property(Sprite), _dec10 = property([Sprite]), ccclass(_class = (_class2 = class HeroSlot extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "sfAttributes", _descriptor, this);

          _initializerDefineProperty(this, "sfRanks", _descriptor2, this);

          _initializerDefineProperty(this, "sfHeroes", _descriptor3, this);

          _initializerDefineProperty(this, "sfBorders", _descriptor4, this);

          _initializerDefineProperty(this, "labelLevel", _descriptor5, this);

          _initializerDefineProperty(this, "spHero", _descriptor6, this);

          _initializerDefineProperty(this, "spRank", _descriptor7, this);

          _initializerDefineProperty(this, "spAttribute", _descriptor8, this);

          _initializerDefineProperty(this, "spBorder", _descriptor9, this);

          _initializerDefineProperty(this, "spStars", _descriptor10, this);
        }

        // use this for initialization
        onLoad() {
          this.refresh();
        }

        refresh() {
          let bgIdx = getRandomInt(0, this.sfBorders.length);
          let heroIdx = getRandomInt(0, this.sfHeroes.length);
          let starIdx = getRandomInt(0, this.spStars.length);
          let rankIdx = getRandomInt(0, this.sfRanks.length);
          let attIdx = getRandomInt(0, this.sfAttributes.length);
          let levelIdx = getRandomInt(0, 100);
          this.labelLevel.string = 'LV.' + levelIdx;
          this.spRank.spriteFrame = this.sfRanks[rankIdx];
          this.refreshStars(starIdx);
          this.spBorder.spriteFrame = this.sfBorders[bgIdx];
          this.spAttribute.spriteFrame = this.sfAttributes[attIdx];
          this.spHero.spriteFrame = this.sfHeroes[heroIdx];
        }

        refreshStars(count) {
          for (let i = 0; i < this.spStars.length; ++i) {
            if (i <= count) this.spStars[i].enabled = true;else this.spStars[i].enabled = false;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sfAttributes", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "sfRanks", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "sfHeroes", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "sfBorders", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "labelLevel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "spHero", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "spRank", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "spAttribute", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "spBorder", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "spStars", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1eb57eb113acaa403577bfbef447122e2fb2699e.js.map